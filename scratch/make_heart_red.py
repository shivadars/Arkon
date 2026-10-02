import os

directory = r"c:\medical-equipment-website"
target_string = "Made with ❤️ by"
replacement_string = 'Made with <span style="color: #ff2a55; font-size: 1.1em; display: inline-block; margin: 0 2px;">&hearts;</span> by'

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

print(f"Replaced heart in {count} HTML files.")
