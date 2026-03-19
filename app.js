// // 
// // 
// // 
// // 
// // 
// // 
// // symbol

// // NonPrimitive Data Types
// // Object -> Array, Function

// const cars = ['Cobalt', 'BMW', 'Damas', 'Gentra', 10, true]
// // Array methods
// console.log(cars.length); // uzunlik
// console.log(cars[6]); // index

//  // array elementlarini index yordamida o'zgartiruvchi
// cars[0] = 'Nexia 3'
// console.log(cars[0]);

// // array elementlarini stringga o'girish
// console.log(cars,toString());

// // array elementlarining qaysi ma'lumot turida ekanini tekshirish
// console.log(typeof(cars[8]));

// // array elementlarini tartiblash
// console.log(cars.sort());

// // arrayning oxirgi index iga ulanish
// console.log(cars[cars.length - 1]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [1, 2, 3, 4, 32]

// for lopp - takrorlash operatori

for(a of fruits) {
    console.log(a);
}

for (key of numbers) {
    if(key % 2 == 1) {
     console.log(key, "toq son");
    } else {
        console.log(key, "juft son");
    }
}


