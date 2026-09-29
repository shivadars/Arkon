import re

with open("js/script.js", "r", encoding="utf-8", errors="replace") as f:
    content = f.read()

# The corrupted characters start after line 1120. We will split by \n});\n and take everything up to the first instance after line 1000.
# Actually, it's easier to just slice out the corrupted bytes. 
# The corrupted string is from '/ /   E n s u r e' onwards. Let's find the exact index.

index = content.find("/ /   E n s u r e")
if index != -1:
    content = content[:index]

# Now append the clean code
clean_code = """
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
"""

content = content + clean_code

with open("js/script.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed corrupted characters and appended clean code")
