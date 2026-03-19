// number methods
let num = 1_000_000;
let myNum = 6.3
// rounding
console.log(Math.round(myNum)); //normal yaxlitlash
console.log(Math.floor(myNum)); //pastga qarab yaxlitlash
console.log(Math.ceil(myNum)); //yuqoriga qarab yaxlitlash
console.log(Math.trunc(myNum)); //sonning butun qismini qaytaradi

// isNaN - number bo'lmagan ma'lumot turimi
// NaN - not a Number
console.log(isNaN('string'));
console.log(NaN === NaN);

// isFinite
console.log(isFinite(10));
console.log(isFinite(Infinity));
console.log(isFinite('str'));

// toFixed
let num2 = 12.3456789123456
console.log(num2.toFixed(4));

//parseInt va floatInt
console.log(parseInt('100.9px')); //butun qismni ajratadi 
console.log(parseFloat('100.9px')); //butun va qoldiq qismini ajratadi

// max, min, pow
console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log(Math.min(1, 2, 3, 4, 5, 6));
console.log(Math.pow(3, 4));
console.log(2 ** 3);

// random
console.log(Math.round(Math.random() * 100)); //0 va bir orasidagi tasodifiy sonlar
