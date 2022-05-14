// let nums=4125123;
// nums=nums.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// console.log(nums);


x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    console.log(x);