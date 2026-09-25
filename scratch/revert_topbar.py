import os
import re

files_to_modify = [
    "index.html",
    "about.html",
    "products.html",
    "product-detail.html",
    "product-template.html",
    "v6-v8-ventilator.html"
]

header_actions_insert = """<span class="header-phone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="#0A8F55" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px; margin-top: -2px;">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>+91 98765 43210</span>
                <a href="#" onclick="contactWhatsApp()" class="whatsapp-icon" title="WhatsApp Us">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A8F55" viewBox="0 0 16 16">
                        <path
                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                </a>
                <button class="btn btn-primary" onclick="openQuoteModal()">Enquire Now &rarr;</button>"""

for filepath in files_to_modify:
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove top bar
    content = re.sub(r'<!-- Top Bar -->\s*<div class="top-bar">.*?</div>\s*</div>\s*</div>\s*', '', content, flags=re.DOTALL)
    
    # Restore header actions
    # Find the header-actions div and replace its content (which is currently just the button) with the full content
    content = re.sub(r'(<div class="header-actions">)\s*<button class="btn btn-primary" onclick="openQuoteModal\(\)">Enquire Now &rarr;</button>\s*(</div>)', r'\1\n                ' + header_actions_insert + r'\n            \2', content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Modified {filepath}")
