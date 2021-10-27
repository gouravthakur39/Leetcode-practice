function subArray(nums) {
    len = nums.length
    if(!nums.length) return []
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++){
            return [nums[i],nums[j]]
        }
    }
}


console.log(subArray([1,2,3]))
// console.log(subArray([5,7,0,-1,4]))
// console.log(subArray([0,6]))
// console.log(subArray([0]))
// console.log(subArray([9]))
// console.log(subArray([-3,-1, -3]))