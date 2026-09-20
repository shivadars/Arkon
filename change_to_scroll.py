import re

with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace :hover with .active for the accordion items
content = content.replace('.accordion-item:hover {', '.accordion-item.active {')
content = content.replace('.accordion-item:hover .accordion-bg {', '.accordion-item.active .accordion-bg {')
content = content.replace('.accordion-item:hover .shape-1 {', '.accordion-item.active .shape-1 {')
content = content.replace('.accordion-item:hover .shape-2 {', '.accordion-item.active .shape-2 {')
content = content.replace('.accordion-item:hover .accordion-title {', '.accordion-item.active .accordion-title {')
content = content.replace('.accordion-item:hover .accordion-body {', '.accordion-item.active .accordion-body {')
content = content.replace('.accordion-item:hover .accordion-body-inner {', '.accordion-item.active .accordion-body-inner {')

with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated CSS to use .active")
