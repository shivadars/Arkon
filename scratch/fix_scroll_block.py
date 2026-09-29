with open("js/script.js", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    "contactSection.scrollIntoView({ behavior: 'smooth' });", 
    "contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });"
)

with open("js/script.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated scrollIntoView block behavior")
