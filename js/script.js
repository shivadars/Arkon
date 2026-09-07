

// Mobile Navigation Toggle
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    if (nav) {
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    initLogoCarousel();
    initTestimonials();

    setupPhoneLinks();
    
    // Mobile Footer Accordion
    const footerHeaders = document.querySelectorAll('.footer-col-compact h4');
    footerHeaders.forEach(header => {
        header.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const parent = header.parentElement;
                
                // If it's not already open, close all others first
                if (!parent.classList.contains('active')) {
                    document.querySelectorAll('.footer-col-compact').forEach(col => {
                        col.classList.remove('active');
                    });
                }
                
                // Toggle the clicked one
                parent.classList.toggle('active');
            }
        });
    });
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
            <div class="category-card" onclick="window.location.href='products.html?category=${encodeURIComponent(cat.name)}'">
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
                <div class="explore product-link" onclick="window.location.href='product-detail.html?id=${prod.id}'">View Details &rarr;</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function initLogoCarousel() {
    const carousel = document.getElementById('logo-carousel');
    if (!carousel) return;
    
    // Create 3 columns
    const columnsCount = 3;
    const columns = Array.from({ length: columnsCount }, () => []);
    
    // Shuffle logos and distribute into columns
    const shuffledLogos = [...clients].sort(() => Math.random() - 0.5);
    
    shuffledLogos.forEach((logo, index) => {
        columns[index % columnsCount].push(logo);
    });

    let html = '';
    columns.forEach((colLogos, colIndex) => {
        html += `<div class="logo-column" id="logo-col-${colIndex}">`;
        colLogos.forEach((logo, logoIndex) => {
            // First logo is active, others are next
            const stateClass = logoIndex === 0 ? 'active' : 'next';
            html += `
                <div class="logo-item ${stateClass}" data-index="${logoIndex}">
                    <img src="${logo.img}" alt="${logo.name} logo" onerror="this.onerror=null;this.src='https://placehold.co/150x50/FFFFFF/607D8B?text=${encodeURIComponent(logo.name)}';">
                </div>
            `;
        });
        html += `</div>`;
    });
    
    carousel.innerHTML = html;
    
    // Start animation loop
    columns.forEach((_, colIndex) => {
        // Offset timing for each column
        setTimeout(() => {
            setInterval(() => {
                rotateColumn(colIndex);
            }, 2000 + Math.random() * 500); // approx 2 seconds with slight variation
        }, colIndex * 600); // 600ms stagger between columns
    });
}

function rotateColumn(colIndex) {
    const column = document.getElementById(`logo-col-${colIndex}`);
    if (!column) return;
    
    const items = column.querySelectorAll('.logo-item');
    if (items.length <= 1) return;
    
    let activeIndex = -1;
    items.forEach((item, index) => {
        if (item.classList.contains('active')) {
            activeIndex = index;
        }
    });
    
    if (activeIndex === -1) activeIndex = 0;
    
    const nextIndex = (activeIndex + 1) % items.length;
    
    // Reset all to 'next' state without transition if they were 'prev'
    items.forEach((item, index) => {
        if (index !== activeIndex && index !== nextIndex) {
            item.className = 'logo-item next'; // fast reset
        }
    });
    
    // Animate current to prev
    items[activeIndex].className = 'logo-item prev';
    
    // Animate next to active
    // Small timeout to ensure DOM update allows transition
    setTimeout(() => {
        items[nextIndex].className = 'logo-item active';
    }, 50);
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

// Page Loader Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('loader-hidden');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }, 1000); // 1.0 seconds delay
});

// Scroll Heartbeat Progress Indicator
document.addEventListener('DOMContentLoaded', () => {
    const progressWrap = document.getElementById('scroll-heartbeat');
    const progressPath = document.querySelector('.progress-circle path');
    if (!progressWrap || !progressPath) return;

    // The stroke-dasharray we set in CSS is ~308
    const pathLength = 307.919;
    
    const updateProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Show/hide based on scroll position (show after 50px)
        if (scrollTop > 50) {
            progressWrap.classList.add('active-progress');
        } else {
            progressWrap.classList.remove('active-progress');
        }

        // Calculate offset (progress fills as we scroll down)
        // Ensure scrollHeight > 0 to avoid division by zero
        if (scrollHeight > 0) {
            const progress = pathLength - (scrollTop * pathLength / scrollHeight);
            progressPath.style.strokeDashoffset = Math.max(0, progress);
        }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    // Run once on load to set initial state
    updateProgress(); 
});
