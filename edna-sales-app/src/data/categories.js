export const categories = [
  {
    id: 'cat-shrimp',
    slug: 'shrimp',
    name: 'Shrimp',
    nameFr: 'Crevettes',
    description: 'Cooked, raw, wild-caught and farmed shrimp in a wide range of sizes and cuts.',
    icon: '🦐',
    featured: true,
  },
  {
    id: 'cat-seafood',
    slug: 'seafood',
    name: 'Fish & Seafood',
    nameFr: 'Poissons & Fruits de mer',
    description: 'Premium fish fillets, squid, octopus, clams, mussels and more.',
    icon: '🐟',
    featured: true,
  },
  {
    id: 'cat-frozen-veg',
    slug: 'frozen-vegetables',
    name: 'Frozen Vegetables',
    nameFr: 'Légumes congelés',
    description: 'A wide selection of IQF and block-frozen vegetables from trusted brands.',
    icon: '🥦',
    featured: true,
  },
  {
    id: 'cat-prepared',
    slug: 'prepared-foods',
    name: 'Prepared & Ready Foods',
    nameFr: 'Aliments préparés',
    description: 'Dumplings, gyoza, spring rolls, pierogies, burgers and pastry.',
    icon: '🥟',
    featured: true,
  },
  {
    id: 'cat-confectionery',
    slug: 'confectionery',
    name: 'Confectionery & Snacks',
    nameFr: 'Confiseries & Collations',
    description: 'Gummy candies, Turkish delight, lollipops and salty sticks.',
    icon: '🍬',
    featured: true,
  },
]

export const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug)
export const getCategoryById = (id) => categories.find((c) => c.id === id)
