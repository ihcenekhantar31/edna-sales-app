// ============================================================
// EDNA Product Data — Grouped with Variants
// ============================================================
// Each product represents a FAMILY. Variants = sizes / pack formats.
// Variant `id` maps into productImageMap.js for images.
// Fields on product: shared across all variants
// Fields on variant: { id, size, packFormat, sku, price, salePrice, stock }
//   size       — count/grade/dimension (e.g. '8/12', '6"', 'T2')
//   packFormat — case format (e.g. '10 × 1 lb', '20 × 300 g')
// ============================================================

export const products = [

  // ============================================================
  // SHRIMP
  // ============================================================

  {
    id: 'shp-g01', slug: 'shrimp-cooked-broken-tail-off',
    name: 'Shrimp Cooked Broken Tail Off 100/200',
    nameFr: 'Crevette cuite cassée sans queue 100/200',
    brand: null, category: 'shrimp', subcategory: 'cooked',
    cookState: 'cooked', origin: null, cut: 'Broken Tail Off', featured: false,
    description: 'Cooked broken tail-off shrimp, size 100/200. Ideal for salads, pasta and prepared dishes.',
    tags: ['cooked', 'tail-off', 'broken', 'bulk', 'foodservice'],
    variants: [
      { id: 'shp-001', size: '100/200', packFormat: '5 × 2 lbs',  sku: 'SHP-CBT-100200-5x2',  price: null, salePrice: null, stock: 'available' },
      { id: 'shp-002', size: '100/200', packFormat: '10 × 1 lb',  sku: 'SHP-CBT-100200-10x1', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g02', slug: 'shrimp-cooked-tail-off',
    name: 'Shrimp Cooked Tail Off',
    nameFr: 'Crevette cuite sans queue',
    brand: null, category: 'shrimp', subcategory: 'cooked',
    cookState: 'cooked', origin: null, cut: 'Tail Off', featured: false,
    description: 'Cooked peeled tail-off shrimp. Versatile for stir-fries, soups, catering trays and hot/cold applications.',
    tags: ['cooked', 'tail-off', 'medium'],
    variants: [
      { id: 'shp-003', size: '40/60', packFormat: '5 × 2 lbs', sku: 'SHP-CTO-4060', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-004', size: '60/80', packFormat: '5 × 2 lbs', sku: 'SHP-CTO-6080', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-005', size: '70/90', packFormat: '5 × 2 lbs', sku: 'SHP-CTO-7090', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g03', slug: 'sea-ray-cooked-tail-on-white-shrimp',
    name: 'Sea Ray White Shrimp Cooked Tail On',
    nameFr: 'Sea Ray Crevette blanche cuite avec queue',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'cooked',
    cookState: 'cooked', origin: null, cut: 'Tail On', featured: true,
    description: 'Premium cooked white shrimp with tail on. Impressive presentation for seafood platters, catering and fine dining.',
    tags: ['cooked', 'tail-on', 'jumbo', 'premium', 'white-shrimp', 'sea-ray'],
    variants: [
      { id: 'shp-006', size: '8/12',  packFormat: '10 × 1 lb', sku: 'SRP-WTO-812-10x1',  price: null, salePrice: null, stock: 'available' },
      { id: 'shp-007', size: '16/20', packFormat: '10 × 1 lb', sku: 'SRP-WTO-1620-10x1', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-008', size: '21/25', packFormat: '10 × 1 lb', sku: 'SRP-WTO-2125-10x1', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-009', size: '26/30', packFormat: '10 × 1 lb', sku: 'SRP-WTO-2630-10x1', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-010', size: '41/50', packFormat: '10 × 1 lb', sku: 'SRP-WTO-4150-10x1', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g04', slug: 'sea-ray-raw-white-shrimp-tail-on-india',
    name: 'Sea Ray Raw White Shrimp Tail On India',
    nameFr: 'Sea Ray Crevette blanche crue avec queue Inde',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'raw',
    cookState: 'raw', origin: 'India', cut: 'Tail On', featured: false,
    description: 'Raw white shrimp with tail on, sourced from India. Ideal for grilling, frying and premium cooking applications.',
    tags: ['raw', 'tail-on', 'india', 'white-shrimp', 'sea-ray'],
    variants: [
      { id: 'shp-011', size: '8/12',  packFormat: '5 × 2 lbs', sku: 'SRP-RWI-812',  price: null, salePrice: null, stock: 'available' },
      { id: 'shp-012', size: '13/15', packFormat: '5 × 2 lbs', sku: 'SRP-RWI-1315', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-013', size: '16/20', packFormat: '5 × 2 lbs', sku: 'SRP-RWI-1620', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-014', size: '21/25', packFormat: '5 × 2 lbs', sku: 'SRP-RWI-2125', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-015', size: '26/30', packFormat: '5 × 2 lbs', sku: 'SRP-RWI-2630', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-016', size: '31/40', packFormat: '5 × 2 lbs', sku: 'SRP-RWI-3140', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-017', size: '41/50', packFormat: '5 × 2 lbs', sku: 'SRP-RWI-4150', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g05', slug: 'sea-ray-raw-white-shrimp-tail-on-vietnam',
    name: 'Sea Ray Raw White Shrimp Tail On Vietnam',
    nameFr: 'Sea Ray Crevette blanche crue avec queue Vietnam',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'raw',
    cookState: 'raw', origin: 'Vietnam', cut: 'Tail On', featured: false,
    description: 'Raw white shrimp with tail on, sourced from Vietnam. Excellent for grilling and restaurant mains.',
    tags: ['raw', 'tail-on', 'vietnam', 'white-shrimp', 'sea-ray'],
    variants: [
      { id: 'shp-018', size: '8/12',  packFormat: '5 × 2 lbs', sku: 'SRP-RWV-812',  price: null, salePrice: null, stock: 'available' },
      { id: 'shp-019', size: '13/15', packFormat: '5 × 2 lbs', sku: 'SRP-RWV-1315', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g06', slug: 'sea-ray-raw-white-shrimp-peeled-tail-off',
    name: 'Sea Ray Raw White Shrimp Peeled Tail Off 41/50',
    nameFr: 'Sea Ray Crevette blanche crue sans queue 41/50',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'raw',
    cookState: 'raw', origin: null, cut: 'Peeled Tail Off', featured: false,
    description: 'Raw peeled tail-off white shrimp, 41/50. Ready to cook — no prep needed.',
    tags: ['raw', 'tail-off', 'peeled', 'medium', 'white-shrimp', 'sea-ray', 'easy-prep'],
    variants: [
      { id: 'shp-020', size: '41/50', packFormat: '1 lb', sku: 'SRP-RPTO-4150', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g07', slug: 'sea-ray-black-tiger-shrimp-ez-peel',
    name: 'Sea Ray Black Tiger Shrimp E-Z Peel',
    nameFr: 'Sea Ray Crevette tigrée crue E-Z Peel',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'black-tiger',
    cookState: 'raw', origin: null, cut: 'E-Z Peel', featured: true,
    description: 'Premium Black Tiger shrimp, E-Z peel. Bold flavor and impressive size — a premium item for upscale menus.',
    tags: ['raw', 'black-tiger', 'ez-peel', 'premium', 'sea-ray'],
    variants: [
      { id: 'shp-021', size: '6/8',   packFormat: '5 × 2 lbs', sku: 'SRP-BTE-68',   price: null, salePrice: null, stock: 'available' },
      { id: 'shp-022', size: '8/12',  packFormat: '5 × 2 lbs', sku: 'SRP-BTE-812',  price: null, salePrice: null, stock: 'available' },
      { id: 'shp-023', size: '21/25', packFormat: '5 × 2 lbs', sku: 'SRP-BTE-2125', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g10', slug: 'sea-ray-wild-butterfly-argentina-shrimp',
    name: 'Sea Ray Wild Butterfly Argentina Shrimp 11/15',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'wild',
    cookState: 'cooked', origin: 'Argentina', cut: 'Butterfly Tail Off', featured: false,
    description: 'Cooked wild Argentina butterfly shrimp, tail off. Beautiful cut for plating and appetizer presentations.',
    tags: ['cooked', 'wild-caught', 'argentina', 'butterfly', 'premium', 'sea-ray'],
    variants: [
      { id: 'shp-027', size: '11/15', packFormat: '2 lbs', sku: 'SRP-WBA-1115', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g11', slug: 'amora-mer-white-shrimp-raw-easy-peel',
    name: 'Amora Mer White Shrimp Raw Easy Peel',
    nameFr: 'Amora Mer Crevette blanche crue facile à décortiquer',
    brand: 'Amora Mer', category: 'shrimp', subcategory: 'raw',
    cookState: 'raw', origin: null, cut: 'Easy Peel', featured: false,
    description: 'Raw easy-peel white shrimp. Convenient retail packs for quick service and portioning.',
    tags: ['raw', 'easy-peel', 'portioned', 'amora-mer'],
    variants: [
      { id: 'shp-029', size: '31/40', packFormat: '10 × 1 lb',   sku: 'AMO-REP-3140-10x1',   price: null, salePrice: null, stock: 'available' },
      { id: 'shp-028', size: '41/50', packFormat: '24 × 140 g',  sku: 'AMO-REP-4150-24x140', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g12', slug: 'sea-ray-butterfly-shrimp',
    name: 'Sea Ray Butterfly Shrimp',
    nameFr: 'Sea Ray Crevette papillon',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'butterfly',
    cookState: 'raw', origin: null, cut: 'Butterfly', featured: false,
    description: 'Raw butterfly-cut shrimp. Visually stunning cut for high-end presentations and frying.',
    tags: ['raw', 'butterfly', 'sea-ray', 'presentation'],
    variants: [
      { id: 'shp-030', size: '16/20 — India',   packFormat: '5 × 2 lbs', sku: 'SRP-BTF-1620-IND', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-031', size: '13/15 — Vietnam', packFormat: '5 × 2 lbs', sku: 'SRP-BTF-1315-VN',  price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g13', slug: 'amora-mer-white-shrimp-cooked-tail-on',
    name: 'Amora Mer White Shrimp Cooked Tail On 41/50',
    brand: 'Amora Mer', category: 'shrimp', subcategory: 'cooked',
    cookState: 'cooked', origin: null, cut: 'Tail On', featured: false,
    description: 'Cooked white shrimp tail on, 41/50. Available in consumer-friendly retail packs and larger restaurant formats.',
    tags: ['cooked', 'tail-on', 'medium', 'amora-mer', 'portioned'],
    variants: [
      { id: 'shp-032', size: '41/50', packFormat: '24 × 180 g', sku: 'AMO-CTO-4150-24x180', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-033', size: '41/50', packFormat: '12 × 340 g', sku: 'AMO-CTO-4150-12x340', price: null, salePrice: null, stock: 'available' },
      { id: 'shp-034', size: '41/50', packFormat: '10 × 600 g', sku: 'AMO-CTO-4150-10x600', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g14', slug: 'sea-ray-tempura-shrimp',
    name: 'Sea Ray Tempura Shrimp 31/40',
    nameFr: 'Sea Ray Crevette Tempura 31/40',
    brand: 'Sea Ray', category: 'shrimp', subcategory: 'breaded',
    cookState: 'battered', origin: null, cut: 'Tempura', featured: true,
    description: 'Light tempura-battered shrimp, 31/40. Ready to fry. A popular appetizer for restaurants and catering.',
    tags: ['battered', 'tempura', 'ready-to-fry', 'appetizer', 'sea-ray'],
    variants: [
      { id: 'shp-035', size: '31/40', packFormat: '12 × 400 g', sku: 'SRP-TEMP-3140', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g15', slug: 'triple-crown-cooked-tail-off-thailand',
    name: 'Triple Crown White Shrimp Cooked Tail Off Thailand 200/300',
    brand: 'Triple Crown', category: 'shrimp', subcategory: 'cooked',
    cookState: 'cooked', origin: 'Thailand', cut: 'Tail Off', featured: false,
    description: 'Cooked tail-off white shrimp from Thailand, small 200/300. Economical for salads, soups and mixed dishes.',
    tags: ['cooked', 'tail-off', 'small', 'thailand', 'value', 'triple-crown'],
    variants: [
      { id: 'shp-041', size: '200/300', packFormat: '10 × 1 lb', sku: 'TRC-CTH-200300', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'shp-g16', slug: 'amora-mer-cooked-tail-off',
    name: 'Amora Mer White Shrimp Cooked Tail Off 100/150',
    brand: 'Amora Mer', category: 'shrimp', subcategory: 'cooked',
    cookState: 'cooked', origin: null, cut: 'Tail Off', featured: false,
    description: 'Cooked tail-off white shrimp, small 100/150 in 300g packs.',
    tags: ['cooked', 'tail-off', 'small', 'amora-mer', 'portioned'],
    variants: [
      { id: 'shp-053', size: '100/150', packFormat: '20 × 300 g', sku: 'AMO-CTO-100150', price: null, salePrice: null, stock: 'available' },
    ],
  },

  // ============================================================
  // FISH & SEAFOOD
  // ============================================================

  {
    id: 'sea-g01', slug: 'viva-sea-scallops-80-120',
    name: 'Viva Sea Scallops 80/120', nameFr: 'Viva Sea Pétoncles 80/120',
    brand: 'Viva Sea', category: 'seafood', subcategory: 'scallops',
    cookState: 'raw', origin: null, cut: null, featured: true,
    description: 'Premium bay scallops, 80/120 count. Sweet, tender and versatile — ideal for pasta, stir-fries and elegant platters.',
    tags: ['scallops', 'premium', 'raw', 'seafood', 'viva-sea'],
    variants: [
      { id: 'sea-001', size: '80/120', packFormat: '20 × 300 g', sku: 'VVS-SCA-80120', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g02', slug: 'sh-tilapia-fillets',
    name: 'SH Tilapia Fillets', nameFr: 'SH Filets de Tilapia',
    brand: 'SH', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: null, cut: 'Fillet', featured: false,
    description: 'Mild white tilapia fillets, skinless. A kitchen staple for grilling, baking and frying.',
    tags: ['fish', 'tilapia', 'fillets', 'white-fish', 'mild', 'sh'],
    variants: [
      { id: 'sea-002', size: null, packFormat: '20 × 400 g', sku: 'SH-TIL-20x400', price: null, salePrice: null, stock: 'available' },
      { id: 'sea-003', size: null, packFormat: '16 × 700 g', sku: 'SH-TIL-16x700', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g03', slug: 'sea-ray-pangasius-steak',
    name: 'Sea Ray Pangasius Steak', nameFr: 'Sea Ray Steak de Pangasius',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: null, cut: 'Steak', featured: false,
    description: 'Pangasius (basa) steaks, mild white fish. Generous 600g portions for grilling, baking and pan-frying.',
    tags: ['fish', 'pangasius', 'basa', 'steak', 'white-fish', 'sea-ray'],
    variants: [
      { id: 'sea-004', size: null, packFormat: '10 × 600 g', sku: 'SRP-PANG-10x600', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g04', slug: 'soleil-smoked-steelhead-trout',
    name: 'Soleil Smoked Steelhead Trout', nameFr: 'Soleil Truite Steelhead fumée',
    brand: 'Soleil', category: 'seafood', subcategory: 'smoked-fish',
    cookState: 'smoked', origin: null, cut: null, featured: true,
    description: 'Premium smoked Steelhead trout in individual 75g portions. Rich, delicate smoke flavor.',
    tags: ['smoked', 'trout', 'premium', 'ready-to-serve', 'soleil'],
    variants: [
      { id: 'sea-005', size: null, packFormat: '50 × 75 g', sku: 'SOL-SMKT-50x75', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g05', slug: 'gold-fish-smoked-atlantic-salmon',
    name: 'Gold Fish Smoked Atlantic Salmon',
    brand: 'Gold Fish', category: 'seafood', subcategory: 'smoked-fish',
    cookState: 'smoked', origin: 'Atlantic', cut: null, featured: true,
    description: 'Classic smoked Atlantic salmon in 600g packs. Silky texture with a balanced smoke profile.',
    tags: ['smoked', 'salmon', 'atlantic', 'premium', 'gold-fish'],
    variants: [
      { id: 'sea-006', size: null, packFormat: '110 × 600 g', sku: 'GF-SMKS-110x600', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g06', slug: 'sea-ray-salmon-fillet-chile',
    name: 'Sea Ray Salmon Fillet Chile 3/4', nameFr: 'Sea Ray Filet de Saumon Chili 3/4',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: 'Chile', cut: 'Fillet', featured: true,
    description: 'Fresh Atlantic salmon fillets from Chile, 3–4 kg pieces. Rich, buttery flesh.',
    tags: ['salmon', 'fillet', 'chile', 'premium', 'raw', 'sea-ray'],
    variants: [
      { id: 'sea-007', size: '3/4', packFormat: '1 × 10 kg', sku: 'SRP-SAL-CHL-10kg', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g07', slug: 'sea-ray-dore-fillets-euro',
    name: 'Sea Ray Doré Fillets Euro', nameFr: 'Sea Ray Filets de Doré Euro',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: null, cut: 'Fillet', featured: false,
    description: 'European doré (walleye) fillets. Prized for their delicate, flaky white flesh.',
    tags: ['fish', 'dore', 'walleye', 'specialty', 'white-fish', 'sea-ray'],
    variants: [
      { id: 'sea-008', size: null, packFormat: '1 × 5 kg', sku: 'SRP-DORE-5kg', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g08', slug: 'sh-tilapia-whole',
    name: 'SH Tilapia Whole 4–5 oz', nameFr: 'SH Tilapia entier 4–5 oz',
    brand: 'SH', category: 'seafood', subcategory: 'whole-fish',
    cookState: 'raw', origin: null, cut: 'Whole', featured: false,
    description: 'Whole tilapia, 4–5 oz each. Perfect for grilling or baking whole.',
    tags: ['fish', 'tilapia', 'whole', 'raw', 'sh'],
    variants: [
      { id: 'sea-009', size: '4–5 oz', packFormat: '10 × 2.5 lbs', sku: 'SH-TIL-WHOLE-4-5oz', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g09', slug: 'pealmark-sole-fillets',
    name: 'Pealmark Sole Fillets', nameFr: 'Pealmark Filets de Sole',
    brand: 'Pealmark', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: null, cut: 'Fillet', featured: false,
    description: 'Delicate sole fillets, thin and elegant. Classic for pan-fried preparations and meunière.',
    tags: ['fish', 'sole', 'fillet', 'delicate', 'pealmark'],
    variants: [
      { id: 'sea-010', size: null, packFormat: '10 × 1 lb', sku: 'PEA-SOL-10x1', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g10', slug: 'sea-ray-basa-fillet',
    name: 'Sea Ray Basa Fillet 5–7 oz', nameFr: 'Sea Ray Filet de Pangasius / Basa 5–7 oz',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: null, cut: 'Fillet', featured: false,
    description: 'Basa (pangasius) fillets, portioned at 5–7 oz each. Mild, white and versatile.',
    tags: ['fish', 'basa', 'pangasius', 'fillet', 'portioned', 'sea-ray'],
    variants: [
      { id: 'sea-011', size: '5–7 oz', packFormat: '20 × 360 g', sku: 'SRP-BASA-5-7oz', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g11', slug: 'sea-ray-squid-rings',
    name: 'Sea Ray Squid Rings', nameFr: 'Sea Ray Rondelles de Calmar',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'squid',
    cookState: 'raw', origin: null, cut: 'Rings', featured: false,
    description: 'Raw squid rings, ready to batter or cook. A must-have for fried calamari and seafood pastas.',
    tags: ['squid', 'calamari', 'rings', 'raw', 'sea-ray'],
    variants: [
      { id: 'sea-012', size: null, packFormat: '20 × 1 lb',  sku: 'SRP-SQR-20x1', price: null, salePrice: null, stock: 'available' },
      { id: 'sea-013', size: null, packFormat: '10 × 2 lbs', sku: 'SRP-SQR-10x2', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g12', slug: 'amora-mer-breaded-squid-rings',
    name: 'Amora Mer Breaded Squid Rings', nameFr: 'Amora Mer Rondelles de Calmar pannés',
    brand: 'Amora Mer', category: 'seafood', subcategory: 'squid',
    cookState: 'breaded', origin: null, cut: 'Breaded Rings', featured: false,
    description: 'Crispy breaded squid rings, ready to fry. A top appetizer for restaurants and bars.',
    tags: ['squid', 'calamari', 'breaded', 'ready-to-fry', 'appetizer', 'amora-mer'],
    variants: [
      { id: 'sea-014', size: null, packFormat: '12 × 400 g', sku: 'AMO-BSQ-12x400', price: null, salePrice: null, stock: 'available' },
      { id: 'sea-015', size: null, packFormat: '10 × 2 lbs', sku: 'AMO-BSQ-10x2',   price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g13', slug: 'sh-cooked-whole-clams',
    name: 'SH Cooked Whole Clams', nameFr: 'SH Palourdes entières cuites',
    brand: 'SH', category: 'seafood', subcategory: 'shellfish',
    cookState: 'cooked', origin: null, cut: 'Whole', featured: false,
    description: 'Cooked whole clams in 340g packs. Ready to use in chowders, pasta vongole and seafood soups.',
    tags: ['clams', 'shellfish', 'cooked', 'ready-to-use', 'sh'],
    variants: [
      { id: 'sea-016', size: null, packFormat: '30 × 340 g', sku: 'SH-CLAM-30x340', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g14', slug: 'anchors-bay-cooked-mussel-meat',
    name: "Anchor's Bay Cooked Mussel Meat", nameFr: "Anchor's Bay Chair de moule cuite",
    brand: "Anchor's Bay", category: 'seafood', subcategory: 'shellfish',
    cookState: 'cooked', origin: null, cut: 'Meat', featured: false,
    description: 'Cooked mussel meat, shelled and ready to use. Perfect for pasta, risotto and seafood soups.',
    tags: ['mussels', 'shellfish', 'cooked', 'ready-to-use', 'anchors-bay'],
    variants: [
      { id: 'sea-017', size: null, packFormat: '30 × 340 g', sku: 'ANB-MUS-30x340', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g15', slug: 'amora-mer-frog-legs',
    name: 'Amora Mer Frog Legs', nameFr: 'Amora Mer Cuisses de grenouilles',
    brand: 'Amora Mer', category: 'seafood', subcategory: 'specialty',
    cookState: 'raw', origin: null, cut: null, featured: true,
    description: 'Premium frog legs. A specialty delicacy for French cuisine, Asian restaurants and adventurous menus.',
    tags: ['frog-legs', 'specialty', 'delicacy', 'amora-mer'],
    variants: [
      { id: 'sea-018', size: '6/8',   packFormat: '12 × 1 kg', sku: 'AMO-FROG-68-12x1kg',   price: null, salePrice: null, stock: 'available' },
      { id: 'sea-019', size: '8/12',  packFormat: '12 × 1 kg', sku: 'AMO-FROG-812-12x1kg',  price: null, salePrice: null, stock: 'available' },
      { id: 'sea-020', size: '13/15', packFormat: '12 × 1 kg', sku: 'AMO-FROG-1315-12x1kg', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g16', slug: 'sh-tuna-loin',
    name: 'SH Tuna Loin', nameFr: 'SH Tranches de Thon',
    brand: 'SH', category: 'seafood', subcategory: 'fish-fillets',
    cookState: 'raw', origin: null, cut: 'Loin', featured: false,
    description: 'Premium tuna loin portions, 340g each. Versatile for searing, sushi and poke bowls.',
    tags: ['tuna', 'fish', 'premium', 'loin', 'sushi-grade', 'sh'],
    variants: [
      { id: 'sea-021', size: null, packFormat: '20 × 340 g', sku: 'SH-TUN-20x340', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g18', slug: 'sea-ray-baby-octopus-cleaned',
    name: 'Sea Ray Baby Octopus Cleaned', nameFr: 'Sea Ray Bébé poulpe congelé nettoyé',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'specialty',
    cookState: 'raw', origin: null, cut: 'Cleaned', featured: false,
    description: 'Cleaned baby octopus in 340g packs. Ready to marinate and grill — a popular tapas appetizer.',
    tags: ['octopus', 'baby-octopus', 'specialty', 'sea-ray', 'seafood'],
    variants: [
      { id: 'sea-024', size: null, packFormat: '20 × 340 g', sku: 'SRP-BOC-20x340', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g19', slug: 'sea-ray-baby-calamari-tubes-u10',
    name: 'Sea Ray Baby Calamari Tubes U10',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'squid',
    cookState: 'raw', origin: null, cut: 'Tubes', featured: false,
    description: 'Baby calamari tubes, under-10 count, cleaned and ready to stuff or slice.',
    tags: ['calamari', 'squid', 'tubes', 'baby', 'specialty', 'sea-ray'],
    variants: [
      { id: 'sea-025', size: 'U10', packFormat: '12 × 2.5 lbs', sku: 'SRP-CAL-U10-12x2.5', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g20', slug: 'sh-frozen-cut-crab',
    name: 'SH Frozen Cut Crab', nameFr: 'SH Crabe coupé',
    brand: 'SH', category: 'seafood', subcategory: 'shellfish',
    cookState: 'raw', origin: null, cut: 'Cut', featured: false,
    description: 'Frozen cut crab pieces. Perfect for crab dishes, seafood soups and Asian preparations.',
    tags: ['crab', 'shellfish', 'cut', 'frozen', 'sh'],
    variants: [
      { id: 'sea-026', size: '3/5', packFormat: '16 × 450 g', sku: 'SH-CRB-35-16x450', price: null, salePrice: null, stock: 'available' },
      { id: 'sea-027', size: '5/8', packFormat: '16 × 450 g', sku: 'SH-CRB-58-16x450', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g21', slug: 'viva-sea-baby-cuttlefish',
    name: 'Viva Sea Baby Cuttlefish',
    brand: 'Viva Sea', category: 'seafood', subcategory: 'specialty',
    cookState: 'raw', origin: null, cut: 'Cleaned', featured: false,
    description: 'Baby cuttlefish, cleaned and tray-packed. Ideal for Mediterranean and Asian preparations.',
    tags: ['cuttlefish', 'specialty', 'seafood', 'viva-sea'],
    variants: [
      { id: 'sea-028', size: null, packFormat: '20 × 340 g', sku: 'VVS-CUT-20x340', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g22', slug: 'amora-mer-seafood-mix',
    name: 'Amora Mer Seafood Mix', nameFr: 'Amora Mer Mélange de produits de la mer',
    brand: 'Amora Mer', category: 'seafood', subcategory: 'mix',
    cookState: 'raw', origin: null, cut: null, featured: false,
    description: 'A ready-to-cook seafood mix with shrimp, squid and shellfish. Perfect for paella.',
    tags: ['seafood-mix', 'shrimp', 'squid', 'mixed', 'amora-mer'],
    variants: [
      { id: 'sea-029', size: null, packFormat: '10 × 340 g', sku: 'AMO-SFM-10x340', price: null, salePrice: null, stock: 'available' },
    ],
  },

  {
    id: 'sea-g23', slug: 'sea-ray-seafood-mix-d',
    name: 'Sea Ray Seafood Mix D',
    brand: 'Sea Ray', category: 'seafood', subcategory: 'mix',
    cookState: 'raw', origin: null, cut: null, featured: false,
    description: 'Generous seafood mix in 550g packs — ideal for paella, bouillabaisse and seafood pasta.',
    tags: ['seafood-mix', 'mixed', 'sea-ray'],
    variants: [
      { id: 'sea-030', size: null, packFormat: '12 × 550 g', sku: 'SRP-SFM-12x550', price: null, salePrice: null, stock: 'available' },
    ],
  },

  // ============================================================
  // FROZEN VEGETABLES
  // ============================================================

  { id:'veg-g01', slug:'hala-frozen-mixed-vegetables',    name:'Hala Frozen Mixed Vegetables',     brand:'Hala',         category:'frozen-vegetables', subcategory:'mixed',     cookState:'frozen', origin:null, cut:null,      featured:false, description:'Classic IQF mixed vegetables — a kitchen staple for soups, stir-fries and side dishes.',                                                                      tags:['frozen','vegetables','mixed','hala','iqf'],                                          variants:[{ id:'veg-001', size:null, packFormat:'20 × 400 g', sku:'HLA-MIX-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g02', slug:'hala-frozen-okra',                name:'Hala Frozen Okra',                  brand:'Hala',         category:'frozen-vegetables', subcategory:'okra',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Whole frozen okra. Popular in Middle Eastern, West African and Southern cuisines.',                                                                            tags:['frozen','okra','hala','halal'],                                                      variants:[{ id:'veg-002', size:'Zero',     packFormat:'20 × 400 g', sku:'HLA-OKZ-20x400', price:null, salePrice:null, stock:'available' }, { id:'veg-003', size:'Excellent', packFormat:'20 × 400 g', sku:'HLA-OKE-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g03', slug:'hala-frozen-peas',                name:'Hala Frozen Peas',                  brand:'Hala',         category:'frozen-vegetables', subcategory:'peas',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Sweet frozen green peas, IQF. A versatile side and ingredient for soups and rice dishes.',                                                                     tags:['frozen','peas','hala','iqf'],                                                        variants:[{ id:'veg-004', size:null, packFormat:'20 × 400 g', sku:'HLA-PEA-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g04', slug:'hala-frozen-spinach-minced',      name:'Hala Frozen Spinach Minced',        brand:'Hala',         category:'frozen-vegetables', subcategory:'spinach',   cookState:'frozen', origin:null, cut:'Minced',  featured:false, description:'Minced frozen spinach, ready to add to sauces, soups and Egyptian spinach dishes.',                                                                            tags:['frozen','spinach','minced','hala'],                                                  variants:[{ id:'veg-005', size:null, packFormat:'20 × 400 g', sku:'HLA-SPN-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g05', slug:'hala-frozen-molokhia-minced',     name:'Hala Frozen Molokhia Minced',       brand:'Hala',         category:'frozen-vegetables', subcategory:'specialty',  cookState:'frozen', origin:null, cut:'Minced',  featured:true,  description:'Minced frozen molokhia (jute mallow). An essential ingredient for the beloved Middle Eastern dish.',                                                             tags:['frozen','molokhia','middle-eastern','specialty','hala'],                             variants:[{ id:'veg-006', size:null, packFormat:'20 × 400 g', sku:'HLA-MOL-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g06', slug:'hala-frozen-artichoke-bottoms',   name:'Hala Frozen Artichoke Bottoms',     brand:'Hala',         category:'frozen-vegetables', subcategory:'specialty',  cookState:'frozen', origin:null, cut:null,      featured:false, description:'Tender artichoke bottoms, trimmed and frozen. Perfect for stuffed artichokes and Mediterranean dishes.',                                                          tags:['frozen','artichoke','specialty','hala','middle-eastern'],                            variants:[{ id:'veg-007', size:null, packFormat:'20 × 400 g', sku:'HLA-ART-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g07', slug:'hala-frozen-cauliflower',         name:'Hala Frozen Cauliflower',           brand:'Hala',         category:'frozen-vegetables', subcategory:'cauliflower',cookState:'frozen', origin:null, cut:null,      featured:false, description:'IQF cauliflower florets, clean and ready to cook.',                                                                                                            tags:['frozen','cauliflower','hala','iqf'],                                                 variants:[{ id:'veg-008', size:null, packFormat:'20 × 400 g', sku:'HLA-CAU-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g08', slug:'hala-frozen-broccoli',            name:'Hala Frozen Broccoli',              brand:'Hala',         category:'frozen-vegetables', subcategory:'broccoli',   cookState:'frozen', origin:null, cut:null,      featured:false, description:'Crisp frozen broccoli florets, IQF. A high-demand year-round item.',                                                                                           tags:['frozen','broccoli','hala','iqf'],                                                    variants:[{ id:'veg-009', size:null, packFormat:'20 × 400 g', sku:'HLA-BRO-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g09', slug:'roselle-frozen-strawberry',       name:'Roselle Frozen Strawberry',         brand:'Roselle',      category:'frozen-vegetables', subcategory:'fruit',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen whole strawberries — perfect for smoothies, desserts and pastry applications.',                                                                          tags:['frozen','strawberry','fruit','roselle'],                                             variants:[{ id:'veg-010', size:null, packFormat:'10 × 1 kg', sku:'ROS-STW-10x1kg', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g10', slug:'roselle-frozen-mango',            name:'Roselle Frozen Mango',              brand:'Roselle',      category:'frozen-vegetables', subcategory:'fruit',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen mango chunks, naturally sweet. A favourite for smoothies and tropical desserts.',                                                                        tags:['frozen','mango','fruit','roselle'],                                                  variants:[{ id:'veg-011', size:null, packFormat:'10 × 1 kg', sku:'ROS-MNG-10x1kg', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g11', slug:'roselle-frozen-pomegranate-seeds',name:'Roselle Frozen Pomegranate Seeds',  brand:'Roselle',      category:'frozen-vegetables', subcategory:'fruit',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen pomegranate arils — vibrant and antioxidant-rich. Use in salads, cocktails and desserts.',                                                              tags:['frozen','pomegranate','fruit','roselle','specialty'],                                variants:[{ id:'veg-012', size:null, packFormat:'10 × 800 g', sku:'ROS-POM-10x800', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g12', slug:'roselle-frozen-spinach',          name:'Roselle Frozen Spinach',            brand:'Roselle',      category:'frozen-vegetables', subcategory:'spinach',    cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen leaf spinach, clean and ready to cook.',                                                                                                                tags:['frozen','spinach','roselle'],                                                        variants:[{ id:'veg-013', size:null, packFormat:'20 × 400 g', sku:'ROS-SPN-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g13', slug:'roselle-frozen-vegetables',       name:'Roselle Frozen Vegetables',         brand:'Roselle',      category:'frozen-vegetables', subcategory:'mixed',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Mixed frozen vegetables from Roselle.',                                                                                                                        tags:['frozen','vegetables','mixed','roselle'],                                             variants:[{ id:'veg-014', size:null, packFormat:'20 × 400 g', sku:'ROS-MIX-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g14', slug:'roselle-frozen-green-peas',       name:'Roselle Frozen Green Peas',         brand:'Roselle',      category:'frozen-vegetables', subcategory:'peas',       cookState:'frozen', origin:null, cut:null,      featured:false, description:'Sweet frozen green peas from Roselle.',                                                                                                                        tags:['frozen','peas','roselle'],                                                           variants:[{ id:'veg-015', size:null, packFormat:'20 × 400 g', sku:'ROS-PEA-20x400', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g15', slug:'sh-3-way-mixed-vegetables',       name:'SH 3-Way Mixed Vegetables',         brand:'SH',           category:'frozen-vegetables', subcategory:'mixed',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'A classic 3-way vegetable blend — corn, peas and carrots. A reliable side for any menu.',                                                                     tags:['frozen','mixed','vegetables','sh'],                                                  variants:[{ id:'veg-016', size:null, packFormat:'12 × 750 g', sku:'SH-3MX-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g16', slug:'sh-broad-beans',                  name:'SH Broad Beans',                    brand:'SH',           category:'frozen-vegetables', subcategory:'beans',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen broad beans (fava beans) — a staple of Middle Eastern and Mediterranean cooking.',                                                                    tags:['frozen','broad-beans','fava','sh','middle-eastern'],                                 variants:[{ id:'veg-017', size:null, packFormat:'12 × 750 g', sku:'SH-BRD-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g17', slug:'sh-chopped-spinach',              name:'SH Chopped Spinach',                brand:'SH',           category:'frozen-vegetables', subcategory:'spinach',    cookState:'frozen', origin:null, cut:'Chopped', featured:false, description:'Chopped frozen spinach in large format packs. Ideal for sauces, soups and bulk cooking.',                                                                      tags:['frozen','spinach','chopped','sh'],                                                   variants:[{ id:'veg-018', size:null, packFormat:'12 × 750 g', sku:'SH-SPN-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g18', slug:'sh-frozen-corn',                  name:'SH Frozen Corn',                    brand:'SH',           category:'frozen-vegetables', subcategory:'corn',       cookState:'frozen', origin:null, cut:null,      featured:false, description:'Sweet frozen corn kernels, IQF. Perfect for soups, salads and side dishes.',                                                                                 tags:['frozen','corn','sh','iqf'],                                                          variants:[{ id:'veg-019', size:null, packFormat:'12 × 750 g', sku:'SH-CRN-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g19', slug:'sh-red-chili',                    name:'SH Red Chili',                      brand:'SH',           category:'frozen-vegetables', subcategory:'specialty',  cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen red chili peppers in convenient 227g packs. A heat source for curries and sauces.',                                                                       tags:['frozen','chili','spicy','sh'],                                                       variants:[{ id:'veg-020', size:null, packFormat:'40 × 227 g', sku:'SH-CHI-40x227', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g20', slug:'sh-green-peas',                   name:'SH Green Peas',                     brand:'SH',           category:'frozen-vegetables', subcategory:'peas',       cookState:'frozen', origin:null, cut:null,      featured:false, description:'Classic frozen green peas from SH in bulk 750g packs.',                                                                                                       tags:['frozen','peas','sh'],                                                                variants:[{ id:'veg-021', size:null, packFormat:'12 × 750 g', sku:'SH-PEA-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g21', slug:'magic-farms-frozen-broccoli',     name:'Magic Farms Frozen Broccoli',       brand:'Magic Farms',  category:'frozen-vegetables', subcategory:'broccoli',   cookState:'frozen', origin:null, cut:null,      featured:false, description:'Crisp frozen broccoli florets from Magic Farms.',                                                                                                              tags:['frozen','broccoli','magic-farms'],                                                   variants:[{ id:'veg-022', size:null, packFormat:'12 × 750 g', sku:'MF-BRO-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g22', slug:'magic-farms-frozen-vegetables',   name:'Magic Farms Frozen Vegetables',     brand:'Magic Farms',  category:'frozen-vegetables', subcategory:'mixed',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Mixed frozen vegetables from Magic Farms.',                                                                                                                    tags:['frozen','vegetables','mixed','magic-farms'],                                         variants:[{ id:'veg-023', size:null, packFormat:'12 × 750 g', sku:'MF-MIX-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g23', slug:'magic-farms-frozen-peas',         name:'Magic Farms Frozen Peas',           brand:'Magic Farms',  category:'frozen-vegetables', subcategory:'peas',       cookState:'frozen', origin:null, cut:null,      featured:false, description:'Sweet frozen peas from Magic Farms.',                                                                                                                          tags:['frozen','peas','magic-farms'],                                                       variants:[{ id:'veg-024', size:null, packFormat:'12 × 750 g', sku:'MF-PEA-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g24', slug:'magic-farms-frozen-cut-green-beans',name:'Magic Farms Frozen Cut Green Beans',brand:'Magic Farms',category:'frozen-vegetables', subcategory:'beans',      cookState:'frozen', origin:null, cut:null,      featured:false, description:'Cut green beans, IQF. Great for side dishes and stir-fries.',                                                                                                 tags:['frozen','green-beans','magic-farms','iqf'],                                          variants:[{ id:'veg-025', size:null, packFormat:'12 × 750 g', sku:'MF-GBN-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g25', slug:'magic-farms-artichoke-bottoms',   name:'Magic Farms Artichoke Bottoms',     brand:'Magic Farms',  category:'frozen-vegetables', subcategory:'specialty',  cookState:'frozen', origin:null, cut:null,      featured:false, description:'Frozen artichoke bottoms from Magic Farms — tender and ready to stuff or cook.',                                                                              tags:['frozen','artichoke','specialty','magic-farms'],                                      variants:[{ id:'veg-027', size:null, packFormat:'13 × 750 g', sku:'MF-ART-13x750', price:null, salePrice:null, stock:'available' }] },
  {
    id:'veg-g26', slug:'magic-farms-french-fries',
    name:"Magic Farms Frozen French Fries",
    brand:'Magic Farms', category:'frozen-vegetables', subcategory:'fries',
    cookState:'frozen', origin:null, cut:null, featured:false,
    description:'Classic frozen French fries — crispy and reliable for high-volume frying operations.',
    tags:['frozen','fries','french-fries','magic-farms'],
    variants:[
      { id:'veg-028', size:null, packFormat:'10 × 1 kg',   sku:'MF-FRY-10x1kg',   price:null, salePrice:null, stock:'available' },
      { id:'veg-029', size:null, packFormat:'4 × 2.5 kg',  sku:'MF-FRY-4x2.5kg',  price:null, salePrice:null, stock:'available' },
    ],
  },
  { id:'veg-g27', slug:'ola-frozen-artichoke-bottoms',    name:"O'Là Frozen Artichoke Bottoms",     brand:"O'Là",         category:'frozen-vegetables', subcategory:'specialty',  cookState:'frozen', origin:null, cut:null,      featured:false, description:"Artichoke bottoms from O'Là.",                                                                                                                             tags:['frozen','artichoke','specialty','ola'],                                              variants:[{ id:'veg-030', size:null, packFormat:'13 × 750 g', sku:'OLA-ART-13x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g28', slug:'ola-frozen-chopped-spinach',      name:"O'Là Frozen Chopped Spinach",       brand:"O'Là",         category:'frozen-vegetables', subcategory:'spinach',    cookState:'frozen', origin:null, cut:'Chopped', featured:false, description:"Chopped frozen spinach from O'Là.",                                                                                                                        tags:['frozen','spinach','chopped','ola'],                                                  variants:[{ id:'veg-031', size:null, packFormat:'12 × 750 g', sku:'OLA-SPN-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g29', slug:'ola-frozen-minced-molokheya',     name:"O'Là Frozen Minced Molokheya",      brand:"O'Là",         category:'frozen-vegetables', subcategory:'specialty',  cookState:'frozen', origin:null, cut:'Minced',  featured:false, description:"Minced molokhia from O'Là — a staple for Middle Eastern and Egyptian cooking.",                                                                            tags:['frozen','molokhia','specialty','middle-eastern','ola'],                              variants:[{ id:'veg-032', size:null, packFormat:'12 × 750 g', sku:'OLA-MOL-12x750', price:null, salePrice:null, stock:'available' }] },
  { id:'veg-g30', slug:'ola-frozen-okra-zero',            name:"O'Là Frozen Okra Zero",             brand:"O'Là",         category:'frozen-vegetables', subcategory:'okra',       cookState:'frozen', origin:null, cut:null,      featured:false, description:"Frozen okra zero from O'Là.",                                                                                                                              tags:['frozen','okra','ola'],                                                               variants:[{ id:'veg-033', size:null, packFormat:'12 × 750 g', sku:'OLA-OKZ-12x750', price:null, salePrice:null, stock:'available' }] },
  {
    id:'veg-g31', slug:'ola-frozen-french-fries',
    name:"O'Là Frozen French Fries",
    brand:"O'Là", category:'frozen-vegetables', subcategory:'fries',
    cookState:'frozen', origin:null, cut:null, featured:false,
    description:"Frozen French fries from O'Là.",
    tags:['frozen','fries','french-fries','ola'],
    variants:[
      { id:'veg-034', size:null, packFormat:'10 × 1 kg',  sku:'OLA-FRY-10x1kg',  price:null, salePrice:null, stock:'available' },
      { id:'veg-035', size:null, packFormat:'4 × 2.5 kg', sku:'OLA-FRY-4x2.5kg', price:null, salePrice:null, stock:'available' },
    ],
  },
  { id:'veg-g32', slug:'ola-frozen-peas',                 name:"O'Là Frozen Peas",                  brand:"O'Là",         category:'frozen-vegetables', subcategory:'peas',       cookState:'frozen', origin:null, cut:null,      featured:false, description:"Frozen green peas from O'Là.",                                                                                                                             tags:['frozen','peas','ola'],                                                               variants:[{ id:'veg-036', size:null, packFormat:'12 × 750 g', sku:'OLA-PEA-12x750', price:null, salePrice:null, stock:'available' }] },

  // ============================================================
  // PREPARED & READY FOODS
  // ============================================================

  { id:'pre-g01', slug:'ocean-mama-shrimp-gyoza',                name:'Ocean Mama Shrimp Gyoza',                      nameFr:'Ocean Mama Gyoza aux crevettes',                      brand:'Ocean Mama',    category:'prepared-foods', subcategory:'dumplings',    cookState:'frozen', origin:null, cut:null, featured:true,  description:'Classic Japanese-style shrimp gyoza — pan-fry or steam. A versatile appetizer for Asian restaurants.',           tags:['gyoza','dumplings','shrimp','japanese','appetizer','ocean-mama','ready-to-cook'], variants:[{ id:'pre-001', size:null, packFormat:'12 × 454 g', sku:'OCM-GYO-12x454',       price:null, salePrice:null, stock:'available' }] },
  {
    id:'pre-g02', slug:'taos-kitchen-dumplings',
    name:"Tao's Kitchen Dumplings",
    nameFr:"Tao's Kitchen Dumplings",
    brand:"Tao's Kitchen", category:'prepared-foods', subcategory:'dumplings',
    cookState:'frozen', origin:null, cut:null, featured:false,
    description:"Tao's Kitchen dumplings — available in Vegetable, Thai Chicken, and Teriyaki Chicken. Boil, steam or pan-fry.",
    tags:['dumplings','asian','taos-kitchen','ready-to-cook'],
    variants:[
      { id:'pre-002', size:'Vegetable',        packFormat:'12 × 454 g', sku:'TAO-DMP-VEG-12x454',     price:null, salePrice:null, stock:'available' },
      { id:'pre-003', size:'Thai Chicken',     packFormat:'12 × 454 g', sku:'TAO-DMP-THAICHI-12x454', price:null, salePrice:null, stock:'available' },
      { id:'pre-004', size:'Teriyaki Chicken', packFormat:'12 × 454 g', sku:'TAO-DMP-TER-12x454',     price:null, salePrice:null, stock:'available' },
    ],
  },
  { id:'pre-g05', slug:'tastie-vegetable-spring-roll',           name:'Tastie Vegetable Spring Roll',                 nameFr:'Tastie Rouleau de printemps aux légumes',             brand:'Tastie',        category:'prepared-foods', subcategory:'spring-rolls', cookState:'frozen', origin:null, cut:null, featured:false, description:'Crispy vegetable spring rolls — a crowd-pleaser for deep-frying and appetizer service.',                          tags:['spring-rolls','vegetarian','appetizer','tastie','ready-to-fry'],                 variants:[{ id:'pre-005', size:'Original',    packFormat:'12 × 204 g', sku:'TST-SPR-VEG-12x204',price:null, salePrice:null, stock:'available' }, { id:'pre-006', size:'Sweet & Sour', packFormat:'12 × 204 g', sku:'TST-SPR-SS-12x204', price:null, salePrice:null, stock:'available' }] },
  {
    id:'pre-g06', slug:'spring-home-spring-roll-pastry',
    name:'Spring Home Spring Roll Pastry',
    brand:'Spring Home', category:'prepared-foods', subcategory:'pastry',
    cookState:'frozen', origin:null, cut:null, featured:false,
    description:'Thin spring roll pastry sheets. A kitchen essential for making spring rolls and crispy appetizers.',
    tags:['pastry','spring-roll','sheets','baking','spring-home'],
    variants:[
      { id:'pre-007', size:'6"',   packFormat:'40 × 50 pcs', sku:'SPH-PST-6-40x50',  price:null, salePrice:null, stock:'available' },
      { id:'pre-008', size:'8.5"', packFormat:'40 × 20 pcs', sku:'SPH-PST-85-40x20', price:null, salePrice:null, stock:'available' },
      { id:'pre-009', size:'10"',  packFormat:'30 × 30 pcs', sku:'SPH-PST-10-30x30', price:null, salePrice:null, stock:'available' },
    ],
  },
  {
    id:'pre-g07', slug:'supreme-pierogies',
    name:'Supreme Pierogies',
    nameFr:'Supreme Pierogies',
    brand:'Supreme', category:'prepared-foods', subcategory:'pierogies',
    cookState:'frozen', origin:null, cut:null, featured:false,
    description:'Classic pierogies — boil, pan-fry and serve. A comfort food staple.',
    tags:['pierogies','comfort-food','eastern-european','supreme','ready-to-cook'],
    variants:[
      { id:'pre-010', size:'Cheddar & Potato',           packFormat:'12 × 454 g', sku:'SUP-PIE-CHED-12x454', price:null, salePrice:null, stock:'available' },
      { id:'pre-011', size:'Broccoli, Potato & Cheddar', packFormat:'12 × 454 g', sku:'SUP-PIE-BPC-12x454',  price:null, salePrice:null, stock:'available' },
    ],
  },
  { id:'pre-g08', slug:'khansaama-puff-pastry-sheets',           name:'Khansaama Puff Pastry Sheets',                 nameFr:'Khansaama Feuille de pâte feuilletée',                brand:'Khansaama',     category:'prepared-foods', subcategory:'pastry',       cookState:'frozen', origin:null, cut:null, featured:false, description:'Ready-to-use puff pastry sheets. Versatile for savoury and sweet applications.',                                 tags:['puff-pastry','pastry','baking','khansaama','halal'],                             variants:[{ id:'pre-012', size:null, packFormat:'24 × 450 g', sku:'KHA-PUF-24x450',       price:null, salePrice:null, stock:'available' }] },
  { id:'pre-g09', slug:'royal-meats-frozen-beef-burger',         name:'Royal Meats Frozen Beef Burger',               nameFr:'Royal Meats Frozen Burger Boeuf',                     brand:'Royal Meats',   category:'prepared-foods', subcategory:'burgers',      cookState:'frozen', origin:null, cut:null, featured:false, description:'Frozen beef burger patties from Royal Meats. Consistent quality for restaurants and food trucks.',               tags:['burger','beef','frozen','halal','royal-meats'],                                   variants:[{ id:'pre-013', size:null, packFormat:'12 × 852 g', sku:'RM-BRG-BF-12x852',     price:null, salePrice:null, stock:'available' }] },
  { id:'pre-g10', slug:'royal-meats-frozen-beef-lamb-burger',    name:'Royal Meats Frozen Beef & Lamb Burger',        nameFr:'Royal Meats Frozen Burger Boeuf et Agneau',           brand:'Royal Meats',   category:'prepared-foods', subcategory:'burgers',      cookState:'frozen', origin:null, cut:null, featured:false, description:'Beef and lamb burger blend. Popular for halal menus and Middle Eastern-style fast food.',                         tags:['burger','beef','lamb','frozen','halal','royal-meats'],                            variants:[{ id:'pre-014', size:null, packFormat:'12 × 852 g', sku:'RM-BRG-BL-12x852',     price:null, salePrice:null, stock:'available' }] },
  { id:'pre-g11', slug:'royal-meats-frozen-chicken-burger',      name:'Royal Meats Frozen Chicken Burger',            nameFr:'Royal Meats Frozen Burger Poulet',                    brand:'Royal Meats',   category:'prepared-foods', subcategory:'burgers',      cookState:'frozen', origin:null, cut:null, featured:false, description:'Frozen chicken burger patties. Light, lean and versatile for halal menus.',                                       tags:['burger','chicken','frozen','halal','royal-meats'],                               variants:[{ id:'pre-015', size:null, packFormat:'12 × 852 g', sku:'RM-BRG-CHK-12x852',    price:null, salePrice:null, stock:'available' }] },
  { id:'pre-g12', slug:'royal-meats-chevapi-chicken-sausage',    name:'Royal Meats Chevapi Caseless Chicken Sausage', nameFr:'Royal Meats Saucisse sans enveloppe Poulet',          brand:'Royal Meats',   category:'prepared-foods', subcategory:'sausages',     cookState:'frozen', origin:null, cut:null, featured:false, description:'Chevapi-style caseless chicken sausages. Popular in Balkan and Middle Eastern cuisines.',                         tags:['sausage','chicken','chevapi','halal','royal-meats','grill'],                     variants:[{ id:'pre-016', size:null, packFormat:'12 × 852 g', sku:'RM-CHV-CHK-12x852',    price:null, salePrice:null, stock:'available' }] },
  { id:'pre-g13', slug:'royal-meats-chevapi-beef-lamb-sausage',  name:'Royal Meats Chevapi Caseless Beef & Lamb Sausage',nameFr:'Royal Meats Saucisse sans enveloppe Boeuf et Agneau',brand:'Royal Meats', category:'prepared-foods', subcategory:'sausages',     cookState:'frozen', origin:null, cut:null, featured:false, description:'Classic beef and lamb chevapi sausages, caseless. Authentic Balkan flavor for grilling.',                         tags:['sausage','beef','lamb','chevapi','halal','royal-meats','grill'],                 variants:[{ id:'pre-017', size:null, packFormat:'12 × 852 g', sku:'RM-CHV-BL-12x852',     price:null, salePrice:null, stock:'available' }] },
  {
    id:'pre-g14', slug:'minar-plain-paratha',
    name:'Minar Plain Paratha',
    brand:'Minar', category:'prepared-foods', subcategory:'bread',
    cookState:'frozen', origin:null, cut:null, featured:false,
    description:'Frozen plain paratha bread. Heat and serve in minutes.',
    tags:['paratha','bread','south-asian','halal','frozen','minar'],
    variants:[
      { id:'pre-018', size:'5 pcs',  packFormat:'24 × 400 g', sku:'MIN-PAR-5PC-24x400', price:null, salePrice:null, stock:'available' },
      { id:'pre-019', size:'20 pcs', packFormat:'8 × 3.5 lbs', sku:'MIN-PAR-20PC-8x3.5', price:null, salePrice:null, stock:'available' },
    ],
  },

  // ============================================================
  // CONFECTIONERY & SNACKS
  // ============================================================

  { id:'con-g01', slug:'farmers-bakery-salty-sticks-cumin',         name:'The Farmers Bakery Salty Sticks Cumin',         brand:'The Farmers Bakery', category:'confectionery', subcategory:'salty-snacks',    cookState:null, origin:null, cut:null, featured:false, description:'Artisanal cumin-flavored baked sticks. A distinctive snack.',                       tags:['salty-sticks','snack','cumin','baked','farmers-bakery'],                          variants:[{ id:'con-001', size:null, packFormat:'12 × 250 g', sku:'TFB-SCU-12x250', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g02', slug:'farmers-bakery-salty-sticks-hot-pepper',     name:'The Farmers Bakery Salty Sticks Hot Pepper',    brand:'The Farmers Bakery', category:'confectionery', subcategory:'salty-snacks',    cookState:null, origin:null, cut:null, featured:false, description:'Spicy hot pepper salty sticks — a bold snack option.',                             tags:['salty-sticks','snack','spicy','baked','farmers-bakery'],                          variants:[{ id:'con-002', size:null, packFormat:'12 × 250 g', sku:'TFB-SHP-12x250', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g03', slug:'farmers-bakery-salty-sticks-labneh-herbs',   name:'The Farmers Bakery Salty Sticks Labneh & Herbs',brand:'The Farmers Bakery', category:'confectionery', subcategory:'salty-snacks',    cookState:null, origin:null, cut:null, featured:false, description:'Labneh and herbs flavored salty sticks — a Middle Eastern-inspired snack.',         tags:['salty-sticks','snack','labneh','herbs','middle-eastern','farmers-bakery'],        variants:[{ id:'con-003', size:null, packFormat:'12 × 250 g', sku:'TFB-SLH-12x250', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g04', slug:'farmers-bakery-salty-sticks-thyme',          name:'The Farmers Bakery Salty Sticks Thyme',         brand:'The Farmers Bakery', category:'confectionery', subcategory:'salty-snacks',    cookState:null, origin:null, cut:null, featured:false, description:'Thyme-flavored salty sticks — herbal and aromatic.',                               tags:['salty-sticks','snack','thyme','herbs','farmers-bakery'],                          variants:[{ id:'con-004', size:null, packFormat:'12 × 250 g', sku:'TFB-STH-12x250', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g05', slug:'gummy-rush-neon-bears',                      name:'Gummy Rush Neon Bears',                         brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Bright neon gummy bears in fun fruit flavors.',                                     tags:['gummies','candy','gummy-bears','gummy-rush'],                                    variants:[{ id:'con-005', size:null, packFormat:'24 × 160 g', sku:'GR-NEO-24x160', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g06', slug:'gummy-rush-king-crocs',                      name:'Gummy Rush King Crocs',                         brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'King Croc gummy candies — a playful novelty item.',                                 tags:['gummies','candy','novelty','gummy-rush'],                                         variants:[{ id:'con-006', size:null, packFormat:'24 × 160 g', sku:'GR-KRC-24x160', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g07', slug:'gummy-rush-blue-drops',                      name:'Gummy Rush Blue Drops',                         brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Blue-colored gummy drop candies from Gummy Rush.',                                  tags:['gummies','candy','gummy-rush'],                                                   variants:[{ id:'con-007', size:null, packFormat:'24 × 160 g', sku:'GR-BLD-24x160', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g09', slug:'gummy-rush-atomic-peaches',                  name:'Gummy Rush Atomic Peaches',                     brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Sour peach-flavored gummy candies. A crowd-favourite.',                            tags:['gummies','candy','peach','sour','gummy-rush'],                                    variants:[{ id:'con-009', size:null, packFormat:'12 × 285 g', sku:'GR-APC-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g10', slug:'gummy-rush-baby-bottles',                    name:'Gummy Rush Baby Bottles',                       brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Baby bottle-shaped gummy candies.',                                                 tags:['gummies','candy','novelty','gummy-rush'],                                         variants:[{ id:'con-010', size:null, packFormat:'12 × 285 g', sku:'GR-BBT-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g11', slug:'gummy-rush-berry-bliss',                     name:'Gummy Rush Berry Bliss',                        brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Mixed berry gummy candies — a fruity blend.',                                       tags:['gummies','candy','berry','gummy-rush'],                                           variants:[{ id:'con-011', size:null, packFormat:'12 × 285 g', sku:'GR-BBL-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g12', slug:'gummy-rush-cola-bottles',                    name:'Gummy Rush Cola Bottles',                       brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Cola-flavored gummy bottle candies — a nostalgic classic.',                         tags:['gummies','candy','cola','gummy-rush'],                                            variants:[{ id:'con-012', size:null, packFormat:'12 × 285 g', sku:'GR-COL-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g13', slug:'gummy-rush-gummy-unicorns',                  name:'Gummy Rush Gummy Unicorns',                     brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Unicorn-shaped gummy candies — a fun novelty for kids and parties.',               tags:['gummies','candy','novelty','unicorn','gummy-rush'],                               variants:[{ id:'con-014', size:null, packFormat:'12 × 285 g', sku:'GR-GUN-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g14', slug:'gummy-rush-gummy-worms',                     name:'Gummy Rush Gummy Worms',                        brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'Classic gummy worms in assorted fruit flavors.',                                    tags:['gummies','candy','gummy-worms','gummy-rush'],                                    variants:[{ id:'con-015', size:null, packFormat:'12 × 285 g', sku:'GR-GUW-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g15', slug:'gummy-rush-sour-party-mix',                  name:'Gummy Rush Sour Party Mix',                     brand:'Gummy Rush',         category:'confectionery', subcategory:'gummies',         cookState:null, origin:null, cut:null, featured:false, description:'A sour gummy party mix — a variety of shapes and flavors.',                         tags:['gummies','candy','sour','party','mix','gummy-rush'],                              variants:[{ id:'con-016', size:null, packFormat:'12 × 285 g', sku:'GR-SPM-12x285', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g16', slug:'turkish-delight-pomegranate-pistachio',      name:'Turkish Delight Pomegranate & Pistachio',       brand:'Turkish Delight',    category:'confectionery', subcategory:'turkish-delight', cookState:null, origin:null, cut:null, featured:true,  description:'Authentic Turkish delight with pomegranate and pistachio. A premium Middle Eastern confection.', tags:['turkish-delight','candy','middle-eastern','premium','gift','specialty'], variants:[{ id:'con-017', size:null, packFormat:'8 × 150 g', sku:'TKD-PPP-8x150', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g17', slug:'turkish-delight-almonds-honey',              name:'Turkish Delight Almonds & Honey',               brand:'Turkish Delight',    category:'confectionery', subcategory:'turkish-delight', cookState:null, origin:null, cut:null, featured:false, description:'Turkish delight with almonds and honey — a classic combination.',                     tags:['turkish-delight','candy','almond','honey','middle-eastern'],                      variants:[{ id:'con-018', size:null, packFormat:'8 × 150 g', sku:'TKD-ALH-8x150', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g18', slug:'turkish-delight-forest-berries',             name:'Turkish Delight Forest Berries',                brand:'Turkish Delight',    category:'confectionery', subcategory:'turkish-delight', cookState:null, origin:null, cut:null, featured:false, description:'Turkish delight with forest berry flavor — a fruity variation on the classic.',       tags:['turkish-delight','candy','berry','middle-eastern'],                               variants:[{ id:'con-019', size:null, packFormat:'8 × 150 g', sku:'TKD-FOR-8x150', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g19', slug:'turkish-delight-pistachio',                  name:'Turkish Delight Pistachio',                     brand:'Turkish Delight',    category:'confectionery', subcategory:'turkish-delight', cookState:null, origin:null, cut:null, featured:false, description:'Classic pistachio Turkish delight — a timeless specialty.',                          tags:['turkish-delight','candy','pistachio','middle-eastern','premium'],                 variants:[{ id:'con-020', size:null, packFormat:'8 × 150 g', sku:'TKD-PIS-8x150', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g20', slug:'turkish-delight-lemon-rose',                 name:'Turkish Delight Lemon & Rose',                  brand:'Turkish Delight',    category:'confectionery', subcategory:'turkish-delight', cookState:null, origin:null, cut:null, featured:false, description:'Lemon and rose Turkish delight — floral and refreshing.',                            tags:['turkish-delight','candy','lemon','rose','floral','middle-eastern'],               variants:[{ id:'con-021', size:null, packFormat:'8 × 150 g', sku:'TKD-LMR-8x150', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g21', slug:'sophies-shoppe-lollipop-classic',            name:"Sophie's Shoppe Lollipop Classic",              brand:"Sophie's Shoppe",    category:'confectionery', subcategory:'lollipops',       cookState:null, origin:null, cut:null, featured:false, description:'Classic lollipops in assorted fruit flavors. Ideal for retail counters.',            tags:['lollipop','candy','classic','sophies-shoppe'],                                    variants:[{ id:'con-022', size:null, packFormat:'120 × 96 g', sku:'SS-LPP-CLS-120x96', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g22', slug:'sophies-shoppe-lollipop-fruitylicious',      name:"Sophie's Shoppe Lollipop Fruitylicious",        brand:"Sophie's Shoppe",    category:'confectionery', subcategory:'lollipops',       cookState:null, origin:null, cut:null, featured:false, description:'Fruit-forward Fruitylicious lollipops in tropical and berry flavors.',                tags:['lollipop','candy','fruit','sophies-shoppe'],                                      variants:[{ id:'con-023', size:null, packFormat:'120 × 96 g', sku:'SS-LPP-FRU-120x96', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g23', slug:'sophies-shoppe-lollipop-sour-power',         name:"Sophie's Shoppe Lollipop Sour Power",           brand:"Sophie's Shoppe",    category:'confectionery', subcategory:'lollipops',       cookState:null, origin:null, cut:null, featured:false, description:'Sour Power lollipops for those who love a tart kick.',                             tags:['lollipop','candy','sour','sophies-shoppe'],                                       variants:[{ id:'con-024', size:null, packFormat:'120 × 96 g', sku:'SS-LPP-SOU-120x96', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g24', slug:'sophies-shoppe-lollipop-fruit-smoothies',    name:"Sophie's Shoppe Lollipop Fruit Smoothies",      brand:"Sophie's Shoppe",    category:'confectionery', subcategory:'lollipops',       cookState:null, origin:null, cut:null, featured:false, description:'Creamy fruit smoothie-flavored lollipops.',                                         tags:['lollipop','candy','fruit','smoothie','sophies-shoppe'],                           variants:[{ id:'con-025', size:null, packFormat:'120 × 96 g', sku:'SS-LPP-FSM-120x96', price:null, salePrice:null, stock:'available' }] },
  { id:'con-g25', slug:'sophies-shoppe-lollipop-cotton-candy',       name:"Sophie's Shoppe Lollipop Cotton Candy",         brand:"Sophie's Shoppe",    category:'confectionery', subcategory:'lollipops',       cookState:null, origin:null, cut:null, featured:false, description:'Cotton candy-flavored lollipops — sweet, fluffy fun.',                              tags:['lollipop','candy','cotton-candy','sophies-shoppe'],                               variants:[{ id:'con-026', size:null, packFormat:'120 × 96 g', sku:'SS-LPP-COT-120x96', price:null, salePrice:null, stock:'available' }] },
  {
    id:'con-g26', slug:'toblerone-tart',
    name:'Toblerone Tart', brand:'Toblerone',
    category:'confectionery', subcategory:'chocolate',
    cookState:null, origin:null, cut:null, featured:true,
    description:'Premium Toblerone chocolate tarts. High gifting and retail appeal.',
    tags:['chocolate','toblerone','tart','premium','gift','confectionery'],
    variants:[{ id:'con-027', size:null, packFormat:'10 × 400 g', sku:'TOB-TART-10x400', price:null, salePrice:null, stock:'available' }],
  },
]

// ============================================================
// HELPERS
// ============================================================

export const getProductsByCategory = (slug) => products.filter((p) => p.category === slug)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
export const getFeaturedProducts = () => products.filter((p) => p.featured)

/** Find a product group and the specific variant by variant id */
export const getProductByVariantId = (variantId) => {
  for (const p of products) {
    const v = p.variants.find((v) => v.id === variantId)
    if (v) return { product: p, variant: v }
  }
  return null
}

export const searchProducts = (query) => {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      (p.nameFr && p.nameFr.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      p.tags.some((t) => t.includes(q)) ||
      (p.origin && p.origin.toLowerCase().includes(q)) ||
      (p.subcategory && p.subcategory.replace(/-/g, ' ').includes(q)) ||
      p.category.replace(/-/g, ' ').includes(q) ||
      p.variants.some(
        (v) =>
          (v.size && v.size.toLowerCase().includes(q)) ||
          (v.packFormat && v.packFormat.toLowerCase().includes(q)) ||
          (v.sku && v.sku.toLowerCase().includes(q))
      )
  )
}

export const getSubcategories = (categorySlug) => {
  const pool = categorySlug === 'all' ? products : products.filter((p) => p.category === categorySlug)
  return [...new Set(pool.map((p) => p.subcategory).filter(Boolean))]
}
