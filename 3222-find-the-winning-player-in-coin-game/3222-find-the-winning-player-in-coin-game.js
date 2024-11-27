/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
const winningPlayer = function (x, y) {
  let turn = true; // True면 Alice, False면 Bob

  while (true) {
    if (x > 0 && y >= 4) {
      x -= 1;
      y -= 4;
      console.log(
        `${turn ? "Alice" : "Bob"} completed their turn, now it's ${
          !turn ? "Alice" : "Bob"
        }'s turn`
      );
    } else {
      console.log(`${turn ? "Alice" : "Bob"} cannot make a 115.`);
      return turn ? "Bob" : "Alice";
    }

    turn = !turn;
  }
};

console.log(winningPlayer(3, 4));