# LeeJoys Achaar website

Plain HTML, CSS and JavaScript. No build step, no installs.

## Open it
- VS Code: open this folder, install the "Live Server" extension, right-click index.html > Open with Live Server.
- Or double-click index.html. Google Fonts need an internet connection.

## Pages (each is its own file)
- index.html - Home
- products.html - Products
- services.html - Services (water refill, eggs, snacks, bulk)
- story.html - Our story
- visit.html - Visit us (hours, map illustration, directions)
- contact.html - Contact us (WhatsApp, call, email, enquiry form)

## Shared files
- css/styles.css - all styling. Colours are the variables at the top (:root).
- js/main.js - mobile menu, images, card content (HEAT, MORE, SERV, etc.), contact rows (CT), open/closed status, enquiry form.
- images/ - photos and logos (logo-mascot.png, logo-badge.png). Replace a file, keeping its name, to swap a picture.

## Common edits
- The navigation and footer are repeated in every .html file. If you change a menu item, phone number or hours, change it in all six files (use Find in Files, Ctrl+Shift+F).
- Water refill / eggs / snack photos: save the picture in images/, add its path to the IMG list at the top of js/main.js, then give that item i:"yourkey" (in SERV or MORE) instead of k:"water".
- Phone, email, address: search for 072 800 1306, leejoysatchaar@gmail.com and Woltemade.
- Opening hours: the hours lists in index.html, visit.html and the footer, and the open/closed check at the bottom of js/main.js.

## Publishing on GitHub Pages (free hosting)
1. Create a new repository on github.com and upload these files (index.html must be at the top level of the repository).
2. In the repository go to Settings > Pages.
3. Under "Build and deployment", set Source to "Deploy from a branch", choose the main branch and the / (root) folder, then Save.
4. After a minute the site is live at https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
