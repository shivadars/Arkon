import re

with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the old updateAccordionActiveState function
old_js = '''// Scroll-driven Accordion Interaction
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        function updateAccordionActiveState() {
            const triggerLine = window.innerHeight * 0.5; // middle of the screen
            let activeItem = null;

            accordionItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                // If the top of the item is above the trigger line
                if (rect.top <= triggerLine) {
                    activeItem = item;
                }
                item.classList.remove('active');
            });

            const section = document.querySelector('.accordion-showcase-section');
            if (section) {
                const sectionRect = section.getBoundingClientRect();
                // Only apply active classes if the section is in view
                if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                    if (activeItem) {
                        activeItem.classList.add('active');
                    } else {
                        // If we haven't reached the first item's trigger line but the section is visible, keep first item active
                        accordionItems[0].classList.add('active');
                    }
                }
            }
        }

        window.addEventListener('scroll', updateAccordionActiveState, { passive: true });
        // Initial trigger
        setTimeout(updateAccordionActiveState, 100);
    }
});'''

new_js = '''// Scroll-driven Sticky Accordion Interaction
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.accordion-showcase-section');
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (section && accordionItems.length > 0) {
        function updateAccordionActiveState() {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // When sectionTop is 0, we are at the start of the sticky phase
            if (sectionTop <= 0 && sectionTop > -(sectionHeight - windowHeight)) {
                const scrollDistance = -sectionTop;
                const scrollableHeight = sectionHeight - windowHeight;
                
                // Progress from 0 to 1
                const progress = Math.max(0, Math.min(1, scrollDistance / scrollableHeight));
                
                // Map progress to an index
                const index = Math.min(
                    accordionItems.length - 1, 
                    Math.floor(progress * accordionItems.length)
                );

                accordionItems.forEach((item, i) => {
                    if (i === index) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            } else if (sectionTop > 0) {
                // Before section reaches top, keep first item active
                accordionItems.forEach((item, i) => {
                    if (i === 0) item.classList.add('active');
                    else item.classList.remove('active');
                });
            } else {
                // After section, keep last item active
                accordionItems.forEach((item, i) => {
                    if (i === accordionItems.length - 1) item.classList.add('active');
                    else item.classList.remove('active');
                });
            }
        }

        window.addEventListener('scroll', updateAccordionActiveState, { passive: true });
        setTimeout(updateAccordionActiveState, 100);
    }
});'''

content = content.replace(old_js, new_js)

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("JS updated")
