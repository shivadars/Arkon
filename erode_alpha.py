import cv2
import numpy as np
import sys

def erode_edges(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    if img is None or img.shape[2] != 4:
        print("Invalid image or no alpha channel.")
        return

    alpha = img[:, :, 3]
    
    # Create kernel for erosion (5x5 eats about 2 pixels inward)
    kernel = np.ones((5, 5), np.uint8)
    eroded_alpha = cv2.erode(alpha, kernel, iterations=1)
    
    # Add a slight blur to soften the harsh cut
    eroded_alpha = cv2.GaussianBlur(eroded_alpha, (3,3), 0)
    
    # Also, we can darken the very edge pixels of the RGB channels to kill remaining white
    # by applying a slight multiply, but erosion should be enough.
    
    img[:, :, 3] = eroded_alpha

    cv2.imwrite(image_path, img)
    print(f"Eroded {image_path}")

erode_edges(sys.argv[1])
