var findMin = function(nums) {
    sortedNums = nums.sort((a,b) => {
        return a - b
    })
    return sortedNums[0]
    
};