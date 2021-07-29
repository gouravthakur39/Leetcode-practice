function isValid(s) {
  let closeMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let charStack = [];

  // validate input
  if (s === null || s === undefined) return false;

  for (var i = 0; i < s.length; i++) {
    let curChar = s.charAt(i);
    let topElement;
    if (closeMap[curChar] !== undefined) {
      topElement = charStack.length === 0 ? "#" : charStack.pop();
      if (topElement !== closeMap[curChar]) return false;
    } else {
      charStack.push(curChar);
    }
  }
  return charStack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
