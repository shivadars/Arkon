// Contact Configuration
const WHATSAPP_NUMBER = "+919876543210"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919876543210";    // Replace with actual phone number

// Data Structures
const products = [
    {
        "id": 1,
        "name": "V8",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced V8 from COMEN.",
        "image": "assets/products/comen-v8.jpg"
    },
    {
        "id": 2,
        "name": "V3 / V3 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced V3 / V3 Pro from COMEN.",
        "image": "assets/products/comen-v3-v3-pro.jpg"
    },
    {
        "id": 3,
        "name": "NV10",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced NV10 from COMEN.",
        "image": "assets/products/comen-nv10.jpg"
    },
    {
        "id": 4,
        "name": "AX900",
        "brand": "COMEN",
        "category": "Anesthesia Machines",
        "description": "Advanced AX900 from COMEN.",
        "image": "assets/products/comen-ax900.jpg"
    },
    {
        "id": 5,
        "name": "AX600",
        "brand": "COMEN",
        "category": "Anesthesia Machines",
        "description": "Advanced AX600 from COMEN.",
        "image": "assets/products/comen-ax600.jpg"
    },
    {
        "id": 6,
        "name": "A5 / A7",
        "brand": "COMEN",
        "category": "Anesthesia Machines",
        "description": "Advanced A5 / A7 from COMEN.",
        "image": "assets/products/comen-a5-a7.jpg"
    },
    {
        "id": 7,
        "name": "K1",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K1 from COMEN.",
        "image": "assets/products/comen-k1.jpg"
    },
    {
        "id": 8,
        "name": "K22 Pro",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K22 Pro from COMEN.",
        "image": "assets/products/comen-k22-pro.jpg"
    },
    {
        "id": 9,
        "name": "N Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced N Series from COMEN.",
        "image": "assets/products/medical_hero_banner.png"
    },
    {
        "id": 10,
        "name": "Defibrillator Monitor",
        "brand": "COMEN",
        "category": "Defibrillator & AED",
        "description": "Advanced Defibrillator Monitor from COMEN.",
        "image": "assets/products/comen-defibrillator-monitor.jpg"
    },
    {
        "id": 11,
        "name": "AED",
        "brand": "COMEN",
        "category": "Defibrillator & AED",
        "description": "Advanced AED from COMEN.",
        "image": "assets/products/comen-aed.jpg"
    },
    {
        "id": 12,
        "name": "Ultrasound",
        "brand": "COMEN",
        "category": "Ultrasound & Imaging",
        "description": "Advanced Ultrasound from COMEN.",
        "image": "assets/products/comen-ultrasound.jpg"
    },
    {
        "id": 13,
        "name": "M300 / M500",
        "brand": "COMEN",
        "category": "Infusion Systems",
        "description": "Advanced M300 / M500 from COMEN.",
        "image": "assets/products/medical_hero_banner.png"
    },
    {
        "id": 14,
        "name": "VL3H Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3H Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3h-video-laryngoscope.jpg"
    },
    {
        "id": 15,
        "name": "VL3D/VL4D Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3D/VL4D Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3d-vl4d-video-laryngoscope.jpg"
    },
    {
        "id": 16,
        "name": "VL3R/VL4R Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3R/VL4R Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3r-vl4r-video-laryngoscope.jpg"
    },
    {
        "id": 17,
        "name": "VL3S Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3S Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3s-video-laryngoscope.jpg"
    },
    {
        "id": 18,
        "name": "VL4DEX Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL4DEX Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl4dex-video-laryngoscope.jpg"
    },
    {
        "id": 19,
        "name": "VL4REX Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL4REX Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl4rex-video-laryngoscope.jpg"
    },
    {
        "id": 20,
        "name": "Single-use Bronchoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced Single-use Bronchoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-bronchoscope.jpg"
    },
    {
        "id": 21,
        "name": "Single-use Bronchoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Bronchoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-bronchoscope.jpg"
    },
    {
        "id": 22,
        "name": "Single-use Ureterorenoscope HU30M (6.3/3.6Fr)",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Ureterorenoscope HU30M (6.3/3.6Fr) from HugeMed.",
        "image": "assets/products/hugemed-single-use-ureterorenoscope-hu30m-6-3-3-6fr.jpg"
    },
    {
        "id": 23,
        "name": "Single-use Cystoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Cystoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-cystoscope.jpg"
    },
    {
        "id": 24,
        "name": "Single-use Choledochoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Choledochoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-choledochoscope.jpg"
    },
    {
        "id": 25,
        "name": "Single-use Rhinolaryngoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Rhinolaryngoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-rhinolaryngoscope.jpg"
    },
    {
        "id": 26,
        "name": "Single-use Biliary Pancreaticobliary Scope (CL-A, CL-B)",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Biliary Pancreaticobliary Scope (CL-A, CL-B) from HugeMed.",
        "image": "assets/products/hugemed-single-use-biliary-pancreaticobliary-scope-cl-a-cl-b.jpg"
    },
    {
        "id": 27,
        "name": "Single-use Ureterorenoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Ureterorenoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-ureterorenoscope.jpg"
    },
    {
        "id": 28,
        "name": "Single-use Ureteral Access Sheath",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Ureteral Access Sheath from HugeMed.",
        "image": "assets/products/hugemed-single-use-ureteral-access-sheath.jpg"
    },
    {
        "id": 29,
        "name": "Single-use Hysteroscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Hysteroscope from HugeMed.",
        "image": "assets/products/medical_hero_banner.png"
    },
    {
        "id": 30,
        "name": "Single-use Duodenoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Duodenoscope from HugeMed.",
        "image": "assets/products/medical_hero_banner.png"
    },
    {
        "id": 31,
        "name": "Broncho Sampler",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Broncho Sampler from HugeMed.",
        "image": "assets/products/medical_hero_banner.png"
    },
    {
        "id": 32,
        "name": "Single-use Collector (SA01)",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Collector (SA01) from HugeMed.",
        "image": "assets/products/medical_hero_banner.png"
    },
    {
        "id": 33,
        "name": "Reusable Ureterorenoscope",
        "brand": "HugeMed",
        "category": "Reusable Endoscope",
        "description": "Advanced Reusable Ureterorenoscope from HugeMed.",
        "image": "assets/products/hugemed-reusable-ureterorenoscope.jpg"
    },
    {
        "id": 34,
        "name": "Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Reusable Endoscope",
        "description": "Advanced Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-video-laryngoscope.jpg"
    },
    {
        "id": 35,
        "name": "MS-8",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced MS-8 from HugeMed.",
        "image": "assets/products/hugemed-ms-8.jpg"
    },
    {
        "id": 36,
        "name": "HUV-02",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced HUV-02 from HugeMed.",
        "image": "assets/products/hugemed-huv-02.jpg"
    },
    {
        "id": 37,
        "name": "VLM-02 & VLM-03",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced VLM-02 & VLM-03 from HugeMed.",
        "image": "assets/products/hugemed-vlm-02-vlm-03.jpg"
    },
    {
        "id": 38,
        "name": "HUV-01",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced HUV-01 from HugeMed.",
        "image": "assets/products/hugemed-huv-01.jpg"
    }
];

