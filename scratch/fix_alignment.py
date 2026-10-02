import os

css_append = """
/* Refined Single-Column Layout & Alignment */
.pd-features-layout {
    display: block !important;
}
.pd-features-layout-left {
    margin-bottom: 40px !important;
    text-align: left;
    max-width: 800px;
}

/* Make the entire accordion a premium white card */
.pd-features-accordion {
    background: #fff;
    border-radius: 16px;
    padding: 10px 40px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.05);
}

.pd-accordion-header {
    padding: 24px 0;
}

.pd-accordion-icon {
    width: 24px;
    height: 24px;
}
.pd-accordion-icon svg {
    width: 24px;
    height: 24px;
    color: var(--primary);
}

.pd-accordion-title-wrap {
    gap: 20px;
}

/* Perfectly align the description text with the title text (24px icon + 20px gap = 44px) */
.pd-accordion-item.active .pd-accordion-content {
    padding: 0 0 32px 44px !important;
}

@media (max-width: 768px) {
    .pd-features-accordion {
        padding: 10px 20px;
    }
    .pd-accordion-item.active .pd-accordion-content {
        padding: 0 0 24px 0 !important; /* Reset indent on mobile */
    }
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended refined alignment CSS.")
