js_content = '''
// Scroll-driven Accordion Interaction
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        function updateAccordionActiveState() {
            const viewportCenter = window.innerHeight / 2;
            let closestItem = null;
            let minDistance = Infinity;

            accordionItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + (rect.height / 2);
                const distance = Math.abs(viewportCenter - itemCenter);
                
                item.classList.remove('active');

                if (distance < minDistance) {
                    minDistance = distance;
                    closestItem = item;
                }
            });

            const section = document.querySelector('.accordion-showcase-section');
            if (section && closestItem) {
                const sectionRect = section.getBoundingClientRect();
                // Ensure the section is actually somewhat in the viewport before forcing an active state
                if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                    closestItem.classList.add('active');
                }
            }
        }

        window.addEventListener('scroll', updateAccordionActiveState, { passive: true });
        // Initial trigger
        updateAccordionActiveState();
    }
});
'''

with open('c:/medical-equipment-website/js/script.js', 'a', encoding='utf-8') as f:
    f.write(js_content)

print("JS appended")
