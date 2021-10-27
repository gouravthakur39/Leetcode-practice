var productExceptSelf = function(nums) {
    let res = [];
    let left = 1;
    let right = 1;
    for(let i=0;i<nums.length;i++){
        res[i] = left;
        left = left*nums[i];
    }

    for(let i=nums.length-1;i>=0;i--){
        res[i] = right*res[i];
        right = right*nums[i];
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4]));
