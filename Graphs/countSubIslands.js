/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  function find(i, j, islandConst) {
    if (!isValidCell(i, j, n, m) || grid2[i][j] === 0 || visited[i][j])
      return true;

    let temp = true;

    visited[i][j] = true;
    if (grid1[i][j] === 0 || grid1Map[i][j] !== islandConst) temp = false;

    temp = temp & find(i - 1, j, islandConst);
    temp = temp & find(i + 1, j, islandConst);
    temp = temp & find(i, j - 1, islandConst);
    temp = temp & find(i, j + 1, islandConst);

    return temp;
  }

  const n = grid1.length;
  const m = grid1[0].length;
  let islandNumber = 1;
  const visited = Array(n)
    .fill()
    .map((_) => Array(m).fill(false));
  const grid1Map = Array(n)
    .fill()
    .map((_) => Array(m).fill(0));
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && grid1[i][j] === 1) {
        findIslands(i, j, visited, grid1Map, grid1, islandNumber, n, m);
        islandNumber += 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && grid2[i][j] === 1) {
        if (find(i, j, grid1Map[i][j])) result++;
      }
    }
  }

  return result;
};

function isValidCell(i, j, n, m) {
  if (i >= 0 && i < n && j >= 0 && j < m) return true;
  return false;
}

function findIslands(i, j, visited, matrix, grid, islandNumber, n, m) {
  if (!isValidCell(i, j, n, m) || grid[i][j] === 0 || visited[i][j]) return;

  matrix[i][j] = islandNumber;
  visited[i][j] = true;

  findIslands(i - 1, j, visited, matrix, grid, islandNumber, n, m);
  findIslands(i + 1, j, visited, matrix, grid, islandNumber, n, m);
  findIslands(i, j - 1, visited, matrix, grid, islandNumber, n, m);
  findIslands(i, j + 1, visited, matrix, grid, islandNumber, n, m);
}
