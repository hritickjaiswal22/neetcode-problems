// HAS A BETTER SOLUTION ON LEETCODE
// https://leetcode.com/problems/rotating-the-box/

function rotateTheBox(box) {
  const rows = box.length;
  const columns = box[0].length;
  const result = Array(columns)
    .fill()
    .map((_) => Array(rows).fill(""));

  for (let i = 0; i < rows; i++) {
    let stones = 0;
    let spaces = 0;
    let k = 0;
    for (let j = 0; j < columns; j++) {
      if (box[i][j] === "#") {
        stones++;
        spaces++;
      } else if (box[i][j] === ".") spaces++;
      else {
        let diff = spaces - stones;
        while (diff) {
          result[k][rows - i - 1] = ".";
          k++;
          diff--;
        }

        while (stones) {
          result[k][rows - i - 1] = "#";
          k++;
          stones--;
        }
        result[k][rows - i - 1] = "*";
        k++;
        spaces = 0;
        stones = 0;
      }
    }
    let diff = spaces - stones;
    while (diff) {
      result[k][rows - i - 1] = ".";
      k++;
      diff--;
    }

    while (stones) {
      result[k][rows - i - 1] = "#";
      k++;
      stones--;
    }
  }

  return result;
}
