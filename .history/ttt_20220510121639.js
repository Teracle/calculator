var num = 12312;
var commas = num.toLocaleString("en-US");

var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


let obj1 = new Intl.NumberFormat('en-US');  
let output1 = obj1.format(num);  
console.log(output1);
console.log(commas);