import re

with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for 'Why Choose Us / Core Values'
why_pattern = re.compile(r'(        <!-- Why Choose Us / Core Values Banner Section -->.*?        </section>\n)', re.DOTALL)

why_match = why_pattern.search(content)

if why_match:
    why_text = why_match.group(1)
    content = content.replace(why_text, '')
    
    with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Removal successful")
else:
    print("Could not find section")
