// var str = "2133121".split('');
// var nth = 4; // the nth character you want to replace
// var replaceWith = "," // the character you want to replace the nth value
// for (var i = nth-1; i < str.length-1; i+=nth) {
//     str[i] = replaceWith;
// }
// console.log( str.join("") );

// var str = "12312";
    
// var result = str.replace(/(...)./g, "$1,");

// console.log(result);


let str="The quick brown fox jumps over the lazy dogs.".replace(/(.{3})/g,"$1$");

console.log(str);