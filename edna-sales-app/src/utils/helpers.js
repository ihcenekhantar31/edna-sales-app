/**
 * Get the display emoji for a product based on category + subcategory
 */
export function getProductEmoji(category, subcategory) {
  const subMap = {
    cooked: '♨️',
    raw: '🧊',
    'black-tiger': '🐯',
    wild: '🌊',
    'cold-water': '❄️',
    butterfly: '🦋',
    breaded: '🍘',
    battered: '🍘',
    scallops: '🍥',
    'fish-fillets': '🐠',
    'smoked-fish': '🥩',
    squid: '🦑',
    shellfish: '🐚',
    specialty: '⭐',
    mix: '🎲',
    'whole-fish': '🐟',
    mixed: '🥗',
    okra: '🌱',
    peas: '💚',
    spinach: '🥬',
    broccoli: '🥦',
    cauliflower: '🥦',
    fruit: '🍓',
    beans: '🫘',
    corn: '🌽',
    fries: '🍟',
    dumplings: '🥟',
    'spring-rolls': '🌮',
    pastry: '🥐',
    burgers: '🍔',
    sausages: '🌭',
    bread: '🫓',
    pierogies: '🥟',
    gummies: '🍬',
    'salty-snacks': '🥨',
    'turkish-delight': '💎',
    lollipops: '🍭',
    chocolate: '🍫',
  }

  const catMap = {
    shrimp: '🦐',
    seafood: '🐟',
    'frozen-vegetables': '🥦',
    'prepared-foods': '🥟',
    confectionery: '🍬',
  }

  return subMap[subcategory] || catMap[category] || '📦'
}

/**
 * Format a price number as a CAD currency string
 */
export function formatPrice(price, currency = 'CAD') {
  if (price === null || price === undefined) return null
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price)
}

/**
 * Truncate a string to maxLength characters
 */
export function truncate(str, maxLength = 60) {
  if (!str) return ''
  return str.length > maxLength ? str.slice(0, maxLength) + '…' : str
}

/**
 * Format a subcategory slug into a readable label
 */
export function formatSubcategory(slug) {
  if (!slug) return ''
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Debounce a function
 */
export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
