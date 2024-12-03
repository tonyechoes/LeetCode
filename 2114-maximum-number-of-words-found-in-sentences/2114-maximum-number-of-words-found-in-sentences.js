/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = sentences => {
  const sentencesSlice = sentences.map(sentence => sentence.split(','));
  let wordCount = 0;

  for (let i = 0; i < sentencesSlice.length; i++) {
    for (let j = 0; j < sentencesSlice[i].length; j++) {
      const wordLength = sentencesSlice[i][j].trim().split(' ').length;
      if (wordLength > wordCount) {
        wordCount = wordLength;
      }
    }
  }
  return wordCount;
};