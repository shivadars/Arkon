import glob, re

count = 0
for f in glob.glob('c:/medical-equipment-website/**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    # Replace existing favicon link with .ico version
    if 'rel="icon"' in content:
        new_content = re.sub(
            r'<link rel="icon"[^>]*>',
            lambda m: m.group(0).replace('Arkon.png', 'favicon.ico').replace('type="image/png"', 'type="image/x-icon"'),
            content
        )
        if new_content != content:
            with open(f, 'w', encoding='utf-8') as fh:
                fh.write(new_content)
            count += 1

print(f'Updated {count} files to use favicon.ico')
