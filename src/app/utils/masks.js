export function maskPrice(price) {
  const money = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  })

  return money.format(price).replace('R$', '')
}