const characterReplacement = (s, k) => {
    if (!s || s.length === 0) return 0;
    let map = {}
    let max = 0
    let cur_count_max = 0
    let left = 0
    let cur_letter
    for(let i = 0; i < s.length; i++) {
        cur_letter = s[i]
        // Count the occurence of the current letter (in the present window)
        map[cur_letter] ? map[cur_letter]++ : map[cur_letter] = 1
  
        // Update cur_count_max (in the present window)
        if (map[cur_letter] > cur_count_max) cur_count_max = map[cur_letter]
  
        // Sliding window: Check if the window we are checking is valid or not
        // In case the size of window is bigger than cur_count_max plus max change(k)
        // decrease the count of the leftmost letter and then slide left (left++)
        if (i - left + 1 > cur_count_max + k) {
            map[s[left]] -= 1
            left++
        }
        else {
            max = Math.max(max, i - left + 1)
        }
    }
  
    return max
  }