const threeSum = (nums) => {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let uniqueTriplets = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      for (let k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        if((nums[i] + nums[j] + nums[k]) === 0 ){
            uniqueTriplets.push([nums[i], nums[j], nums[k]]);
        }
        
      }
    }
  }
  return uniqueTriplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([-8, -7, 5, 2]))



