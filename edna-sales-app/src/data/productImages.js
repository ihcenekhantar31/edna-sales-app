const P = '/images/products/'
const C = '/images/categories/'

export const categoryImagePaths = {
  shrimp:              C + 'shrimp.jpg',
  seafood:             C + 'seafood.jpg',
  'frozen-vegetables': C + 'frozen-vegetables.jpg',
  'prepared-foods':    C + 'prepared-foods.jpg',
  confectionery:       C + 'confectionery.jpg',
}

const map = {
  // ── SHRIMP ──────────────────────────────────────────────
  // Cooked broken / tail-off (catalogue page 1)
  'shp-001': P + 'shrimp-cooked-broken.jpg',
  'shp-002': P + 'shrimp-cooked-broken.jpg',
  'shp-003': P + 'shrimp-cooked-tailoff.jpg',
  'shp-004': P + 'shrimp-cooked-tailoff.jpg',
  'shp-005': P + 'shrimp-cooked-tailoff.jpg',
  'shp-041': P + 'shrimp-cooked-broken.jpg',
  'shp-053': P + 'shrimp-cooked-tailoff.jpg',
  // Sea Ray cooked tail-on (catalogue page 2)
  'shp-006': P + 'shrimp-cooked-tailon.jpg',
  'shp-007': P + 'shrimp-cooked-tailon-2.jpg',
  'shp-008': P + 'shrimp-cooked-tailon.jpg',
  'shp-009': P + 'shrimp-cooked-tailon-2.jpg',
  'shp-010': P + 'shrimp-cooked-tailon.jpg',
  // Amora Mer cooked tail-on (catalogue page 3)
  'shp-032': P + 'shrimp-amora-180g.jpg',
  'shp-033': P + 'shrimp-amora-340g.jpg',
  'shp-034': P + 'shrimp-amora-600g.jpg',
  // Raw white — India (catalogue page 2)
  'shp-011': P + 'shrimp-raw-pkg.jpg',
  'shp-012': P + 'shrimp-raw-pkg.jpg',
  'shp-013': P + 'shrimp-raw-pkg.jpg',
  'shp-014': P + 'shrimp-raw-pkg.jpg',
  'shp-015': P + 'shrimp-raw-pkg.jpg',
  'shp-016': P + 'shrimp-raw-white-platter.jpg',
  'shp-017': P + 'shrimp-raw-white-platter.jpg',
  // Raw white — Vietnam (catalogue page 2)
  'shp-018': P + 'shrimp-raw-plate.jpg',
  'shp-019': P + 'shrimp-raw-plate.jpg',
  // Raw peeled tail-off
  'shp-020': P + 'shrimp-raw-white-platter.jpg',
  'shp-028': P + 'shrimp-raw-pkg.jpg',
  'shp-029': P + 'shrimp-raw-pkg.jpg',
  // Black Tiger (not in this catalogue — web image)
  'shp-021': P + 'shrimp-black-tiger.jpg',
  'shp-022': P + 'shrimp-black-tiger.jpg',
  'shp-023': P + 'shrimp-black-tiger.jpg',
  // Wild Argentina (not in this catalogue — web image)
  'shp-024': P + 'shrimp-argentina.jpg',
  'shp-025': P + 'shrimp-argentina.jpg',
  // Cold Water Denmark (not in this catalogue — web image)
  'shp-026': P + 'shrimp-cold-water.jpg',
  // Wild Butterfly Argentina
  'shp-027': P + 'shrimp-butterfly.jpg',
  // Butterfly India / Vietnam
  'shp-030': P + 'shrimp-butterfly.jpg',
  'shp-031': P + 'shrimp-cooked-tailon-2.jpg',
  // Tempura
  'shp-035': P + 'shrimp-tempura.jpg',

  // ── FISH & SEAFOOD ──────────────────────────────────────
  // Catalogue page 4
  'sea-001': P + 'scallops.jpg',
  'sea-002': P + 'tilapia-fillet.jpg',
  'sea-003': P + 'tilapia-fillet.jpg',     // same image, different pack size
  'sea-004': P + 'sea4-row2-pos1.jpg',      // Pangasius steak (row 2 pos 1 on page 4)
  'sea-005': P + 'smoked-trout.jpg',
  'sea-006': P + 'smoked-salmon.jpg',
  'sea-007': P + 'salmon-fillet.jpg',
  'sea-008': P + 'walleye.jpg',            // Doré fillets
  'sea-009': P + 'tilapia-whole.jpg',
  'sea-010': P + 'sole-fillet.jpg',
  'sea-011': P + 'basa-fillet.jpg',
  // Catalogue page 5 — squid, shellfish, frog legs
  'sea-012': P + 'squid-rings.jpg',
  'sea-013': P + 'squid-rings-bulk.jpg',
  'sea-014': P + 'breaded-squid.jpg',
  'sea-015': P + 'breaded-squid-bulk.jpg',
  'sea-016': P + 'clams.jpg',
  'sea-017': P + 'mussels.jpg',
  'sea-018': P + 'frog-legs-lg.jpg',
  'sea-019': P + 'frog-legs-md.jpg',
  'sea-020': P + 'sea-row3-pos1.jpg',       // Frog Legs 13/15 (row 3 pos 1 on page 5)
  'sea-021': P + 'sea-row3-pos2.jpg',       // Tuna Loin (row 3 pos 2 on page 5)
  'sea-022': P + 'octopus.jpg',
  'sea-023': P + 'octopus.jpg',
  'sea-024': P + 'octopus.jpg',            // baby octopus
  'sea-025': P + 'squid-rings.jpg',        // baby calamari = same family as squid
  'sea-026': P + 'sea-row3-pos4.jpg',       // Cut Crab (row 3 pos 4 on page 5)
  'sea-027': P + 'sea-row3-pos4.jpg',
  'sea-028': P + 'calamari-crab-mix.jpg',  // cuttlefish
  'sea-029': P + 'seafood-mix-amora.jpg',
  'sea-030': P + 'seafood-mix-searay.jpg',

  // ── FROZEN VEGETABLES ───────────────────────────────────
  // Hala (catalogue page 6)
  'veg-001': P + 'mixed-vegetables.jpg',
  'veg-002': P + 'okra.jpg',
  'veg-003': P + 'okra.jpg',
  'veg-004': P + 'green-peas.jpg',
  'veg-005': P + 'spinach.jpg',
  'veg-006': P + 'molokhia.jpg',
  'veg-007': P + 'artichoke.jpg',
  'veg-008': P + 'cauliflower.jpg',
  'veg-009': P + 'broccoli.jpg',
  // Roselle (catalogue page 7)
  'veg-010': P + 'strawberry.jpg',
  'veg-011': P + 'mango.jpg',
  'veg-012': P + 'pomegranate.jpg',
  'veg-013': P + 'spinach-leaf.jpg',
  'veg-014': P + 'mixed-veg-roselle.jpg',
  'veg-015': P + 'green-peas-roselle.jpg',
  // SH (catalogue page 8)
  'veg-016': P + 'mixed-veg-3way.jpg',
  'veg-017': P + 'broad-beans.jpg',
  'veg-018': P + 'chopped-spinach.jpg',
  'veg-019': P + 'sh-corn.jpg',
  'veg-020': P + 'sh-chili.jpg',
  'veg-021': P + 'sh-greenpeas.jpg',
  // Magic Farms (catalogue page 9)
  'veg-022': P + 'broccoli-mf.jpg',
  'veg-023': P + 'mixed-veg-mf.jpg',
  'veg-024': P + 'green-peas-mf.jpg',
  'veg-025': P + 'green-beans.jpg',
  'veg-026': P + 'mixed-veg-mf2.jpg',
  'veg-027': P + 'artichoke-mf.jpg',
  'veg-028': P + 'french-fries.jpg',
  'veg-029': P + 'french-fries-bulk.jpg',
  // O'La (catalogue page 10)
  'veg-030': P + 'artichoke-ola.jpg',
  'veg-031': P + 'spinach-ola.jpg',
  'veg-032': P + 'molokhia-ola.jpg',
  'veg-033': P + 'okra-ola.jpg',
  'veg-034': P + 'french-fries-ola.jpg',
  'veg-035': P + 'green-peas-ola.jpg',
  'veg-036': P + 'green-peas-roselle.jpg',

  // ── PREPARED & READY FOODS ──────────────────────────────
  // Catalogue page 11
  'pre-001': P + 'shrimp-gyoza.jpg',
  'pre-002': P + 'dumplings.jpg',
  'pre-003': P + 'dumplings.jpg',
  'pre-004': P + 'dumplings.jpg',
  'pre-005': P + 'spring-rolls.jpg',
  'pre-006': P + 'spring-rolls.jpg',
  'pre-007': P + 'spring-roll-pastry.jpg',
  'pre-008': P + 'spring-roll-pastry.jpg',
  'pre-009': P + 'spring-roll-pastry.jpg',
  'pre-010': P + 'pierogies.jpg',
  'pre-011': P + 'pierogies.jpg',
  'pre-012': P + 'puff-pastry.jpg',
  // Catalogue page 12 — Royal Meats + Minar Paratha
  'pre-013': P + 'beef-burger.jpg',
  'pre-014': P + 'beef-lamb-burger.jpg',
  'pre-015': P + 'chicken-burger.jpg',
  'pre-016': P + 'sausage-chicken.jpg',
  'pre-017': P + 'sausage-beef-lamb.jpg',
  'pre-018': P + 'paratha-5pcs.jpg',
  'pre-019': P + 'paratha-bulk.jpg',

  // ── CONFECTIONERY & SNACKS ──────────────────────────────
  // Salty sticks — catalogue page 13
  'con-001': P + 'salty-sticks-cumin.jpg',
  'con-002': P + 'salty-sticks-pepper.jpg',
  'con-003': P + 'salty-sticks-labneh.jpg',
  'con-004': P + 'salty-sticks-thyme.jpg',
  // Gummy Rush 160g — catalogue page 14
  'con-005': P + 'gummy-neon-bears.jpg',
  'con-006': P + 'gummy-blue-drops.jpg',
  'con-007': P + 'gummy-bears-160g.jpg',
  'con-008': P + 'gummy-king-crocs.jpg',
  // Gummy Rush 285g — catalogue page 15
  'con-009': P + 'gummy-atomic-peaches.jpg',
  'con-010': P + 'gummy-baby-bottles.jpg',
  'con-011': P + 'gummy-berry-bliss.jpg',
  'con-012': P + 'gummy-cola-bottles.jpg',
  'con-013': P + 'gummy-bears-285g.jpg',
  'con-014': P + 'gummy-unicorns.jpg',
  'con-015': P + 'gummy-worms.jpg',
  'con-016': P + 'gummy-sour-party.jpg',
  // Turkish Delight — catalogue page 16
  'con-017': P + 'turkish-delight-pomegranate.jpg',
  'con-018': P + 'turkish-delight-almond.jpg',
  'con-019': P + 'turkish-delight-forest.jpg',
  'con-020': P + 'turkish-delight-pistachio.jpg',
  'con-021': P + 'turkish-delight-lemon.jpg',
  // Lollipops — catalogue page 17
  'con-022': P + 'lollipop-classic.jpg',
  'con-023': P + 'lollipop-fruitylicious.jpg',
  'con-024': P + 'lollipop-sour-power.jpg',
  'con-025': P + 'lollipop-smoothies.jpg',
  'con-026': P + 'lollipop-cotton-candy.jpg',
  // Toblerone — catalogue page 19
  'con-027': P + 'toblerone-tart.jpg',
}

export const getProductImage = (id, category) =>
  map[id] || categoryImagePaths[category] || null
