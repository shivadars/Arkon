from PIL import Image

# Open the logo
img = Image.open('c:/medical-equipment-website/assets/logo/Arkon.png')

# Crop to content (remove transparent padding) so logo fills the icon
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Add tiny margin (2px) so it doesn't touch edges
from PIL import ImageOps
img_padded = ImageOps.expand(img, border=2, fill=(0, 0, 0, 0))

# Create high-quality favicon with larger sizes
img_padded.save(
    'c:/medical-equipment-website/assets/logo/favicon.ico',
    format='ICO',
    sizes=[(32, 32), (48, 48), (64, 64)]
)

print(f"Created optimized favicon.ico (cropped from {bbox} to fill icon)")
