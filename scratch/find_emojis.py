import os
import re

directory = r"c:\medical-equipment-website"
target_heart = '❤️'

def check_emojis():
    # Regular expression to match emojis (basic range, ignoring some complex ones, but enough to find lollipop etc.)
    # We will just print any non-ascii characters in the footer bottom compact text.
    footer_regex = re.compile(r'<div class="footer-bottom-compact".*?>(.*?)</div>', re.DOTALL)
    
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or 'scratch' in root:
            continue
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    match = footer_regex.search(content)
                    if match:
                        footer_content = match.group(1)
                        # Find all non-ascii characters
                        non_ascii = [c for c in footer_content if ord(c) > 127 and c not in ['©', '—', '’', '”', '“', '–', ' '] and not c.isspace()]
                        
                        # filter out heart and invisible things
                        emojis = [c for c in non_ascii if c not in ['❤', '️']] # Heart is \u2764 and \ufe0f
                        
                        if emojis:
                            print(f"{filepath}: {''.join(emojis)}")
                except Exception as e:
                    pass

check_emojis()
