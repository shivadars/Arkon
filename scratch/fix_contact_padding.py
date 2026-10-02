import os
import re

filepath = r"c:\medical-equipment-website\css\style.css"
with open(filepath, "r", encoding="utf-8") as f:
    css = f.read()

# Remove the global scroll-margin-top
bad_css = """/* Fix sticky header covering anchor sections (like #contact) */
section[id] {
    scroll-margin-top: 120px;
}"""

if bad_css in css:
    css = css.replace(bad_css, """/* Removed global scroll-margin-top */
section[id] {
    scroll-margin-top: 0px;
}""")

# Update contact-section-new padding and scroll-margin-top
css = re.sub(
    r'\.contact-section-new\s*\{[^}]*\}',
    '''.contact-section-new {
    padding: 120px 0 80px 0; 
    background-color: #fff;
    scroll-margin-top: 0px; 
}''',
    css
)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(css)

print("Fixed contact scroll offset issue by replacing margin with internal padding.")
