var search = function(nums, target) {
    len = nums.length
    for (let  i = 0; i< len; i++){
        if(nums[i] === target){
            return i
        } 
    }
    return -1
};