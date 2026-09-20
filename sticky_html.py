import re

with open('c:/medical-equipment-website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to wrap the contents of accordion-showcase-section in .accordion-sticky-wrapper
pattern = re.compile(r'(<section class="accordion-showcase-section[^>]*>)(.*?)(</section>)', re.DOTALL)

def replacer(match):
    start = match.group(1)
    inner = match.group(2)
    end = match.group(3)
    return start + '\n<div class="accordion-sticky-wrapper">\n<div class="accordion-sticky-inner" style="width: 100%;">\n' + inner + '\n</div>\n</div>\n' + end

content = pattern.sub(replacer, content)

with open('c:/medical-equipment-website/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("HTML updated")
