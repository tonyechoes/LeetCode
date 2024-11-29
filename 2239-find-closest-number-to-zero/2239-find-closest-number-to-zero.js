/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = (nums) => {
  const uniqueNums = new Set(nums);
  let closest = Infinity;

  for (const num of uniqueNums) {
    if (
      Math.abs(num) < Math.abs(closest) ||
      (Math.abs(num) === Math.abs(closest) && num > closest)
    ) {
      closest = num;
    }
  }

  return closest;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
