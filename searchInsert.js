var searchInsert = function (nums, target) {
  len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) return i;
  }
  sortNum = nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < sortNum.length; i++) {
    if (sortNum[i] > target) return i;
  }
};

// test cases

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1], 0)); // 0
