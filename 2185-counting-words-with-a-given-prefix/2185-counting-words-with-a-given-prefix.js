/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => {
  let includeCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) includeCount++;
  }
  return includeCount;
};
