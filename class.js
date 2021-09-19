// class Support {
//     name;
//     designation = 'support web dev';
//     address = 'BD';
//     constructor(name, address){
//         this.name = name
//         this.address = address
//     }
//     startSession(){
//         console.log(this.name, 'start a support session')
//     }
// }

// const amir = new Support('Amir khan', 'US')
// amir.startSession();
// console.log(amir)
// const salman = new Support('Solaiman Khan', 'Dubai')
// salman.startSession();
// console.log(salman)

// console.log(min( [1,3,2 ])) ? function min(nums) {  return Math.min(nums) }
// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// const firstFriend = friends.find(friend => friend.length == 5)
// console.log(firstFriend)

// const num1 = 1;
// let num2 = 2;
// num2 = 3;
// console.log(num2)
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const name1 = 'Borshon'
// let name2 = 'Arafat'
// const names = `${name1} ${name2} ${person.age}`
// console.log(names)

// const devide = num => num / 5
// console.log(devide(100))

// const multiplySum = (num1, num2) => (num1 + 2) * (num2 + 2)
// console.log(multiplySum(2, 2))

// const multiply = (num1, num2, num3) => num1 * num2 * num3
// console.log(multiply(2, 2, 2))


// const multiply = (num1, num2) => {
//     const numbers = (num1 + num2) * 2
//     return numbers
// }
// console.log(multiply(2, 2))

// const numbers = [10, 20, 30, 40]
// const multiply = numbers.map(x => x * 2)
// console.log(multiply)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const evenNumber = numbers.filter(x => x % 2 != 0)
// console.log(evenNumber)

// const persons = [
//     {firstName:"John", lastName:"Doe", price:50, eyeColor:"blue"},
//     {firstName:"John", lastName:"Doe", price:150, eyeColor:"blue"},
//     {firstName:"John", lastName:"Doe", price:5000, eyeColor:"blue"},
//     {firstName:"John", lastName:"Doe", price:500, eyeColor:"blue"},
//     {firstName:"John", lastName:"Doe", price:50000, eyeColor:"blue"},
// ];

// const priceFind = persons.find(x => x.price == 5000)
// console.log(priceFind)

// const company = {
//     name: 'GP',
//     ceo: {id: 1, name: 'ajmol', food: 'fuchka'},
//     web: {work: 'website development', employee: 22, framework: 'react', tech: {first: 'html', second: 'css', third: 'js'}}
// }

// const {food} = company.ceo
// console.log(food) 
// const {framework, work} = company.web
// console.log(framework, work)
// const {first, second, third} = company.web.tech
// console.log(first, second, third)

// const sum = (num1, num2, num3, num4 = 7) => num1 + num2 + num3 + num4
// console.log(sum(2, 2, 2))
const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }

const fullName = data.result[0].userName.name
console.log('${fullName}')