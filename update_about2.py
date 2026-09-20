import re

with open('c:/medical-equipment-website/about.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Just a quick regex to wrap contents of accordion-body
content = re.sub(r'(<div class="accordion-body">)(.*?)(</div>\s*</div>)', r'\1\n<div class="accordion-body-inner">\2</div>\n\3', content, flags=re.DOTALL)

with open('c:/medical-equipment-website/about.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated inner wrappers")
