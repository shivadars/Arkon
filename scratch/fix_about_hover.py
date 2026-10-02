import os

filepath = r"c:\medical-equipment-website\css\style.css"

with open(filepath, "r", encoding="utf-8") as f:
    css = f.read()

# Remove hover image zoom
target_hover = """.about-stack-card:hover .about-stack-image img {
    transform: scale(1.03);
}"""

if target_hover in css:
    css = css.replace(target_hover, ".about-stack-card:hover .about-stack-image img { /* hover disabled */ }")

# Remove scroll fade animation from inner content
target_scroll = """/* Apply scroll reveal animation ONLY to the inner content */
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

new_scroll = """/* Scroll reveal completely disabled for natural stacking */
.about-stack-card .about-stack-inner {
    opacity: 1;
    transform: translateY(0);
}

.about-stack-card.is-visible .about-stack-inner {
    opacity: 1;
    transform: translateY(0);
}"""

if target_scroll in css:
    css = css.replace(target_scroll, new_scroll)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(css)
print("Disabled hover and scroll animations.")
