/*
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may 
not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Faster method for twoSum.js : O(n) time complexity

const twoSum = (nums, target) => {
  if(nums.length === 0) return 
  const numObjects = {}
  for ( let i = 0; i< nums.length; i++){
    let thisNum = nums[i]
    // thisNum is key, i is value i.e 
    numObjects[thisNum] = i
  }
  // console.log(numObjects)
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if(numObjects.hasOwnProperty(diff) && numObjects[diff] !== i ){
      return [i, numObjects[diff]]
    }
  }
};

console.log(twoSum([1, 5, 5], 10));
console.log(twoSum([7, 1, 5, 0], 12));
console.log(twoSum([2, 7, 11, 15], 9));
