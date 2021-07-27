/*
problem statement: https://leetcode.com/problems/roman-to-integer/
*/

var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
//   ~i means bit NOT operator. same as writing -(i+1)
  for (let i = s.length - 1; i>=0 ; i--) {
    let num = roman[s.charAt(i)];
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
