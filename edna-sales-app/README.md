# EDNA Sales App

A portfolio-quality React + Vite + Tailwind CSS e-commerce web app for **EDNA Food Distribution** — a Montréal-based wholesale seafood, frozen vegetables, and specialty food distributor.

## Features

- 📦 Full product catalogue (200+ SKUs across 5 categories)
- 🔍 Search and filter by category, subcategory, brand
- 🛒 localStorage-powered cart (persists across sessions)
- 📱 WhatsApp Business order flow (wa.me deep link)
- 📊 Admin demo dashboard (stats, charts, orders table)
- 🌐 Responsive, modern UI (mobile-first)
- ⚡ Fast — built with Vite

## Tech Stack

- React 18 + React Router v6
- Vite 5
- Tailwind CSS v3
- Lucide React icons
- localStorage (no backend required)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## ⚠️ Important: WhatsApp Number

Edit `src/config/app.js` and replace the placeholder with the real EDNA WhatsApp Business number:

```js
whatsappNumber: '15141234567'
// Format: country code + number, no +, no spaces, no dashes
// Canada (514) 555-0123 → 15145550123
```

## Adding Prices

All product prices are set to `null` by default (displays "Price on request"). To add prices, edit `src/data/products.js` and set:

```js
price: 42.50,       // base price per case
salePrice: 38.00,   // optional sale price
```

## Folder Structure

```
src/
├── config/         # App config (WhatsApp number, company info)
├── data/           # Product catalogue + categories
├── context/        # Cart state (CartContext)
├── utils/          # WhatsApp helpers, formatting
├── components/
│   ├── layout/     # Navbar, Footer, PageWrapper
│   ├── ui/         # ProductCard, Toast, Badge, FilterChip, etc.
│   └── sections/   # HeroSection, CategoryGrid, FeaturedProducts
└── pages/          # Home, Catalogue, Categories, ProductDetail, Cart, Admin
```

## Future Roadmap

- EDNA Operations Dashboard (invoices, QuickBooks export, supplier tracking)
- Customer login + order history
- Stripe or payment gateway integration
- CMS for product management

---

Built with React · Vite · Tailwind CSS
