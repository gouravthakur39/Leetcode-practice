const minWindow = (s, t) => {
    const count = {}; // Count of chars in t to be used
    const res = [-1];
    for (let c of t) count[c] = (count[c] || 0) + 1;
    let start = 0, end = 0, numLeft = t.length;
    
    while (end < s.length) {
      if (count[s[end]] > 0) numLeft--; // Can use char s[end] (decrement numLeft)
      count[s[end]]--; // Update count
      end++; // Keep checking
  
      // Window is valid
      while (numLeft === 0) {
        // Window is smaller
        if (res[0] === -1 || end - start < res[1] - res[0]) {
          res[0] = start;
          res[1] = end;
        }
        count[s[start]]++; // Update count (1 char (s[start]) is no longer used)
        if (count[s[start]] > 0) numLeft++; // Still need to use char s[start], update numLeft
        start++; // Keep checking
      }
    }
    return res[0] === -1 ? '' : s.slice(res[0], res[1]);
  };