const categories = [
    {
        "name": "Ventilator",
        "desc": "High quality Ventilator by COMEN.",
        "img": "assets/products/comen-v8.jpg"
    },
    {
        "name": "Anesthesia Machines",
        "desc": "High quality Anesthesia Machines by COMEN.",
        "img": "assets/products/comen-ax900.jpg"
    },
    {
        "name": "Patient Monitoring",
        "desc": "High quality Patient Monitoring by COMEN.",
        "img": "assets/products/comen-k1.jpg"
    },
    {
        "name": "Defibrillator & AED",
        "desc": "High quality Defibrillator & AED by COMEN.",
        "img": "assets/products/comen-defibrillator-monitor.jpg"
    },
    {
        "name": "Ultrasound & Imaging",
        "desc": "High quality Ultrasound & Imaging by COMEN.",
        "img": "assets/products/comen-ultrasound.jpg"
    },
    {
        "name": "Infusion Systems",
        "desc": "High quality Infusion Systems by COMEN.",
        "img": "assets/products/medical_hero_banner.png"
    },
    {
        "name": "Airway Management",
        "desc": "High quality Airway Management by HugeMed.",
        "img": "assets/products/hugemed-vl3h-video-laryngoscope.jpg"
    },
    {
        "name": "Single-use Endoscope",
        "desc": "High quality Single-use Endoscope by HugeMed.",
        "img": "assets/products/hugemed-single-use-bronchoscope.jpg"
    },
    {
        "name": "Reusable Endoscope",
        "desc": "High quality Reusable Endoscope by HugeMed.",
        "img": "assets/products/hugemed-reusable-ureterorenoscope.jpg"
    },
    {
        "name": "Medical Image Processor",
        "desc": "High quality Medical Image Processor by HugeMed.",
        "img": "assets/products/hugemed-ms-8.jpg"
    }
];

