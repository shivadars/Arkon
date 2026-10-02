import os

css_append = """
/* Premium Side-by-Side Features Layout */
.pd-features-layout {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 80px;
    align-items: start;
}
.pd-features-subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-top: 16px;
}

/* Override previous accordion styles for unified flush look */
.pd-features-accordion {
    max-width: 100%;
}
.pd-accordion-item {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    border-radius: 0;
    margin-bottom: 0;
    box-shadow: none !important;
}
.pd-accordion-item:last-child {
    border-bottom: none;
}
.pd-accordion-item.active {
    border-color: rgba(0,0,0,0.08);
}
.pd-accordion-header {
    background: transparent;
    padding: 24px 0;
}
.pd-accordion-icon {
    background: transparent;
    width: 32px;
    height: 32px;
}
.pd-accordion-icon svg {
    width: 28px;
    height: 28px;
}
.pd-accordion-title {
    font-size: 1.25rem;
}
.pd-accordion-content {
    background: transparent;
}
.pd-accordion-item.active .pd-accordion-content {
    padding: 0 0 32px 48px;
}

/* Thicker Plus/Minus */
.pd-accordion-toggle {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}
.pd-accordion-toggle::before {
    top: 15px; left: 8px; width: 14px; height: 2px;
}
.pd-accordion-toggle::after {
    top: 8px; left: 14px; width: 2px; height: 14px;
}
.pd-accordion-item.active .pd-accordion-toggle {
    background: var(--primary);
    border-color: var(--primary);
}
.pd-accordion-item.active .pd-accordion-toggle::before,
.pd-accordion-item.active .pd-accordion-toggle::after {
    background: #fff;
}

@media (max-width: 991px) {
    .pd-features-layout {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    .pd-accordion-header {
        padding: 20px 0;
    }
    .pd-accordion-item.active .pd-accordion-content {
        padding: 0 0 24px 0;
    }
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("Appended premium CSS overrides for features layout.")
