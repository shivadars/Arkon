with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

# Truncate at line 1120
clean_lines = lines[:1120]

# Append the correct code
clean_lines.append("\n// Ensure contact links always scroll to the section, even if the URL hash is already #contact\n")
clean_lines.append("document.addEventListener('DOMContentLoaded', () => {\n")
clean_lines.append("    const contactSection = document.getElementById('contact');\n")
clean_lines.append("    if (!contactSection) return;\n\n")
clean_lines.append("    const contactLinks = document.querySelectorAll('a[href=\"#contact\"], a[href=\"index.html#contact\"]');\n")
clean_lines.append("    contactLinks.forEach(link => {\n")
clean_lines.append("        link.addEventListener('click', (e) => {\n")
clean_lines.append("            // Only intercept if we are already on the homepage\n")
clean_lines.append("            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {\n")
clean_lines.append("                e.preventDefault(); // Prevent native jump so we can always force a smooth scroll\n")
clean_lines.append("                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });\n")
clean_lines.append("                history.pushState(null, null, '#contact'); // Update URL without jumping\n")
clean_lines.append("            }\n")
clean_lines.append("        });\n")
clean_lines.append("    });\n")
clean_lines.append("});\n")

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.writelines(clean_lines)

print("File successfully truncated and repaired!")
