let nums=4125123;
nums=nums.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(nums);