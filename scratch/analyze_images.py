import os
from PIL import Image

def analyze_images(folder_path):
    images_info = []
    
    for filename in os.listdir(folder_path):
        if not filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif')):
            continue
            
        file_path = os.path.join(folder_path, filename)
        try:
            with Image.open(file_path) as img:
                width, height = img.size
                file_size_kb = os.path.getsize(file_path) / 1024
                
                # Identify "bad" images based on heuristics
                # 1. Extreme aspect ratios (infographics/banners)
                # 2. Very small dimensions or file size (icons/symbols)
                
                is_suspicious = False
                reason = []
                
                if width > 0 and height > 0:
                    aspect_ratio = width / height
                    if aspect_ratio > 3.0 or aspect_ratio < 0.33:
                        is_suspicious = True
                        reason.append(f"Extreme aspect ratio ({aspect_ratio:.2f})")
                
                if width < 150 and height < 150:
                    is_suspicious = True
                    reason.append(f"Small dimensions ({width}x{height})")
                    
                if file_size_kb < 10:
                    is_suspicious = True
                    reason.append(f"Small file size ({file_size_kb:.2f}KB)")
                    
                images_info.append({
                    "filename": filename,
                    "width": width,
                    "height": height,
                    "size_kb": file_size_kb,
                    "is_suspicious": is_suspicious,
                    "reason": ", ".join(reason)
                })
        except Exception as e:
            print(f"Error opening {filename}: {e}")

    suspicious_images = [img for img in images_info if img["is_suspicious"]]
    print(f"Total images analyzed: {len(images_info)}")
    print(f"Suspicious images found: {len(suspicious_images)}\n")
    
    for img in suspicious_images:
        print(f"{img['filename']} - {img['width']}x{img['height']} ({img['size_kb']:.1f}KB) -> {img['reason']}")

if __name__ == "__main__":
    analyze_images("assets/products")
