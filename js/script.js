// Contact Configuration
const WHATSAPP_NUMBER = "+919876543210"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919876543210";    // Replace with actual phone number

// Data Structures
const products = [
    { 
        id: 1, 
        name: "Multipara Monitor", 
        brand: "Mindray", 
        category: "ICU Equipment", 
        description: "Advanced patient monitoring equipment for intensive care units. Provides accurate real-time data.", 
        image: "https://placehold.co/400x300/E8F3EC/075C3A?text=Multipara+Monitor" 
    },
    { 
        id: 2, 
        name: "Ventilator Machine", 
        brand: "Philips", 
        category: "ICU Equipment", 
        description: "High-performance ventilator for respiratory support with advanced breathing modes.", 
        image: "https://placehold.co/400x300/E8F3EC/075C3A?text=Ventilator" 
    },
    { 
        id: 3, 
        name: "Syringe Pump", 
        brand: "B. Braun", 
        category: "ICU Equipment", 
        description: "Precise intravenous medication delivery system ensuring patient safety and accurate dosing.", 
        image: "https://placehold.co/400x300/E8F3EC/075C3A?text=Syringe+Pump" 
    },
    { 
        id: 4, 
        name: "Patient Monitor", 
        brand: "Comen", 
        category: "ICU Equipment", 
        description: "Reliable patient monitor for continuous observation of vital signs in various clinical settings.", 
        image: "https://placehold.co/400x300/E8F3EC/075C3A?text=Patient+Monitor" 
    }
];

const categories = [
    { name: "ICU Equipment", desc: "Monitoring and critical-care equipment for healthcare environments.", img: "https://placehold.co/300x200/F7F8F5/17211D?text=ICU+Equipment" },
    { name: "Diagnostic Equipment", desc: "Advanced tools for accurate medical diagnosis and imaging.", img: "https://placehold.co/300x200/F7F8F5/17211D?text=Diagnostic+Equipment" },
    { name: "Laboratory Equipment", desc: "Reliable instruments for precise laboratory testing and analysis.", img: "https://placehold.co/300x200/F7F8F5/17211D?text=Laboratory+Equipment" },
    { name: "Surgical Equipment", desc: "Precision tools and instruments for surgical procedures.", img: "https://placehold.co/300x200/F7F8F5/17211D?text=Surgical+Equipment" },
    { name: "Patient Care Equipment", desc: "Essential items to ensure patient comfort and recovery.", img: "https://placehold.co/300x200/F7F8F5/17211D?text=Patient+Care" },
    { name: "Hospital Furniture", desc: "Durable and ergonomic furniture for medical facilities.", img: "https://placehold.co/300x200/F7F8F5/17211D?text=Hospital+Furniture" }
];

const brands = [
    { name: "Mindray", img: "https://placehold.co/150x50/FFFFFF/17211D?text=Mindray" },
    { name: "Philips", img: "https://placehold.co/150x50/FFFFFF/17211D?text=Philips" },
    { name: "Dräger", img: "https://placehold.co/150x50/FFFFFF/17211D?text=Dräger" },
    { name: "B. Braun", img: "https://placehold.co/150x50/FFFFFF/17211D?text=B.+Braun" },
    { name: "Comen", img: "https://placehold.co/150x50/FFFFFF/17211D?text=Comen" },
    { name: "Yuwell", img: "https://placehold.co/150x50/FFFFFF/17211D?text=Yuwell" }
];

const providers = [
    { title: "Hospitals", desc: "Equipment for all hospital environments including OT, ICU, and wards.", icon: "🏥" },
    { title: "Clinics", desc: "Reliable solutions for clinics and OPDs focusing on primary care.", icon: "⚕️" },
    { title: "Diagnostic Centers", desc: "Advanced diagnostic equipment for accurate test results.", icon: "🔬" },
    { title: "Laboratories", desc: "High-quality lab instruments for pathological and research facilities.", icon: "🧪" }
];

const services = [
    { title: "Equipment Supply", desc: "Wide range of genuine medical equipment from top brands.", icon: "📦" },
    { title: "Installation & Commissioning", desc: "Professional installation and setup by certified engineers.", icon: "🔧" },
    { title: "Training & Demonstration", desc: "Hands-on training for staff to ensure optimal equipment usage.", icon: "👨‍🏫" },
    { title: "Maintenance & Support", desc: "Prompt technical support and routine maintenance services.", icon: "⚙️" },
    { title: "AMC / Service Contracts", desc: "Annual maintenance contracts available for long-term peace of mind.", icon: "📄" }
];

