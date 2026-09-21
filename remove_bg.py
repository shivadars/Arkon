from PIL import Image
import sys

def remove_white_bg(input_path, output_path, tolerance=25):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # get pixels
    pixels = img.load()
    
    # get color of top left corner as reference background
    bg_color = pixels[0, 0]
    
    # create a mask
    visited = set()
    stack = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    def color_dist(c1, c2):
        return sum(abs(c1[i] - c2[i]) for i in range(3))
        
    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
            
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        visited.add((x, y))
        
        c = pixels[x, y]
        if color_dist(c, bg_color) <= tolerance:
            # make transparent
            pixels[x, y] = (c[0], c[1], c[2], 0)
            
            # add neighbors
            stack.append((x+1, y))
            stack.append((x-1, y))
            stack.append((x, y+1))
            stack.append((x, y-1))

    img.save(output_path)
    print(f"Saved {output_path}")

remove_white_bg(sys.argv[1], sys.argv[2])
