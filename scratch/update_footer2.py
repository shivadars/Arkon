import os

target_text = 'Copyright © 2026 DYUTI | Made with ❤️ by <a href="https://rlabz.in/" target="_blank" style="color: inherit; text-decoration: underline;">RLABZ</a>'
replacement_text = 'Copyright © 2026 Arkon | Made with ❤️ by <a href="https://rlabz.in/" target="_blank" style="color: inherit; text-decoration: underline;">RLABZ</a>'

directory = r"c:\medical-equipment-website"

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
                
                if target_text in content:
                    content = content.replace(target_text, replacement_text)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully updated {count} HTML files.")
