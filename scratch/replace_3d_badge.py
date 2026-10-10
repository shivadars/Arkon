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

            # Find the line with Powered by RLABZ
            pattern = re.compile(r'Powered by <a href="https://rlabz.in/" target="_blank".*?</a>', re.DOTALL)
            
            replacement = '''Powered by <a href="https://rlabz.in/" target="_blank" style="
    text-decoration: none;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1px;
    margin-left: 6px;
    color: #ffffff;
    background: linear-gradient(to bottom, #0eb76c, #0A8F55);
    padding: 3px 12px;
    border-radius: 8px;
    box-shadow: 
        0 4px 0 #055431,
        0 8px 15px rgba(0,0,0,0.4),
        inset 0 1px 1px rgba(255,255,255,0.5),
        inset 0 -1px 1px rgba(0,0,0,0.2);
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-2px);
" onmousedown="this.style.transform='translateY(2px)'; this.style.boxShadow='0 0px 0 #055431, 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.2)';" onmouseup="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 0 #055431, 0 8px 15px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 0 #055431, 0 8px 15px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.2)';">RLABZ</a>'''
            
            # Remove line breaks in replacement for cleaner HTML injection (optional, but good practice)
            replacement = replacement.replace('\n', ' ').replace('    ', '')
            
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Footer updated to 3D design successfully.")
