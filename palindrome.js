/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. 
For example, 121 is palindrome while 123 is not, 
-212 is not palindrome.
*/
var isPalindrome = function (x) {
  const isNegative = x < 0 ? true : false;
  if (!isNegative) {
    const reversedInt = parseInt(
      Math.abs(x).toString().split("").reverse().join("")
    );
    if (reversedInt == x) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(111));
console.log(isPalindrome(-101));
