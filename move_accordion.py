import re

with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_section = '''        <!-- Interactive Accordion Showcase (About Us) -->
        <section class="accordion-showcase-section section-spacing" id="about">
            <div class="container">
                <div class="section-header header-centered" data-aos="fade-up">
                    <h2>About Arkon Medical System</h2>
                    <p class="about-section-desc">Delivering advanced medical technology and dependable healthcare infrastructure across India.</p>
                </div>
            </div>
            <div class="container accordion-container" data-aos="fade-up" data-aos-delay="100">
                
                <!-- Card 1 -->
                <div class="accordion-item">
                    <div class="accordion-bg">
                        <div class="geometric-shape shape-1"></div>
                        <div class="geometric-shape shape-2"></div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-header">
                            <h2 class="accordion-title">Who We Are</h2>
                            <span class="accordion-number">01</span>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <p>We are a trusted supplier of high-quality medical equipment for hospitals, clinics, laboratories, and healthcare professionals. Our focus is on reliability, quality, and customer satisfaction.</p>
                                <a href="about.html" class="accordion-link">Learn More &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="accordion-item">
                    <div class="accordion-bg">
                        <div class="geometric-shape shape-1"></div>
                        <div class="geometric-shape shape-2"></div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-header">
                            <h2 class="accordion-title">Our Mission</h2>
                            <span class="accordion-number">02</span>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <p>Arkon Medical System is dedicated to providing advanced and reliable medical equipment that supports better patient care and improves healthcare outcomes. We partner with trusted manufacturers to deliver genuine products and dependable support to our customers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="accordion-item">
                    <div class="accordion-bg">
                        <div class="geometric-shape shape-1"></div>
                        <div class="geometric-shape shape-2"></div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-header">
                            <h2 class="accordion-title">Cutting-Edge Equipment</h2>
                            <span class="accordion-number">03</span>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <p>We source the latest surgical and diagnostic technology from globally trusted manufacturers. Our portfolio includes everything from advanced imaging systems to precision surgical instruments. Every product we deliver undergoes rigorous quality checks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="accordion-item">
                    <div class="accordion-bg">
                        <div class="geometric-shape shape-1"></div>
                        <div class="geometric-shape shape-2"></div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-header">
                            <h2 class="accordion-title">Laboratory Excellence</h2>
                            <span class="accordion-number">04</span>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <p>Precision laboratory instruments for pathology, biochemistry, and clinical research. We equip labs with reliable tools that deliver consistent, accurate results. From microscopes to analytical machines, our lab solutions power diagnostics across India.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="accordion-item">
                    <div class="accordion-bg">
                        <div class="geometric-shape shape-1"></div>
                        <div class="geometric-shape shape-2"></div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-header">
                            <h2 class="accordion-title">Critical Care Solutions</h2>
                            <span class="accordion-number">05</span>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <p>We provide end-to-end ICU setups including ventilators, patient monitors, infusion pumps, and life support systems. Our team ensures seamless installation, staff training, and round-the-clock technical support.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6 -->
                <div class="accordion-item">
                    <div class="accordion-bg">
                        <div class="geometric-shape shape-1"></div>
                        <div class="geometric-shape shape-2"></div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-header">
                            <h2 class="accordion-title">Reliable Support</h2>
                            <span class="accordion-number">06</span>
                        </div>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <p>Seamless supply chain management ensuring timely delivery across India. Our certified engineers handle installation, calibration, training, and ongoing maintenance. When you partner with Arkon, you get a long-term commitment.</p>
                                <a href="#" onclick="openQuoteModal()" class="accordion-link">Get In Touch &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>'''

# Replace using regex
pattern = re.compile(r'        <section class="about-brand-section section-spacing" id="about">.*?        </section>\n', re.DOTALL)
content = pattern.sub(new_section + '\n', content)

with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated index.html")
