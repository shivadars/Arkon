import os

directory = r"c:\medical-equipment-website"

for root, dirs, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root or 'scratch' in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check for lollipop emoji or word
                if '🍭' in content or 'lollipop' in content.lower():
                    print(f"Found in {filepath}")
            except Exception as e:
                pass
