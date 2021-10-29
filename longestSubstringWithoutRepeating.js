var lengthOfLongestSubstring = function(s) {
    let max = 0
  let str = ''

  for(let i = 0; i < s.length; ++i) {
    let letter = s[i]

	// check whether this letter already exists in previous string
	let index = str.indexOf(letter)

    if (index !== -1) {
	 // create a new string from last_pos + 1 of the repeated letter
      str = str.slice(index + 1)
    } 
    str = str + letter

    max = Math.max(str.length, max)
  }
  
  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))




