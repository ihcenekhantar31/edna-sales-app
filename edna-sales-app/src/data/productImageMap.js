/**
 * productImageMap — single source of truth for product images.
 *
 * imageStatus:
 *   "exact"    — confirmed correct image for this specific product
 *   "fallback" — no confirmed product image; UI shows category fallback
 *   "missing"  — no suitable image at all; UI shows "Image coming soon"
 *
 * Rule: wrong image is worse than missing image.
 * Positional crops that have not been visually confirmed are "missing".
 */

const P = '/images/products/'

// ─── Category fallback images ─────────────────────────────────────────────────
export const CATEGORY_FALLBACKS = {
  shrimp:              '/images/categories/shrimp.jpg',
  seafood:             '/images/categories/seafood.jpg',
  'frozen-vegetables': '/images/categories/frozen-vegetables.jpg',
  'prepared-foods':    '/images/categories/prepared-foods.jpg',
  confectionery:       '/images/categories/confectionery.jpg',
}

// ─── Product image map ────────────────────────────────────────────────────────
export const productImageMap = {

  // ══════════════════════════════════════════════════════════════════════
  // SHRIMP
  // ══════════════════════════════════════════════════════════════════════

  // Cooked Broken Tail-Off — confirmed (catalogue p.1)
  'shp-001': { image: P+'shrimp-cooked-broken.jpg',   imageStatus:'exact',    imageNote:'Catalogue p.1 — cooked broken tail-off 100/200' },
  'shp-041': { image: null,                            imageStatus:'fallback', imageNote:'Triple Crown variant — no distinct catalogue image' },
  'shp-053': { image: null,                            imageStatus:'fallback', imageNote:'Amora Mer tail-off — no distinct catalogue image' },

  // Cooked Tail-Off — confirmed (catalogue p.1)
  'shp-003': { image: P+'shrimp-cooked-tailoff.jpg',  imageStatus:'exact',    imageNote:'Catalogue p.1 — cooked tail-off 40/60' },
  'shp-004': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-003 — no distinct image' },
  'shp-005': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-003 — no distinct image' },
  'shp-002': { image: null,                            imageStatus:'fallback', imageNote:'Different pack format — no distinct image' },

  // Cooked Tail-On Sea Ray — confirmed (catalogue p.2)
  'shp-006': { image: P+'shrimp-cooked-tailon.jpg',   imageStatus:'exact',    imageNote:'Catalogue p.2 — Sea Ray cooked tail-on 8/12' },
  'shp-007': { image: P+'shrimp-cooked-tailon-2.jpg', imageStatus:'exact',    imageNote:'Catalogue p.2 — Sea Ray cooked tail-on 16/20' },
  'shp-008': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-006 — no distinct image' },
  'shp-009': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-007 — no distinct image' },
  'shp-010': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-006 — no distinct image' },

  // Amora Mer Cooked Tail-On — confirmed (catalogue p.3)
  'shp-032': { image: P+'shrimp-amora-180g.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.3 — Amora Mer 24×180g' },
  'shp-033': { image: P+'shrimp-amora-340g.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.3 — Amora Mer 12×340g' },
  'shp-034': { image: P+'shrimp-amora-600g.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.3 — Amora Mer 10×600g' },

  // Raw White India — confirmed (catalogue p.2)
  'shp-011': { image: P+'shrimp-raw-pkg.jpg',         imageStatus:'exact',    imageNote:'Catalogue p.2 — Sea Ray Raw India 8/12' },
  'shp-012': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-011 — no distinct image' },
  'shp-013': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-011 — no distinct image' },
  'shp-014': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-011 — no distinct image' },
  'shp-015': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-011 — no distinct image' },
  'shp-016': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-011 — no distinct image' },
  'shp-017': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-011 — no distinct image' },
  'shp-028': { image: null,                            imageStatus:'fallback', imageNote:'Amora Mer raw easy peel — no distinct image' },
  'shp-029': { image: null,                            imageStatus:'fallback', imageNote:'Amora Mer raw easy peel — no distinct image' },

  // Raw White Vietnam — confirmed (catalogue p.2)
  'shp-018': { image: P+'shrimp-raw-plate.jpg',       imageStatus:'exact',    imageNote:'Catalogue p.2 — Sea Ray Raw Vietnam 8/12' },
  'shp-019': { image: null,                            imageStatus:'fallback', imageNote:'Different size of shp-018 — no distinct image' },
  'shp-020': { image: null,                            imageStatus:'fallback', imageNote:'Raw peeled tail-off — no distinct image' },

  // Black Tiger — NOT in this catalogue
  'shp-021': { image: null,                            imageStatus:'missing',  imageNote:'Black Tiger not in EDNA catalogue — needs manual upload' },
  'shp-022': { image: null,                            imageStatus:'missing',  imageNote:'Black Tiger not in EDNA catalogue — needs manual upload' },
  'shp-023': { image: null,                            imageStatus:'missing',  imageNote:'Black Tiger not in EDNA catalogue — needs manual upload' },

  // Argentina — NOT confirmed
  'shp-024': { image: null,                            imageStatus:'missing',  imageNote:'Wild Argentina — needs catalogue upload' },
  'shp-025': { image: null,                            imageStatus:'missing',  imageNote:'Wild Argentina — needs catalogue upload' },

  // Cold Water — NOT confirmed
  'shp-026': { image: null,                            imageStatus:'missing',  imageNote:'Denmark Cold Water — needs catalogue upload' },

  // Butterfly — NOT confirmed
  'shp-027': { image: null,                            imageStatus:'missing',  imageNote:'Wild Butterfly Argentina — needs catalogue upload' },
  'shp-030': { image: null,                            imageStatus:'missing',  imageNote:'Butterfly India — needs catalogue upload' },
  'shp-031': { image: null,                            imageStatus:'fallback', imageNote:'Butterfly Vietnam — no distinct image' },

  // Tempura — NOT in this catalogue
  'shp-035': { image: null,                            imageStatus:'missing',  imageNote:'Tempura shrimp not in EDNA catalogue — needs manual upload' },

  // ══════════════════════════════════════════════════════════════════════
  // FISH & SEAFOOD
  // ══════════════════════════════════════════════════════════════════════

  // Confirmed by user (file content visually verified)
  'sea-001': { image: P+'tilapia-fillet.jpg',          imageStatus:'exact',    imageNote:'Catalogue p.4 r1 — Scallops confirmed by user (file mislabeled)' },
  'sea-029': { image: P+'seafood-mix-amora.jpg',       imageStatus:'exact',    imageNote:'Catalogue p.4 r1 — Amora Seafood Mix confirmed' },

  // Tilapia — content analysis only, not user-confirmed → fallback
  'sea-002': { image: null,                            imageStatus:'fallback', imageNote:'Tilapia — crop visual content unconfirmed' },
  'sea-003': { image: null,                            imageStatus:'fallback', imageNote:'Tilapia 16×700g — shares unconfirmed crop' },

  // Sea Ray Seafood Mix — content analysis only → fallback
  'sea-030': { image: null,                            imageStatus:'fallback', imageNote:'Sea Ray Seafood Mix — crop visual content unconfirmed' },

  // Page 4 rows 2–3 positional crops — never visually confirmed → MISSING
  'sea-004': { image: null,                            imageStatus:'missing',  imageNote:'Pangasius — positional crop unconfirmed; needs visual check' },
  'sea-005': { image: null,                            imageStatus:'missing',  imageNote:'Smoked Trout — positional crop unconfirmed; needs visual check' },
  'sea-006': { image: null,                            imageStatus:'missing',  imageNote:'Smoked Salmon — positional crop unconfirmed; needs visual check' },
  'sea-007': { image: null,                            imageStatus:'missing',  imageNote:'Salmon Fillet Chile — positional crop unconfirmed; needs visual check' },
  'sea-008': { image: null,                            imageStatus:'missing',  imageNote:'Doré Fillets — positional crop unconfirmed; needs visual check' },
  'sea-009': { image: null,                            imageStatus:'missing',  imageNote:'Tilapia Whole — positional crop unconfirmed; needs visual check' },
  'sea-010': { image: null,                            imageStatus:'missing',  imageNote:'Sole Fillets — positional crop unconfirmed; needs visual check' },
  'sea-011': { image: null,                            imageStatus:'missing',  imageNote:'Basa Fillet — positional crop unconfirmed; needs visual check' },

  // Page 5 row 1 — squid (confirmed)
  'sea-012': { image: P+'p5r1c1.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r1c1 — Squid Rings 20×1lb' },
  'sea-013': { image: P+'p5r1c2.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r1c2 — Squid Rings 10×2lb' },
  'sea-014': { image: P+'p5r1c3.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r1c3 — Breaded Squid Rings 12×400g' },
  'sea-015': { image: P+'p5r1c4.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r1c4 — Breaded Squid Rings 10×2lb' },

  // Page 5 row 2 — confirmed
  'sea-016': { image: P+'p5r2c1.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c1 — Cooked Whole Clams' },
  'sea-017': { image: P+'p5r2c2.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c2 — Cooked Mussel Meat' },
  'sea-018': { image: P+'p5r2c3.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c3 — Frog Legs 6/8 confirmed' },
  'sea-019': { image: null,                            imageStatus:'fallback', imageNote:'Frog Legs 8/12 — shares 6/8 image, no separate catalogue image' },
  'sea-020': { image: null,                            imageStatus:'fallback', imageNote:'Frog Legs 13/15 — shares 6/8 image, no separate catalogue image' },
  'sea-021': { image: P+'p5r2c4.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c4 — Tuna Loin confirmed by user' },

  // Page 5 row 3 — positional crops, unconfirmed → MISSING
  'sea-022': { image: null,                            imageStatus:'missing',  imageNote:'King Octopus T2 — positional crop unconfirmed' },
  'sea-023': { image: null,                            imageStatus:'missing',  imageNote:'King Octopus T3 — positional crop unconfirmed' },
  'sea-024': { image: null,                            imageStatus:'missing',  imageNote:'Baby Octopus — positional crop unconfirmed' },
  'sea-025': { image: null,                            imageStatus:'missing',  imageNote:'Baby Calamari — no confirmed image' },
  'sea-026': { image: null,                            imageStatus:'missing',  imageNote:'Cut Crab 3/5 — positional crop unconfirmed' },
  'sea-027': { image: null,                            imageStatus:'missing',  imageNote:'Cut Crab 5/8 — positional crop unconfirmed' },
  'sea-028': { image: null,                            imageStatus:'missing',  imageNote:'Baby Cuttlefish — positional crop unconfirmed' },

  // ══════════════════════════════════════════════════════════════════════
  // FROZEN VEGETABLES — all confirmed in rounds 1–2
  // ══════════════════════════════════════════════════════════════════════

  // Hala (catalogue p.6)
  'veg-001': { image: P+'mixed-vegetables.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Mixed Vegetables' },
  'veg-002': { image: P+'okra.jpg',                    imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Okra Zero' },
  'veg-003': { image: null,                            imageStatus:'fallback', imageNote:'Okra Excellent — no distinct image from Okra Zero' },
  'veg-004': { image: P+'green-peas.jpg',              imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Frozen Peas' },
  'veg-005': { image: P+'spinach.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Spinach Minced' },
  'veg-006': { image: P+'molokhia.jpg',                imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Molokhia Minced' },
  'veg-007': { image: P+'artichoke.jpg',               imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Artichoke Bottoms' },
  'veg-008': { image: P+'cauliflower.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Cauliflower' },
  'veg-009': { image: P+'broccoli.jpg',                imageStatus:'exact',    imageNote:'Catalogue p.6 — Hala Broccoli' },

  // Roselle (catalogue p.7)
  'veg-010': { image: P+'strawberry.jpg',              imageStatus:'exact',    imageNote:'Catalogue p.7 — Roselle Strawberry' },
  'veg-011': { image: P+'mango.jpg',                   imageStatus:'exact',    imageNote:'Catalogue p.7 — Roselle Mango' },
  'veg-012': { image: P+'pomegranate.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.7 — Roselle Pomegranate Seeds' },
  'veg-013': { image: P+'spinach-leaf.jpg',            imageStatus:'exact',    imageNote:'Catalogue p.7 — Roselle Spinach' },
  'veg-014': { image: P+'mixed-veg-roselle.jpg',       imageStatus:'exact',    imageNote:'Catalogue p.7 — Roselle Mixed Vegetables' },
  'veg-015': { image: P+'green-peas-roselle.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.7 — Roselle Green Peas' },

  // SH (catalogue p.8)
  'veg-016': { image: P+'mixed-veg-3way.jpg',          imageStatus:'exact',    imageNote:'Catalogue p.8 — SH 3-Way Mixed Vegetables' },
  'veg-017': { image: P+'broad-beans.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.8 — SH Broad Beans' },
  'veg-018': { image: P+'chopped-spinach.jpg',         imageStatus:'exact',    imageNote:'Catalogue p.8 — SH Chopped Spinach' },
  'veg-019': { image: P+'sh-corn.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.8 — SH Frozen Corn (confirmed round 2)' },
  'veg-020': { image: P+'sh-chili.jpg',                imageStatus:'exact',    imageNote:'Catalogue p.8 — SH Red Chili (confirmed round 2)' },
  'veg-021': { image: P+'sh-greenpeas.jpg',            imageStatus:'exact',    imageNote:'Catalogue p.8 — SH Green Peas (confirmed round 2)' },

  // Magic Farms (catalogue p.9)
  'veg-022': { image: P+'broccoli-mf.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.9 — Magic Farms Broccoli' },
  'veg-023': { image: P+'mixed-veg-mf.jpg',            imageStatus:'exact',    imageNote:'Catalogue p.9 — Magic Farms Mixed Vegetables' },
  'veg-024': { image: P+'green-peas-mf.jpg',           imageStatus:'exact',    imageNote:'Catalogue p.9 — Magic Farms Green Peas' },
  'veg-025': { image: P+'green-beans.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.9 — Magic Farms Cut Green Beans' },
  'veg-027': { image: P+'artichoke-mf.jpg',            imageStatus:'exact',    imageNote:'Catalogue p.9 — Magic Farms Artichoke Bottoms' },
  'veg-028': { image: P+'french-fries.jpg',            imageStatus:'exact',    imageNote:"Catalogue p.9 — Magic Farms Fries 10×1kg" },
  'veg-029': { image: P+'french-fries-bulk.jpg',       imageStatus:'exact',    imageNote:"Catalogue p.9 — Magic Farms Fries 4×2.5kg" },

  // O'Là (catalogue p.10)
  'veg-030': { image: P+'artichoke-ola.jpg',           imageStatus:'exact',    imageNote:"Catalogue p.10 — O'Là Artichoke Bottoms" },
  'veg-031': { image: P+'spinach-ola.jpg',             imageStatus:'exact',    imageNote:"Catalogue p.10 — O'Là Chopped Spinach" },
  'veg-032': { image: P+'molokhia-ola.jpg',            imageStatus:'exact',    imageNote:"Catalogue p.10 — O'Là Minced Molokheya" },
  'veg-033': { image: P+'okra-ola.jpg',                imageStatus:'exact',    imageNote:"Catalogue p.10 — O'Là Okra Zero" },
  'veg-034': { image: P+'french-fries-ola.jpg',        imageStatus:'exact',    imageNote:"Catalogue p.10 — O'Là Fries 10×1kg" },
  'veg-035': { image: null,                            imageStatus:'fallback', imageNote:"O'Là Fries 4×2.5kg — no distinct image from 10×1kg" },
  'veg-036': { image: null,                            imageStatus:'fallback', imageNote:"O'Là Peas — no distinct catalogue image confirmed" },

  // ══════════════════════════════════════════════════════════════════════
  // PREPARED & READY FOODS
  // ══════════════════════════════════════════════════════════════════════

  // Confirmed
  'pre-001': { image: P+'p10_01.jpg',                  imageStatus:'exact',    imageNote:'Catalogue p.11 — Ocean Mama Shrimp Gyoza' },
  'pre-002': { image: P+'p10_02.jpg',                  imageStatus:'exact',    imageNote:"Catalogue p.11 — Tao's Kitchen Dumplings" },
  'pre-003': { image: null,                            imageStatus:'fallback', imageNote:'Thai Chicken variant of pre-002 — no distinct image' },
  'pre-004': { image: null,                            imageStatus:'fallback', imageNote:'Teriyaki Chicken variant of pre-002 — no distinct image' },

  // Spring Rolls — positional crop, not confirmed → MISSING
  'pre-005': { image: null,                            imageStatus:'missing',  imageNote:'Tastie Vegetable Spring Roll — image unconfirmed; needs visual check' },
  'pre-006': { image: null,                            imageStatus:'missing',  imageNote:'Tastie Spring Roll Sweet & Sour — image unconfirmed; needs visual check' },

  // Spring Home Pastry — confirmed (TYJ pastry image)
  'pre-007': { image: P+'p10_06.jpg',                  imageStatus:'exact',    imageNote:'Catalogue p.11 — Spring Home TYJ Pastry 6" confirmed' },
  'pre-008': { image: null,                            imageStatus:'fallback', imageNote:'Spring Home Pastry 8.5" — shares pre-007 image' },
  'pre-009': { image: null,                            imageStatus:'fallback', imageNote:'Spring Home Pastry 10" — shares pre-007 image' },

  // Supreme Pierogies — confirmed by user
  'pre-010': { image: P+'p10_03.jpg',                  imageStatus:'exact',    imageNote:'Catalogue p.11 upper-right — Pierogies confirmed by user' },
  'pre-011': { image: null,                            imageStatus:'fallback', imageNote:'Pierogies Broccoli variant — shares pre-010 image' },

  // Puff Pastry — positional crop, not confirmed → MISSING
  'pre-012': { image: null,                            imageStatus:'missing',  imageNote:'Khansaama Puff Pastry — image unconfirmed; needs visual check' },

  // Royal Meats + Minar Paratha — confirmed
  'pre-013': { image: P+'beef-burger.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.12 — Royal Meats Beef Burger' },
  'pre-014': { image: P+'beef-lamb-burger.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.12 — Royal Meats Beef & Lamb Burger' },
  'pre-015': { image: P+'chicken-burger.jpg',          imageStatus:'exact',    imageNote:'Catalogue p.12 — Royal Meats Chicken Burger' },
  'pre-016': { image: P+'sausage-chicken.jpg',         imageStatus:'exact',    imageNote:'Catalogue p.12 — Royal Meats Chicken Sausage' },
  'pre-017': { image: P+'sausage-beef-lamb.jpg',       imageStatus:'exact',    imageNote:'Catalogue p.12 — Royal Meats Beef & Lamb Sausage' },
  'pre-018': { image: P+'paratha-5pcs.jpg',            imageStatus:'exact',    imageNote:'Catalogue p.12 — Minar Plain Paratha 5 pcs' },
  'pre-019': { image: P+'paratha-bulk.jpg',            imageStatus:'exact',    imageNote:'Catalogue p.12 — Minar Plain Paratha 20 pcs' },

  // ══════════════════════════════════════════════════════════════════════
  // CONFECTIONERY & SNACKS — all confirmed (catalogue pp.13–19)
  // ══════════════════════════════════════════════════════════════════════

  'con-001': { image: P+'salty-sticks-cumin.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.13 — Farmers Bakery Cumin' },
  'con-002': { image: P+'salty-sticks-pepper.jpg',     imageStatus:'exact',    imageNote:'Catalogue p.13 — Farmers Bakery Hot Pepper' },
  'con-003': { image: P+'salty-sticks-labneh.jpg',     imageStatus:'exact',    imageNote:'Catalogue p.13 — Farmers Bakery Labneh & Herbs' },
  'con-004': { image: P+'salty-sticks-thyme.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.13 — Farmers Bakery Thyme' },
  'con-005': { image: P+'gummy-neon-bears.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.14 — Gummy Rush Neon Bears' },
  'con-006': { image: P+'gummy-king-crocs.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.14 — Gummy Rush King Crocs' },
  'con-007': { image: P+'gummy-blue-drops.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.14 — Gummy Rush Blue Drops' },
  'con-008': { image: P+'gummy-bears-160g.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.14 — Gummy Rush Gummy Bears 24×160g' },
  'con-009': { image: P+'gummy-atomic-peaches.jpg',    imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Atomic Peaches' },
  'con-010': { image: P+'gummy-baby-bottles.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Baby Bottles' },
  'con-011': { image: P+'gummy-berry-bliss.jpg',       imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Berry Bliss' },
  'con-012': { image: P+'gummy-cola-bottles.jpg',      imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Cola Bottles' },
  'con-013': { image: P+'gummy-bears-285g.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Gummy Bears 12×285g' },
  'con-014': { image: P+'gummy-unicorns.jpg',          imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Gummy Unicorns' },
  'con-015': { image: P+'gummy-worms.jpg',             imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Gummy Worms' },
  'con-016': { image: P+'gummy-sour-party.jpg',        imageStatus:'exact',    imageNote:'Catalogue p.15 — Gummy Rush Sour Party Mix' },
  'con-017': { image: P+'turkish-delight-pomegranate.jpg', imageStatus:'exact', imageNote:'Catalogue p.16 — Turkish Delight Pomegranate & Pistachio' },
  'con-018': { image: P+'turkish-delight-almond.jpg',  imageStatus:'exact',    imageNote:'Catalogue p.16 — Turkish Delight Almonds & Honey' },
  'con-019': { image: P+'turkish-delight-forest.jpg',  imageStatus:'exact',    imageNote:'Catalogue p.16 — Turkish Delight Forest Berries' },
  'con-020': { image: P+'turkish-delight-pistachio.jpg', imageStatus:'exact',  imageNote:'Catalogue p.16 — Turkish Delight Pistachio' },
  'con-021': { image: P+'turkish-delight-lemon.jpg',   imageStatus:'exact',    imageNote:'Catalogue p.16 — Turkish Delight Lemon & Rose' },
  'con-022': { image: P+'lollipop-classic.jpg',        imageStatus:'exact',    imageNote:"Catalogue p.17 — Sophie's Shoppe Classic" },
  'con-023': { image: P+'lollipop-fruitylicious.jpg',  imageStatus:'exact',    imageNote:"Catalogue p.17 — Sophie's Shoppe Fruitylicious" },
  'con-024': { image: P+'lollipop-sour-power.jpg',     imageStatus:'exact',    imageNote:"Catalogue p.17 — Sophie's Shoppe Sour Power" },
  'con-025': { image: P+'lollipop-smoothies.jpg',      imageStatus:'exact',    imageNote:"Catalogue p.17 — Sophie's Shoppe Fruit Smoothies" },
  'con-026': { image: P+'lollipop-cotton-candy.jpg',   imageStatus:'exact',    imageNote:"Catalogue p.17 — Sophie's Shoppe Cotton Candy" },
  'con-027': { image: P+'toblerone-tart.jpg',          imageStatus:'exact',    imageNote:'Catalogue p.19 — Toblerone Tart' },
}

// ─── Lookup function ──────────────────────────────────────────────────────────
/**
 * Returns { image, imageStatus, imageNote } for a product.
 *   exact   → image is the confirmed product photo
 *   fallback → image is the category fallback photo
 *   missing  → image is null; UI shows placeholder
 */
export function getProductImage(id, category) {
  const entry = productImageMap[id]
  const categoryFallback = CATEGORY_FALLBACKS[category] || null

  if (!entry) {
    return { image: categoryFallback, imageStatus: 'fallback', imageNote: 'No entry in product image map' }
  }

  if (entry.imageStatus === 'exact') {
    return entry
  }

  if (entry.imageStatus === 'fallback') {
    return { image: categoryFallback, imageStatus: 'fallback', imageNote: entry.imageNote }
  }

  // missing
  return { image: null, imageStatus: 'missing', imageNote: entry.imageNote }
}

/** Returns totals for all statuses */
export function getImageStats() {
  const counts = { exact: 0, fallback: 0, missing: 0 }
  Object.values(productImageMap).forEach(e => counts[e.imageStatus]++)
  return counts
}
