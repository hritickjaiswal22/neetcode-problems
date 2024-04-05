function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    const hash = {};

    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") continue;
      else if (!hash[board[i][j]]) hash[board[i][j]] = true;
      else return false;
    }
  }

  for (let j = 0; j < 9; j++) {
    const hash = {};

    for (let i = 0; i < 9; i++) {
      if (board[i][j] == ".") continue;
      else if (!hash[board[i][j]]) hash[board[i][j]] = true;
      else return false;
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const hash = {};

      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          if (board[k][l] == ".") continue;
          else if (!hash[board[k][l]]) hash[board[k][l]] = true;
          else return false;
        }
      }
    }
  }

  return true;
}
