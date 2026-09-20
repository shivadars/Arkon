import re

with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Match the testimonials section
pattern = re.compile(r'\s*<!-- Testimonials -->\s*<section class="testimonials-split section-spacing" id="testimonials">.*?</section>', re.DOTALL)
html = pattern.sub('', html)

with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
    f.write(html)


with open('c:/medical-equipment-website/js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove the initialization call
js = js.replace('    initTestimonials();\n', '')

# Remove the function definition
js_pattern = re.compile(r'\nfunction initTestimonials\(\) \{.*?(?=\nfunction |\Z)', re.DOTALL)
js = js_pattern.sub('', js)

with open('c:/medical-equipment-website/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Reviews section removed successfully")
