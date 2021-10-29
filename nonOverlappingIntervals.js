var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        return a[1] - b[1]
    })
    let count = 0;
    let prev = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[prev][1]) {
            count++;
        } else {
            prev = i;
        }
    }
    return count;
};