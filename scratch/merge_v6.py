import os
from bs4 import BeautifulSoup

print("Reading comen-v6.html...")
with open('comen-v6.html', 'r', encoding='utf-8', errors='ignore') as f:
    comen_soup = BeautifulSoup(f.read(), 'html.parser')

# Find the main content in comen-v6.html
# Let's extract everything inside the main body excluding header/footer from Comen
main_content = comen_soup.find('main')

if not main_content:
    print("Could not find <main> in comen-v6.html. Looking for other wrappers...")
    # Let's try to extract all sections
    sections = comen_soup.find_all('section')
    content_html = '\n'.join([str(sec) for sec in sections])
else:
    content_html = ''.join([str(child) for child in main_content.children if child.name])

print("Reading products/v6-v8-ventilator/index.html...")
v6_path = 'products/v6-v8-ventilator/index.html'
with open(v6_path, 'r', encoding='utf-8', errors='ignore') as f:
    target_soup = BeautifulSoup(f.read(), 'html.parser')

# In target_soup, keep header and footer. Replace everything in between.
# In Arkon, header is <nav class="navbar" or <header>. Footer is <footer class="site-footer">.
header = target_soup.find('nav', class_='navbar') or target_soup.find('header')
footer = target_soup.find('footer')

if header and footer:
    print("Found Arkon header and footer.")
    
    # Let's find where the current product content is. It usually starts after header.
    # Let's clear out all nodes between header and footer.
    # A cleaner approach: reconstruct the body!
    
    new_body = BeautifulSoup("<body></body>", 'html.parser').body
    
    # Append header
    new_body.append(header.extract())
    
    # Append the comen content
    # We should wrap it in a div or just append the raw html
    content_wrapper = BeautifulSoup(f'<div id="comen-original-content">{content_html}</div>', 'html.parser')
    new_body.append(content_wrapper)
    
    # Append footer
    new_body.append(footer.extract())
    
    # Replace body in target
    target_soup.body.replace_with(new_body)
    
    # Add any styles from comen-v6.html that are in <head>
    for style in comen_soup.find_all('style'):
        target_soup.head.append(style.extract())
        
    for link in comen_soup.find_all('link', rel='stylesheet'):
        # Don't add if it's already there or conflicts
        target_soup.head.append(link.extract())
        
    with open(v6_path, 'w', encoding='utf-8') as f:
        f.write(str(target_soup))
    print("Successfully updated the file!")
else:
    print("Could not find header or footer in the target file.")
