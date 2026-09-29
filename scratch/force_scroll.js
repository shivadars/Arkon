// Ensure contact links always scroll to the section, even if the URL hash is already #contact
document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const contactLinks = document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only intercept if we are already on the homepage
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                e.preventDefault(); // Prevent native jump so we can always force a smooth scroll
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, '#contact'); // Update URL without jumping
            }
        });
    });
});
