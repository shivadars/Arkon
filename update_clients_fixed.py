import re

with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the specific functions
pattern = re.compile(r'function initLogoCarousel\(\) \{.*?\}\n\nfunction rotateColumn\(colIndex\) \{.*?\}\n', re.DOTALL)

new_js = '''function initLogoGrid() {
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

js = pattern.sub(new_js, js)

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("JS updated successfully")
