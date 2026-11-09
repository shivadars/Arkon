



// ─── Product URL Helper ───────────────────────────────────────────────────────
// All products → static generated page
function getProductUrl(p) {
    const root = window.ROOT_PATH || '';
    let slug;
    if (p.custom_url) {
        slug = p.custom_url.replace(/\.html$/i, '').toLowerCase();
    } else {
        slug = p.name
            .replace(/&amp;/g, 'and')
            .replace(/&/g, 'and')
            .toLowerCase()
            .replace(/[\/\\+]/g, '-')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }
    return `${root}products/${slug}/index.html`;
}

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
    initSolutionsCarousel();
    initLogoGrid();
    initSocialsCard();
    initStackGallery();
    initMegaMenu();
    initSmartHeader();

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
        } else if (isFixed && currentScrollY <= hideThreshold) {
            isFixed = false;
            header.classList.remove('header--fixed');
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

function initSolutionsCarousel() {
    const track = document.getElementById('solutions-track');
    const prevBtn = document.getElementById('solutions-prev');
    const nextBtn = document.getElementById('solutions-next');
    if (!track) return;

    // Use custom solutions instead of products
    const solutionsData = [
        {
            title: "Critical Care",
            description: "Advanced life-support and continuous monitoring for intensive care environments.",
            image: "assets/images/solutions/real_critical_care.jpg",
            link: "#"
        },
        {
            title: "Peri-operative Care",
            description: "Comprehensive equipment for pre, intra, and post-operative phases.",
            image: "assets/images/solutions/real_peri_operative.jpg",
            link: "#"
        },
        {
            title: "Emergency Care",
            description: "Rapid response medical equipment for critical and immediate situations.",
            image: "assets/images/solutions/real_emergency_care.jpg",
            link: "#"
        },
        {
            title: "Obstetrics",
            description: "Specialized maternal and fetal monitoring systems for safe deliveries.",
            image: "assets/images/solutions/real_obstetrics.jpg",
            link: "#"
        },
        {
            title: "Neonatal Care",
            description: "Gentle incubators and precise monitoring designed for newborns.",
            image: "assets/images/solutions/real_neonatal.jpg",
            link: "#"
        },
        {
            title: "General Ward",
            description: "Reliable, everyday equipment to support routine patient care.",
            image: "assets/images/solutions/real_general_ward.jpg",
            link: "#"
        },
        {
            title: "Endoscopy",
            description: "High-resolution visualization systems for minimally invasive procedures.",
            image: "assets/images/solutions/real_endoscopy.jpg",
            link: "#"
        }
    ];

    solutionsData.forEach((sol) => {
        const item = document.createElement('a');
        item.className = 'solution-card';
        const solId = sol.title.toLowerCase().replace(/ /g, '-');
        item.href = `products.html?solution=${solId}`;
        item.setAttribute('aria-label', sol.title);

        item.innerHTML = `
            <div class="solution-image-area">
                <img
                    src="${sol.image}"
                    alt="${sol.title}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/120x120/F7F8F5/607D8B?text=${encodeURIComponent(sol.title)}';"
                >
            </div>
            <div class="solution-content">
                <h3>${sol.title}</h3>
                <p>${sol.description}</p>
                <div class="solution-actions">
                    <span class="solution-btn-primary">Explore Products &rarr;</span>
                    <span class="solution-btn-secondary quote-btn">Get a Quote</span>
                </div>
            </div>
        `;
        
        // Redirect to contact section
        const quoteBtn = item.querySelector('.quote-btn');
        if(quoteBtn) {
            quoteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openQuoteModal(sol.title);
            });
        }

        track.appendChild(item);
    });

    // Carousel scrolling logic
    if (prevBtn && nextBtn) {
        const scrollAmount = 320; // Approx card width + gap
        
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        // Hide/show arrows based on scroll position
        const updateArrows = () => {
            if (track.scrollLeft <= 0) {
                prevBtn.style.opacity = '0.5';
                prevBtn.style.cursor = 'not-allowed';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
            }
            
            if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
                nextBtn.style.opacity = '0.5';
                nextBtn.style.cursor = 'not-allowed';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            }
        };
        
        track.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        // Initial check
        setTimeout(updateArrows, 100);
    }
}


