import json
import urllib.request
import os
import re

# We will read data.js, find all urls matching https://alioss.comen.com/cms-v2/...
# download them to assets/products/
# and replace the URLs in data.js with assets/products/...

DATA_FILE = 'js/data.js'
ASSETS_DIR = 'assets/products'

if not os.path.exists(ASSETS_DIR):
    os.makedirs(ASSETS_DIR)

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all Comen URLs
url_pattern = re.compile(r'https://alioss\.comen\.com/cms-v2/([^"\'\s]+)')
urls = set(url_pattern.findall(content))

print(f"Found {len(urls)} unique images/PDFs to download.")

for filename in urls:
    full_url = f"https://alioss.comen.com/cms-v2/{filename}"
    local_path = os.path.join(ASSETS_DIR, filename)
    
    if not os.path.exists(local_path):
        print(f"Downloading {filename}...")
        try:
            req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
                out_file.write(response.read())
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
    else:
        print(f"Skipping {filename} (already downloaded)")
        
    # Replace in data.js content
    content = content.replace(full_url, f"../../assets/products/{filename}")

# Save the updated data.js
with open(DATA_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone! Downloaded files and updated js/data.js to point to local files.")
print("Run `node build.js` again to update your HTML files with the new local image paths!")
