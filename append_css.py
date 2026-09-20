css_content = '''

/* ==========================================================================
   Interactive Accordion Showcase (About Us Page)
   ========================================================================== */

.accordion-showcase-section {
    padding: 100px 0;
    background-color: var(--white);
    min-height: 80vh;
}

.accordion-container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.accordion-item {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background-color: #f1f5f9;
    color: var(--text-color);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

.accordion-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: var(--primary); /* Deep blue */
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    overflow: hidden;
}

/* Animated Geometric Shapes inside the background */
.accordion-bg .geometric-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-bg .shape-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
    top: -300px;
    right: -100px;
    transform: scale(0.8) translate(50px, -50px);
}

.accordion-bg .shape-2 {
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, #0284c7 0%, transparent 70%);
    bottom: -400px;
    left: -200px;
    transform: scale(0.8) translate(-50px, 50px);
}

.accordion-content {
    position: relative;
    z-index: 2;
    padding: 32px 40px;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accordion-title {
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    color: inherit;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-number {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.4;
    font-family: monospace;
}

.accordion-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-body-inner {
    overflow: hidden;
    padding-top: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-body-inner p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
    opacity: 0.9;
}

.accordion-link {
    display: inline-block;
    padding: 10px 24px;
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.3s ease;
}

.accordion-link:hover {
    background-color: #fff;
    color: var(--primary);
}

/* Hover State Effects */
.accordion-item:hover {
    color: #ffffff;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
}

.accordion-item:hover .accordion-bg {
    opacity: 1;
}

.accordion-item:hover .shape-1 {
    transform: scale(1) translate(0, 0);
}

.accordion-item:hover .shape-2 {
    transform: scale(1) translate(0, 0);
}

.accordion-item:hover .accordion-title {
    transform: translateX(10px);
}

.accordion-item:hover .accordion-body {
    grid-template-rows: 1fr;
}

.accordion-item:hover .accordion-body-inner {
    padding-top: 24px;
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .accordion-content {
        padding: 24px;
    }
    .accordion-title {
        font-size: 22px;
    }
    /* On mobile, we might want one open by default or rely on tap instead of hover. Tap acts as hover in most mobile browsers. */
}
'''

with open('c:/medical-equipment-website/css/style.css', 'a', encoding='utf-8') as f:
    f.write(css_content)

print("CSS appended")
