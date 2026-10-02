import os

css_append = """
/* Guaranteed Mobile Responsiveness Fixes */
@media (max-width: 768px) {
    /* 1. Accordion Card padding and shape */
    .pd-features-accordion {
        padding: 10px 16px !important;
        border-radius: 12px !important;
    }
    
    /* 2. Smaller heading to prevent awkward wrapping */
    .pd-accordion-title {
        font-size: 1.05rem !important;
    }

    /* 3. Reduce gap between icon and title */
    .pd-accordion-title-wrap {
        gap: 12px !important;
    }
    
    /* 4. Shrink the checkmark icon slightly */
    .pd-accordion-icon,
    .pd-accordion-icon svg {
        width: 20px !important;
        height: 20px !important;
    }
    
    /* 5. Perfect indentation for description text (20px icon + 12px gap = 32px) */
    .pd-accordion-item.active .pd-accordion-content {
        padding: 0 0 24px 32px !important; 
    }
    
    /* 6. Reduce top heading spacing */
    .pd-features-layout-left {
        margin-bottom: 24px !important;
    }
}

/* 7. Ensure Technical Specifications table doesn't break mobile layout */
.pd-specs-col {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.pd-specs-table {
    min-width: 100%;
    width: max-content;
}
@media (max-width: 500px) {
    .pd-specs-table th, .pd-specs-table td {
        padding: 12px 10px;
        font-size: 0.9rem;
    }
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended responsiveness CSS.")
