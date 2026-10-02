import os
import re

directory = r"c:\medical-equipment-website\products"

section_pattern = re.compile(
    r'<section class="pd-section bg-light">\s*<div class="container">\s*<div class="pd-section-header">\s*<h2 class="pd-section-title">Key Features</h2>\s*</div>\s*<div class="pd-features-accordion" data-aos="fade-up">([\s\S]*?)</section>'
)

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
                
                match = section_pattern.search(content)
                if match:
                    items_and_end = match.group(1)
                    
                    new_items_and_end = items_and_end.rsplit('    </div>\n</div>\n', 1)[0]
                    
                    new_section = f"""<section class="pd-section bg-light">
    <div class="container">
        <div class="pd-features-layout">
            <div class="pd-features-layout-left" data-aos="fade-right">
                <div class="pd-section-header" style="margin-bottom: 0;">
                    <h2 class="pd-section-title">Key Features</h2>
                </div>
                <p class="pd-features-subtitle">Discover the advanced capabilities and intelligent design that set our solutions apart.</p>
            </div>
            <div class="pd-features-layout-right pd-features-accordion" data-aos="fade-up">{new_items_and_end}    </div>
        </div>
    </div>
</section>"""
                    
                    content = content[:match.start()] + new_section + content[match.end():]
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully refined layout in {count} HTML files.")
