# ClusTea — Premium Commercial Website & Client Acquisition Prototype

A modern commercial website built for **ClusTea**, a tea shop business with three branches in **Tiruppur, Tamil Nadu**.

> **Demo Presentation Concept:** Developed as a high-impact proposal for presentation to the ClusTea business owner to showcase their brand's digital potential.

---

## 🎨 Brand Identity

- **Brand:** ClusTea
- **Tagline:** *Tea clusters for all times*
- **Emblem:** Orange steaming tea glass inside a circular white emblem (`/images/clustea-logo.svg`)
- **Background:** Dark charcoal (`#111317` / `#16191f`)
- **Typography:** Crisp white (`#FFFFFF`, `#F3F4F6`) with Plus Jakarta Sans & Outfit
- **Primary Accent:** Warm tea orange (`#FF7009`)
- **Secondary Accent:** Cream (`#F7EFE3`)

---

## 📸 Real Shop Photographs Used

All supplied photographs are professionally cropped and presented in their native aspect ratios in `/public/images/`:
- `clustea-storefront.jpg` — Flagship storefront in Tiruppur featured in Hero and Gallery
- `clustea-counter.jpg` — Steaming samovars, tumblers, and barista pouring tea in Gallery & About
- `clustea-menu.jpg` — Original in-store menu board (August 2025) viewable in the Menu Lightbox
- `clustea-snacks.jpg` — Bakery glass display with puffs and vintage biscuit jars in Snacks

---

## 🍵 Actual Menu Dataset (`src/data/menuData.js`)

Extracted from the August 2025 in-store board. Easily editable:

| Category | Items & Prices |
|---|---|
| **Milk Teas** | Plain (₹15), Ginger (₹20), Masala (₹20), Cardamom (₹20), Chocolate (₹20), Ginger + Cardamom (₹20), Rose (₹20) |
| **Black Teas** | Plain (₹15), Lemon (₹20), Ginger (₹20), Ginger + Lemon (₹20) |
| **Special Drinks** | Badam Milk (₹30), Rose Milk (₹30), Somabanam (₹20) |
| **Green Teas** | Plain (₹20), Hibiscus (₹20), Mint (₹20), Blue Tea - Butterfly Pea (₹30) |
| **Herbal Busters** | Herbal Buster (₹15), Herbal Milk Buster (₹20), Herbal Plus Buster (₹20) |
| **Add-Ons** | Honey, Jaggery (Nattu Sakkarai), Brown Sugar, Sugar-Free Option *(Pending price confirmation)* |
| **Fresh Puffs** | Mushroom Puff (₹25), Egg Puff (₹25) |
| **Biscuits (Jar)** | Coconut, Zeera, Chocolate, Pineapple, Peanut, Fruit Biscuits *(Prices pending owner confirmation)* |

---

## 📍 Three Branch Locations in Tiruppur (`src/data/branchesData.js`)

1. **PN Road Flagship:** Opposite Sri Sai School, Laxmi Nagar / Kongu Nagar, Tiruppur — 641602
2. **Kumaran Road Branch:** 34/99, Kumaran Road, Near Shiva Textiles, Tiruppur — 641601
3. **Karuvampalayam Branch:** Karuvampalayam Main Road, Tiruppur — 641604

*All branches feature opening hours (6:00/6:30 AM – 8:30/9:00 PM), live "Open Now" badges, directions via Google Maps, and editable contact placeholders.*

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```

### 3. Build for Production (Vercel Ready)
```bash
npm run build
```

---

## 📁 Project Architecture

```text
├── public/
│   └── images/
│       ├── clustea-logo.svg           # Scalable SVG brand emblem
│       ├── clustea-storefront.jpg     # Shop exterior
│       ├── clustea-counter.jpg        # Barista & counter
│       ├── clustea-menu.jpg           # Menu photograph artifact
│       └── clustea-snacks.jpg         # Bakery puffs & biscuits
├── src/
│   ├── data/
│   │   ├── menuData.js               # Structured editable menu dataset
│   │   └── branchesData.js           # 3 Tiruppur branches dataset
│   ├── components/
│   │   ├── ClientDemoNotice.jsx      # Proposal badge & disclaimer modal
│   │   ├── Navbar.jsx                # Responsive navbar with drawer
│   │   ├── Hero.jsx                  # Hero section with storefront photo
│   │   ├── BrandIntro.jsx            # 4 brand pillars & philosophy
│   │   ├── MenuSection.jsx           # Interactive category tabs & lightbox
│   │   ├── SnacksShowcase.jsx        # Puffs & biscuit jars showcase
│   │   ├── BranchesSection.jsx       # 3 branch cards & maps integration
│   │   ├── GallerySection.jsx        # Full image gallery with lightbox
│   │   ├── AboutSection.jsx          # Narrative about Tiruppur tea culture
│   │   ├── ContactSection.jsx        # Bulk office flask catering form
│   │   └── Footer.jsx                # Brand links, timings & legal notice
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                     # Tailwind & custom glow/steam styling
├── package.json
├── tailwind.config.js
└── vite.config.js
```

