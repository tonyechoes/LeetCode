/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let temp = []
    for(let i=0; i<nums.length; i++) { 
        temp.push(nums[nums[i]]);
    }
    return temp;
};