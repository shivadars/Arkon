import re

# Update CSS for fixed heights to prevent any jitter
with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# We need to remove the grid-template-rows logic and replace with flex/height logic
css = css.replace('.accordion-body {\n    display: grid;\n    grid-template-rows: 0fr;\n    transition: grid-template-rows 0.5s ease;\n}', '.accordion-body {\n    height: 100%;\n}')
css = css.replace('.accordion-body-inner {\n    overflow: hidden;\n    padding-top: 0;\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: all 0.5s ease;\n}', '.accordion-body-inner {\n    overflow: hidden;\n    padding-top: 0;\n    opacity: 0;\n    transition: all 0.3s ease;\n}')
css = css.replace('.accordion-item.active .accordion-body {\n    grid-template-rows: 1fr;\n}', '')
css = css.replace('.accordion-item.active .accordion-body-inner {\n    padding-top: 24px;\n    opacity: 1;\n    transform: translateY(0);\n}', '.accordion-item.active .accordion-body-inner {\n    padding-top: 24px;\n    opacity: 1;\n}')

# Set the base item height
css = css.replace('.accordion-item {\n    position: relative;\n    border-radius: 16px;\n    overflow: hidden;\n    background-color: #f1f5f9;\n    color: var(--text-color);\n    cursor: pointer;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.02);\n    transition: all 0.4s ease;\n}', '.accordion-item {\n    position: relative;\n    border-radius: 16px;\n    overflow: hidden;\n    background-color: #f1f5f9;\n    color: var(--text-color);\n    box-shadow: 0 4px 6px rgba(0,0,0,0.02);\n    height: 80px; /* base height */\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    will-change: height, background-color;\n}')

css = css.replace('.accordion-content {\n    position: relative;\n    z-index: 2;\n    padding: 32px 40px;\n}', '.accordion-content {\n    position: relative;\n    z-index: 2;\n    padding: 24px 40px;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}')

css = css.replace('.accordion-container {\n    max-width: 1050px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}', '.accordion-container {\n    max-width: 1050px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    height: 750px; /* 250 + 5*80 + 5*16 = 730, giving a little buffer */\n}')

# Add a specific active text color override just in case
css += '\n.accordion-item.active .accordion-body-inner p { color: rgba(255,255,255,0.9); }\n'

with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Now update JS
with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

old_js = '''// IntersectionObserver-driven Accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            // Trigger when element enters the middle 60% of the viewport
            rootMargin: "-20% 0px -20% 0px", 
            threshold: 0
        });

        accordionItems.forEach(item => observer.observe(item));
    }
});'''

new_js = '''// Continuous Scroll-linked Accordion Animation
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.accordion-showcase-section');
    const items = document.querySelectorAll('.accordion-item');
    if (section && items.length > 0) {
        const totalItems = items.length;
        const baseHeight = 80;
        const expandedHeight = 250;
        
        function onScroll() {
            const rect = section.getBoundingClientRect();
            // Calculate center of screen relative to section top
            const screenCenter = window.innerHeight / 2;
            const scrollPos = screenCenter - rect.top;
            
            // The active zone is essentially the height of the container
            // Let's map scrollPos to an index (progress)
            const sectionUsableHeight = rect.height;
            let progress = (scrollPos / sectionUsableHeight) * totalItems;
            
            // Shift progress slightly so it feels natural
            progress = Math.max(0, Math.min(totalItems - 1, progress - 0.5));
            
            const activeIndex = Math.floor(progress);
            const partial = progress % 1;
            
            items.forEach((item, i) => {
                let currentHeight = baseHeight;
                let isActive = false;
                
                if (i === activeIndex) {
                    // This item is shrinking as we scroll down to next
                    currentHeight = baseHeight + (expandedHeight - baseHeight) * (1 - partial);
                    if (partial < 0.5) isActive = true; // Mostly expanded
                } else if (i === activeIndex + 1) {
                    // This item is growing as we scroll down
                    currentHeight = baseHeight + (expandedHeight - baseHeight) * partial;
                    if (partial >= 0.5) isActive = true; // Mostly expanded
                }
                
                item.style.height = currentHeight + 'px';
                
                if (isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        setTimeout(onScroll, 100);
    }
});'''

js = js.replace(old_js, new_js)

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Updated JS and CSS for continuous scroll mapping")
