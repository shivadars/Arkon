import re

with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove sticky wrappers
content = content.replace('<div class="accordion-sticky-wrapper">\n<div class="accordion-sticky-inner" style="width: 100%;">\n', '')
content = content.replace('\n</div>\n</div>\n        </section>', '\n        </section>')

with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('''/* Sticky Accordion Updates */
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
}''', '''.accordion-showcase-section {
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
}''')

with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Reverted sticky HTML and CSS")
