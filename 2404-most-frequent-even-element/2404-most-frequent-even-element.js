/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = nums => {
  const evenNums = nums.filter(num => num % 2 === 0);
  if (evenNums.length === 0) return -1;

  const frequencyMap = {};
  evenNums.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let mostFrequent = -1;
  let maxFrequency = 0;

  for (const num in frequencyMap) {
    if (
      frequencyMap[num] > maxFrequency ||
      (frequencyMap[num] === maxFrequency && num < mostFrequent)
    ) {
      mostFrequent = Number(num);
      maxFrequency = frequencyMap[num];
    }
  }

  return mostFrequent;
};