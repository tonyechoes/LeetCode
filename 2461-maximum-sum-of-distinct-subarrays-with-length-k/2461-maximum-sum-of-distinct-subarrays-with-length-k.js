/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


const maximumSubarraySum = (nums, k) => {
  let maxSum = 0;  // 최대 합을 0으로 초기화
  let currentSum = 0;  // 현재 부분 배열의 합
  const seen = new Map();  // 각 숫자의 개수를 기록할 Map

  // 슬라이딩 윈도우 방식으로 연속된 부분 배열을 확인
  for (let i = 0; i < nums.length; i++) {
    // 새로 들어오는 값 처리
    currentSum += nums[i];
    seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);

    // 윈도우 크기가 k 이상이면
    if (i >= k) {
      // 윈도우의 가장 왼쪽 값을 제거
      const leftValue = nums[i - k];
      currentSum -= leftValue;
      seen.set(leftValue, seen.get(leftValue) - 1);
      if (seen.get(leftValue) === 0) {
        seen.delete(leftValue);
      }
    }

    // 윈도우가 k 크기를 갖고 있고 중복이 없는 경우
    if (i >= k - 1 && seen.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
};