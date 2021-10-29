
var isPalindrome = function(s) {
    s= s.toLowerCase().replace(/[\W_]/g,"")
    let reverse = [...s].reverse().join("")
    return s === reverse
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))


