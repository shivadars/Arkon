import cv2
import numpy as np
import sys

def remove_green(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print("Error reading image")
        return
        
    # Convert BGR to HSV
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # Define range for neon green in HSV
    # Hue for pure green is around 60. OpenCV hue is 0-179.
    lower_green = np.array([40, 100, 100])
    upper_green = np.array([80, 255, 255])
    
    # Create mask of the green background
    mask = cv2.inRange(hsv, lower_green, upper_green)
    
    # Invert the mask: object is white (255), background is black (0)
    mask_inv = cv2.bitwise_not(mask)
    
    # Erode the object mask slightly to kill the 1-pixel green fringe
    kernel = np.ones((3,3), np.uint8)
    mask_inv = cv2.erode(mask_inv, kernel, iterations=1)
    
    # Blur the mask for a soft edge
    mask_inv = cv2.GaussianBlur(mask_inv, (3,3), 0)
    
    # Fix green spill on the object itself:
    # Where mask_inv is high (the object), if the green channel is higher than red and blue,
    # it's likely green spill reflection. Let's cap Green to the max of Red and Blue.
    b, g, r = cv2.split(img)
    max_rb = cv2.max(r, b)
    # Only cap green where it exceeds both R and B
    spill_mask = (g > r) & (g > b)
    g[spill_mask] = max_rb[spill_mask]
    
    # Merge back to RGBA
    rgba = cv2.merge([b, g, r, mask_inv])
    
    cv2.imwrite(output_path, rgba)
    print(f"Removed green screen and saved to {output_path}")

remove_green(sys.argv[1], sys.argv[2])
