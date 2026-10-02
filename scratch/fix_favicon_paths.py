import glob, re, os

root = 'c:/medical-equipment-website'
count = 0

for f in glob.glob(root + '/**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    if 'rel="icon"' not in content:
        continue
    
    # Calculate correct relative path from this file to the favicon
    file_dir = os.path.dirname(f).replace('\\', '/')
    rel_dir = os.path.relpath(file_dir, root).replace('\\', '/')
    
    if rel_dir == '.':
        prefix = ''
    else:
        depth = rel_dir.count('/') + 1
        prefix = '../' * depth
    
    correct_href = f'{prefix}assets/logo/favicon.ico'
    
    # Replace any existing favicon link with the correct path
    new_content = re.sub(
        r'<link rel="icon"[^>]*>',
        f'<link rel="icon" type="image/x-icon" href="{correct_href}">',
        content
    )
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        count += 1

print(f'Fixed favicon paths in {count} files')
