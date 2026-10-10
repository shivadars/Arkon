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

            # Find the contact link href
            contact_match = re.search(r'<a href="([^"]*#contact)"', content)
            if not contact_match:
                continue
            
            contact_href = contact_match.group(1)

            # Replace desktop navbar button
            old_desktop_btn = r'<button class="btn btn-primary" onclick="openQuoteModal()">Enquire Now &rarr;</button>'
            new_desktop_btn = f'<a href="{contact_href}" class="btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center;">Enquire Now &rarr;</a>'
            content = content.replace(old_desktop_btn, new_desktop_btn)

            # Replace mobile navbar button
            old_mobile_btn = r'<button class="btn btn-primary" style="width: 100%;" onclick="toggleMobileNav(); openQuoteModal();">Enquire Now &rarr;</button>'
            new_mobile_btn = f'<a href="{contact_href}" class="btn btn-primary" style="width: 100%; display: inline-flex; align-items: center; justify-content: center;" onclick="toggleMobileNav();">Enquire Now &rarr;</a>'
            content = content.replace(old_mobile_btn, new_mobile_btn)

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Navbar Enquire buttons updated successfully.")
