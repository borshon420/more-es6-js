const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '0171755555555', address: 'chadpur', dress: 'silver'}

// const phone = fish.phone
// const address = fish.address

const {id, name, price, phone, address, dress} = fish
// console.log(phone, address)
// console.log(phone, dress)
// console.log(phone)
// console.log(phone)
// console.log(phone)

const company = {
    name: 'GP',
    ceo: {id: 1, name: 'ajmol', food: 'fuchka'},
    web: {work: 'website development', employee: 22, framework: 'react', tech: {first: 'html', second: 'css', third: 'js'}}
}

const {work, framework} = company.web
const {food} = company.ceo
const {first, second, third} = company.web.tech
// console.log(work, framework, food);
console.log(first, second, third);