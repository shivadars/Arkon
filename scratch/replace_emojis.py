import os
import re

directory = r"c:\medical-equipment-website"

def remove_emojis_from_footer():
    # Regex to match the entire footer
    footer_regex = re.compile(r'(<footer.*?>.*?</footer>)', re.DOTALL)
    
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
                    
                    def replacer(match):
                        footer_str = match.group(1)
                        # We want to remove characters with ord > 1000 (most emojis)
                        # Except the heart emoji pieces: ❤️ -> \u2764 and \ufe0f
                        # Also keep standard typography like en-dash, em-dash etc. if they happen to be >1000? 
                        # Actually standard typography is < 10000. 
                        # Let's be precise and only remove characters > 9000 except heart.
                        new_footer = ""
                        for c in footer_str:
                            if ord(c) > 9000 and c not in ['❤', '️']:
                                # Skip it
                                pass
                            else:
                                new_footer += c
                        return new_footer
                    
                    new_content, num_replacements = footer_regex.subn(replacer, content)
                    
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
                    
    print(f"Removed emojis from footer in {count} HTML files.")

remove_emojis_from_footer()
