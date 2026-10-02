import os
import re

directory = r"c:\medical-equipment-website\products"

# The overview section pattern
overview_pattern = re.compile(
    r'<section class="pd-section">\s*<div class="container">\s*<div class="pd-section-header">\s*<h2 class="pd-section-title">Overview</h2>\s*</div>\s*<div class="pd-overview-text"[^>]*>([\s\S]*?)</div>\s*</div>\s*</section>'
)

# The specs section pattern
specs_pattern = re.compile(
    r'<section class="pd-section">\s*<div class="container">\s*<div class="pd-section-header">\s*<h2 class="pd-section-title">Technical Specifications</h2>\s*</div>\s*<table class="pd-specs-table"[^>]*>([\s\S]*?)</table>\s*</div>\s*</section>'
)

count = 0
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if both overview and specs exist
                overview_match = overview_pattern.search(content)
                specs_match = specs_pattern.search(content)
                
                if overview_match and specs_match:
                    overview_text = overview_match.group(1).strip()
                    specs_table_inner = specs_match.group(1).strip()
                    
                    combined_section = f"""<section class="pd-section">
    <div class="container">
        <div class="pd-overview-specs-grid">
            <div class="pd-overview-col" data-aos="fade-right">
                <div class="pd-section-header" style="margin-bottom: 24px;">
                    <h2 class="pd-section-title">Overview</h2>
                </div>
                <div class="pd-overview-text" style="max-width: 100%;">
                    {overview_text}
                </div>
            </div>
            <div class="pd-specs-col" data-aos="fade-left">
                <div class="pd-section-header" style="margin-bottom: 24px;">
                    <h2 class="pd-section-title">Technical Specifications</h2>
                </div>
                <table class="pd-specs-table">
                    {specs_table_inner}
                </table>
            </div>
        </div>
    </div>
</section>"""
                    
                    # Remove the original specs section
                    content = specs_pattern.sub('', content)
                    
                    # Replace the original overview section with the combined one
                    content = overview_pattern.sub(combined_section, content)
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully combined Overview & Specs in {count} HTML files.")