const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Healthcare Clients" },
    { value: "1000+", label: "Installations" }
];

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    renderBrands();
    renderProviders();
    renderStats();
    renderServices();
    setupPhoneLinks();
});

// Render Functions
function renderCategories() {
    const grid = document.getElementById('category-grid');
    if (!grid) return;

    // Only render first 4 for the main grid based on design layout reference (optional, can render all)
    // We will render first 6 in this case. Actually the prompt says: "Use approximately 4 cards per row. Categories: 1. ICU 2. Diagnostic 3. Lab 4. Surgical 5. Patient 6. Furniture"
    // So all 6 will be rendered, grid will wrap them.
    
    let html = '';
    categories.forEach(cat => {
        html += `
            <div class="category-card" onclick="window.location.href='#products'">
                <div class="img-wrapper">
                    <img src="${cat.img}" alt="${cat.name}">
                </div>
                <h3>${cat.name}</h3>
                <div class="explore">Explore Products &rarr;</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    let html = '';
    products.forEach(prod => {
        html += `
            <div class="product-card">
                <div class="img-wrapper">
                    <img src="${prod.image}" alt="${prod.name}">
                </div>
                <h3>${prod.name}</h3>
                <div class="brand">Brand: ${prod.brand}</div>
                <div class="explore product-link">View Details &rarr;</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderBrands() {
    const grid = document.getElementById('brands-grid');
    if (!grid) return;

    let html = '';
    brands.forEach(brand => {
        html += `
            <div class="brand-item">
                <img src="${brand.img}" alt="${brand.name}">
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderProviders() {
    const grid = document.getElementById('providers-grid');
    if (!grid) return;

    let html = '';
    providers.forEach(prov => {
        html += `
            <div class="provider-card">
                <div class="provider-icon">${prov.icon}</div>
                <h3>${prov.title}</h3>
                <p>${prov.desc}</p>
                <div class="link-action mt-4">View Solutions &rarr;</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderStats() {
    const grid = document.getElementById('stats-grid');
    if (!grid) return;

    let html = '';
    stats.forEach(stat => {
        html += `
            <div class="stat-item">
                <div class="stat-number">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    let html = '';
    services.forEach(srv => {
        html += `
            <div class="service-card">
                <div class="service-icon">${srv.icon}</div>
                <h3>${srv.title}</h3>
                <p>${srv.desc}</p>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// Interactivity & Actions
function viewProductDetails(productName) {
    // In a real application, this would navigate to a product detail page
    alert(`Viewing details for: ${productName}\n(Navigation to /products/${productName.toLowerCase().replace(/ /g, '-')} would happen here)`);
}

// Modal Logic
function openQuoteModal(productName = '') {
    const modal = document.getElementById('quoteModal');
    const productInput = document.getElementById('quoteProduct');
    const formSuccess = document.getElementById('formSuccess');
    const form = document.getElementById('quoteForm');
    
    if (productInput) {
        productInput.value = productName;
    }
    
    if (formSuccess) formSuccess.style.display = 'none';
    if (form) form.reset();
    if (productName && productInput) productInput.value = productName; // set again after reset
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function submitQuoteForm(e) {
    e.preventDefault();
    
    // Simple frontend validation is handled by HTML5 attributes (required, type="email", etc.)
    // Show success message
    const formSuccess = document.getElementById('formSuccess');
    formSuccess.style.display = 'block';
    
    // Optionally reset form after short delay and close
    setTimeout(() => {
        closeQuoteModal();
    }, 3000);
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeQuoteModal();
    }
});



// WhatsApp and Phone Integration
function setupPhoneLinks() {
    const ctaPhone = document.getElementById('cta-phone');
    const footerPhone = document.getElementById('footer-phone');
    
    // We update the visible text if we want, but it's already there
    // Add tel: links programmatically or manually
    if(ctaPhone) {
        ctaPhone.parentElement.style.cursor = 'pointer';
        ctaPhone.parentElement.onclick = () => window.location.href = `tel:${PHONE_NUMBER}`;
    }
    
    if(footerPhone) {
        footerPhone.parentElement.style.cursor = 'pointer';
        footerPhone.parentElement.onclick = () => window.location.href = `tel:${PHONE_NUMBER}`;
    }
}

function contactWhatsApp(productName = '') {
    let message = "Hello, I am interested in exploring your medical equipment solutions.";
    if (productName) {
        message = `Hello, I am interested in ${productName}. I would like to know more about pricing and availability.`;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}
