import os
import re

directory = r"c:\medical-equipment-website\products"

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

                # Idempotency check
                if "pd-features-image-col" in content:
                    continue

                # Find the main image src
                img_match = re.search(r'<img id="pd-main-img" src="(.*?)"', content)
                if not img_match:
                    continue
                main_img_src = img_match.group(1)

                # We need to find the ending of the accordion div inside pd-features-layout
                # The structure is:
                #             </div>
                #         </div>
                #     </div>
                # </section>
                # Let's use a regex that matches the end of the section containing pd-features-accordion
                
                # A safe way is to split on '</section>' and find the section that has 'pd-features-accordion'
                parts = content.split('</section>')
                new_parts = []
                modified = False
                
                for part in parts:
                    if 'class="pd-features-layout-right pd-features-accordion"' in part and 'pd-accordion-item' in part:
                        # This is the features section.
                        # We want to replace the closing tags of pd-features-accordion and pd-features-layout
                        # The ending inside the part should be:
                        #         </div>
                        #     </div>
                        # </div>
                        
                        # Let's do a right-split to replace the last occurrence of these closing divs
                        suffix = r"""        </div>
            <div class="pd-features-image-col" data-aos="fade-left" style="display: flex; align-items: center; justify-content: center; padding: 20px;">
                <img src="REPLACE_IMG" alt="Key Features" style="max-width: 100%; height: auto; object-fit: contain; max-height: 500px; mix-blend-mode: multiply;">
            </div>
        </div>
    </div>
"""
                        suffix = suffix.replace('REPLACE_IMG', main_img_src)
                        
                        # Replace the last `        </div>\n    </div>\n        </div>\n    </div>\n` or similar
                        # We can just use regex to replace the last set of </div>s.
                        # It's safer to use regex substitution at the end of the string.
                        part = re.sub(r'(\s*</div>\s*</div>\s*</div>\s*)$', '\n' + suffix, part)
                        modified = True
                    
                    new_parts.append(part)
                
                if modified:
                    new_content = '</section>'.join(new_parts)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1

            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully added image column to {count} HTML files.")
