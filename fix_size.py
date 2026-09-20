import re

with open('c:/medical-equipment-website/css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update max-width of container
content = content.replace('max-width: 900px;', 'max-width: 1050px;')

# 2. Update padding of accordion-content to make it taller/wider
content = content.replace('.accordion-content {\n    position: relative;\n    z-index: 2;\n    padding: 32px 40px;\n}', '.accordion-content {\n    position: relative;\n    z-index: 2;\n    padding: 48px 56px;\n}')

# 3. Add max-width and min-height to accordion-body-inner
# Find where .accordion-body-inner is defined
inner_target = '''.accordion-body-inner {
    overflow: hidden;
    padding-top: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}'''
inner_replacement = '''.accordion-body-inner {
    overflow: hidden;
    padding-top: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 60%;
}'''
content = content.replace(inner_target, inner_replacement)

# 4. Add more height to the active body
active_inner_target = '''.accordion-item.active .accordion-body-inner {
    padding-top: 24px;
    opacity: 1;
    transform: translateY(0);
}'''
active_inner_replacement = '''.accordion-item.active .accordion-body-inner {
    padding-top: 32px;
    padding-bottom: 32px;
    opacity: 1;
    transform: translateY(0);
    min-height: 220px;
}'''
content = content.replace(active_inner_target, active_inner_replacement)


with open('c:/medical-equipment-website/css/style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS dimensions updated")
