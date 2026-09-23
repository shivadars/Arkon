from PIL import Image
import sys

def remove_floor(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # The floor shadow is typically a light grey.
    # We will flood-fill from the entire bottom edge, with a high tolerance for light grey/white colors.
    
    visited = set()
    stack = []
    
    # Add all bottom edge pixels
    for x in range(width):
        stack.append((x, height - 1))
        
    # We also add the left and right edges just in case
    for y in range(height):
        stack.append((0, y))
        stack.append((width - 1, y))
        
    def is_floor(c):
        # Floor is usually bright grey or white (r, g, b > 200) and low saturation
        r, g, b, a = c
        if a == 0: return True
        if r > 180 and g > 180 and b > 180:
            return True
        return False

    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
            
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        visited.add((x, y))
        
        c = pixels[x, y]
        # If it's already transparent, we can pass through it
        if c[3] == 0:
            stack.append((x+1, y))
            stack.append((x-1, y))
            stack.append((x, y-1)) # go up
            stack.append((x, y+1))
        elif is_floor(c):
            # Make it transparent
            pixels[x, y] = (c[0], c[1], c[2], 0)
            stack.append((x+1, y))
            stack.append((x-1, y))
            stack.append((x, y-1)) # go up
            stack.append((x, y+1))

    img.save(output_path)
    print(f"Removed floor from {output_path}")

remove_floor(sys.argv[1], sys.argv[2])
