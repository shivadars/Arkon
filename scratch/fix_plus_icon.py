import os

css_append = """
/* Fix Toggle Icon: Replace CSS shapes with crisp SVG Plus/Minus */
.pd-accordion-toggle {
    width: 24px !important;
    height: 24px !important;
    border: none !important;
    background-color: transparent !important;
    /* Crisp dark Plus SVG */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230f172a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'%3E%3C/line%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: contain !important;
    transition: transform 0.3s ease !important;
}

/* Hide the old hacky pseudo elements */
.pd-accordion-toggle::before,
.pd-accordion-toggle::after {
    display: none !important;
}

/* Active State: Minus SVG (Primary Color) and rotate 180deg for smooth spin effect */
.pd-accordion-item.active .pd-accordion-toggle {
    transform: rotate(180deg) !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232E3192' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended SVG toggle fix CSS.")
