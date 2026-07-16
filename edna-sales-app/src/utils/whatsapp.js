import { APP_CONFIG } from '../config/app'

/**
 * Build a structured WhatsApp order message from cart items + customer info.
 * @param {Array} items - cart items
 * @param {Object} customer - { name, phone, address, notes }
 * @returns {string} formatted message
 */
export function buildWhatsAppMessage(items, customer) {
  const { name, phone, address, notes } = customer

  let msg = `Hello EDNA! 👋\n\nI would like to place an order:\n\n`

  items.forEach((item, index) => {
    const price = item.salePrice ?? item.price
    msg += `${index + 1}. ${item.name}\n`
    if (item.size) msg += `   Size: ${item.size}\n`
    msg += `   SKU: ${item.sku}\n`
    msg += `   Pack: ${item.packFormat} × ${item.qty} case${item.qty > 1 ? 's' : ''}\n`
    if (price) {
      msg += `   Line total: $${(price * item.qty).toFixed(2)} CAD\n`
    }
    msg += '\n'
  })

  const totalItems = items.reduce((a, b) => a + b.qty, 0)
  const hasPrices = items.every((i) => i.price !== null && i.price !== undefined)
  const subtotal = hasPrices
    ? items.reduce((a, b) => a + (b.salePrice ?? b.price ?? 0) * b.qty, 0)
    : null

  if (subtotal !== null) {
    msg += `ORDER TOTAL: $${subtotal.toFixed(2)} CAD\n`
  } else {
    msg += `ORDER: ${totalLines(items)} product${totalLines(items) > 1 ? 's' : ''}, ${totalItems} case${totalItems > 1 ? 's' : ''} — pricing to be confirmed\n`
  }

  msg += '\n--- Customer Information ---\n'
  if (name) msg += `Business / Name: ${name}\n`
  if (phone) msg += `Phone: ${phone}\n`
  if (address) msg += `Delivery Address: ${address}\n`
  if (notes) msg += `Notes: ${notes}\n`

  msg += '\nPlease confirm availability and pricing. Thank you!'

  return msg
}

function totalLines(items) {
  return items.length
}

/**
 * Generate the wa.me URL with pre-filled message.
 * @param {Array} items
 * @param {Object} customer
 * @returns {string} WhatsApp URL
 */
export function buildWhatsAppURL(items, customer) {
  const message = buildWhatsAppMessage(items, customer)
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encoded}`
}

/**
 * Open WhatsApp in a new tab.
 */
export function openWhatsApp(items, customer) {
  const url = buildWhatsAppURL(items, customer)
  window.open(url, '_blank', 'noopener,noreferrer')
}
