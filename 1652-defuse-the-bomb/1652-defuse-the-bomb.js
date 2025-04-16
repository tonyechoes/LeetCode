/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let output = [];
    let n = code.length

    for (let i=0; i<n; i++) {
        if(k === 0) {
            output.push(0);
        }
        else {
            let temp = 0;
            
            if (k>0) {
                for (let j=1; j<=k; j++) {
                    temp += code[(i+j) % n];
                }
            } else {
                for (let j=1; j<=-k; j++) {
                    temp += code[(i-j+n) % n];
                }
            }
            output.push(temp);
            }
        }
        return output;
    }
    