from PIL import Image
import sys

def crop_transparent(input_path):
    img = Image.open(input_path)
    
    # getbbox() returns the bounding box of the non-zero alpha pixels in the image
    bbox = img.getbbox()
    
    if bbox:
        img_cropped = img.crop(bbox)
        img_cropped.save(input_path)
        print(f"Cropped {input_path} to {bbox}")
    else:
        print(f"Image {input_path} is completely transparent or couldn't find bbox")

crop_transparent(sys.argv[1])
