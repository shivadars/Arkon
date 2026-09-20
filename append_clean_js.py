clean_js = '''

// Scroll-driven Accordion Interaction
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
});
'''

with open('c:/medical-equipment-website/js/script.js', 'a', encoding='utf-8') as f:
    f.write(clean_js)

print("Appended successfully")
