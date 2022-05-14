// let str='12312 123'
// const replaced = str.slice(0, -1) + '!';

// console.log(replaced);



function getFormatedNumber(number){
    if(typeof number !== Number)
        number = Number(number);

    number = number.toString().split('.');
    number[0] = number[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');

    return number.join('.');

}

console.log(getFormatedNumber(1231123))
