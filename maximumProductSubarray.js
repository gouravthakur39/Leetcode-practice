var maxProduct = function(nums) {
    if (!nums.length) return 0;
    var localMax = 0;
    var localMin = 0;
    var lastMax = nums[0];
    var lastMin = nums[0];
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
      localMax = Math.max(lastMax * nums[i], lastMin * nums[i], nums[i]);
      localMin = Math.min(lastMax * nums[i], lastMin * nums[i], nums[i]);
      max = Math.max(max, localMax);
      lastMax = localMax;
      lastMin = localMin;
    }
    return max;
  };

console.log(maxProduct([2,3,-2,4])) //6
console.log(maxProduct([-2, 0, -1])) //0
console.log(maxProduct([0,2])) //2
console.log(maxProduct([-2])) //-2
console.log(maxProduct([-4, -3])) //12


