const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let leftheight = height[left];
    let rightheight = height[right];
    let min_height = Math.min(leftheight, rightheight);
    let len = right - left;
    let curr_area = min_height * len;
    max = Math.max(max, curr_area);
    if (leftheight < rightheight) {
      left++;
    } else {
      right--;
    }
  }
  return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
