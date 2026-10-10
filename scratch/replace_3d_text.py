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
    font-weight: 900;
    font-family: 'Inter', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 6px;
    text-shadow: 
        0 1px 0 #cccccc,
        0 2px 0 #c2c2c2,
        0 3px 0 #b5b5b5,
        0 4px 0 #a8a8a8,
        0 5px 0 #9b9b9b,
        0 6px 1px rgba(0,0,0,0.4),
        0 0 5px rgba(0,0,0,0.4),
        0 1px 3px rgba(0,0,0,0.5),
        0 3px 5px rgba(0,0,0,0.4),
        0 5px 10px rgba(0,0,0,0.5),
        0 10px 10px rgba(0,0,0,0.4),
        0 20px 20px rgba(0,0,0,0.3);
    display: inline-block;
    transition: transform 0.2s ease, text-shadow 0.2s ease;
" onmouseover="this.style.transform='translateY(-2px)'; this.style.textShadow='0 2px 0 #cccccc, 0 3px 0 #c2c2c2, 0 4px 0 #b5b5b5, 0 5px 0 #a8a8a8, 0 6px 0 #9b9b9b, 0 7px 1px rgba(0,0,0,0.4), 0 0 5px rgba(0,0,0,0.4), 0 2px 3px rgba(0,0,0,0.5), 0 4px 5px rgba(0,0,0,0.4), 0 6px 10px rgba(0,0,0,0.5), 0 12px 10px rgba(0,0,0,0.4), 0 24px 20px rgba(0,0,0,0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.textShadow='0 1px 0 #cccccc, 0 2px 0 #c2c2c2, 0 3px 0 #b5b5b5, 0 4px 0 #a8a8a8, 0 5px 0 #9b9b9b, 0 6px 1px rgba(0,0,0,0.4), 0 0 5px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.5), 0 3px 5px rgba(0,0,0,0.4), 0 5px 10px rgba(0,0,0,0.5), 0 10px 10px rgba(0,0,0,0.4), 0 20px 20px rgba(0,0,0,0.3)';">RLABZ</a>'''
            
            replacement = replacement.replace('\n', ' ').replace('    ', '')
            
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Footer updated to 3D text design successfully.")