function initLogoGrid() {
    const grid = document.getElementById('clients-grid');
    if (!grid || typeof clients === 'undefined') return;
    
    let html = '';
    // Use up to 12 clients for a 4x3 grid
    const displayClients = clients.slice(0, 12);
    
    displayClients.forEach(client => {
        html += `<img src="${client.img}" alt="${client.name}" class="client-logo" title="${client.name}">`;
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

// Modal Logic / Enquire Now action
function openQuoteModal(productName = '') {
    const contactSection = document.getElementById('contact');
    
    // Set the subject and message if provided
    if (productName && contactSection) {
        const subjectInput = contactSection.querySelector('input[placeholder="Subject"], input[name="subject"]');
        if (subjectInput) {
            subjectInput.value = 'Inquiry about ' + productName;
        }
        const messageTextarea = contactSection.querySelector('textarea');
        if (messageTextarea) {
            messageTextarea.value = 'Hi, I would like to request a quote and more information regarding ' + productName + '.';
        }
    }

    if (contactSection && typeof window.scrollToTarget === 'function') {
        window.scrollToTarget('#contact');
    } else if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If not on the page, store product name and navigate to homepage contact section
        if (productName) {
            try {
                sessionStorage.setItem('pendingInquiryProduct', productName);
            } catch (e) {}
        }
        const contactAnchor = document.querySelector('a[href*="#contact"]');
        const contactUrl = contactAnchor ? contactAnchor.getAttribute('href') : 'index.html#contact';
        window.location.href = contactUrl;
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
// Mega Menu Logic (3-Level Refined with Hover + Click Pinned Support)
// ============================================
let megaMenuTimeout = null;
let isMegaMenuPinned = false;
let isMegaMenuHovered = false;

// Category/Subcategory Lock States:
// When null: hovering freely previews categories & products ("before when we hover it should show like previous")
// When clicked: locks onto that category/subcategory ("when we click endoscopy and hover to other ventilator the products should not change it should change only when we click")
let lockedCategory = null;
let lockedSolution = null;
let lockedSubcatId = null;
let currentMegaMenuGroup = 'products';

function openMegaMenuPinned() {
    clearTimeout(megaMenuTimeout);
    isMegaMenuPinned = true;
    const desktopContainers = document.querySelectorAll('#mega-menu-content');
    desktopContainers.forEach(c => c.classList.add('is-active'));
    document.querySelectorAll('.nav-item-dropdown').forEach(li => {
        li.classList.add('is-active', 'is-pinned');
    });
    document.body.classList.add('mega-menu-active');
}

function pinMegaMenu() {
    clearTimeout(megaMenuTimeout);
    isMegaMenuPinned = true;
    const desktopContainers = document.querySelectorAll('#mega-menu-content');
    desktopContainers.forEach(c => c.classList.add('is-active'));
    document.querySelectorAll('.nav-item-dropdown').forEach(li => {
        li.classList.add('is-active', 'is-pinned');
    });
    document.body.classList.add('mega-menu-active');
}

function closeMegaMenu(force = false) {
    if (force) {
        isMegaMenuPinned = false;
        isMegaMenuHovered = false;
        lockedCategory = null;
        lockedSolution = null;
        lockedSubcatId = null;
        currentMegaMenuGroup = 'products';
    }
    if (!isMegaMenuPinned) {
        clearTimeout(megaMenuTimeout);
        lockedCategory = null;
        lockedSolution = null;
        lockedSubcatId = null;
        currentMegaMenuGroup = 'products';
        const desktopContainers = document.querySelectorAll('#mega-menu-content');
        desktopContainers.forEach(c => c.classList.remove('is-active'));
        document.querySelectorAll('.nav-item-dropdown').forEach(li => {
            li.classList.remove('is-active');
            if (force) li.classList.remove('is-pinned');
        });
        document.body.classList.remove('mega-menu-active');
    }
}

// Hover handlers (change products only when NOT locked by click)
function handleMegaMenuCategoryHover(encodedCategory, element) {
    if (lockedCategory !== null) return;
    showMegaMenuCategoryProducts(encodedCategory, element);
}

function handleMegaMenuSolutionHover(solutionId, element) {
    if (lockedSolution !== null) return;
    showMegaMenuSolutionProducts(solutionId, element);
}

function handleEndoscopySubcatHover(subcatId, element) {
    if (lockedSubcatId !== null) return;
    showEndoscopySubcategoryProducts(subcatId, element);
}

function handleMegaMenuGroupHover(group, element) {
    currentMegaMenuGroup = group;
    if (element && !element.classList.contains('active')) {
        lockedCategory = null;
        lockedSolution = null;
        lockedSubcatId = null;
        showMegaMenuGroup(group, element);
    }
}

// Click handlers (pin and lock onto the clicked item, or navigate for main groups)
function handleMegaMenuGroupClick(group, element, event) {
    if (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        event.stopPropagation();
    }
    const root = window.ROOT_PATH || '';
    if (group === 'solutions') {
        window.location.href = `${root}products.html?solution=all`;
    } else {
        window.location.href = `${root}products.html`;
    }
}

function handleMegaMenuCategoryClick(encodedCategory, element, event) {
    if (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        event.stopPropagation();
    }
    pinMegaMenu();
    const category = decodeURIComponent(encodedCategory);
    
    // Clicking the already locked category toggles lock off (resets to free hover mode)
    if (lockedCategory === category) {
        lockedCategory = null;
        lockedSubcatId = null;
        return;
    }
    
    lockedCategory = category;
    lockedSubcatId = null;
    showMegaMenuCategoryProducts(encodedCategory, element);
}

function handleMegaMenuSolutionClick(solutionId, element, event) {
    if (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        event.stopPropagation();
    }
    pinMegaMenu();
    
    if (lockedSolution === solutionId) {
        lockedSolution = null;
        return;
    }
    
    lockedSolution = solutionId;
    lockedCategory = null;
    showMegaMenuSolutionProducts(solutionId, element);
}

function handleEndoscopySubcatClick(subcatId, element, event) {
    if (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        event.stopPropagation();
    }
    pinMegaMenu();
    
    if (lockedSubcatId === subcatId) {
        lockedSubcatId = null;
        return;
    }
    
    lockedSubcatId = subcatId;
    showEndoscopySubcategoryProducts(subcatId, element);
}

function initMegaMenu() {
    const desktopContainers = document.querySelectorAll('#mega-menu-content');
    const mobileContainers = document.querySelectorAll('#mobile-mega-menu-content');

    if (desktopContainers.length === 0 && mobileContainers.length === 0) return;

    // Use exact COMEN product categories for the menu
    const productCategories = [
        "Endoscopy",
        "Ventilator",
        "High Flow Oxygen Therapy Humidifier",
        "Anesthesia Machine",
        "Patient Monitoring",
        "Defibrillator Monitor",
        "AED",
        "Surgical Light",
        "Operating Table",
        "Warmer",
        "Hypothermia Treatment",
        "Jaundice Treatment",
        "Infusion System",
        "Ultrasound",
        "Neonatal Care"
    ];
    
    const root = window.ROOT_PATH || '';
    
    // 1. Build Desktop Mega Menu
    const desktopHTML = `
        <div class="mega-menu-level-1">
            <a href="${root}products.html" class="mega-menu-group-item active" onmouseenter="handleMegaMenuGroupHover('products', this)" onclick="handleMegaMenuGroupClick('products', this, event)">PRODUCTS</a>
            <a href="${root}products.html?solution=all" class="mega-menu-group-item" onmouseenter="handleMegaMenuGroupHover('solutions', this)" onclick="handleMegaMenuGroupClick('solutions', this, event)">SOLUTIONS</a>
        </div>
        
        <div class="mega-menu-level-2-wrapper">
            <!-- Products Categories -->
            <div class="mega-menu-level-2" id="mega-lvl2-products">
                ${productCategories.map((cat, idx) => `
                    <a href="${root}products.html?category=${encodeURIComponent(cat)}" class="mega-menu-category ${idx === 0 ? 'active' : ''}" onmouseenter="handleMegaMenuCategoryHover('${encodeURIComponent(cat)}', this)" onclick="handleMegaMenuCategoryClick('${encodeURIComponent(cat)}', this, event)">
                        ${cat}
                    </a>
                `).join('')}
            </div>
            
            <!-- Solutions Categories -->
            <div class="mega-menu-level-2" id="mega-lvl2-solutions" style="display: none;">
                ${typeof solutions !== 'undefined' ? solutions.map((sol, idx) => `
                    <a href="${root}products.html?solution=${sol.id}" class="mega-menu-category ${idx === 0 ? 'active' : ''}" onmouseenter="handleMegaMenuSolutionHover('${sol.id}', this)" onclick="handleMegaMenuSolutionClick('${sol.id}', this, event)">
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

    // Ensure Mega Menu backdrop blur overlay exists in the DOM
    let backdrop = document.querySelector('.mega-menu-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mega-menu-backdrop';
        backdrop.id = 'megaMenuBackdrop';
        document.body.appendChild(backdrop);
    }

    backdrop.addEventListener('click', () => {
        closeMegaMenu(true);
    });

    backdrop.addEventListener('mouseenter', () => {
        if (!isMegaMenuPinned) {
            megaMenuTimeout = setTimeout(() => {
                if (!isMegaMenuPinned && !isMegaMenuHovered) {
                    closeMegaMenu(false);
                }
            }, 150);
        }
    });

    desktopContainers.forEach(container => {
        container.innerHTML = desktopHTML;
        
        // Prevent flickering and support both hover and click-pin
        const parentLi = container.closest('.nav-item-dropdown');
        if (parentLi) {
            parentLi.addEventListener('mouseenter', () => {
                if (window.innerWidth <= 991) return;
                isMegaMenuHovered = true;
                clearTimeout(megaMenuTimeout);
                desktopContainers.forEach(c => c.classList.add('is-active'));
                parentLi.classList.add('is-active');
                document.body.classList.add('mega-menu-active');
            });

            parentLi.addEventListener('mouseleave', () => {
                if (window.innerWidth <= 991) return;
                isMegaMenuHovered = false;
                if (!isMegaMenuPinned) {
                    megaMenuTimeout = setTimeout(() => {
                        if (!isMegaMenuPinned && !isMegaMenuHovered) {
                            closeMegaMenu(false);
                        }
                    }, 250); // slight delay to prevent flicker
                }
            });

            // Handle clicking on "Products & Solutions" dropdown trigger
            parentLi.addEventListener('click', (e) => {
                if (window.innerWidth <= 991) return;
                
                // If the click is on the trigger link/icon outside the mega menu content popup
                if (!e.target.closest('.mega-menu')) {
                    const root = window.ROOT_PATH || '';
                    if (currentMegaMenuGroup === 'solutions') {
                        e.preventDefault();
                        window.location.href = `${root}products.html?solution=all`;
                    } else {
                        if (!e.target.closest('a')) {
                            window.location.href = `${root}products.html`;
                        }
                    }
                }
            });
        }

        // Product links inside the mega menu
        container.addEventListener('click', (e) => {
            const productItem = e.target.closest('.mega-menu-product-item');
            if (productItem) {
                closeMegaMenu(true);
            }
        });
    });
    
    // Global close handlers
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item-dropdown')) {
            closeMegaMenu(true);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMegaMenu(true);
        }
    });

    // Endoscopy subcategories configuration
    const endoscopySubcategories = [
        {
            id: "airway-management",
            name: "Airway Management",
            productNames: [
                "Single-use Bronchoscope",
                "Video Laryngoscope",
                "Single-use Rhinolaryngoscope",
                "Broncho Sampler",
                "Suction Pump"
            ]
        },
        {
            id: "single-use-endoscope",
            name: "Single use endoscope",
            productNames: [
                "Single-use Bronchoscope",
                "Single-use Rhinolaryngoscope",
                "Single-use Choledochoscope",
                "Single-use Duodenoscope",
                "HU Series Single-use Ureterorenoscope",
                "Single-use Ureterorenoscope HU30M",
                "Single-use Cystoscope",
                "Single-Use Cysto-Nephroscope",
                "Single-use Ureteral Access Sheath",
                "Single-use Stent Removal Cystoscope"
            ]
        },
        {
            id: "reusable-endoscope",
            name: "Reusable endoscope",
            productNames: [
                "Video Laryngoscope"
            ]
        }
    ];

    window.endoscopySubcategories = endoscopySubcategories;

    // 2. Build Mobile Mega Menu
    let mobileHTML = `
        <div class="mobile-accordion-item">
            <a href="${root}products.html" class="mobile-accordion-link">Products</a>
            <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-products-group', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
        </div>
        <div class="mobile-accordion-level" id="mobile-products-group">
            ${productCategories.map((cat, idx) => {
                if (cat === 'Endoscopy') {
                    return `
                        <div class="mobile-accordion-item">
                            <a href="${root}products.html?category=${encodeURIComponent(cat)}" class="mobile-accordion-link">${cat}</a>
                            <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-cat-${idx}', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                        </div>
                        <div class="mobile-accordion-level" id="mobile-cat-${idx}">
                            ${endoscopySubcategories.map((subcat, sIdx) => `
                                <div class="mobile-accordion-item" style="padding-left: 14px;">
                                    <span class="mobile-accordion-link" style="font-size: 13px; font-weight: 600;">${subcat.name}</span>
                                    <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-endo-sub-${sIdx}', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                                </div>
                                <div class="mobile-accordion-level" id="mobile-endo-sub-${sIdx}" style="padding-left: 14px;">
                                    ${getEndoscopySubcategoryProducts(subcat.id).map(p => `
                                        <a href="${getProductUrl(p)}" class="mobile-product-item">${p.name}</a>
                                    `).join('')}
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
                return `
                    <div class="mobile-accordion-item">
                        <a href="${root}products.html?category=${encodeURIComponent(cat)}" class="mobile-accordion-link">${cat}</a>
                        <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-cat-${idx}', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                    </div>
                    <div class="mobile-accordion-level" id="mobile-cat-${idx}">
                        ${products.filter(p => p.category === cat).map(p => `
                            <a href="${getProductUrl(p)}" class="mobile-product-item">${p.name}</a>
                        `).join('')}
                    </div>
                `;
            }).join('')}
        </div>
    `;

    if (typeof solutions !== 'undefined') {
        mobileHTML += `
            <div class="mobile-accordion-item">
                <a href="${root}products.html?solution=all" class="mobile-accordion-link">Solutions</a>
                <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-solutions-group', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
            </div>
            <div class="mobile-accordion-level" id="mobile-solutions-group">
                ${solutions.map((sol, idx) => {
                    if (sol.id === 'endoscopy') {
                        return `
                            <div class="mobile-accordion-item">
                                <a href="${root}products.html?solution=${sol.id}" class="mobile-accordion-link">${sol.name}</a>
                                <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-sol-${idx}', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                            </div>
                            <div class="mobile-accordion-level" id="mobile-sol-${idx}">
                                ${endoscopySubcategories.map((subcat, sIdx) => `
                                    <div class="mobile-accordion-item" style="padding-left: 14px;">
                                        <span class="mobile-accordion-link" style="font-size: 13px; font-weight: 600;">${subcat.name}</span>
                                        <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-sol-endo-sub-${sIdx}', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                                    </div>
                                    <div class="mobile-accordion-level" id="mobile-sol-endo-sub-${sIdx}" style="padding-left: 14px;">
                                        ${getEndoscopySubcategoryProducts(subcat.id).map(p => `
                                            <a href="${getProductUrl(p)}" class="mobile-product-item">${p.name}</a>
                                        `).join('')}
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    }
                    return `
                        <div class="mobile-accordion-item">
                            <a href="${root}products.html?solution=${sol.id}" class="mobile-accordion-link">${sol.name}</a>
                            <button class="mobile-accordion-btn" onclick="toggleMobileAccordion('mobile-sol-${idx}', this)"><svg class="dropdown-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle; margin-left: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                        </div>
                        <div class="mobile-accordion-level" id="mobile-sol-${idx}">
                            ${getSolutionProducts(sol.id).map(p => `
                                <a href="${getProductUrl(p)}" class="mobile-product-item">${p.name}</a>
                            `).join('')}
                        </div>
                    `;
                }).join('')}
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
    currentMegaMenuGroup = group;
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

// Endoscopy Subcategory Product Resolver
function getEndoscopySubcategoryProducts(subcatId) {
    const subcats = window.endoscopySubcategories || [
        {
            id: "airway-management",
            name: "Airway Management",
            productNames: [
                "Single-use Bronchoscope",
                "Video Laryngoscope",
                "Single-use Rhinolaryngoscope",
                "Broncho Sampler",
                "Suction Pump"
            ]
        },
        {
            id: "single-use-endoscope",
            name: "Single use endoscope",
            productNames: [
                "Single-use Bronchoscope",
                "Single-use Rhinolaryngoscope",
                "Single-use Choledochoscope",
                "Single-use Duodenoscope",
                "HU Series Single-use Ureterorenoscope",
                "Single-use Ureterorenoscope HU30M",
                "Single-use Cystoscope",
                "Single-Use Cysto-Nephroscope",
                "Single-use Ureteral Access Sheath",
                "Single-use Stent Removal Cystoscope"
            ]
        },
        {
            id: "reusable-endoscope",
            name: "Reusable endoscope",
            productNames: [
                "Video Laryngoscope"
            ]
        }
    ];

    const subcat = subcats.find(s => s.id === subcatId);
    if (!subcat) return [];
    
    const list = [];
    const seen = new Set();
    subcat.productNames.forEach(name => {
        const prod = products.find(p => p.category === 'Endoscopy' && p.name === name);
        if (prod && !seen.has(prod.id)) {
            seen.add(prod.id);
            list.push(prod);
        }
    });
    return list;
}

function buildProductsListHtml(productsToRender) {
    if (!productsToRender || productsToRender.length === 0) {
        return `<p style="padding: 20px; color: var(--text-muted);">No products found.</p>`;
    }
    return `
        <div class="mega-menu-products-grid">
            ${productsToRender.map(p => `
                <a href="${getProductUrl(p)}" class="mega-menu-product-item">
                    <span class="mega-menu-product-name">${p.name}</span>
                    <span class="mega-menu-product-brand">${p.brand}</span>
                </a>
            `).join('')}
        </div>
    `;
}

function renderEndoscopyLvl3(activeSubcatId = 'airway-management') {
    const subcats = window.endoscopySubcategories || [
        { id: "airway-management", name: "Airway Management" },
        { id: "single-use-endoscope", name: "Single use endoscope" },
        { id: "reusable-endoscope", name: "Reusable endoscope" }
    ];
    
    const subcatProducts = getEndoscopySubcategoryProducts(activeSubcatId);
    
    const html = `
        <div class="mega-menu-endoscopy-wrapper">
            <div class="mega-menu-subcategories-col">
                ${subcats.map(subcat => `
                    <div class="mega-menu-subcat-item ${subcat.id === activeSubcatId ? 'active' : ''}" 
                         onmouseenter="handleEndoscopySubcatHover('${subcat.id}', this)"
                         onclick="handleEndoscopySubcatClick('${subcat.id}', this, event)">
                        <span>${subcat.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                `).join('')}
            </div>
            <div class="mega-menu-subcat-products" id="mega-endoscopy-products">
                ${buildProductsListHtml(subcatProducts)}
            </div>
        </div>
    `;
    
    document.querySelectorAll('#mega-lvl3-content').forEach(contentArea => {
        contentArea.classList.add('has-subcategories');
        contentArea.innerHTML = html;
    });
}

function showEndoscopySubcategoryProducts(subcatId, element) {
    if (element) {
        const col = element.closest('.mega-menu-subcategories-col');
        if (col) {
            col.querySelectorAll('.mega-menu-subcat-item').forEach(el => el.classList.remove('active'));
            element.classList.add('active');
        }
    }
    
    const subcatProducts = getEndoscopySubcategoryProducts(subcatId);
    const container = document.getElementById('mega-endoscopy-products');
    if (container) {
        container.innerHTML = buildProductsListHtml(subcatProducts);
    }
}

function showMegaMenuCategoryProducts(encodedCategory, element, isInit = false) {
    const category = decodeURIComponent(encodedCategory);
    
    if (element) {
        const sidebar = element.closest('.mega-menu-level-2');
        sidebar.querySelectorAll('.mega-menu-category').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    
    if (category === 'Endoscopy') {
        renderEndoscopyLvl3('airway-management');
    } else {
        const categoryProducts = products.filter(p => p.category === category);
        renderLvl3(categoryProducts);
    }
}

function showMegaMenuSolutionProducts(solutionId, element, isInit = false) {
    if (element) {
        const sidebar = element.closest('.mega-menu-level-2');
        sidebar.querySelectorAll('.mega-menu-category').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    
    if (solutionId === 'endoscopy') {
        renderEndoscopyLvl3('airway-management');
    } else {
        const solutionProducts = getSolutionProducts(solutionId);
        renderLvl3(solutionProducts);
    }
}

function renderLvl3(productsToRender) {
    const html = buildProductsListHtml(productsToRender.slice(0, 15));
    document.querySelectorAll('#mega-lvl3-content').forEach(contentArea => {
        contentArea.classList.remove('has-subcategories');
        contentArea.innerHTML = html;
    });
}

// Global window exposure for mega menu interactions
window.handleMegaMenuGroupHover = handleMegaMenuGroupHover;
window.handleMegaMenuGroupClick = handleMegaMenuGroupClick;
window.handleMegaMenuCategoryHover = handleMegaMenuCategoryHover;
window.handleMegaMenuCategoryClick = handleMegaMenuCategoryClick;
window.handleMegaMenuSolutionHover = handleMegaMenuSolutionHover;
window.handleMegaMenuSolutionClick = handleMegaMenuSolutionClick;
window.handleEndoscopySubcatHover = handleEndoscopySubcatHover;
window.handleEndoscopySubcatClick = handleEndoscopySubcatClick;
window.openMegaMenuPinned = openMegaMenuPinned;
window.pinMegaMenu = pinMegaMenu;
window.closeMegaMenu = closeMegaMenu;
window.showMegaMenuGroup = showMegaMenuGroup;
window.showMegaMenuCategoryProducts = showMegaMenuCategoryProducts;
window.showMegaMenuSolutionProducts = showMegaMenuSolutionProducts;
window.showEndoscopySubcategoryProducts = showEndoscopySubcategoryProducts;

function toggleMobileMegaMenu() {
    const mobileMenu = document.getElementById('mobile-mega-menu-content');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenu.previousElementSibling.querySelector('.dropdown-icon-svg');
        if (icon) {
            icon.style.display = "inline-block"; // Needs display inline-block to rotate
            icon.style.transition = "transform 0.3s ease";
            icon.style.transform = mobileMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function toggleMobileAccordion(targetId, btnElement) {
    const target = document.getElementById(targetId);
    if (target) {
        target.classList.toggle('active');
        btnElement.querySelector('svg').style.transform = target.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

// Razorpay-style Hero Carousel Logic
const rzSlides = [
    {
        title: "Advance Critical Care & Neonatal Life Support with",
        subtext: "Delivering reliable neonatal ventilators, incubators, and clinical technology backed by our dedicated support team.",
        image: "assets/products/ai-neonatal.png",
        name: "Neonatal Care Systems",
        cat: "Critical Care"
    },
    {
        title: "Upgrade Hospital Infrastructure & Surgical Setups with",
        subtext: "Comprehensive clinical solutions spanning advanced ultrasound imaging, surgical equipment, and operating room technology.",
        image: "assets/products/EP_50_1_d36118899b.png",
        name: "Medical Imaging & Surgery",
        cat: "Hospital Infrastructure"
    },
    {
        title: "Elevate Patient Monitoring & Diagnostic Precision with",
        subtext: "State-of-the-art multi-parameter patient monitoring systems engineered for the evolving demands of modern hospitals.",
        image: "assets/products/ai-monitor.png",
        name: "Advanced Patient Monitoring",
        cat: "High-Acuity Monitoring"
    }
];

let currentRzSlide = 0;
let rzInterval;

function initRzCarousel() {
    const track = document.getElementById('rz-carousel-track');
    if (!track) return;
    
    rzSlides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `rz-slide ${index === 0 ? 'active' : ''}`;
        slideDiv.id = `rz-slide-${index}`;
        
        slideDiv.innerHTML = `
            <div class="rz-image-wrapper">
                <img src="${slide.image}" alt="${slide.name}">
            </div>
        `;
        track.appendChild(slideDiv);
    });
    
    updateRzText(0, true);
    startRzInterval();
}

function updateRzText(index, isInitial = false) {
    const titleEl = document.getElementById('rz-rotating-text');
    const subtextEl = document.getElementById('rz-subtext');
    
    if (titleEl && subtextEl) {
        if (isInitial) {
            titleEl.textContent = rzSlides[index].title;
            subtextEl.textContent = rzSlides[index].subtext;
            titleEl.classList.remove('slide-up-out', 'slide-up-in');
            subtextEl.style.opacity = '1';
            return;
        }

        // Animate out
        titleEl.classList.remove('slide-up-in');
        titleEl.classList.add('slide-up-out');
        subtextEl.style.opacity = '0';
        
        setTimeout(() => {
            titleEl.textContent = rzSlides[index].title;
            subtextEl.textContent = rzSlides[index].subtext;
            
            // Prepare to animate in
            titleEl.classList.remove('slide-up-out');
            titleEl.classList.add('slide-up-in');
            
            // Force reflow
            void titleEl.offsetWidth;
            
            // Animate in
            titleEl.classList.remove('slide-up-in');
            subtextEl.style.opacity = '1';
        }, 600); // Wait for out animation to finish
    }
}

function goToRzSlide(index) {
    if (index === currentRzSlide) return;
    
    document.getElementById(`rz-slide-${currentRzSlide}`).classList.remove('active');
    currentRzSlide = index;
    document.getElementById(`rz-slide-${currentRzSlide}`).classList.add('active');
    
    updateRzText(currentRzSlide);
    resetRzInterval();
}

function nextRzSlide() {
    let next = (currentRzSlide + 1) % rzSlides.length;
    goToRzSlide(next);
}

function prevRzSlide() {
    let prev = (currentRzSlide - 1 + rzSlides.length) % rzSlides.length;
    goToRzSlide(prev);
}

function startRzInterval() {
    rzInterval = setInterval(nextRzSlide, 6000);
}

function resetRzInterval() {
    clearInterval(rzInterval);
    startRzInterval();
}

document.addEventListener('DOMContentLoaded', () => {
    initRzCarousel();
    
    const prevBtn = document.getElementById('rz-nav-prev');
    const nextBtn = document.getElementById('rz-nav-next');
    
    if (prevBtn) prevBtn.onclick = prevRzSlide;
    if (nextBtn) nextBtn.onclick = nextRzSlide;
});


// Fluid Scroll-Linked Accordion Animation
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion-item');
    if (items.length > 0) {
        const baseHeight = 90;

        function onScroll() {
            const windowHeight = window.innerHeight;
            const startY = windowHeight * 0.65; // Starts expanding when top hits 65% of screen
            const peakY = windowHeight * 0.35;  // Fully expanded at 35% of screen

            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                
                // Dynamically calculate peak height based on text length
                const bodyInner = item.querySelector('.accordion-body-inner');
                // Add baseHeight (90) + text height + extra padding for breathing room
                const targetPeakHeight = bodyInner ? baseHeight + bodyInner.scrollHeight + 60 : 350;
                
                let height = baseHeight;
                let progress = 0;
                let isActive = false;
                
                if (rect.top > startY) {
                    // Below active zone
                    height = baseHeight;
                    progress = 0;
                    isActive = false;
                } else if (rect.top <= startY && rect.top > peakY) {
                    // Expanding phase (scrolling down)
                    progress = (startY - rect.top) / (startY - peakY);
                    height = baseHeight + (targetPeakHeight - baseHeight) * progress;
                    if (progress > 0.5) isActive = true;
                } else if (rect.top <= peakY) {
                    // Above the middle - STAY EXPANDED!
                    height = targetPeakHeight;
                    progress = 1;
                    isActive = true;
                }

                // Apply inline height
                item.style.height = height + 'px';
                
                // Map opacity to progress directly
                if (bodyInner) {
                    // fade in smoothly as it expands
                    const opacity = Math.max(0, Math.min(1, (progress - 0.2) / 0.6));
                    bodyInner.style.opacity = opacity;
                }
                
                // Toggle active class for color and background effects
                if (isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        // Initial setup
        setTimeout(onScroll, 50);
    }
});

// Contact Section Navigation Highlighting
document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    const homeLinks = document.querySelectorAll('a[href="index.html"]');
    const contactLinks = document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]');
    
    // 1. Check if we arrived with #contact hash
    if (window.location.hash === '#contact') {
        homeLinks.forEach(link => link.classList.remove('active'));
        contactLinks.forEach(link => link.classList.add('active'));
    }

    // Check for pending product inquiry from cross-page navigation
    try {
        const pendingProduct = sessionStorage.getItem('pendingInquiryProduct');
        if (pendingProduct) {
            sessionStorage.removeItem('pendingInquiryProduct');
            if (contactSection) {
                const subj = contactSection.querySelector('input[placeholder="Subject"], input[name="subject"]');
                if (subj) subj.value = 'Inquiry about ' + pendingProduct;
                const msg = contactSection.querySelector('textarea');
                if (msg) msg.value = 'Hi, I would like to request a quote and more information regarding ' + pendingProduct + '.';
            }
        }
    } catch (e) {}

    // 2. Setup scroll observer — only highlight "Contact" when the heading
    //    is right below the navbar (not when the bottom of the section peeks in).
    //    rootMargin shrinks the detection zone: ignore everything except a small
    //    band just below the header.
    if (contactSection) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        // Only trigger when the contact section's top enters the zone
        // from the top of viewport to (headerHeight + 150px) below it
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    homeLinks.forEach(link => link.classList.remove('active'));
                    contactLinks.forEach(link => link.classList.add('active'));
                } else {
                    if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                        contactLinks.forEach(link => link.classList.remove('active'));
                        homeLinks.forEach(link => link.classList.add('active'));
                    }
                }
            });
        }, { 
            // Top margin: ignore everything above the header
            // Bottom margin: shrink from bottom so only top portion counts
            rootMargin: `-${headerHeight}px 0px -70% 0px`,
            threshold: 0 
        });
        observer.observe(contactSection);
    }
});

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

// ============================================
// Bulletproof Contact / Anchor Navigation
// ============================================
// The accordion section dynamically changes height as you scroll through it,
// so a one-shot scroll calculation from the top of the page always lands short.
// This uses a self-correcting loop that keeps scrolling until the target is
// actually visible in the viewport and Contact on the navbar becomes active (bold).
(function() {
    /**
     * Highlights Contact as active/bold on the navbar and removes active from other links.
     */
    function markContactActive() {
        const homeLinks = document.querySelectorAll('.main-nav a[href="index.html"], .mobile-nav-links a[href="index.html"]');
        const contactLinks = document.querySelectorAll('.main-nav a[href="#contact"], .main-nav a[href="index.html#contact"], .mobile-nav-links a[href="#contact"], .mobile-nav-links a[href="index.html#contact"]');
        homeLinks.forEach(link => link.classList.remove('active'));
        contactLinks.forEach(link => link.classList.add('active'));
    }

    /**
     * Checks if an element is properly visible below the header.
     */
    function isInView(el) {
        const rect = el.getBoundingClientRect();
        const header = document.querySelector('.header');
        const headerH = header ? header.offsetHeight : 80;
        // Target top should be within headerH+30 to headerH+200 from viewport top
        return rect.top >= headerH && rect.top <= headerH + 200;
    }

    /**
     * Self-correcting scroll: keeps recalculating and scrolling until
     * the target is actually in view. Gives up after maxAttempts.
     */
    function scrollToTarget(hash, attempt) {
        attempt = attempt || 0;
        const target = document.querySelector(hash);
        if (!target) return;

        // Already in view — done!
        if (isInView(target)) {
            if (hash === '#contact') markContactActive();
            return;
        }

        // Give up after 15 attempts (4.5 seconds)
        if (attempt > 15) {
            if (hash === '#contact') markContactActive();
            return;
        }

        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 30;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });

        // Recheck after scroll animation settles
        setTimeout(function() {
            scrollToTarget(hash, attempt + 1);
        }, 300);
    }

    // Expose globally so Enquire Now button can use the exact same navigation
    window.scrollToTarget = scrollToTarget;

    // 1. Intercept ALL same-page anchor clicks (e.g. clicking "Contact" in nav)
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href*="#"]');
        if (!link) return;
        const href = link.getAttribute('href');
        if (!href) return;

        // Extract hash from href
        let hash;
        if (href.startsWith('#')) {
            hash = href;
        } else if (href.includes('#')) {
            // Links like "index.html#contact" — only handle if pointing to current page
            try {
                const url = new URL(href, window.location.href);
                if (url.pathname === window.location.pathname ||
                    (url.pathname.endsWith('index.html') && window.location.pathname.endsWith('index.html'))) {
                    hash = '#' + href.split('#')[1];
                }
            } catch(ex) {}
        }

        if (hash && document.querySelector(hash)) {
            e.preventDefault();
            scrollToTarget(hash);
            // Don't add hash to URL — prevents refresh from scrolling to contact
        }
    });

    // 2. Cross-page navigation: arriving at page with #hash in URL
    if (window.location.hash) {
        const hash = window.location.hash;

        // Prevent browser's premature jump
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        window.addEventListener('load', function() {
            setTimeout(function() {
                scrollToTarget(hash);
                // Clean hash so refresh doesn't re-trigger
                setTimeout(function() {
                    history.replaceState(null, '', window.location.pathname + window.location.search);
                }, 5000);
            }, 200);
        });
    }
})();


