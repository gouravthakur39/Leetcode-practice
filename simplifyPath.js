// simplify path

var simplifyPath = function (path) {
  const pathArr = path
    .split("/")
    .filter((dir) => dir.length > 0 && dir !== ".");
  const stack = [];

  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === "..") {
      stack.pop();
    } else {
      stack.push(pathArr[i]);
    }
  }

  return `/${stack.join("/")}`;
};

//test cases
console.log(simplifyPath("./home/folder1"));
console.log(simplifyPath("./home/folder1/././././././folder2"));
console.log(simplifyPath("./home/folder1/folder2/.././././../folder3"));
