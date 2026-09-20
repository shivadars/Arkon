import re

with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to remove all occurrences of the scroll-driven accordion logic and then append the correct one.
# First, let's just find the first occurrence of '// Scroll-driven Accordion Interaction' and truncate the file there.
index = content.find('// Scroll-driven Accordion Interaction')
if index != -1:
    content = content[:index]

# Now append the clean, single copy
clean_js = '''// Scroll-driven Accordion Interaction
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

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(content + clean_js)

print("JS cleaned up")
