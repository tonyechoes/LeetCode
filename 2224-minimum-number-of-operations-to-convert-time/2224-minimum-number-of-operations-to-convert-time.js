/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = (curr, corr) => {
  const [currHH, currMM] = curr.split(":").map(Number);
  const [corrHH, corrMM] = corr.split(":").map(Number);
  let count = 0;

  if (
    0 <= currHH &&
    currHH <= 23 &&
    0 <= corrHH &&
    corrHH <= 23 &&
    0 <= currMM &&
    currMM <= 59 &&
    0 <= corrMM &&
    corrMM <= 59
  ) {
    const currTime = currHH * 60 + currMM;
    const corrTime = corrHH * 60 + corrMM;
    let diff = corrTime - currTime;

    [60, 15, 5, 1].forEach((unit) => {
      if (diff > 0) {
        count += Math.floor(diff / unit);
      }
      console.log(Math.floor(Math.abs(diff) / unit));
      diff -= Math.floor(Math.abs(diff) / unit) * unit;
    });
    return count;
  }

  return "Wrong time format";
};