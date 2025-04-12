/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let temp;

    for (let num of nums) {
        if (count === 0) {
            temp = num;
        }
        count += (num === temp) ? 1 : -1;
    }
    return temp;
};