var longestPalindrome = function(s) {
    let longest = '';
    
    for (let i=0; i<s.length; i++){
        expandCheck(i, i);
        expandCheck(i, i+1);
    }
    
    function expandCheck(l, r){
        while (l>=0 && r<s.length && s[l]===s[r]){
            if (r-l+1 > longest.length){
                longest = s.slice(l, r+1);
            }
            l--;
            r++;
        }
    }
    
    return longest;
};