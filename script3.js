
const cart = [
    { productName: "Abóbora", pricePerKg: 5, Kg: 1 },
    { productName: "Pepino", pricePerKg: 3.55, Kg: 1.3 },
    { productName: "Limão", pricePerKg: 1.2, Kg: 2 },
    { productName: "Abacate", pricePerKg: 5.4, Kg: 1.67 },
    { productName: "Morango", pricePerKg: 11.9, Kg: 3 },

]

const valueTotal = cart.reduce((acc, value) => {
    const valueItem = value.pricePerKg * value.Kg

    return acc + valueItem
}, 0)

const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency", 
    currency: 'BRL'
}).format(valueTotal)

console.log(`Total da compra: R$ ${formatedValue}`)


