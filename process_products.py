import numpy as np
from PIL import Image
import os

def remove_white(input_path, output_path):
    try:
        img = Image.open(input_path).convert('RGBA')
        data = np.array(img)
        r, g, b, a = data.T
        threshold = 240
        white_areas = (r >= threshold) & (g >= threshold) & (b >= threshold)
        data[..., 3][white_areas.T] = 0
        img_out = Image.fromarray(data)
        img_out.save(output_path, 'PNG')
        print(f'Processed {output_path}')
    except Exception as e:
        print(f'Error processing {input_path}: {e}')

images = [
    'k-pro-series-1.png',
    'x8-1.png',
    'k1-1.png',
    'cf5-amp-cf8-1.png',
    'b6-b8-1.png',
    'nc3-1.png',
    'reusable-ureterorenoscope-2.png'
]

base_dir = 'c:/medical-equipment-website/assets/images/products/'
out_dir = 'c:/medical-equipment-website/assets/images/solutions/'

for img_name in images:
    remove_white(base_dir + img_name, out_dir + img_name.replace('.png', '-transparent.png'))
