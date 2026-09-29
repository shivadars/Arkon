import re

with open("js/script.js", "r", encoding="utf-8") as f:
    content = f.read()

old_logic = """    if (window.location.hash === '#contact') {
        homeLinks.forEach(link => link.classList.remove('active'));
        contactLinks.forEach(link => link.classList.add('active'));
    }"""

new_logic = """    if (window.location.hash === '#contact') {
        homeLinks.forEach(link => link.classList.remove('active'));
        contactLinks.forEach(link => link.classList.add('active'));
        
        // Ensure we scroll to the exact position AFTER all images load
        window.addEventListener('load', () => {
            setTimeout(() => {
                if(contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
        });
        
        // Also intercept clicks on the contact link to force smooth scrolling
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Let the hash update natively, but override the scroll behavior
                setTimeout(() => {
                    if(contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 50);
            });
        });
    }"""

if old_logic in content:
    content = content.replace(old_logic, new_logic)
    with open("js/script.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated hash scroll logic")
else:
    print("Could not find the target string")
