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

            # Find the line with Copyright © 2026 Arkon | Made with ...
            # The line varies slightly due to previous emoji edits, so we use regex.
            pattern = re.compile(r'Copyright © 2026 Arkon \| Made with .*?RLABZ</a>', re.DOTALL)
            
            replacement = 'Copyright © 2026 Arkon <span style="margin: 0 8px; opacity: 0.5;">|</span> Powered by <a href="https://rlabz.in/" target="_blank" style="text-decoration: none; font-weight: 800; font-family: \'Inter\', sans-serif; letter-spacing: 1px; margin-left: 4px; background: linear-gradient(135deg, #0A8F55, #0eb76c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-flex; align-items: center; transition: all 0.3s ease; text-transform: uppercase;" onmouseover="this.style.filter=\'brightness(1.3)\'; this.style.transform=\'translateY(-1px)\'" onmouseout="this.style.filter=\'none\'; this.style.transform=\'translateY(0)\'">RLABZ <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="url(#rlabz-grad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 2px;"><defs><linearGradient id="rlabz-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0A8F55"/><stop offset="100%" stop-color="#0eb76c"/></linearGradient></defs><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg></a>'
            
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Footer updated successfully.")
