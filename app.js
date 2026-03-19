// Array Methods

const fruits = ["Apple", "Orange", "Apple", "Mango, 'Orange"];

// 1. indexOF - array elemntlarining index ini topadi (arrayning boshidan qidiradi)
console.log(fruits.indexOf('Orange'));

// 2. lastIndexOf - array elementlarining index ini topadi (arrayning oxiridan qidiradi)
console.log(fruits.lastIndexOf('Orange'));

// 3. includes - o'z ichiga olish // boolean
console.log(fruits.includes('Mango'));

// 4. find - shartni bajaruvchi birinchi elementni qaytaradi 
// const myFruit = fruits.find(el => el.startsWith('A'))
// console.log(myFruit);

// 5. findIndex - shartni bajaruvchi birinchi elementning indexini qaytaradi 
const myFruit = fruits.findIndex(el => el.startsWith('A'))
console.log(myFruit);

// 6. findLast - shartni bajaruvchi oxirgi elementni topadi
// let numbers =[10, 20, 30, 40, 30]
// let result = numbers.findLast(num => num => 25)
// console.log(result); // 30

// 7. findlastIndex - oxirgi mos keladigan elementning indexini qaytaradi
let numbers = [10, 20, 30, 40, 30]
let index = numbers.findLastIndex(num => num => 25)
console.log(index); // 4

// 8. isArray - uzatilgan paramentrning array yoki yo'qligini tekshirish
const nums = [1, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray(nums)); //false

// 9. forEach - arrayning har bir elementi ustida amal bajarish
fruits.forEach(el => {
    console.log(el.toUpperCase());
})
nums.forEach(el => {
    console.log(Math.pow(el, 2));
})

// 10. filter // boolean
nums.filter(el => {
    console.log(el > 5);
})

let newNum = 5;

if (newNum > 5) {
    console.log("Katta");
} else {
    console.log("Juft");
}

const toq_sonlar = []
const juft_sonlar = []

// forEach -> nums -> if el % 2 == 1 ? toq_sonlar : juft_sonlar