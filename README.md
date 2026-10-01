# Medical Equipment Website - Desktop Version

This repository contains the purely HTML, CSS, and Vanilla JavaScript implementation for the desktop/laptop version of the Arkon Medical Systems website.

## Features Included

- Built exactly to the OLD UI reference image layout.
- Strictly Desktop-first implementation (optimized for 1280px+). No mobile CSS has been implemented per explicit instructions.
- Adheres to a premium, modern medical aesthetics color scheme (`#075C3A` primary, off-white backgrounds).
- Extensive use of Vanilla JavaScript to dynamically populate data (Categories, Products, Brands, Services, Stats).
- Working "Request a Quote" Modal with frontend validation.
- Working simple equipment Search Dropdown.
- Integrated placeholder variables for WhatsApp and Phone actions.
- No frontend frameworks used (No React, Next.js, Bootstrap, Tailwind, etc.).

## Setup Instructions

1. Clone or download this directory.
2. Open `index.html` in any modern desktop web browser.
3. Because no build tools are used, you can simply open the file directly or use a lightweight local server like VS Code's Live Server.

## File Structure

```
medical-equipment-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

*(Note: Image assets are currently pointing to remote placeholders to ensure the layout looks polished immediately without needing local images. These can be swapped out by changing the `src` attributes or replacing the fallback `onerror` placeholders).*
