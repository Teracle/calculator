var num = 1234567.89;
var commas = num.toLocaleString("en-US");

var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(commas);