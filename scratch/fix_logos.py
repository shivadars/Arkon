import os
import glob

# HTML files to search
search_pattern = '**/*.html'

# The text we incorrectly inserted previously
target_incorrect_desktop_1 = """            <div class="logo">
                <a href="index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

replacement_correct_desktop_1 = """            <div class="brand-wrapper" style="display: flex; align-items: center; gap: 8px;">
                <div class="logo">
                    <a href="index.html">
                        <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    </a>
                </div>
                <span class="brand-text" style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif; text-transform: uppercase;">ARKON</span>
            </div>"""

target_incorrect_desktop_2 = """            <div class="logo">
                <a href="#" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

replacement_correct_desktop_2 = """            <div class="brand-wrapper" style="display: flex; align-items: center; gap: 8px;">
                <div class="logo">
                    <a href="#">
                        <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    </a>
                </div>
                <span class="brand-text" style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif; text-transform: uppercase;">ARKON</span>
            </div>"""

target_incorrect_desktop_3 = """            <div class="logo">
                <a href="../../index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="../../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

replacement_correct_desktop_3 = """            <div class="brand-wrapper" style="display: flex; align-items: center; gap: 8px;">
                <div class="logo">
                    <a href="../../index.html">
                        <img src="../../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    </a>
                </div>
                <span class="brand-text" style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif; text-transform: uppercase;">ARKON</span>
            </div>"""

target_incorrect_desktop_4 = """            <div class="logo">
                <a href="../index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

replacement_correct_desktop_4 = """            <div class="brand-wrapper" style="display: flex; align-items: center; gap: 8px;">
                <div class="logo">
                    <a href="../index.html">
                        <img src="../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    </a>
                </div>
                <span class="brand-text" style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif; text-transform: uppercase;">ARKON</span>
            </div>"""


def replace_in_files():
    files = glob.glob(search_pattern, recursive=True)
    count = 0
    for f in files:
        if "node_modules" in f: continue
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        orig_content = content
        
        content = content.replace(target_incorrect_desktop_1, replacement_correct_desktop_1)
        content = content.replace(target_incorrect_desktop_2, replacement_correct_desktop_2)
        content = content.replace(target_incorrect_desktop_3, replacement_correct_desktop_3)
        content = content.replace(target_incorrect_desktop_4, replacement_correct_desktop_4)
        
        if content != orig_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Fixed {f}")
            count += 1
            
    print(f"Fixed {count} files.")

if __name__ == "__main__":
    replace_in_files()
