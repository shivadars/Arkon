import os

filepath = 'about.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix image 1
content = content.replace(
    '<img src="assets/images/products/v6-v8.png" alt="Arkon Medical Systems Product">',
    '<img src="assets/images/products/v6-v8.png" alt="Arkon Medical Systems Product" style="object-position: 80% center;">'
)

# Fix image 2
content = content.replace(
    '<img src="assets/images/products/s80.png" alt="Arkon Medical Systems Equipment">',
    '<img src="assets/images/products/s80.png" alt="Arkon Medical Systems Equipment" style="object-position: 20% center;">'
)

# Fix image 3
content = content.replace(
    '<img src="assets/images/products/ax600.png" alt="Arkon Medical Systems Equipment">',
    '<img src="assets/images/products/ax600.png" alt="Arkon Medical Systems Equipment" style="object-position: 20% center;">'
)

# Fix map link
content = content.replace(
    'origin=My+Location&destination=33/2255',
    '/33%2F2255'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("About page images and map fixed.")
