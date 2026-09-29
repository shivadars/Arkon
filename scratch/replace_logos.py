import os
import glob

# HTML files to search
search_pattern = '**/*.html'

# Target block 1 (desktop header logo)
target_logo_desktop = """            <div class="logo">
                <a href="index.html">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                </a>
            </div>"""

replacement_logo_desktop = """            <div class="logo">
                <a href="index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

target_logo_desktop2 = """            <div class="logo">
                <a href="#">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                </a>
            </div>"""

replacement_logo_desktop2 = """            <div class="logo">
                <a href="#" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

target_logo_desktop3 = """            <div class="logo">
                <a href="../../index.html">
                    <img src="../../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                </a>
            </div>"""

replacement_logo_desktop3 = """            <div class="logo">
                <a href="../../index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="../../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

target_logo_desktop4 = """            <div class="logo">
                <a href="../index.html">
                    <img src="../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                </a>
            </div>"""

replacement_logo_desktop4 = """            <div class="logo">
                <a href="../index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                    <img src="../assets/logo/Arkon.png" alt="Arkon Medical System Logo" style="height: 50px; object-fit: contain;">
                    <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
                </a>
            </div>"""

# Target block 2 (mobile header logo)
target_logo_mobile = """        <div class="mobile-nav-header">
            <img src="assets/logo/Arkon.png" alt="Arkon Medical System" style="height: 40px; object-fit: contain;">"""

replacement_logo_mobile = """        <div class="mobile-nav-header">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="assets/logo/Arkon.png" alt="Arkon Medical System" style="height: 40px; object-fit: contain;">
                <span style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
            </div>"""

target_logo_mobile2 = """        <div class="mobile-nav-header">
            <img src="../../assets/logo/Arkon.png" alt="Arkon Medical System" style="height: 40px; object-fit: contain;">"""

replacement_logo_mobile2 = """        <div class="mobile-nav-header">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="../../assets/logo/Arkon.png" alt="Arkon Medical System" style="height: 40px; object-fit: contain;">
                <span style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
            </div>"""

target_logo_mobile3 = """        <div class="mobile-nav-header">
            <img src="../assets/logo/Arkon.png" alt="Arkon Medical System" style="height: 40px; object-fit: contain;">"""

replacement_logo_mobile3 = """        <div class="mobile-nav-header">
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="../assets/logo/Arkon.png" alt="Arkon Medical System" style="height: 40px; object-fit: contain;">
                <span style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">ARKON</span>
            </div>"""

def replace_in_files():
    files = glob.glob(search_pattern, recursive=True)
    count = 0
    for f in files:
        if "node_modules" in f: continue
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        orig_content = content
        
        content = content.replace(target_logo_desktop, replacement_logo_desktop)
        content = content.replace(target_logo_desktop2, replacement_logo_desktop2)
        content = content.replace(target_logo_desktop3, replacement_logo_desktop3)
        content = content.replace(target_logo_desktop4, replacement_logo_desktop4)
        content = content.replace(target_logo_mobile, replacement_logo_mobile)
        content = content.replace(target_logo_mobile2, replacement_logo_mobile2)
        content = content.replace(target_logo_mobile3, replacement_logo_mobile3)
        
        if content != orig_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
            count += 1
            
    print(f"Updated {count} files.")

if __name__ == "__main__":
    replace_in_files()
