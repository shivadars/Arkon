import os
import re

directory = r'c:\medical-equipment-website'
target_extensions = ('.html', '.js', '.css', '.md')

pattern = re.compile(r'Arkon Medical System(?!s|S)', re.IGNORECASE)

changed_files = 0

for root, _, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root or 'scratch' in root:
        continue
    for file in files:
        if file.endswith(target_extensions):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if pattern.search(content):
                    def replace_func(match):
                        return match.group(0) + 's'
                    
                    new_content = pattern.sub(replace_func, content)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    changed_files += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Replaced in {changed_files} files.")
