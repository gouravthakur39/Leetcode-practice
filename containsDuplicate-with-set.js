
const containsDuplicate = (nums) => {
    let set = new Set(nums)
    if (set.size !== nums.length){ 
        return true
    } else {
        return false
    }
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));