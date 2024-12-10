/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossibleToSplit = (nums) =>  {
  const n = nums.length;
  const half = n / 2;

  const uniqueCount = new Set(nums);
  console.log(uniqueCount);

  if (uniqueCount < half) {
    return false;
  }

  const numCount = new Map();
  for (const num of nums) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
    if (numCount.get(num) > 2) {
      return false;
    }
  }

  return true;
};
