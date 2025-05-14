/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let arr = [];

    if(nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    } else {
        arr = [...nums, target].sort((a, b) => a - b);
    }

    return arr.indexOf(target);
};