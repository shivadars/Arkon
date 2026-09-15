
        document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            const topContainer = document.getElementById('product-detail-top-container');
            const bottomContainer = document.getElementById('product-detail-bottom-container');
            const breadcrumbs = document.getElementById('pd-breadcrumbs');

            if (!productId || isNaN(productId)) {
                topContainer.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;"><h3>Product Not Found</h3><p>The product you are looking for does not exist or has been removed.</p><a href="products.html" class="btn btn-primary" style="margin-top: 16px;">Back to Products</a></div>';
                return;
            }

            const product = products.find(p => p.id === productId);

            if (!product) {
                topContainer.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;"><h3>Product Not Found</h3><p>The product you are looking for does not exist or has been removed.</p><a href="products.html" class="btn btn-primary" style="margin-top: 16px;">Back to Products</a></div>';
                return;
            }

            // Generate mock specs since data.js doesn't have detailed specs
            const mockSpecs = [
                { label: 'Brand', value: product.brand },
                { label: 'Category', value: product.category },
                { label: 'Power Supply', value: 'AC 100-240V, 50/60Hz' },
                { label: 'Warranty', value: '1 Year Manufacturer Warranty' },
                { label: 'Certifications', value: 'CE, ISO 13485' },
                { label: 'Delivery Time', value: '7-14 Business Days' }
            ];
            
            let specsHtml = '';
            mockSpecs.forEach(spec => {
                specsHtml += `<div class="spec-row"><div class="spec-label">${spec.label}</div><div class="spec-value">${spec.value}</div></div>`;
            });

            // Update Breadcrumbs
            breadcrumbs.innerHTML = `<a href="index.html">Home</a> &gt; <a href="products.html">Products</a> &gt; <a href="products.html?category=${encodeURIComponent(product.category)}">${product.category}</a> &gt; ${product.name}`;
            document.title = product.name + ' | Arkon Medical System';

            // Generate description HTML & Key Features
            let descriptionHtml = '';
            let featuresHtml = '';
            let advancedSectionsHtml = '';
            const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
            
            // Description (handle both string and array for backwards compatibility)
            if (Array.isArray(product.description)) {
                descriptionHtml = `<p>${product.description[0]}</p>`;
            } else {
                const desc = product.description || 'Professional medical equipment designed for maximum reliability and ease of use in clinical settings.';
                descriptionHtml = `<p>${desc}</p>`;
            }

            // Features (handle both new 'features' array and old 'description' array)
            const dashIcon = `<span style="color:var(--text-light); margin-right:8px;">&mdash;</span>`;
            if (product.features && Array.isArray(product.features)) {
                product.features.forEach(f => {
                    featuresHtml += `<li>${dashIcon} ${f}</li>`;
                });
            } else if (Array.isArray(product.description)) {
                product.description.forEach(p => {
                    featuresHtml += `<li>${dashIcon} ${p}</li>`;
                });
            } else {
                const desc = product.description || 'Professional medical equipment designed for maximum reliability and ease of use in clinical settings.';
                featuresHtml = `<li>${dashIcon} ${desc}</li>`;
            }

            // Advanced Sections
            if (product.advancedSections && Array.isArray(product.advancedSections)) {
                product.advancedSections.forEach(section => {
                    advancedSectionsHtml += `
                        <div style="margin-top: 24px;">
                            <h4 style="margin-bottom: 12px; color: var(--text-dark); border-bottom: 1px solid var(--border); padding-bottom: 8px; font-size: 16px;">${section.title}</h4>
                            <ul class="feature-list">
                                ${section.points.map(p => `<li>${checkIcon} ${p}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                });
            }

            // Generate Thumbnails
            let thumbnailsHtml = '';
            if (product.images && product.images.length > 0) {
                product.images.forEach((imgSrc, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    thumbnailsHtml += \`<div class="pd-thumb \${activeClass}" onclick="changeMainImage('\${imgSrc}', this)"><img src="\${imgSrc}" onerror="this.src='https://placehold.co/100x100/E8F3EC/075C3A?text=\${index+1}'"></div>\`;
                });
            } else {
                thumbnailsHtml = \`
                    <div class="pd-thumb active"><img src="\${product.image}" onerror="this.src='https://placehold.co/100x100/E8F3EC/075C3A?text=1'"></div>
                    <div class="pd-thumb"><img src="\${product.image}" onerror="this.src='https://placehold.co/100x100/E8F3EC/075C3A?text=2'"></div>
                    <div class="pd-thumb"><img src="\${product.image}" onerror="this.src='https://placehold.co/100x100/E8F3EC/075C3A?text=3'"></div>
                    <div class="pd-thumb"><img src="\${product.image}" onerror="this.src='https://placehold.co/100x100/E8F3EC/075C3A?text=4'"></div>
                \`;
            }

            // Render Product Top
            topContainer.innerHTML = \`
                <div class="pd-top-section">
                    <div class="pd-image-col">
                        <div class="pd-main-image-nike">
                            <img id="main-product-image" src="\${product.image}" alt="\${product.name}" onerror="this.src='https://placehold.co/800x800/E8F3EC/075C3A?text=Product'">
                        </div>
                        <div class="pd-thumbnails">
                            \${thumbnailsHtml}
                        </div>
                    </div>
                    <div class="pd-info-col pd-sticky-info">
                        <h1 class="pd-title-nike"><span class="light">${product.brand}</span><br><span class="bold">${product.name}</span></h1>

                        <div class="pd-nike-sizes-label">Select Options</div>
                        <div class="pd-tags-nike">
                            <span class="pd-tag-square">${product.category}</span>
                            <span class="pd-tag-square">${product.name.replace(/[^a-zA-Z0-9]/g, '').substring(0,6).toUpperCase()}-X</span>
                            <span class="pd-tag-square">New</span>
                            <span class="pd-tag-square">1Yr WTY</span>
                        </div>
                        
                        <div class="pd-action-row-nike">
                            <button class="btn btn-primary btn-large btn-nike" onclick="openQuoteModal('${product.name}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                ENQUIRE NOW
                            </button>
                            <button class="btn btn-outline btn-nike-whatsapp" onclick="contactWhatsApp()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                            </button>
                        </div>

                        <div class="pd-quick-links">
                            <a href="#" onclick="document.getElementById('tab-features').scrollIntoView({behavior:'smooth'}); return false;">Description <span>&rarr;</span></a>
                            <a href="#" onclick="switchTab('specs'); document.getElementById('tab-specs').scrollIntoView({behavior:'smooth'}); return false;">Specifications <span>&rarr;</span></a>
                            <a href="#">Warranty & Support <span>&rarr;</span></a>
                            <a href="#">Shipping Information <span>&rarr;</span></a>
                        </div>
                    </div>
                </div>
            `;

            // Render Product Bottom
            bottomContainer.innerHTML = `
                <div class="pd-tabs-header-nike">
                    <button class="pd-tab-btn-nike active" onclick="switchTab('features')">Description</button>
                    <button class="pd-tab-btn-nike" onclick="switchTab('specs')">Specifications</button>
                    <button class="pd-tab-btn-nike">Downloads</button>
                    <button class="pd-tab-btn-nike">Reviews (0)</button>
                </div>
                
                <div class="pd-tab-content-nike active" id="tab-features">
                    <div class="pd-split-desc">
                        <div class="pd-desc-left">
                            ${descriptionHtml}
                        </div>
                        <div class="pd-desc-right">
                            <ul class="feature-list-nike">
                                ${featuresHtml}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="pd-tab-content-nike" id="tab-specs">
                    <div class="modern-specs-table">
                        ${specsHtml}
                    </div>
                    ${advancedSectionsHtml}
                </div>
            `;
        });

        // Tab Switching Logic
        function switchTab(tabId) {
            document.querySelectorAll('.pd-tab-btn-nike').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.pd-tab-content-nike').forEach(content => content.classList.remove('active'));
            
            event.target.classList.add('active');
            document.getElementById('tab-' + tabId).classList.add('active');
        }

        // Image Swap Logic
        function changeMainImage(src, element) {
            document.getElementById('main-product-image').src = src;
            document.querySelectorAll('.pd-thumb').forEach(thumb => thumb.classList.remove('active'));
            if (element) {
                element.classList.add('active');
            }
        }
    