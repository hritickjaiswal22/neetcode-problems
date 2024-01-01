class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

function cloneGraph(node) {
  if (!node) return node;

  const queue = [];
  const hash = {};
  const visited = {};

  queue.push(node);
  visited[node.val] = true;

  while (queue.length) {
    const { val, neighbors } = queue.shift();

    if (!hash[val]) hash[val] = [];

    for (const neighbor of neighbors) {
      hash[val].push(neighbor.val);

      if (!visited[neighbor.val]) {
        queue.push(neighbor);
        visited[neighbor.val] = true;
      }
    }
  }

  console.log(hash);
}
