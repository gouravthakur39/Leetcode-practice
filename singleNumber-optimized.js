function singleNumberWithHash(nums) {
  let hash = {};
  nums.forEach((num) => {
    if (hash[num]) {
      delete hash[num];
    } else {
      hash[num] = 1;
    }
  });
  return Object.keys(hash)[0];
}

console.log(singleNumberWithHash([2, 2, 1]));
console.log(singleNumberWithHash([4, 1, 2, 1, 2]));
console.log(singleNumberWithHash([1]));
