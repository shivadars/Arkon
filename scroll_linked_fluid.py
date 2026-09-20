import re

# Update CSS for JS-driven heights
with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace transition on accordion-item
css = css.replace('transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);', 'transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease; height: 90px; display: flex; flex-direction: column;')

# Remove grid template rows on accordion-body
css = css.replace('.accordion-body {\n    display: grid;\n    grid-template-rows: 0fr;\n    transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}', '.accordion-body {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}')

# Keep accordion-body-inner hidden by default, JS will handle opacity
css = css.replace('.accordion-body-inner {\n    overflow: hidden;\n    padding-top: 0;\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}', '.accordion-body-inner {\n    overflow: hidden;\n    padding-top: 0;\n    opacity: 0;\n}')

css = css.replace('.accordion-item.active .accordion-body {\n    grid-template-rows: 1fr;\n}', '')
css = css.replace('.accordion-item.active .accordion-body-inner {\n    padding-top: 24px;\n    opacity: 1;\n    transform: translateY(0);\n}', '.accordion-item.active .accordion-body-inner {\n    padding-top: 24px;\n}')

# Fix padding for absolute height layout
css = css.replace('.accordion-content {\n    position: relative;\n    z-index: 2;\n    padding: 32px 40px;\n}', '.accordion-content {\n    position: relative;\n    z-index: 2;\n    padding: 24px 40px;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}')

# Prevent active text color override from missing
if '.accordion-item.active .accordion-body-inner p { color: inherit; }' not in css:
    css += '\n.accordion-item.active .accordion-body-inner p { color: inherit; }\n'

with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update JS for fluid mapping
with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove the old IntersectionObserver block
old_js_pattern = re.compile(r'// IntersectionObserver-driven Accordion.*?}\n}\);', re.DOTALL)

new_js = '''// Fluid Scroll-Linked Accordion Animation
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion-item');
    if (items.length > 0) {
        const baseHeight = 90;
        const peakHeight = 280;

        function onScroll() {
            const windowHeight = window.innerHeight;
            const startY = windowHeight * 0.85; // Starts expanding when top hits 85% of screen
            const peakY = windowHeight * 0.5;  // Fully expanded at 50% of screen
            const endY = windowHeight * 0.15;  // Shrinks back down to 15% of screen

            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                let height = baseHeight;
                let progress = 0;
                let isActive = false;
                
                if (rect.top <= startY && rect.top >= peakY) {
                    // Expanding phase (scrolling down)
                    progress = (startY - rect.top) / (startY - peakY);
                    height = baseHeight + (peakHeight - baseHeight) * progress;
                    if (progress > 0.5) isActive = true;
                } else if (rect.top < peakY && rect.top >= endY) {
                    // Shrinking phase (scrolling down past center)
                    progress = (rect.top - endY) / (peakY - endY);
                    height = baseHeight + (peakHeight - baseHeight) * progress;
                    if (progress > 0.5) isActive = true;
                } else if (rect.top > startY || rect.top < endY) {
                    // Outside active zone
                    height = baseHeight;
                    progress = 0;
                    isActive = false;
                }

                // Apply inline height
                item.style.height = height + 'px';
                
                // Map opacity to progress directly
                const bodyInner = item.querySelector('.accordion-body-inner');
                if (bodyInner) {
                    // fade in smoothly as it expands
                    const opacity = Math.max(0, Math.min(1, (progress - 0.2) / 0.6));
                    bodyInner.style.opacity = opacity;
                }
                
                // Toggle active class for color and background effects
                if (isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        // Initial setup
        setTimeout(onScroll, 50);
    }
});'''

js = old_js_pattern.sub(new_js, js)

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Updated JS and CSS for fluid scroll-linked animation")
