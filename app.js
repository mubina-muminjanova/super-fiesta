// Array methods
// 1. push - arrayga yangi element qo'shadi (oxiriga)
const numbers = [1, 2, 3, 4, 5];
numbers.push()
console.log(1, 2, 3, 4);

// 2. pop - arrayning oxirgi elementini o'chiradi
numbers.pop()
console.log(numbers);

// 3. shift - arrayning birinchi elemntini o'chiradi
numbers.shift()
console.log(numbers);

// 4. unshift - arrayga yangi element qo'shadi (boshiga)
numbers.unshift(0)
console.log(numbers);

// 5. concat - ikkita arrayni qo'shib yangi array yaratish uchun ishlatiladi
const newNums = [10, 11, 12, 13]
const myNums = numbers.concat(newNums)
console.log(myNums);

// 6. slice - qirqish, nusxalash
const names = ['Mubina', 'Farida', 'Zarina', 'Shaxzoda']
const newArr = names.slice(0,3)
console.log(newArr);

// 7. splice - index bo'yicha array elemntlarini o'zgartiradi
names.splice(0, 3, 'New name 1', 'New name 2')
console.log(names);

// 8. join - qo'shish
const str = ['A', 'B', 'C']
console.log(str.join(''));

// 9. reverse - teskari aylantirish
console.log(str,reverse());

// 10. split - stringni arrayga o'giradi
const text = 'lorem ipsum dolor'
console.log(text.split(''));

