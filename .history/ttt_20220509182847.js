// var str = "2133121".split('');
// var nth = 4; // the nth character you want to replace
// var replaceWith = "," // the character you want to replace the nth value
// for (var i = nth-1; i < str.length-1; i+=nth) {
//     str[i] = replaceWith;
// }
// console.log( str.join("") );

var str = "abcdefoihewfojias";
    
var result = str.replace(/(...)./g, "$1,");

console.log(result);
