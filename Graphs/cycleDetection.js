// https://www.youtube.com/watch?v=BPlrALf1LDU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=11&t=13s
function undirectedGraphUsingBFSisCycle(V, adj) {
  function find(startNode) {
    const queue = [];

    queue.push([startNode, -1]);

    while (queue.length > 0) {
      const [node, parent] = queue.shift();
      const neighbours = adj[node];

      visited[node] = true;

      for (const neighbour of neighbours) {
        if (!visited[neighbour]) queue.push([neighbour, node]);
        else if (neighbour !== parent) return true;
      }
    }

    return false;
  }

  const visited = Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (find(i)) return true;
    }
  }

  return false;
}

// https://www.youtube.com/watch?v=9twcmtQj4DU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=19
function directedGraphUsingDFS(V, adj) {
  function find(node) {
    const neighbours = adj[node];

    visited[node] = true;
    pathVisited[node] = true;

    for (const neighbour of neighbours) {
      if (!visited[neighbour]) {
        if (find(neighbour)) return true;
      } else if (pathVisited[neighbour]) return true;
    }

    pathVisited[node] = false;

    return false;
  }

  const visited = Array(V).fill(false);
  const pathVisited = Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (find(i)) return true;
    }
  }

  return false;
}
