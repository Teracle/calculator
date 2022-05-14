// let x='31232312';

// console.log(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

// console.log(x-'21');

// let numberCount = n => Math.abs(n).toFixed().length;

// if(numberCount(123312.1221)==6)
// console.log('true'); 


let numberCount = n => 1 + Math.max(Math.floor(Math.log10(Math.abs(n))), 0);
console.log(numberCount(1023.4)); // 4

// 4
// console.log(numberCount(-0.004)); // 1
// console.log(numberCount(1.4)); // 1
// console.log(numberCount(NaN)); // 3