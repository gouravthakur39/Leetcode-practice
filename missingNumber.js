/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    len = nums.length
    let miss = 0
    for (let  i = 0; i < len; i++){
        miss = miss ^ i + 1
        miss = miss ^ nums[i]
    }
    return miss

};

console.log(missingNumber([3, 0,1])) //2
console.log(missingNumber([0,1])) //2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //8
console.log(missingNumber([0])) //1
