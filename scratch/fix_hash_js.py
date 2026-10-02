import os

js_code = """
// ============================================
// Cross-Page Hash Navigation Fix
// ============================================
// Ensures that when navigating from another page (like products) to index.html#contact,
// the layout has fully settled (images loaded) before scrolling, so it doesn't get
// stuck in the previous section due to image expansion.
window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    }
});
"""

filepath = r"c:\medical-equipment-website\js\script.js"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

if "Cross-Page Hash Navigation Fix" not in content:
    with open(filepath, "a", encoding="utf-8") as f:
        f.write("\n" + js_code)
    print("Added hash navigation fix to script.js")
else:
    print("Fix already exists.")
