import os

css_append = """
/* Overview & Specs 2-Column Grid */
.pd-overview-specs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}
.pd-overview-col, .pd-specs-col {
    width: 100%;
}
@media (max-width: 991px) {
    .pd-overview-specs-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}
"""

with open(r"c:\medical-equipment-website\css\style.css", "a", encoding="utf-8") as f:
    f.write(css_append)

print("CSS appended successfully.")