const clients = [
    {
        "name": "Regional Cancer Centre",
        "img": "assets/clients/regional-cancer-centre.png"
    },
    {
        "name": "KIMS Hospital",
        "img": "assets/clients/kims-hospital.png"
    },
    {
        "name": "Holy Ghost Mission",
        "img": "assets/clients/holy-ghost-mission.png"
    },
    {
        "name": "Jubilee Mission",
        "img": "assets/clients/jubilee-mission.png"
    },
    {
        "name": "Govt Medical College Thrissur",
        "img": "assets/clients/medical-college-thrissur.png"
    },
    {
        "name": "Pushpagiri Institutions",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Pushpagiri"
    },
    {
        "name": "Rajagiri Hospital",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Rajagiri"
    },
    {
        "name": "Caritas Hospital",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Caritas"
    },
    {
        "name": "Care with Love",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Care+With+Love"
    },
    {
        "name": "KMSCL",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=KMSCL"
    }
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
    renderClients();
    initTestimonials();

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

function renderClients() {
    const track = document.getElementById('clients-track');
    if (!track) return;

    let html = '';
    // Duplicate the array so the marquee loops seamlessly
    const marqueeItems = [...clients, ...clients];
    
    marqueeItems.forEach(client => {
        html += `
            <div class="client-card">
                <img src="${client.img}" alt="${client.name}">
            </div>
        `;
    });
    track.innerHTML = html;
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

// Slider Functionality
function scrollSlider(containerId, direction) {
    const container = document.getElementById(containerId);
    if (container) {
        // Approximate width of a card + gap
        const scrollAmount = 260; 
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Testimonials Split Functionality
const testimonials = [
  {
    id: 1,
    quote: "A rare talent who bridges the gap between aesthetics and functionality with remarkable precision.",
    name: "Sarah Chen",
    role: "Design Director",
    company: "Figma",
    image: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    quote: "Every pixel tells a story. Working together elevated our entire brand experience.",
    name: "Marcus Webb",
    role: "Creative Lead",
    company: "Stripe",
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    quote: "Transforms complex problems into elegant, intuitive solutions that users love.",
    name: "Elena Voss",
    role: "Head of Product",
    company: "Linear",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

let currentTestimonialIndex = 0;
let isAnimatingTestimonial = false;
let testimonialInterval;

function initTestimonials() {
    const wrapper = document.getElementById('ts-wrapper');
    const dotsContainer = document.getElementById('ts-progress-dots');
    if (!wrapper || !dotsContainer) return;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = `ts-dot-btn ${index === 0 ? 'active' : ''}`;
        btn.onclick = (e) => {
            e.stopPropagation();
            changeTestimonial(index);
            resetTestimonialInterval();
        };
        
        const dot = document.createElement('span');
        dot.className = 'ts-dot';
        
        const outline = document.createElement('span');
        outline.className = 'ts-dot-outline';
        
        btn.appendChild(dot);
        btn.appendChild(outline);
        dotsContainer.appendChild(btn);
    });
    
    // Initial content
    updateTestimonialContent(0);
    
    wrapper.onclick = () => {
        changeTestimonial((currentTestimonialIndex + 1) % testimonials.length);
        resetTestimonialInterval();
    };

    // Auto-rotate setup
    startTestimonialInterval();

    wrapper.onmouseenter = () => clearInterval(testimonialInterval);
    wrapper.onmouseleave = () => startTestimonialInterval();
}

function startTestimonialInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
        changeTestimonial((currentTestimonialIndex + 1) % testimonials.length);
    }, 5000);
}

function resetTestimonialInterval() {
    startTestimonialInterval();
}

function changeTestimonial(newIndex) {
    if (isAnimatingTestimonial || newIndex === currentTestimonialIndex) return;
    isAnimatingTestimonial = true;
    
    const wrapper = document.getElementById('ts-wrapper');
    
    // Update dots
    const dots = document.querySelectorAll('.ts-dot-btn');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === newIndex);
    });
    
    // Animate out
    wrapper.classList.add('ts-animating-out');
    
    setTimeout(() => {
        // Disable transitions to snap to 'in' state
        wrapper.classList.add('ts-no-transition');
        
        updateTestimonialContent(newIndex);
        currentTestimonialIndex = newIndex;
        
        wrapper.classList.remove('ts-animating-out');
        wrapper.classList.add('ts-animating-in');
        
        // Force reflow
        void wrapper.offsetWidth;
        
        // Re-enable transitions and transition to normal state
        wrapper.classList.remove('ts-no-transition');
        wrapper.classList.remove('ts-animating-in');
        
        setTimeout(() => {
            isAnimatingTestimonial = false;
        }, 600); // Wait for longest transition
    }, 300); // Time to wait for out transition
}

function updateTestimonialContent(index) {
    const t = testimonials[index];
    const company = document.getElementById('ts-company-text');
    const quote = document.getElementById('ts-quote-text');
    const name = document.getElementById('ts-author-name');
    const role = document.getElementById('ts-author-role');
    const image = document.getElementById('ts-author-image');

    if(company) company.textContent = t.company;
    if(quote) quote.textContent = t.quote;
    if(name) name.textContent = t.name;
    if(role) role.textContent = t.role;
    if(image) {
        image.src = t.image;
        image.alt = t.name;
    }
}
