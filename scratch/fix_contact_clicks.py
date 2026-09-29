import os

js_code = """
// Intercept all clicks on Contact links to ensure they scroll perfectly to the contact section
document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    const contactLinks = document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]');
    
    if (contactSection) {
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Let the URL update naturally, but force a smooth scroll exactly to the section
                setTimeout(() => {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            });
        });
    }
});
"""

with open("js/script.js", "a", encoding="utf-8") as f:
    f.write(js_code)
