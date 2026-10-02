import os

css_append = """
/* Fix sticky header covering anchor sections (like #contact) */
section[id] {
    scroll-margin-top: 120px;
}

/* Ensure smooth scrolling globally for anchor links */
html {
    scroll-behavior: smooth;
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended scroll-margin-top CSS.")
