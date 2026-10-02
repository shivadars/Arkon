import os
import re

directory = r"c:\medical-equipment-website\products"

grid_pattern = re.compile(
    r'<div class="pd-features-grid">([\s\S]*?)</div>\s*</div>\s*</section>'
)

card_pattern = re.compile(
    r'<div class="pd-feature-card"[^>]*>\s*<div class="pd-feature-icon">(.*?)</div>\s*<h3 class="pd-feature-title">(.*?)</h3>\s*<p class="pd-feature-text">([\s\S]*?)</p>\s*</div>'
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
                
                # Check if it has a features grid
                grid_match = grid_pattern.search(content)
                
                if grid_match:
                    inner_grid = grid_match.group(1)
                    
                    cards = card_pattern.findall(inner_grid)
                    
                    if cards:
                        accordion_html = '<div class="pd-features-accordion" data-aos="fade-up">\n'
                        
                        for i, card in enumerate(cards):
                            icon, title, text = card
                            active_class = " active" if i == 0 else ""
                            
                            accordion_html += f"""        <div class="pd-accordion-item{active_class}">
            <div class="pd-accordion-header">
                <div class="pd-accordion-title-wrap">
                    <div class="pd-accordion-icon">{icon}</div>
                    <h3 class="pd-accordion-title">{title}</h3>
                </div>
                <div class="pd-accordion-toggle"></div>
            </div>
            <div class="pd-accordion-content">
                <p class="pd-accordion-text">{text}</p>
            </div>
        </div>\n"""
                            
                        accordion_html += '    </div>\n</div>\n</section>'
                        
                        # Replace the whole matched grid block with accordion
                        content = grid_pattern.sub(accordion_html, content)
                        
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(content)
                        count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully converted to accordion in {count} HTML files.")
