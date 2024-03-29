class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

var cloneGraph = function (node) {
  const hash = {};

  if (!node) return node;
  return find(node, hash);
};

function find(node, hash) {
  const { val, neighbors } = node;
  const newNode = new GraphNode(val);

  hash[val] = newNode;

  for (const neighbor of neighbors) {
    if (!hash[neighbor.val]) {
      newNode.neighbors.push(find(neighbor, hash));
    } else newNode.neighbors.push(hash[neighbor.val]);
  }

  return newNode;
}
