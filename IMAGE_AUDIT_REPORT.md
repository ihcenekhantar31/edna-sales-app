# EDNA Sales App — Image Audit Report
Generated: 2026-07-02 | Source: src/data/productImageMap.js

## Status Summary

| Status   | Meaning | UI Behavior |
|----------|---------|-------------|
| exact    | Confirmed correct product image | Shows product photo |
| fallback | No confirmed image | Shows category fallback photo |
| missing  | No suitable image at all | Shows "Image coming soon" placeholder |

**Rule: wrong image is worse than missing image.**

---

## EXACT — Confirmed Images

### Shrimp
| ID | Product | Image File |
|----|---------|------------|
| shp-001 | Cooked Broken Tail-Off 100/200 | shrimp-cooked-broken.jpg |
| shp-003 | Cooked Tail-Off 40/60 | shrimp-cooked-tailoff.jpg |
| shp-006 | Sea Ray Cooked Tail-On 8/12 | shrimp-cooked-tailon.jpg |
| shp-007 | Sea Ray Cooked Tail-On 16/20 | shrimp-cooked-tailon-2.jpg |
| shp-011 | Sea Ray Raw India 8/12 | shrimp-raw-pkg.jpg |
| shp-018 | Sea Ray Raw Vietnam 8/12 | shrimp-raw-plate.jpg |
| shp-032 | Amora Mer 24×180g | shrimp-amora-180g.jpg |
| shp-033 | Amora Mer 12×340g | shrimp-amora-340g.jpg |
| shp-034 | Amora Mer 10×600g | shrimp-amora-600g.jpg |

### Fish & Seafood
| ID | Product | Image File | Note |
|----|---------|------------|------|
| sea-001 | Scallops | tilapia-fillet.jpg | File mislabeled; content confirmed by user |
| sea-012 | Squid Rings 20×1lb | p5r1c1.jpg | |
| sea-013 | Squid Rings 10×2lb | p5r1c2.jpg | |
| sea-014 | Breaded Squid Rings 12×400g | p5r1c3.jpg | |
| sea-015 | Breaded Squid Rings 10×2lb | p5r1c4.jpg | |
| sea-016 | Cooked Whole Clams | p5r2c1.jpg | |
| sea-017 | Cooked Mussel Meat | p5r2c2.jpg | |
| sea-018 | Frog Legs 6/8 | p5r2c3.jpg | Confirmed by user |
| sea-021 | Tuna Loin | p5r2c4.jpg | Confirmed by user |
| sea-029 | Amora Seafood Mix | seafood-mix-amora.jpg | |

### Frozen Vegetables
All Hala (veg-001–009), Roselle (veg-010–015), SH (veg-016–021), Magic Farms (veg-022–025, 027–029), and O'Là (veg-030–034) confirmed from catalogue.

### Prepared Foods
| ID | Product | Image File |
|----|---------|------------|
| pre-001 | Ocean Mama Shrimp Gyoza | p10_01.jpg |
| pre-002 | Tao's Kitchen Dumplings | p10_02.jpg |
| pre-007 | Spring Home TYJ Pastry 6" | p10_06.jpg |
| pre-010 | Supreme Pierogies | p10_03.jpg |
| pre-013–019 | Royal Meats + Minar Paratha | (individual files) |

### Confectionery
All 27 products (con-001–027) confirmed from catalogue pages 13–19.

---

## FALLBACK — Category Image Shown

| Category | IDs | Reason |
|----------|-----|--------|
| shrimp | shp-002, 004, 005, 008–010, 012–017, 019–020, 028–029, 031, 041, 053 | Size/pack variants — no distinct image |
| seafood | sea-002, 003, 019, 020, 030 | Visual content not confirmed by user |
| frozen-vegetables | veg-003, 035, 036 | Shares confirmed image or unverified |
| prepared-foods | pre-003, 004, 008, 009, 011 | Variant of confirmed product |

---

## MISSING — "Image Coming Soon" Shown

| ID | Product | Reason |
|----|---------|--------|
| shp-021, 022, 023 | Black Tiger Shrimp | Not in EDNA catalogue |
| shp-024, 025 | Wild Argentina Shrimp | Not in EDNA catalogue |
| shp-026 | Denmark Cold Water Shrimp | Not in EDNA catalogue |
| shp-027, 030 | Butterfly Shrimp | Not in EDNA catalogue |
| shp-035 | Tempura Shrimp | Not in EDNA catalogue |
| sea-004–011 | Pangasius, Smoked Trout, Smoked Salmon, Salmon Chile, Doré, Tilapia Whole, Sole, Basa | Positional PDF crops — never visually confirmed |
| sea-022–028 | King Octopus, Baby Octopus, Baby Calamari, Cut Crab, Baby Cuttlefish | Positional PDF crops — never visually confirmed |
| pre-005, 006 | Tastie Spring Rolls | Positional crop unconfirmed |
| pre-012 | Khansaama Puff Pastry | Positional crop unconfirmed |

---

## How to Promote a "Missing" Product

1. Visually confirm the crop matches the product in the catalogue
2. Open `src/data/productImageMap.js`
3. Find the product entry
4. Set `imageStatus: 'exact'` and `image: '/images/products/FILENAME.jpg'`

Admin page: `/admin/image-audit` (requires admin role)
