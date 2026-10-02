import os
import re

directory = r"c:\medical-equipment-website"
pattern = re.compile(r'[ \t]*<div class="footer-bottom-compact"[^>]*>[\s\S]*?&copy; 2024 Arkon Medical Systems\. All Rights Reserved\.[\s\S]*?</div>\n?', re.MULTILINE)

count = 0
for root, dirs, files in os.walk(directory):
    # skip node_modules or .git if they exist
    if 'node_modules' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content, num_subs = pattern.subn('', content)
                
                if num_subs > 0:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully updated {count} HTML files.")
