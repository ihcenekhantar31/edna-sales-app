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

  // Cooked Broken Tail-Off — confirmed (uploaded image)
  'shp-001': { image: P+'shrimp-cooked-broken-100-200.png', imageStatus:'exact', imageNote:'Uploaded — cooked broken tail-off 100/200 2 lbs' },
  'shp-002': { image: P+'shrimp-cooked-broken-100-200.png', imageStatus:'exact', imageNote:'Uploaded — cooked broken tail-off 100/200 10×1 lb' },
  'shp-041': { image: P+'shrimp-cooked-200-300.png',        imageStatus:'exact', imageNote:'Uploaded — Triple Crown cooked tail-off 200/300' },
  'shp-053': { image: P+'shrimp-cooked-tailoff-100-150.png',imageStatus:'exact', imageNote:'Uploaded — Amora Mer cooked tail-off 100/150' },

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

  // Raw White Vietnam — confirmed (uploaded image)
  'shp-018': { image: P+'raw-shrimp-vietnam.png',       imageStatus:'exact', imageNote:'Uploaded — Sea Ray Raw Vietnam 8/12' },
  'shp-019': { image: P+'raw-shrimp-vietnam.png',       imageStatus:'exact', imageNote:'Uploaded — Sea Ray Raw Vietnam 13/15 (shares Vietnam image)' },
  'shp-020': { image: P+'shrimp-raw-peeled-tailoff.png',imageStatus:'exact', imageNote:'Uploaded — Raw peeled tail-off 41/50' },

  // Black Tiger — confirmed (uploaded image)
  'shp-021': { image: P+'black-tiger-ezpeel.png',       imageStatus:'exact', imageNote:'Uploaded — Black Tiger EZ Peel' },
  'shp-022': { image: P+'black-tiger-ezpeel.png',       imageStatus:'exact', imageNote:'Uploaded — Black Tiger EZ Peel (shares image)' },
  'shp-023': { image: P+'black-tiger-ezpeel.png',       imageStatus:'exact', imageNote:'Uploaded — Black Tiger EZ Peel (shares image)' },

  // Argentina — no distinct image
  'shp-024': { image: null, imageStatus:'fallback', imageNote:'Wild Argentina 13/15 — no distinct image' },
  'shp-025': { image: null, imageStatus:'fallback', imageNote:'Wild Argentina 16/20 — no distinct image' },

  // Butterfly — confirmed (uploaded images)
  'shp-027': { image: P+'butterfly-argentina.png',      imageStatus:'exact', imageNote:'Uploaded — Wild Butterfly Argentina 11/15' },
  'shp-028': { image: P+'shrimp-raw-easy-peel-31-40.png',imageStatus:'exact',imageNote:'Uploaded — Amora Mer Raw Easy Peel 31/40' },
  'shp-029': { image: P+'shrimp-raw-easy-peel-31-40.png',imageStatus:'exact',imageNote:'Uploaded — Amora Mer Raw Easy Peel (shares image)' },
  'shp-030': { image: P+'butterfly-shrimp-india.png',   imageStatus:'exact', imageNote:'Uploaded — Butterfly Shrimp India' },
  'shp-031': { image: null, imageStatus:'fallback', imageNote:'Butterfly Vietnam — no distinct image' },

  // Tempura — confirmed (uploaded image)
  'shp-035': { image: P+'shrimp-tempura.png',           imageStatus:'exact', imageNote:'Uploaded — Shrimp Tempura' },

  // ══════════════════════════════════════════════════════════════════════
  // FISH & SEAFOOD
  // ══════════════════════════════════════════════════════════════════════

  // Confirmed by user (file content visually verified)
  'sea-001': { image: P+'tilapia-fillet.jpg',          imageStatus:'exact',    imageNote:'Catalogue p.4 r1 — Scallops confirmed by user (file mislabeled)' },
  'sea-029': { image: P+'seafood-mix-amora.jpg',       imageStatus:'exact',    imageNote:'Catalogue p.4 r1 — Amora Seafood Mix confirmed' },

  // Tilapia — confirmed (uploaded image)
  'sea-002': { image: P+'tilapia-fillet-new.png',  imageStatus:'exact', imageNote:'Uploaded — Tilapia Fillet' },
  'sea-003': { image: P+'tilapia-fillet-new.png',  imageStatus:'exact', imageNote:'Uploaded — Tilapia Fillet 16×700g (shares image)' },

  // Sea Ray Seafood Mix — confirmed (uploaded image)
  'sea-030': { image: P+'seafood-mix-550g.png',    imageStatus:'exact', imageNote:'Uploaded — Sea Ray Seafood Mix 550g' },

  // Fish — confirmed (uploaded images)
  'sea-004': { image: P+'basa-steak.png',          imageStatus:'exact', imageNote:'Uploaded — Basa/Pangasius Steak' },
  'sea-005': { image: P+'steelhead-trout.png',     imageStatus:'exact', imageNote:'Uploaded — Steelhead Trout' },
  'sea-006': { image: P+'smoked-atlantic-salmon.png',imageStatus:'exact',imageNote:'Uploaded — Gold Fish Smoked Atlantic Salmon' },
  'sea-007': { image: P+'salmon-fillet-chile.png', imageStatus:'exact', imageNote:'Uploaded — Salmon Fillet Chile' },
  'sea-008': { image: P+'dore-fillet-euro.png',    imageStatus:'exact', imageNote:'Uploaded — Doré Fillet Euro' },
  'sea-009': { image: P+'sh-tilapia-whole.png',     imageStatus:'exact',   imageNote:'Uploaded — SH Tilapia Gutted & Scaled IQF' },
  'sea-010': { image: P+'sole-fillet.png',         imageStatus:'exact', imageNote:'Uploaded — Fillets de Sole' },
  'sea-011': { image: P+'basa-fillet.png',         imageStatus:'exact', imageNote:'Uploaded — Basa Fillet' },

  // Page 5 row 1 — squid (confirmed)
  'sea-012': { image: P+'p5r1c1.jpg',               imageStatus:'exact', imageNote:'Catalogue p.5 r1c1 — Squid Rings 20×1lb' },
  'sea-013': { image: P+'p5r1c2.jpg',               imageStatus:'exact', imageNote:'Catalogue p.5 r1c2 — Squid Rings 10×2lb' },
  'sea-014': { image: P+'breaded-squid-rings.png',  imageStatus:'exact', imageNote:'Uploaded — Breaded Squid Rings 12×400g' },
  'sea-015': { image: P+'breaded-squid-rings.png',  imageStatus:'exact', imageNote:'Uploaded — Breaded Squid Rings 10×2lb (shares image)' },

  // Page 5 row 2 — confirmed
  'sea-016': { image: P+'p5r2c1.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c1 — Cooked Whole Clams' },
  'sea-017': { image: P+'p5r2c2.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c2 — Cooked Mussel Meat' },
  'sea-018': { image: P+'p5r2c3.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c3 — Frog Legs 6/8 confirmed' },
  'sea-019': { image: null,                            imageStatus:'fallback', imageNote:'Frog Legs 8/12 — shares 6/8 image, no separate catalogue image' },
  'sea-020': { image: null,                            imageStatus:'fallback', imageNote:'Frog Legs 13/15 — shares 6/8 image, no separate catalogue image' },
  'sea-021': { image: P+'p5r2c4.jpg',                 imageStatus:'exact',    imageNote:'Catalogue p.5 r2c4 — Tuna Loin confirmed by user' },

  // Octopus/Calamari/Crab/Cuttlefish — confirmed (uploaded images)
  // sea-022 and sea-023 (King Octopus Flower T2/T3) deleted from products
  'sea-024': { image: P+'baby-octopus-cleaned.png', imageStatus:'exact', imageNote:'Uploaded — Baby Octopus Cleaned' },
  'sea-025': { image: P+'calamari-tube.png',         imageStatus:'exact', imageNote:'Uploaded — Calamari Tube / Baby Calamari' },
  'sea-026': { image: P+'frozen-crab.png',           imageStatus:'exact', imageNote:'Uploaded — Frozen Cut Crab 3/5' },
  'sea-027': { image: P+'frozen-crab.png',           imageStatus:'exact', imageNote:'Uploaded — Frozen Cut Crab 5/8 (shares image)' },
  'sea-028': { image: P+'cuttlefish.png',            imageStatus:'exact', imageNote:'Uploaded — Baby Cuttlefish' },

  // ══════════════════════════════════════════════════════════════════════
  // FROZEN VEGETABLES — all confirmed in rounds 1–2
  // ══════════════════════════════════════════════════════════════════════

  // Hala (catalogue p.6) — filenames were rotated; corrected by visual inspection
  'veg-001': { image: P+'mixed-vegetables.jpg', imageStatus:'exact', imageNote:'Catalogue p.6 — Hala Mixed Vegetables' },
  'veg-002': { image: P+'okra.jpg',             imageStatus:'exact', imageNote:'Catalogue p.6 — Hala Okra Zero (verified)' },
  'veg-003': { image: null,                      imageStatus:'fallback', imageNote:'Okra Excellent — no distinct image from Okra Zero' },
  'veg-004': { image: P+'molokhia.jpg',         imageStatus:'exact', imageNote:'File molokhia.jpg visually contains Hala Frozen Peas' },
  'veg-005': { image: P+'green-peas.jpg',       imageStatus:'exact', imageNote:'File green-peas.jpg visually contains Hala Spinach Minced' },
  'veg-006': { image: P+'spinach.jpg',          imageStatus:'exact', imageNote:'File spinach.jpg visually contains Hala Molokhia Minced' },
  'veg-007': { image: P+'cauliflower.jpg',      imageStatus:'exact', imageNote:'File cauliflower.jpg visually contains Hala Artichoke Bottoms' },
  'veg-008': { image: P+'broccoli.jpg',         imageStatus:'exact', imageNote:'File broccoli.jpg visually contains Hala Cauliflower' },
  'veg-009': { image: P+'artichoke.jpg',        imageStatus:'exact', imageNote:'File artichoke.jpg visually contains Hala Broccoli' },

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

  // O'Là (catalogue p.10) — molokhia-ola.jpg and okra-ola.jpg were swapped; corrected by visual inspection
  'veg-030': { image: P+'artichoke-ola.jpg',  imageStatus:'exact', imageNote:"Catalogue p.10 — O'Là Artichoke Bottoms" },
  'veg-031': { image: P+'spinach-ola.jpg',    imageStatus:'exact', imageNote:"Catalogue p.10 — O'Là Chopped Spinach" },
  'veg-032': { image: P+'okra-ola.jpg',       imageStatus:'exact', imageNote:"File okra-ola.jpg visually contains O'Là Minced Molokhia" },
  'veg-033': { image: P+'molokhia-ola.jpg',   imageStatus:'exact', imageNote:"File molokhia-ola.jpg visually contains O'Là Okra Zero" },
  'veg-034': { image: P+'french-fries-ola.jpg',imageStatus:'exact',imageNote:"Catalogue p.10 — O'Là Fries 10×1kg" },
  'veg-035': { image: null,                    imageStatus:'fallback', imageNote:"O'Là Fries 4×2.5kg — no distinct image from 10×1kg" },
  'veg-036': { image: P+'ola-green-peas.png', imageStatus:'exact', imageNote:"Uploaded — O'Là Frozen Peas" },

  // ══════════════════════════════════════════════════════════════════════
  // PREPARED & READY FOODS
  // ══════════════════════════════════════════════════════════════════════

  // Confirmed
  'pre-001': { image: P+'p10_01.jpg',                  imageStatus:'exact',    imageNote:'Catalogue p.11 — Ocean Mama Shrimp Gyoza' },
  'pre-002': { image: P+'p10_02.jpg',                  imageStatus:'exact',    imageNote:"Catalogue p.11 — Tao's Kitchen Dumplings" },
  'pre-003': { image: null,                            imageStatus:'fallback', imageNote:'Thai Chicken variant of pre-002 — no distinct image' },
  'pre-004': { image: null,                            imageStatus:'fallback', imageNote:'Teriyaki Chicken variant of pre-002 — no distinct image' },

  // Spring Rolls — confirmed (uploaded image)
  'pre-005': { image: P+'tastie-spring-roll.png', imageStatus:'exact', imageNote:'Uploaded — Tastie Vegetable Spring Roll' },
  'pre-006': { image: P+'tastie-spring-roll.png', imageStatus:'exact', imageNote:'Uploaded — Tastie Spring Roll Sweet & Sour (shares image)' },

  // Spring Home Pastry — confirmed (TYJ pastry image)
  'pre-007': { image: P+'p10_06.jpg',                  imageStatus:'exact',    imageNote:'Catalogue p.11 — Spring Home TYJ Pastry 6" confirmed' },
  'pre-008': { image: null,                            imageStatus:'fallback', imageNote:'Spring Home Pastry 8.5" — shares pre-007 image' },
  'pre-009': { image: null,                            imageStatus:'fallback', imageNote:'Spring Home Pastry 10" — shares pre-007 image' },

  // Supreme Pierogies — confirmed (uploaded image)
  'pre-010': { image: P+'pierogies-supreme.png', imageStatus:'exact', imageNote:'Uploaded — Supreme Pierogies Cheddar & Potato' },
  'pre-011': { image: P+'pierogies-supreme.png', imageStatus:'exact', imageNote:'Uploaded — Supreme Pierogies Broccoli variant (shares image)' },

  // Puff Pastry — confirmed (uploaded image)
  'pre-012': { image: P+'puff-pastry-sheet.png', imageStatus:'exact', imageNote:'Uploaded — Khansaama Puff Pastry Sheets' },

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
