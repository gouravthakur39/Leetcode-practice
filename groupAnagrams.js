var groupAnagrams = function(strs) {
    const map = {};
    
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('');
        if (!map[key]) {
            map[key] = [strs[i]];
        } else {
            map[key].push(strs[i]);
        }
    }
    
    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))