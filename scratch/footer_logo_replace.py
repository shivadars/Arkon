import os, glob

search_pattern = '**/*.html'

# Target strings to replace
target_1 = '<img src="assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px;">'
replacement_1 = '''<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px; margin-bottom: 0 !important;">
                    <span style="font-size: 20px; font-weight: 700; color: #ffffff; font-family: 'Inter', sans-serif; line-height: 1.2; text-align: left;">Arkon Medical<br>Systems</span>
                </div>'''

target_2 = '<img src="../assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px;">'
replacement_2 = '''<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
                    <img src="../assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px; margin-bottom: 0 !important;">
                    <span style="font-size: 20px; font-weight: 700; color: #ffffff; font-family: 'Inter', sans-serif; line-height: 1.2; text-align: left;">Arkon Medical<br>Systems</span>
                </div>'''

target_3 = '<img src="../../assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px;">'
replacement_3 = '''<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
                    <img src="../../assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px; margin-bottom: 0 !important;">
                    <span style="font-size: 20px; font-weight: 700; color: #ffffff; font-family: 'Inter', sans-serif; line-height: 1.2; text-align: left;">Arkon Medical<br>Systems</span>
                </div>'''

files = glob.glob(search_pattern, recursive=True)
count = 0
for f in files:
    if 'node_modules' in f: continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    orig = content
    content = content.replace(target_1, replacement_1)
    content = content.replace(target_2, replacement_2)
    content = content.replace(target_3, replacement_3)
    if content != orig:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        count += 1

print(f'Updated {count} files.')
