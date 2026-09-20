import numpy as np
from PIL import Image

def remove_white(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Calculate distance from pure white
    r, g, b, a = data.T
    
    # Define threshold for "white"
    threshold = 240
    
    # Find pixels that are near white
    white_areas = (r >= threshold) & (g >= threshold) & (b >= threshold)
    
    # Replace those pixels with transparent
    data[..., 3][white_areas.T] = 0
    
    # Smooth edges using a slight blur on the alpha channel? Not strictly necessary if threshold is tight.
    
    img_out = Image.fromarray(data)
    img_out.save(output_path, "PNG")
    print(f"Processed {output_path}")

try:
    remove_white("c:/medical-equipment-website/assets/products/comen-v8-ai-purewhite.jpg", "c:/medical-equipment-website/assets/products/comen-v8-ai-transparent.png")
    remove_white("c:/medical-equipment-website/assets/products/comen-ax900-ai-purewhite.jpg", "c:/medical-equipment-website/assets/products/comen-ax900-ai-transparent.png")
    remove_white("c:/medical-equipment-website/assets/products/hugemed-vl3d-ai-purewhite.jpg", "c:/medical-equipment-website/assets/products/hugemed-vl3d-ai-transparent.png")
except Exception as e:
    print(f"Error: {e}")
