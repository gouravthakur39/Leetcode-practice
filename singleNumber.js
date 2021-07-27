function singleNumber(nums) {
  let sorted = nums.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i] && sorted[i + 1] !== sorted[i]) {
      return sorted[i];
    }
  }
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
