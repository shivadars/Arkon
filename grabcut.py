import cv2
import numpy as np
import sys

def remove_bg_grabcut(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print("Failed to read image")
        return

    # Initialize variables for GrabCut
    mask = np.zeros(img.shape[:2], np.uint8)
    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)
    
    h, w = img.shape[:2]
    
    # A small margin bounding box since the background is solid white
    margin = 5
    rect = (margin, margin, w - margin*2, h - margin*2)
    
    # Initialize grabCut with rectangle
    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)
    
    # Additionally, explicitly mark the very bright/white pixels as sure background
    # This helps grabCut not include the white floor shadow!
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    mask[gray > 240] = cv2.GC_BGD # mark pure white as sure background
    
    # Run grabCut again with mask
    cv2.grabCut(img, mask, None, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_MASK)
    
    # Final mask
    mask2 = np.where((mask == cv2.GC_BGD) | (mask == cv2.GC_PR_BGD), 0, 1).astype('uint8')
    
    # Soften the mask to avoid jagged edges
    alpha = mask2 * 255
    alpha = cv2.GaussianBlur(alpha, (3, 3), 0)
    
    # Create RGBA
    b, g, r = cv2.split(img)
    rgba = cv2.merge([b, g, r, alpha])
    
    cv2.imwrite(output_path, rgba)
    print(f"Saved grabcut to {output_path}")

if __name__ == "__main__":
    remove_bg_grabcut(sys.argv[1], sys.argv[2])
