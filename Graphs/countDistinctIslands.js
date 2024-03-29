// THE IDEA WAS SPOT ON RIGHT BU GETTING BUGS

class Solution {
  //Function to count the number of distinct islands.
  countDistinctIslands(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array(n)
      .fill()
      .map(() => Array(m).fill(false));
    const hash = {};

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) {
          const str = this.dfs(i, j, n, m, visited, grid);
          hash[str] = true;
        }
      }
    }

    return Object.keys(hash).length;
  }

  dfs(i, j, n, m, visited, grid) {
    let result = "";

    if (j + 1 < m && grid[i][j + 1] === 1 && !visited[i][j + 1]) {
      visited[i][j + 1] = true;
      result += "R" + this.dfs(i, j + 1, n, m, visited, grid);
    }
    if (j - 1 >= 0 && grid[i][j - 1] === 1 && !visited[i][j - 1]) {
      visited[i][j - 1] = true;
      result += "L" + this.dfs(i, j - 1, n, m, visited, grid);
    }
    if (i + 1 < n && grid[i + 1][j] === 1 && !visited[i + 1][j]) {
      visited[i + 1][j] = true;
      result += "D" + this.dfs(i + 1, j, n, m, visited, grid);
    }
    if (i - 1 >= 0 && grid[i - 1][j] === 1 && !visited[i - 1][j]) {
      visited[i - 1][j] = true;
      result += "U" + this.dfs(i - 1, j, n, m, visited, grid);
    }

    return result;
  }
}
