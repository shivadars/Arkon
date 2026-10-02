import os
import re

new_footer = """    <footer class="footer" id="footer">
        <div class="container footer-grid-compact">
            <div class="footer-col-compact">
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical Systems" class="footer-logo-compact" style="background-color: white; padding: 10px; border-radius: 6px; object-fit: contain; max-height: 65px; margin-bottom: 0 !important;">
                    <span style="font-size: 20px; font-weight: 700; color: #ffffff; font-family: 'Inter', sans-serif; line-height: 1.2; text-align: left;">Arkon Medical<br>Systems</span>
                </div>
                <div class="footer-contact-info" style="margin-top: 24px;">
                    <div style="color: rgba(255, 255, 255, 0.8); margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px;">
                        <span style="font-size: 16px; margin-top: 2px;">📍</span> 
                        <span style="line-height: 1.5;">33/2255, Sreekala Byelane, Palarivattom,<br>Kochi, Kerala 682028</span>
                    </div>
                    <div style="color: rgba(255, 255, 255, 0.8); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 16px;">📞</span> +91 98765 43210
                    </div>
                    <div style="color: rgba(255, 255, 255, 0.8); display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 16px;">✉</span> info@arkonmedical.com
                    </div>
                </div>
            </div>
            <div class="footer-col-compact">
                <h4>Products</h4>
                <ul>
                    <li><a href="products.html">All Products</a></li>
                    <li><a href="products.html?category=Ventilator">Ventilator</a></li>
                    <li><a href="products.html?category=Patient%20Monitoring">Patient Monitoring</a></li>
                    <li><a href="products.html?category=Anesthesia%20Machine">Anesthesia Machine</a></li>
                    <li><a href="products.html?category=Surgical%20Light">Surgical Light</a></li>
                    <li><a href="products.html?category=Incubator">Incubator</a></li>
                </ul>
            </div>
            <div class="footer-col-compact">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom-compact" style="border-top: 1px solid rgba(255, 255, 255, 0.1); margin-top: 40px; padding-top: 20px; padding-bottom: 20px; text-align: center;">
            <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 14px; letter-spacing: 0.5px;">Copyright © 2026 Arkon | Made with ❤️ by <a href="https://rlabz.in/" target="_blank" style="color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500; transition: color 0.3s ease;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.9)'">RLABZ</a></p>
        </div>
    </footer>"""

directory = r"c:\medical-equipment-website"
pattern = re.compile(r'[ \t]*<footer class="footer" id="footer">[\s\S]*?</footer>', re.MULTILINE)

count = 0
for root, dirs, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content, num_subs = pattern.subn(new_footer, content)
                
                if num_subs > 0:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Successfully redesigned {count} HTML files.")
