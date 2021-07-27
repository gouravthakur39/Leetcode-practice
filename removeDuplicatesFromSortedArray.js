var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
      i++;
    } else {
      i++;
    }
  }
  return j + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
