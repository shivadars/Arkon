import os
import re

directory = r"c:\medical-equipment-website"

pattern = re.compile(r'Powered by <a href="https://rlabz\.in/" target="_blank".*?</a>', re.DOTALL)

replacement = '''Powered by <a href="https://rlabz.in/" target="_blank" style="
    color: #ffffff;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 6px;
    text-shadow: 
        1px 1px 0 #00b4d8,
        2px 2px 0 #0096c7,
        3px 3px 0 #0077b6,
        4px 4px 10px rgba(0,0,0,0.8);
    display: inline-block;
    transition: transform 0.2s ease, text-shadow 0.2s ease;
" onmouseover="this.style.transform='translate(-2px, -2px)'; this.style.textShadow='1px 1px 0 #00b4d8, 2px 2px 0 #0096c7, 3px 3px 0 #0077b6, 4px 4px 0 #023e8a, 5px 5px 15px rgba(0,0,0,0.8)';" onmouseout="this.style.transform='translate(0, 0)'; this.style.textShadow='1px 1px 0 #00b4d8, 2px 2px 0 #0096c7, 3px 3px 0 #0077b6, 4px 4px 10px rgba(0,0,0,0.8)';">RLABZ</a>'''

replacement_clean = replacement.replace('\n', ' ').replace('    ', '')

count = 0
for root, dirs, files in os.walk(directory):
    if any(x in root for x in ['node_modules', '.git', 'scratch']):
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = pattern.sub(replacement_clean, content)

            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1

print(f"Successfully updated {count} HTML files to Cyan / Electric Medical Blue theme!")
