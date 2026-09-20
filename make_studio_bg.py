import numpy as np
from PIL import Image, ImageFilter, ImageDraw

def create_studio_shot(product_path, output_path):
    # Load transparent product
    prod = Image.open(product_path).convert('RGBA')
    
    # Target size: 600x800 (3:4 ratio)
    bg = Image.new('RGB', (600, 800), color='#e2e8f0')
    
    # Create a soft radial gradient for the studio backdrop
    draw = ImageDraw.Draw(bg)
    for y in range(800):
        for x in range(600):
            # Center of gradient
            cx, cy = 300, 400
            dist = np.sqrt((x-cx)**2 + (y-cy)**2)
            # Map dist to color (white in center, soft gray at edges)
            val = int(255 - (dist / 500) * 40)
            val = max(210, min(255, val))
            draw.point((x, y), fill=(val, val+5, val+10))
            
    # Resize product to fill nicely
    w, h = prod.size
    scale = min(500/w, 650/h)
    new_w, new_h = int(w*scale), int(h*scale)
    prod = prod.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create shadow
    shadow = Image.new('RGBA', prod.size, color=(0,0,0,0))
    shadow_data = np.array(prod)
    # Convert all opaque pixels to black with 30% alpha
    alpha = shadow_data[..., 3]
    shadow_data[..., 0] = 0
    shadow_data[..., 1] = 0
    shadow_data[..., 2] = 0
    shadow_data[..., 3] = (alpha * 0.3).astype(np.uint8)
    shadow_img = Image.fromarray(shadow_data)
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(radius=15))
    
    # Paste shadow and product
    px = (600 - new_w) // 2
    py = (800 - new_h) // 2
    
    # Paste shadow slightly offset
    bg.paste(shadow_img, (px, py + 20), shadow_img)
    bg.paste(prod, (px, py), prod)
    
    bg.save(output_path, quality=95)
    print("Saved", output_path)

create_studio_shot('c:/medical-equipment-website/assets/images/solutions/reusable-ureterorenoscope-2-transparent.png', 'c:/medical-equipment-website/assets/images/solutions/real_endoscopy.jpg')
