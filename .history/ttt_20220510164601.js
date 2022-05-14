let x='31232312';

console.log(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

console.log(x-'21')
