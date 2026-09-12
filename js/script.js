

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
    initProductsGrid();
    initLogoCarousel();
    initTestimonials();
    initSocialsCard();
    initSmartHeader();
    initStackGallery();
    initMegaMenu();

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

// Smart Header Logic
function initSmartHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const showThreshold = 350; // Scroll distance after which the header reappears
    const hideThreshold = 100; // Scroll distance to restore natural position near top
    let isFixed = false;
    let ticking = false;
    
    function onScroll() {
        const currentScrollY = window.scrollY;
        
        if (!isFixed && currentScrollY > showThreshold) {
            isFixed = true;
            header.classList.add('header--fixed');
            document.body.style.paddingTop = header.offsetHeight + 'px';
        } else if (isFixed && currentScrollY <= hideThreshold) {
            isFixed = false;
            header.classList.remove('header--fixed');
            document.body.style.paddingTop = '0';
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
    
    // Check initial scroll state
    onScroll();
}

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

function initProductsGrid() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const displayProducts = products.slice(0, 10);

    displayProducts.forEach((prod) => {
        const item = document.createElement('a');
        item.className = 'product-item';
        item.href = `product-detail.html?id=${prod.id}`;
        item.setAttribute('aria-label', prod.name);

        item.innerHTML = `
            <div class="product-image-wrapper">
                <img
                    src="${prod.image}"
                    alt="${prod.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/120x120/F7F8F5/607D8B?text=${encodeURIComponent(prod.name)}';"
                >
            </div>
            <span class="product-name">${prod.name}</span>
            <span class="product-brand-tag">${prod.brand}</span>
        `;



        grid.appendChild(item);
    });

    function triggerAnimation() {
        const rect = grid.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            const items = grid.querySelectorAll('.product-item:not(.is-visible)');
            if (items.length === 0) return; // already animated
            items.forEach((item, i) => {
                setTimeout(() => item.classList.add('is-visible'), i * 130);
            });
            window.removeEventListener('scroll', triggerAnimation);
        }
    }

    // Check on scroll
    window.addEventListener('scroll', triggerAnimation, { passive: true });

    // Also check after a brief delay on load (covers sections already in viewport)
    setTimeout(triggerAnimation, 300);
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
    const contactSection = document.querySelector('.popout-contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        if (productName) {
            const subjectInput = contactSection.querySelector('input[placeholder="Subject"]');
            if (subjectInput) {
                subjectInput.value = 'Inquiry about ' + productName;
            }
        }
    }
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
        image.onerror = () => {
            image.src = 'assets/testimonials/sarah-fernandez.jpg';
        };
        image.src = t.image;
        image.alt = t.name;
    }
}

