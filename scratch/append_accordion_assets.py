import os

css_append = """
/* Product Features Accordion */
.pd-features-accordion {
    max-width: 900px;
    margin: 0 auto;
}
.pd-accordion-item {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
}
.pd-accordion-item.active {
    border-color: var(--primary);
    box-shadow: 0 4px 20px rgba(46, 49, 146, 0.08);
}
.pd-accordion-header {
    padding: 24px 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    user-select: none;
}
.pd-accordion-title-wrap {
    display: flex;
    align-items: center;
    gap: 16px;
}
.pd-accordion-icon {
    width: 48px;
    height: 48px;
    background: rgba(46, 49, 146, 0.08);
    color: var(--primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pd-accordion-icon svg {
    width: 24px;
    height: 24px;
}
.pd-accordion-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
}
.pd-accordion-toggle {
    width: 24px;
    height: 24px;
    position: relative;
    flex-shrink: 0;
}
.pd-accordion-toggle::before,
.pd-accordion-toggle::after {
    content: '';
    position: absolute;
    background: var(--text-muted);
    transition: transform 0.3s ease, background 0.3s ease;
    border-radius: 2px;
}
.pd-accordion-toggle::before {
    top: 11px; left: 0; width: 24px; height: 2px;
}
.pd-accordion-toggle::after {
    top: 0; left: 11px; width: 2px; height: 24px;
}
.pd-accordion-item.active .pd-accordion-toggle::after {
    transform: rotate(90deg);
}
.pd-accordion-item.active .pd-accordion-toggle::before,
.pd-accordion-item.active .pd-accordion-toggle::after {
    background: var(--primary);
}
.pd-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;
    background: #fafafa;
}
.pd-accordion-item.active .pd-accordion-content {
    max-height: 800px;
    padding: 20px 32px 32px 96px;
}
.pd-accordion-text {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0;
}
@media (max-width: 768px) {
    .pd-accordion-header { padding: 20px; }
    .pd-accordion-item.active .pd-accordion-content { padding: 0 20px 20px 20px; }
    .pd-accordion-title-wrap { gap: 12px; }
}
"""

js_append = """
// Product Features Accordion Logic
document.addEventListener('DOMContentLoaded', function() {
    const featureAccordions = document.querySelectorAll('.pd-accordion-header');
    if (featureAccordions.length > 0) {
        featureAccordions.forEach(header => {
            header.addEventListener('click', function() {
                const item = this.parentElement;
                
                // Close others
                const siblings = item.parentElement.querySelectorAll('.pd-accordion-item');
                siblings.forEach(sibling => {
                    if (sibling !== item) {
                        sibling.classList.remove('active');
                    }
                });
                
                // Toggle current
                item.classList.toggle('active');
            });
        });
    }
});
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

with open(r"c:\medical-equipment-website\js\script.js", "a", encoding="utf-8") as f:
    f.write(js_append)

print("Appended CSS and JS for features accordion.")
