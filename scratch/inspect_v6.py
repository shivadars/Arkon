from bs4 import BeautifulSoup

with open('comen-v6.html', 'r', encoding='utf-8', errors='ignore') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('Images count:', len(soup.find_all('img')))
for i, img in enumerate(soup.find_all('img')):
    print(f"Img {i}: src={img.get('src')} | alt={img.get('alt')}")

print("\n--- Sections / Key Divs ---")
for el in soup.find_all(['section', 'div'], class_=True):
    classes = ' '.join(el.get('class', []))
    if any(k in classes.lower() for k in ['detail', 'product', 'banner', 'content', 'feature', 'pro-']):
        print(f"Tag: {el.name} | class: {classes[:60]}")
