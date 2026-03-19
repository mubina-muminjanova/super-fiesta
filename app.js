// Loops - takrorlash operatorlari

// while - davomida
let num = 0; // 10,

// while (num < 100) {
//   console.log(num);
//   // infinity loop
//   num = num + 1;
// }

// do while

// do {
//     console.log(num);
//     num = num + 1
// } while (num < 10)

// for - indexlar muhim bo'lganda ishlatiladi
const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i < arr.length; i++){
//     console.log(i);
// }

// for of - index muhim bo'lmaganda ishlatiladi
for (son of sonlar) {
  console.log(son ** 2);
}

// foreach
sonlar.forEach((el) => {
  console.log(el * 2);
});

// for in - Object