/**
 * build.js - Arkon Medical Systems Static Site Generator (Modern Text Layout)
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

// Build Hero Section
function buildHero(product) {
    const mainImg = product.image || "";
    let galleryHtml = "";
    
    if (product.gallery && product.gallery.length > 0) {
        galleryHtml = product.gallery.map((src, i) => `
            <div class="pd-thumb-item ${i === 0 ? 'active' : ''}" onclick="setMainImage('${src}', this)">
                <img src="${src}" alt="Thumbnail">
            </div>
        `).join("");
    } else {
        galleryHtml = `
            <div class="pd-thumb-item active" onclick="setMainImage('${mainImg}', this)">
                <img src="${mainImg}" alt="Thumbnail">
            </div>
        `;
    }

    const shortDesc = product.short_description || "";
    let highlightsHtml = "";
    if (product.key_highlights && product.key_highlights.length > 0) {
        highlightsHtml = "<ul class='pd-highlights'>" + product.key_highlights.map(h => `<li>${h}</li>`).join("") + "</ul>";
    }

    const pName = (product.name || "").replace(/'/g, "\\'");

    return `
<section class="pd-hero-modern">
    <div class="container">
        <div class="pd-breadcrumb">
            <a href="../../index.html">Home</a> &rsaquo;
            <a href="../../products.html">Products</a> &rsaquo;
            <span>${product.name}</span>
        </div>
        
        <div class="pd-hero-container">
            <div class="pd-hero-left" data-aos="fade-right">
                <div class="pd-gallery-main">
                    <img id="pd-main-img" src="${mainImg}" alt="${product.name}" onerror="this.src='https://placehold.co/800x800/E8EAF6/2E3192?text=${encodeURIComponent(product.name)}'">
                </div>
                <div class="pd-gallery-thumbs">
                    ${galleryHtml}
                </div>
            </div>
            
            <div class="pd-hero-right" data-aos="fade-left">
                <div class="pd-brand-badge">${product.brand}</div>
                <h1 class="pd-title">${product.name}</h1>
                <div class="pd-category">${product.category}</div>
                
                ${shortDesc ? `<p class="pd-short-desc">${shortDesc}</p>` : ""}
                ${highlightsHtml}
                
                <div class="pd-actions">
                    <button class="btn-enquire" onclick="openQuoteModal('${pName}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        Request a Quote
                    </button>
                    <button class="btn-whatsapp" onclick="contactWhatsApp()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/></svg>
                        WhatsApp Us
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
`;
}

// Build Overview Section
function buildOverview(product) {
    if (!product.overview_text || product.overview_text.length < 5) return "";
    return `
<section class="pd-section">
    <div class="container">
        <div class="pd-section-header">
            <h2 class="pd-section-title">Overview</h2>
        </div>
        <div class="pd-overview-text" data-aos="fade-up">
            ${product.overview_text}
        </div>
    </div>
</section>
`;
}

// Build Features Section
function buildFeatures(product) {
    if (!product.features || product.features.length === 0) return "";
    const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>`;
    const cards = product.features.map(f => `
        <div class="pd-feature-card" data-aos="fade-up">
            <div class="pd-feature-icon">${checkSvg}</div>
            <h3 class="pd-feature-title">${f.title || ''}</h3>
            <p class="pd-feature-text">${f.text || ''}</p>
        </div>
    `).join("");

    return `
<section class="pd-section bg-light">
    <div class="container">
        <div class="pd-section-header">
            <h2 class="pd-section-title">Key Features</h2>
        </div>
        <div class="pd-features-grid">
            ${cards}
        </div>
    </div>
</section>
`;
}

// Build Specs Section
function buildSpecs(product) {
    if (!product.specifications || Object.keys(product.specifications).length === 0) return "";
    const rows = Object.entries(product.specifications).map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("");
    return `
<section class="pd-section">
    <div class="container">
        <div class="pd-section-header">
            <h2 class="pd-section-title">Technical Specifications</h2>
        </div>
        <table class="pd-specs-table" data-aos="fade-up">
            <tbody>${rows}</tbody>
        </table>
    </div>
</section>
`;
}



// Main build loop
let count = 0;
products.forEach(product => {
    // Note: We can build pages for ALL brands now, not just Comen, if desired.
    // For now, let's keep generating for all products.
    if (!product.id) return;

    let slug = product.custom_url
        ? product.custom_url.replace(/\.html$/i, "").toLowerCase()
        : slugify(product.name);

    if (!slug) { console.warn("Skipping id=" + product.id); return; }

    const title    = `${product.name} | ${product.brand} | Arkon Medical Systems`;
    const metaDesc = product.short_description
        ? product.short_description
        : `${product.name} by ${product.brand} - Available at Arkon Medical Systems.`;

    let html = template
        .replace("{{TITLE}}",            title)
        .replace("{{META_DESC}}",        metaDesc)
        .replace("{{PRODUCT_NAME}}",     (product.name || "").replace(/"/g, "&quot;"))
        .replace("{{HERO_SECTION}}",     buildHero(product))
        .replace("{{OVERVIEW_SECTION}}", buildOverview(product))
        .replace("{{FEATURES_SECTION}}", buildFeatures(product))
        .replace("{{SPECS_SECTION}}",    buildSpecs(product));

    const dir = path.join(__dirname, "products", slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");

    count++;
    console.log("[" + String(count).padStart(3) + "] products/" + slug + "/index.html");
});

console.log("\nDone! Generated " + count + " product pages.");
