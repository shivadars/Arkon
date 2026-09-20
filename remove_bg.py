from PIL import Image, ImageDraw

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # We will flood fill from all 4 corners to replace white background with transparent
    # Any pixel close to white (threshold) will be replaced
    replacement_color = (255, 255, 255, 0)
    
    ImageDraw.floodfill(img, xy=(0, 0), value=replacement_color, thresh=30)
    ImageDraw.floodfill(img, xy=(img.width-1, 0), value=replacement_color, thresh=30)
    ImageDraw.floodfill(img, xy=(0, img.height-1), value=replacement_color, thresh=30)
    ImageDraw.floodfill(img, xy=(img.width-1, img.height-1), value=replacement_color, thresh=30)
    
    # Also handle some inner pockets that might not be connected if necessary,
    # but floodfill is safest to avoid making white parts of the machine transparent.
    
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

try:
    remove_background("c:/medical-equipment-website/assets/products/comen-v8-ai-purewhite.jpg", "c:/medical-equipment-website/assets/products/comen-v8-ai-transparent.png")
    remove_background("c:/medical-equipment-website/assets/products/comen-ax900-ai-purewhite.jpg", "c:/medical-equipment-website/assets/products/comen-ax900-ai-transparent.png")
    remove_background("c:/medical-equipment-website/assets/products/hugemed-vl3d-ai-purewhite.jpg", "c:/medical-equipment-website/assets/products/hugemed-vl3d-ai-transparent.png")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
