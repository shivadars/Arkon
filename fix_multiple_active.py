import re

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

new_js = '''// IntersectionObserver-driven Accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        let currentlyActive = accordionItems[0]; // default to first

        const observer = new IntersectionObserver((entries) => {
            let newlyIntersecting = null;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    newlyIntersecting = entry.target;
                }
            });

            if (newlyIntersecting && newlyIntersecting !== currentlyActive) {
                // Remove active from all items to guarantee only one is active
                accordionItems.forEach(item => item.classList.remove('active'));
                
                // Add active to the new one
                newlyIntersecting.classList.add('active');
                currentlyActive = newlyIntersecting;
            }
        }, {
            // Trigger when element enters the middle of the viewport
            rootMargin: "-30% 0px -30% 0px", 
            threshold: 0
        });

        accordionItems.forEach(item => observer.observe(item));
        
        // Initial state
        if (accordionItems.length > 0) {
            accordionItems[0].classList.add('active');
        }
    }
});'''

js = js.replace(old_js, new_js)

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("JS updated to ensure only one item is active")
