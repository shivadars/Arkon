import os

directory = r"c:\medical-equipment-website"
target_string = 'Made with <span style="filter: brightness(1.2) saturate(1.5); display: inline-block; transform: scale(1.1); margin: 0 2px;">❤️</span> by'
replacement_string = 'Made with <span style="color: #ff0000; text-shadow: 0 0 2px #ff0000; display: inline-block; transform: scale(1.1); margin: 0 2px;">❤️</span> by'

count = 0
for root, dirs, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root or 'scratch' in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if target_string in content:
                    content = content.replace(target_string, replacement_string)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Replaced with color red in {count} HTML files.")
