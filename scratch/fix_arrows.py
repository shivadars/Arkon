import os
import glob
import re

svg_icon = '<svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg>'

# 1. Update HTML files
html_files = glob.glob("*.html")
for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the desktop nav arrow
    content = content.replace('<span class="dropdown-icon">▼</span>', svg_icon)
    
    # Replace the mobile nav root arrow
    content = content.replace('<span class="dropdown-icon" style="font-weight: 300;">&lt;</span>', svg_icon)
    content = content.replace('<span class="dropdown-icon" style="font-weight: 300;">v</span>', svg_icon)
    
    # Also if it's already using some span, just replace it cleanly
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file_path}")

# 2. Update js/script.js
with open("js/script.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Replace the inner arrows inside mobile mega menu
mobile_btn_replace = f'<button class="mobile-accordion-btn" onclick="toggleMobileAccordion(\'\\1\', this)">{svg_icon}</button>'
js_content = re.sub(r'<button class="mobile-accordion-btn" onclick="toggleMobileAccordion\(\'(.*?)\', this\)">&lt;</button>', mobile_btn_replace, js_content)

# Update the toggle script to rotate the SVG instead
js_content = js_content.replace(
    "const icon = mobileMenu.previousElementSibling.querySelector('.dropdown-icon');",
    "const icon = mobileMenu.previousElementSibling.querySelector('.dropdown-icon-svg');"
)
js_content = js_content.replace(
    "btnElement.style.transform = target.classList.contains('active') ? 'rotate(-90deg)' : 'rotate(0deg)';",
    "btnElement.querySelector('svg').style.transform = target.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';"
)
js_content = js_content.replace(
    "icon.style.transform = mobileMenu.classList.contains('active') ? 'rotate(-90deg)' : 'rotate(0deg)';",
    "icon.style.transform = mobileMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';"
)

with open("js/script.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Updated js/script.js")
