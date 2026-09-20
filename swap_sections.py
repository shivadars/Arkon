import re

with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for 'Why Choose Us / Core Values'
why_pattern = re.compile(r'(        <!-- Why Choose Us / Core Values Banner Section -->.*?        </section>\n)', re.DOTALL)
# Pattern for 'About Company / Brand Showcase'
about_pattern = re.compile(r'(        <!-- About Company / Brand Showcase -->.*?        </section>\n)', re.DOTALL)

why_match = why_pattern.search(content)
about_match = about_pattern.search(content)

if why_match and about_match:
    why_text = why_match.group(1)
    about_text = about_match.group(1)
    
    # Remove about_text from its current position
    content = content.replace(about_text, '')
    
    # Insert about_text before why_text
    content = content.replace(why_text, about_text + '\n' + why_text)
    
    with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Swap successful")
else:
    print("Could not find one of the sections")