// Page Loader Logic
function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader && !loader.classList.contains('loader-hidden')) {
        loader.classList.add('loader-hidden');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Hide loader when page fully loads
window.addEventListener('load', () => {
    setTimeout(hideLoader, 500);
});

// Fallback: hide loader after 3 seconds even if some resources are still loading
setTimeout(hideLoader, 3000);

// Scroll Heartbeat Progress Indicator
document.addEventListener('DOMContentLoaded', () => {
    const progressWrap = document.getElementById('scroll-heartbeat');
    const progressPath = document.querySelector('.progress-circle path');
    if (!progressWrap || !progressPath) return;

    // The stroke-dasharray we set in CSS is ~308
    const pathLength = 307.919;
    let scrollTimeout = null;
    
    const updateProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Show/hide based on scroll position (show after 50px)
        if (scrollTop > 50) {
            progressWrap.classList.add('active-progress');
            
            // Mark as active scrolling so heartbeat animates
            progressWrap.classList.add('is-scrolling');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                progressWrap.classList.remove('is-scrolling');
            }, 180);
        } else {
            progressWrap.classList.remove('active-progress');
            progressWrap.classList.remove('is-scrolling');
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

// 3D Socials Animated Card Controller
function initSocialsCard() {
    const card = document.getElementById('socialsCard');
    if (!card) return;

    const panels = card.querySelectorAll('.glass-panel');
    const title = card.querySelector('.socials-title');

    // Panels start hidden — they animate in on hover, out on leave
    let revealTimeout = null;
    let rafId = null;
    let bounds;
    let isHovered = false;

    function updateCardTransform(e) {
        if (!bounds) bounds = card.getBoundingClientRect();
        if (!isHovered) return;

        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const percentX = (mouseX - centerX) / centerX;
        const percentY = (mouseY - centerY) / centerY;

        const maxTilt = 14;
        const tiltX = -percentY * maxTilt;
        const tiltY = percentX * maxTilt;

        card.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;

        panels.forEach(panel => {
            const depth = parseFloat(panel.getAttribute('data-depth')) || 25;
            const moveX = percentX * (depth * 0.35);
            const moveY = percentY * (depth * 0.35);
            // Only apply parallax if panels are fully animated in
            if (card.classList.contains('ready')) {
                panel.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, ${depth}px)`;
            }
        });
        // Title position is CSS-driven (center → top-right via .is-animated class)
    }

    card.addEventListener('mouseenter', () => {
        isHovered = true;
        bounds = card.getBoundingClientRect();
        clearTimeout(revealTimeout);
        card.classList.remove('ready');
        card.classList.add('is-animated');
        revealTimeout = setTimeout(() => {
            card.classList.add('ready');
        }, 900);
    });

    card.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => updateCardTransform(e));
    });

    card.addEventListener('mouseleave', () => {
        isHovered = false;
        clearTimeout(revealTimeout);
        if (rafId) cancelAnimationFrame(rafId);

        // Slide panels back out
        card.classList.remove('is-animated', 'ready');

        // Reset card tilt
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    window.addEventListener('resize', () => {
        bounds = card.getBoundingClientRect();
    });
}

// ============================================
// Sticky Image Stacking About — Scroll Reveal
// ============================================
function initStackGallery() {
    const stackCards = document.querySelectorAll('.about-stack-card');
    if (!stackCards.length) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        stackCards.forEach(card => card.classList.add('is-visible'));
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Once visible, stop observing to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stackCards.forEach(card => observer.observe(card));
}

// ============================================
// Mega Menu Logic (3-Level Refined)
// ============================================
let megaMenuTimeout = null;

function initMegaMenu() {
    const desktopContainers = document.querySelectorAll('#mega-menu-content');
    const mobileContainers = document.querySelectorAll('#mobile-mega-menu-content');

    if (desktopContainers.length === 0 && mobileContainers.length === 0) return;

    // Use exact COMEN product categories for the menu
    const productCategories = [
        "Ventilator",
        "High Flow Oxygen Therapy Humidifier",
        "Anesthesia Machine",
        "Patient Monitoring",
        "Defibrillator Monitor",
        "AED",
        "Surgical Light",
        "Operating Table",
        "Warmer",
        "Incubator",
        "Hypothermia Treatment",
        "Jaundice Treatment",
        "Infusion System",
        "Endoscopy",
        "Ultrasound",
        "In Vitro Diagnostic",
        "Veterinary Product"
    ];
    
    // 1. Build Desktop Mega Menu
    const desktopHTML = `
        <div class="mega-menu-level-1">
            <div class="mega-menu-group-item active" onmouseenter="showMegaMenuGroup('products', this)">PRODUCTS</div>
            <div class="mega-menu-group-item" onmouseenter="showMegaMenuGroup('solutions', this)">SOLUTIONS</div>
        </div>
        
        <div class="mega-menu-level-2-wrapper">
            <!-- Products Categories -->
            <div class="mega-menu-level-2" id="mega-lvl2-products">
                ${productCategories.map((cat, idx) => `
                    <a href="products.html?category=${encodeURIComponent(cat)}" class="mega-menu-category ${idx === 0 ? 'active' : ''}" onmouseenter="showMegaMenuCategoryProducts('${encodeURIComponent(cat)}', this)">
                        ${cat}
                    </a>
                `).join('')}
            </div>
            
            <!-- Solutions Categories -->
            <div class="mega-menu-level-2" id="mega-lvl2-solutions" style="display: none;">
                ${typeof solutions !== 'undefined' ? solutions.map((sol, idx) => `
                    <a href="#" class="mega-menu-category ${idx === 0 ? 'active' : ''}" onmouseenter="showMegaMenuSolutionProducts('${sol.id}', this)">
                        ${sol.name}
                    </a>
                `).join('') : ''}
            </div>
        </div>
        
        <!-- Level 3 Content Area -->
        <div class="mega-menu-level-3" id="mega-lvl3-content">
            <!-- Injected via JS -->
        </div>
    `;

    desktopContainers.forEach(container => {
        container.innerHTML = desktopHTML;
        
        // Prevent flickering by managing class on the container itself
        const parentLi = container.closest('.nav-item-dropdown');
        if (parentLi) {
            parentLi.addEventListener('mouseenter', () => {
                clearTimeout(megaMenuTimeout);
                container.classList.add('is-active');
            });
            parentLi.addEventListener('mouseleave', () => {
                megaMenuTimeout = setTimeout(() => {
                    container.classList.remove('is-active');
                }, 300); // slight delay to prevent flicker
            });
        }
    });
    
    // Global close handlers
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item-dropdown')) {
            desktopContainers.forEach(c => c.classList.remove('is-active'));
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            desktopContainers.forEach(c => c.classList.remove('is-active'));
        }
    });

    // 2. Build Mobile Mega Menu
    let mobileHTML = `
        <div class="mobile-accordion-item">
            <a href="products.html" class="mobile-accordion-link">Products</a>
            <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-products-group', this)">▼</button>
        </div>
        <div class="mobile-accordion-level" id="mobile-products-group">
            ${productCategories.map((cat, idx) => `
                <div class="mobile-accordion-item">
                    <a href="products.html?category=${encodeURIComponent(cat)}" class="mobile-accordion-link">${cat}</a>
                    <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-cat-${idx}', this)">▼</button>
                </div>
                <div class="mobile-accordion-level" id="mobile-cat-${idx}">
                    ${products.filter(p => p.category === cat).map(p => `
                        <a href="product-detail.html?id=${p.id}" class="mobile-product-item">${p.name}</a>
                    `).join('')}
                </div>
            `).join('')}
        </div>
    `;

    if (typeof solutions !== 'undefined') {
        mobileHTML += `
            <div class="mobile-accordion-item">
                <a href="products.html" class="mobile-accordion-link">Solutions</a>
                <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-solutions-group', this)">▼</button>
            </div>
            <div class="mobile-accordion-level" id="mobile-solutions-group">
                ${solutions.map((sol, idx) => `
                    <div class="mobile-accordion-item">
                        <a href="#" class="mobile-accordion-link">${sol.name}</a>
                        <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-sol-${idx}', this)">▼</button>
                    </div>
                    <div class="mobile-accordion-level" id="mobile-sol-${idx}">
                        ${getSolutionProducts(sol.id).map(p => `
                            <a href="product-detail.html?id=${p.id}" class="mobile-product-item">${p.name}</a>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }

    mobileContainers.forEach(container => {
        container.innerHTML = mobileHTML;
    });

    // Initialize first category content
    if (productCategories.length > 0) {
        showMegaMenuCategoryProducts(encodeURIComponent(productCategories[0]), null, true);
    }
}

function showMegaMenuGroup(group, element) {
    document.querySelectorAll('.mega-menu-group-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    
    document.querySelectorAll('.mega-menu-level-2').forEach(el => el.style.display = 'none');
    document.getElementById(`mega-lvl2-${group}`).style.display = 'block';
    
    // Auto-select first item in that group
    const firstCat = document.querySelector(`#mega-lvl2-${group} .mega-menu-category`);
    if (firstCat) {
        const event = new MouseEvent('mouseenter', { view: window, bubbles: true, cancelable: true });
        firstCat.dispatchEvent(event);
    }
}

function getSolutionProducts(solutionId) {
    const solution = typeof solutions !== 'undefined' ? solutions.find(s => s.id === solutionId) : null;
    let solutionProducts = [];
    
    if (solution && solution.products) {
        solutionProducts = products.filter(p => solution.products.includes(p.name));
    }
    return solutionProducts;
}

function showMegaMenuCategoryProducts(encodedCategory, element, isInit = false) {
    const category = decodeURIComponent(encodedCategory);
    
    if (element) {
        const sidebar = element.closest('.mega-menu-level-2');
        sidebar.querySelectorAll('.mega-menu-category').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    
    const categoryProducts = products.filter(p => p.category === category);
    renderLvl3(categoryProducts);
}

function showMegaMenuSolutionProducts(solutionId, element, isInit = false) {
    if (element) {
        const sidebar = element.closest('.mega-menu-level-2');
        sidebar.querySelectorAll('.mega-menu-category').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    
    const solutionProducts = getSolutionProducts(solutionId);
    renderLvl3(solutionProducts);
}

function renderLvl3(productsToRender) {
    let html = '';
    if (productsToRender.length === 0) {
        html = `<p style="padding: 20px; color: var(--text-muted);">No products found.</p>`;
    } else {
        html = `
            <div class="mega-menu-products-grid">
                ${productsToRender.slice(0, 15).map(p => `
                    <a href="product-detail.html?id=${p.id}" class="mega-menu-product-item">
                        <span class="mega-menu-product-name">${p.name}</span>
                        <span class="mega-menu-product-brand">${p.brand}</span>
                    </a>
                `).join('')}
            </div>
            ${productsToRender.length > 15 ? `<div style="text-align: right; margin-top: 16px;"><a href="products.html" class="link-action" style="font-weight:600; color:var(--primary);">View All &rarr;</a></div>` : ''}
        `;
    }
    
    document.querySelectorAll('#mega-lvl3-content').forEach(contentArea => {
        contentArea.innerHTML = html;
    });
}

function toggleMobileMegaMenu() {
    const mobileMenu = document.getElementById('mobile-mega-menu-content');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenu.previousElementSibling.querySelector('.dropdown-icon');
        if (icon) {
            icon.style.transform = mobileMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function toggleMobileAccordion(targetId, btnElement) {
    const target = document.getElementById(targetId);
    if (target) {
        target.classList.toggle('active');
        btnElement.style.transform = target.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}
