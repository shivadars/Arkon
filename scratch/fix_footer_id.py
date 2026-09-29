import os
import glob

def fix_footer_id(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if '<footer class="footer" id="contact">' in content:
                        content = content.replace('<footer class="footer" id="contact">', '<footer class="footer" id="footer">')
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"Fixed {filepath}")
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")

fix_footer_id('c:\\medical-equipment-website')
