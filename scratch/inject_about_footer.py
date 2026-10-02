import os

about_path = r"c:\medical-equipment-website\about.html"
index_path = r"c:\medical-equipment-website\index.html"

with open(index_path, "r", encoding="utf-8") as f:
    index_content = f.read()

# Extract footer from index.html
start_tag = '<footer class="footer">'
end_tag = '</footer>'

start_idx = index_content.find(start_tag)
end_idx = index_content.find(end_tag, start_idx) + len(end_tag)

if start_idx != -1 and end_idx != -1:
    footer_html = index_content[start_idx:end_idx]
    
    with open(about_path, "r", encoding="utf-8") as f:
        about_content = f.read()
    
    # Inject before <!-- Quote Modal -->
    target = "<!-- Quote Modal -->"
    if target in about_content and start_tag not in about_content:
        about_content = about_content.replace(target, footer_html + "\n\n    " + target)
        
        with open(about_path, "w", encoding="utf-8") as f:
            f.write(about_content)
        print("Successfully injected footer into about.html")
    else:
        print("Footer already exists or target not found.")
else:
    print("Could not find footer in index.html")
