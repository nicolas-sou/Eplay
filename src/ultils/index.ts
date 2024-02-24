export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.prices.current) {
      return (acumulador += valorAtual.prices.current)
    }

    return 0
  }, 0)
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
