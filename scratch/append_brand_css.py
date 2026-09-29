import os

css_code = """
/* Brand Text Responsiveness */
@media (max-width: 1024px) {
    .brand-text {
        font-size: 18px !important;
        margin-left: 2px !important;
    }
}

@media (max-width: 480px) {
    .brand-text {
        font-size: 16px !important;
    }
}
"""

with open("css/style.css", "a", encoding="utf-8") as f:
    f.write(css_code)
