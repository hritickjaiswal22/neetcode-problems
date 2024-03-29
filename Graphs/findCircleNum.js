function adjacencyList(n, edges) {
  const graph = Array(n + 1)
    .fill()
    .map((_) => []);

  for (const edge of edges) {
    const [u, v] = edge;

    graph[u].push(v);
  }

  return graph;
}

function dfs(graph, node, visited) {
  if (visited[node]) return;

  visited[node] = true;
  const neighbours = graph[node];

  for (const neighbour of neighbours) {
    find(graph, neighbour, visited);
  }
}

function findCircleNum(isConnected) {
  const edges = [];

  for (let i = 0; i < isConnected.length; i++) {
    const arr = isConnected[i];

    for (let j = 0; j < arr.length; j++) {
      if (i + 1 !== j + 1) edges.push([i + 1, j + 1]);
    }
  }

  const graph = adjacencyList(isConnected.length, edges);
  const visited = Array(isConnected.length).fill(false);
  let result = 0;

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      result++;
      dfs(graph, i + 1, visited);
    }
  }

  return result;
}
