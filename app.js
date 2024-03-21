// 1-SAVOL

// let son = [3, 4, 5];

// let kvad = son.map(x => x * x);

// console.log(kvad);

// 2-SAVOL

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let SalbiRaqamlar = sonlar.filter(x => x >= 3);

// console.log(SalbiRaqamlar);

// 3-SAVOL

// let massiv = [1, 2, [3, 4], 5, [6, 7]];

// let massiv2 = massiv.filter(x => Array.isArray(x));

// console.log(massiv2);


// 4-SAVOL

// let raqamlar = [1, 2, 3, 0, 4, 5, 6];

// let yigindisi = raqamlar.reduce((accumulatir, currentValue) => {
//     if (currentValue !== 0) {
//         return accumulatir + currentValue;
//     } else {
//         return accumulatir;
//     }
// }, 0);

// console.log(yigindisi);


// 5-SAVOL

// let raqamlar = [1, 2, 0, 3];

// let yigindisi = raqamlar.reduce((accumulatir, currentValue) => {
//     if (currentValue !== 0) {
//         return accumulatir + currentValue;
//     } else {
//         return accumulatir;
//     }
// }, 0);

// console.log(yigindisi);


// 6-SAVOL

// let son = +prompt("ILTIMOS SON KIRITING VA UNI MASSIVDI ICHIDA BORMI YOQMILIGINI ANIQLAB BERAMIZ")

// function iktaRaqam(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//         for (let j = i + 1; j < massiv.length; j++) {
//             if (massiv[i] === massiv[son]) {
//                 return "ha bor bundek sonimiz";
//             }
//         }
//     }
//     return "yoq bundek sonimiz";
// }

// let raqamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(iktaRaqam(raqamlar));


// 7-SAVOL

// let son = +prompt("ILTIMOS SON KIRITING 1DAN - 10 SONIGACHA")

// function Teng(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//         for (let j = i + 1; j < massiv.length; j++) {
//             if (massiv[i] === massiv[son]) {
//                 return "ha";
//             }
//         }
//     }
//     return "yoq";
// }

// let raqamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; /*masivlar*/

// console.log(Teng(raqamlar));


// 8-SAVOL


// let son = +prompt("NECHITA ARRAY DI ICHIDA (x) chirarib bersin")

// function arrayFill(element, length) {
//     let filterArr = [];
//     for (let i = 0; i < length; i++) {
//         filterArr.push(element);
//     }
//     return filterArr;
// }

// let result = arrayFill('x', son);
// console.log(result);


// 9-SAVOL

// let son = +prompt("QIYMATINI KIRITING")

// function arrayFill(length) {
//     let filterArr = [];
//     for (let i = 1; i <= length; i++) {
//         filterArr.push('x'.repeat(i));
//     }
//     return filterArr;
// }

// let result = arrayFill(son);
// console.log(result);



// 10-SAVOL

// function arrayFill(length) {
//     let filterArr = [];
//     for (let i = 1; i <= length; i++) {
//         filterArr.push(String(i).repeat(i));
//     }
//     return filterArr;
// }

// let result = arrayFill(5);
// console.log(result);
