let nums=123123;
nums=nums.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(nums);