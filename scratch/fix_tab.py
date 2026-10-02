import glob, re

count = 0
for f in glob.glob('c:/medical-equipment-website/**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    changed = False
    
    # Fix title
    new_content = re.sub(
        r'<title>.*?</title>',
        '<title>Arkon Medical Systems</title>',
        content
    )
    if new_content != content:
        changed = True
        content = new_content
    
    # Add favicon if not present
    if 'rel="icon"' not in content and '<head>' in content:
        # Determine relative path based on file depth
        rel_path = f.replace('c:/medical-equipment-website/', '').replace('\\', '/')
        depth = rel_path.count('/')
        prefix = '../' * depth
        favicon_tag = f'<link rel="icon" type="image/png" href="{prefix}assets/logo/Arkon.png">'
        content = content.replace('<head>', '<head>\n    ' + favicon_tag, 1)
        changed = True
    
    if changed:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(content)
        count += 1

print(f'Updated {count} files')
