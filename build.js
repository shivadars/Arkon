/**
 * build.js - Arkon Medical System Static Site Generator (Comen Layout)
 * Usage: node build.js
 */

const fs   = require("fs");
const path = require("path");

const products = require("./js/data.js");
const template = fs.readFileSync("./product-template.html", "utf8");

// Slugify product name into URL-safe folder name
function slugify(name) {
    return name
        .replace(/&amp;/g, "and")
        .replace(/&/g, "and")
        .toLowerCase()
        .replace(/[\/\\+]/g, "-")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

// Extract individual <img> tags from a point string
function extractImages(pointStr) {
    const regex = /<img[^>]+>/gi;
    return pointStr.match(regex) || [];
}

// Build the dark hero section
function buildHero(product) {
    const heroImg   = (product.images && product.images[0]) || product.image || "";
    const desc      = (product.description && product.description.length > 5) ? product.description : "";
    const pName     = (product.name || "").replace(/'/g, "\\'");

    return `
<section class="comen-hero">
    <div class="comen-hero-bg" style="background-image: url('${heroImg}');"></div>
    <div class="comen-hero-overlay"></div>
    <div class="container" style="position:relative;z-index:3;">
        <div class="comen-breadcrumb container">
            <a href="../../index.html">Home</a> &rsaquo;
            <a href="../../products.html">Products</a> &rsaquo;
            <span>${product.name}</span>
        </div>
        <div class="comen-hero-content" data-aos="fade-right">
            <div class="comen-hero-eyebrow">${product.brand} &bull; ${product.category}</div>
            <h1 class="comen-hero-title">${product.name}</h1>
            ${desc ? `<p class="comen-hero-desc">${desc}</p>` : ""}
            <div class="comen-hero-actions">
                <button class="btn-hero-primary" onclick="openQuoteModal('${pName}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    Enquire Now
                </button>
                <button class="btn-hero-secondary" onclick="contactWhatsApp()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/></svg>
                    WhatsApp Us
                </button>
            </div>
        </div>
    </div>
</section>`;
}

// Build all content sections after the hero
function buildContentSections(product) {
    let html = "";

    // 1 — Thumbnail image strip (if multiple images exist)
    if (product.images && product.images.length > 1) {
        const thumbsHtml = product.images.map((src, i) => `
            <div style="cursor:pointer;border:2px solid ${i===0?"#0A8F55":"#ddd"};border-radius:8px;overflow:hidden;transition:border-color 0.2s;"
                 onclick="setThumb(this,'${src.replace(/'/g,"\\'")}')">
                <img src="${src}" style="width:90px;height:70px;object-fit:contain;display:block;"
                     onerror="this.src='https://placehold.co/90x70/E8F3EC/0A8F55?text=img'">
            </div>`).join("");

        html += `
<section style="background:#f7f8f9;padding:40px 0;">
    <div class="container">
        <div id="main-product-img-wrap" style="text-align:center;margin-bottom:32px;">
            <img id="main-product-img" src="${product.images[0]}"
                 style="max-height:420px;max-width:100%;object-fit:contain;border-radius:12px;"
                 onerror="this.src='https://placehold.co/800x500/E8F3EC/0A8F55?text=${encodeURIComponent(product.name)}'">
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            ${thumbsHtml}
        </div>
    </div>
</section>`;
    }

    // 2 — Features grid (bullet point features)
    const hasFeatures = product.features && product.features.length > 0;
    if (hasFeatures) {
        const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>`;
        const cards = product.features.map(f => `
            <div class="comen-feature-card" data-aos="fade-up">
                <div class="comen-feature-card-icon">${checkSvg}</div>
                <p>${f}</p>
            </div>`).join("");

        html += `
<section class="comen-features-section">
    <div class="container">
        <div class="section-label">Key Features</div>
        <h2>What Makes ${product.name} Stand Out</h2>
        <div class="comen-features-grid">${cards}</div>
    </div>
</section>`;
    }

    // 3 — Advanced sections: each image becomes a full-width infographic
    if (product.advancedSections && Array.isArray(product.advancedSections)) {
        let imgIndex = 0;
        product.advancedSections.forEach(section => {
            section.points.forEach(point => {
                const imgs = extractImages(point);
                imgs.forEach(imgTag => {
                    // Force full-width display
                    const cleanImg = imgTag.replace(/style="[^"]*"/g, "")
                                          .replace(/<img/i, '<img class="comen-infographic-img"');
                    const isDark = imgIndex % 2 === 1;
                    html += `
<section class="comen-infographic-section${isDark ? " dark-infographic" : ""}">
    ${cleanImg}
</section>`;
                    imgIndex++;
                });

                // If the point has text (not just an image), show it as a feature section
                const textOnly = point.replace(/<img[^>]+>/gi, "").replace(/<[^>]+>/g, "").trim();
                if (textOnly.length > 10) {
                    html += `
<section class="comen-section grey-section">
    <div class="container">
        <p style="font-size:1.1rem;line-height:1.8;color:#555;max-width:860px;margin:0 auto;" data-aos="fade-up">${textOnly}</p>
    </div>
</section>`;
                }
            });
        });
    }

    // 4 — Specifications table
    if (product.specifications && Object.keys(product.specifications).length > 0) {
        const rows = Object.entries(product.specifications).map(([k, v]) =>
            `<tr><th>${k}</th><td>${v}</td></tr>`).join("");
        html += `
<section class="comen-specs-section">
    <div class="container">
        <div class="section-label">Specifications</div>
        <h2>Technical Specifications</h2>
        <table class="comen-specs-table"><tbody>${rows}</tbody></table>
    </div>
</section>`;
    }

    // 5 — CTA / Enquire section
    const pName = (product.name || "").replace(/'/g, "\\'");
    html += `
<section class="comen-cta-section">
    <div class="container">
        <h2 data-aos="fade-up">Interested in the ${product.name}?</h2>
        <p data-aos="fade-up" data-aos-delay="100">Contact our experts today for pricing, availability, and demo arrangements.</p>
        <div class="comen-cta-actions" data-aos="fade-up" data-aos-delay="200">
            <button class="btn-hero-primary" onclick="openQuoteModal('${pName}')">Request a Quote</button>
            <button class="btn-hero-secondary" onclick="contactWhatsApp()">WhatsApp Us</button>
        </div>
    </div>
</section>`;

    return html;
}

// Main build loop
let count = 0;
products.forEach(product => {
    if (!product.brand || product.brand.toUpperCase() !== "COMEN") return;

    let slug = product.custom_url
        ? product.custom_url.replace(/\.html$/i, "").toLowerCase()
        : slugify(product.name);

    if (!slug) { console.warn("Skipping id=" + product.id); return; }

    const title    = `${product.name} | ${product.brand} | Arkon Medical System`;
    const metaDesc = product.description && product.description.length > 10
        ? product.description.substring(0, 155)
        : `${product.name} by ${product.brand} - Available at Arkon Medical System. Enquire for price and demo.`;

    let html = template
        .replace("{{TITLE}}",            title)
        .replace("{{META_DESC}}",        metaDesc)
        .replace("{{PRODUCT_NAME}}",     product.name.replace(/"/g, "&quot;"))
        .replace("{{HERO_SECTION}}",     buildHero(product))
        .replace("{{CONTENT_SECTIONS}}", buildContentSections(product));

    const dir = path.join(__dirname, "products", slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");

    count++;
    console.log("[" + String(count).padStart(3) + "] products/" + slug + "/index.html");
});

console.log("\nDone! Generated " + count + " COMEN product pages.");
