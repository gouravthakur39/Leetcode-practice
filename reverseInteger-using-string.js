/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
*/

//   parseInt is not required because of typecasting.  The string is converted to a number 
//   when we are comparing it with 231 and multiplying with the sign.

var reverse = function (x) {
  const reversedInt = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  if (reversedInt > 2 ** 31) return 0;
  return reversedInt * Math.sign(x);
};

console.log(reverse(23));
console.log(reverse(-529));
console.log(reverse(890));
console.log(reverse(-1));
console.log(reverse(0));
