/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = (n) => {
  let bin = [];

  if(n === 0 ) return 1;

  while (n !== 0) {
    if (n % 2 == 1) {
      bin.unshift(1);
      n = Math.floor(n / 2);
    } else {
      bin.unshift(0);
      n = Math.floor(n / 2);
    }
  }

  console.log(bin);

  const rev = bin.map((value) => (value === 0 ? 1 : 0));

  console.log(rev);

  for (let i = 0; i < rev.length; i++) {
    rev[i] = rev[i] * 2 ** (rev.length - 1 - i);
  }

  return rev.reduce((acc, cur) => acc + cur, 0);
};
