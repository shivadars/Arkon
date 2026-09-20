import re

# Update HTML
with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_html = '''        <!-- Our Clients -->
        <section class="clients-section bg-light section-spacing" id="clients">
            <div class="container clients-container">
                <div class="clients-heading section-header header-centered" data-aos="fade-up">
                    <h2>Our Clients</h2>
                </div>
                <div class="logo-carousel" id="logo-carousel" data-aos="fade-in" data-aos-delay="100">
                    <!-- dynamically generated logo columns -->
                </div>
            </div>
        </section>'''

new_html = '''        <!-- Our Clients -->
        <section class="clients-section section-spacing" id="clients">
            <div class="container">
                <div class="clients-heading section-header header-centered" data-aos="fade-up">
                    <h2 style="font-weight: 500; font-size: 28px; margin-bottom: 60px;">Trusted by remarkable healthcare brands</h2>
                </div>
                <div class="clients-grid" id="clients-grid" data-aos="fade-in" data-aos-delay="100">
                    <!-- dynamically generated logo grid -->
                </div>
            </div>
        </section>'''

html = html.replace(old_html, new_html)

with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Update CSS
with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add styles for clients grid
grid_css = '''
/* Clients Grid */
.clients-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    align-items: center;
    justify-items: center;
    max-width: 1000px;
    margin: 0 auto;
}
.clients-grid .client-logo {
    max-width: 140px;
    max-height: 70px;
    object-fit: contain;
    filter: grayscale(100%) opacity(60%);
    transition: all 0.3s ease;
}
.clients-grid .client-logo:hover {
    filter: grayscale(0%) opacity(100%);
}

@media (max-width: 900px) {
    .clients-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
}
@media (max-width: 600px) {
    .clients-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}
'''
css += grid_css

with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update JS
with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

old_js_carousel = re.compile(r'function initLogoCarousel\(\) \{.*?function cycleLogos\(\) \{.*?\}', re.DOTALL)
new_js_grid = '''function initLogoGrid() {
    const grid = document.getElementById('clients-grid');
    if (!grid || typeof clients === 'undefined') return;
    
    let html = '';
    // Use up to 12 clients for a 4x3 grid
    const displayClients = clients.slice(0, 12);
    
    displayClients.forEach(client => {
        html += <img src="" alt="" class="client-logo" title="">;
    });
    
    grid.innerHTML = html;
}
'''
# Replace initLogoCarousel and cycleLogos
js = old_js_carousel.sub(new_js_grid, js)
# Also change the initialization call
js = js.replace('initLogoCarousel();', 'initLogoGrid();')

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Clients grid updated")
