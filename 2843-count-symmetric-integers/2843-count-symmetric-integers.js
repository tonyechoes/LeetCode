/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;

    for (let i=low; i<=high; i++) {
        let str = String(i);
        let n = str.length;

        if (n % 2 === 1 ) continue;
        
        let half = str.length/2;
        let leftDigit = 0;
        let rightDigit = 0;

        for (let j=0; j<half; j++) {
            leftDigit += Number(str[j]);
            rightDigit += Number(str[j + half]);
        }

        if (leftDigit === rightDigit) {
            count++;
        }
    }
    return count;
}