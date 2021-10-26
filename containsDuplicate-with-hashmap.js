const containsDuplicate = (nums) => {
  len = nums.length;
  if (len === 0) return;
  
  newHash = {}
  for (let i = 0; i < len; i++){
      newHash[nums[i]] = i
  }
  if(Object.values(newHash).length !== len){
    return true
  } else {
    return false
  }

  
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
