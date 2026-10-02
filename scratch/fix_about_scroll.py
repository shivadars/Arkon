import os

filepath = r"c:\medical-equipment-website\css\style.css"

with open(filepath, "r", encoding="utf-8") as f:
    css = f.read()

old_card_css = """    /* Scroll reveal */
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
        transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-stack-card.is-visible {
    opacity: 1;
    transform: translateY(0);
}"""

new_card_css = """    /* Removed opacity from container so background scrolls naturally */
}

/* Apply scroll reveal animation ONLY to the inner content */
.about-stack-card .about-stack-inner {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-stack-card.is-visible .about-stack-inner {
    opacity: 1;
    transform: translateY(0);
}"""

if old_card_css in css:
    css = css.replace(old_card_css, new_card_css)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(css)
    print("Fixed about-stack scroll animation.")
else:
    print("Could not find the exact CSS block.")
