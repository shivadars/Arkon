import os
import re

directory = r"c:\medical-equipment-website"

for root, dirs, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root or 'scratch' in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find the line with Powered by
            pattern = re.compile(r'Powered by <a href="https://rlabz.in/" target="_blank".*?</a>', re.DOTALL)
            
            replacement = '''Powered by <a href="https://rlabz.in/" target="_blank" style="
    color: #ffffff;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 6px;
    text-shadow: 
        1px 1px 0 #0A8F55,
        2px 2px 0 #087545,
        3px 3px 0 #055431,
        4px 4px 10px rgba(0,0,0,0.8);
    display: inline-block;
    transition: transform 0.2s ease, text-shadow 0.2s ease;
" onmouseover="this.style.transform='translate(-2px, -2px)'; this.style.textShadow='1px 1px 0 #0A8F55, 2px 2px 0 #087545, 3px 3px 0 #055431, 4px 4px 0 #033a21, 5px 5px 15px rgba(0,0,0,0.8)';" onmouseout="this.style.transform='translate(0, 0)'; this.style.textShadow='1px 1px 0 #0A8F55, 2px 2px 0 #087545, 3px 3px 0 #055431, 4px 4px 10px rgba(0,0,0,0.8)';">RLABZ</a>'''
            
            replacement = replacement.replace('\n', ' ').replace('    ', '')
            
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Footer updated to readable 3D text design successfully.")
