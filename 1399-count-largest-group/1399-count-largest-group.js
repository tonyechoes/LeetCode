/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const m = new Map();     
    let maxCount = 0;

    for (let i=1; i<=n; i++) {
        let digits = String(i).split('').map(Number);
        let mLength = digits.length;
        let sum = 0;

        for(let j=0; j<mLength; j++) {
            sum += digits[j];
        }

        m.set(sum, (m.get(sum) || 0) + 1); 
        maxCount = Math.max(maxCount, m.get(sum));
    }

    let count = 0;
    for (let val of m.values()) {
    if (val === maxCount) count++;
  }

    return count;
};