import os

css_append = """
/* Revert centering to keep it strictly Left-Aligned as requested */
@media (min-width: 992px) {
    .pd-features-layout {
        margin: 0 !important; /* Removes auto-centering */
    }
    .pd-features-accordion {
        margin: 0 !important; /* Removes auto-centering */
    }
}
.pd-features-layout-left {
    text-align: left !important;
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended left-align CSS.")
