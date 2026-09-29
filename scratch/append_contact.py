import os

js_code = """
// Contact Section Navigation Highlighting
document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    const homeLinks = document.querySelectorAll('a[href="index.html"]');
    const contactLinks = document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]');
    
    // 1. Check if we arrived with #contact hash
    if (window.location.hash === '#contact') {
        homeLinks.forEach(link => link.classList.remove('active'));
        contactLinks.forEach(link => link.classList.add('active'));
    }

    // 2. Setup scroll observer if the contact section exists on this page
    if (contactSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    homeLinks.forEach(link => link.classList.remove('active'));
                    contactLinks.forEach(link => link.classList.add('active'));
                } else {
                    // Only restore Home active if we are actually on the home page
                    if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                        contactLinks.forEach(link => link.classList.remove('active'));
                        homeLinks.forEach(link => link.classList.add('active'));
                    }
                }
            });
        }, { threshold: 0.5 });
        observer.observe(contactSection);
    }
});
"""

with open("js/script.js", "a", encoding="utf-8") as f:
    f.write(js_code)
