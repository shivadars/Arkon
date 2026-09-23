import json

with open('comen_text_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total products in data: {len(data)}")

sample_products = [p for p in data if 'v6' in str(p.get('id_name', '')).lower() or 'nc3' in str(p.get('id_name', '')).lower()]
if not sample_products:
    sample_products = data[:3]

for p in sample_products:
    print(f"\nProduct: {p.get('id_name')}")
    texts = p.get('extracted_text', [])
    print(f"Number of text blocks/paragraphs: {len(texts)}")
    
    total_words = sum(len(t.split()) for t in texts)
    print(f"Total words of content: {total_words}")
    
    print("Sample blocks:")
    for i, t in enumerate(texts[:10]):
        print(f"  [{i}]: {t[:80]}...")
