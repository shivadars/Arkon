from PIL import Image

# Open the logo
img = Image.open('c:/medical-equipment-website/assets/logo/Arkon.png')

# Convert to ICO format with multiple sizes for best browser compatibility
img.save(
    'c:/medical-equipment-website/assets/logo/favicon.ico',
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48)]
)

# Also create a small 32x32 PNG version as fallback
img_small = img.resize((32, 32), Image.LANCZOS)
img_small.save('c:/medical-equipment-website/assets/logo/favicon-32.png')

print("Created favicon.ico and favicon-32.png")
