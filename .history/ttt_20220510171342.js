// let x='31232312';

// console.log(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

// console.log(x-'21');

let numberCount = n => Math.abs(n).toFixed().length;

if(numberCount(12)==1)
console.log('true'); 

// 4
// console.log(numberCount(-0.004)); // 1
// console.log(numberCount(1.4)); // 1
// console.log(numberCount(NaN)); // 3