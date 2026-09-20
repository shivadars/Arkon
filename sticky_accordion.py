import re

with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Add sticky styles
sticky_css = '''
/* Sticky Accordion Updates */
.accordion-showcase-section {
    padding: 0;
    background-color: var(--white);
    position: relative;
    height: 300vh; /* 3x viewport height for scrolling duration */
}

.accordion-sticky-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.accordion-container {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 20px;
}
'''

content = content.replace('.accordion-showcase-section {\n    padding: 100px 0;\n    background-color: var(--white);\n    min-height: 80vh;\n}', '')
content = content.replace('.accordion-container {\n    max-width: 900px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}', '')
content += sticky_css

# Fix the geometric shapes visibility
content = content.replace('.accordion-bg .geometric-shape {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0.15;\n    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);\n}', '.accordion-bg .geometric-shape {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0.4;\n    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 0;\n}')

with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS updated")
