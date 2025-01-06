/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

const sentence = 'i love eating burger';
const searchWord = 'burg';
console.log(isPrefixOfWord(sentence, searchWord)); // 4
