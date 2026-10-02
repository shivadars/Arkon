import os

css_append = """
/* Desktop & Laptop Readability Optimizations */
@media (min-width: 992px) {
    /* Prevent the single-column layout from stretching too wide on large monitors */
    .pd-features-layout {
        max-width: 1000px !important;
        margin: 0 auto !important; /* Centers the block on the page */
    }
    
    /* Ensure the accordion card doesn't stretch past the readable width */
    .pd-features-accordion {
        max-width: 1000px !important;
        margin: 0 auto !important;
    }
    
    /* Add elegant hover effects on desktop for better interactivity */
    .pd-accordion-header {
        transition: opacity 0.2s ease;
    }
    .pd-accordion-header:hover .pd-accordion-title {
        color: var(--primary);
    }
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended desktop CSS.")
