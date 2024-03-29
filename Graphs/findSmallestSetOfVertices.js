function findSmallestSetOfVertices(n, edges) {
  const graph = Array(n)
    .fill()
    .map(() => []);
  const visited = Array(n).fill(false);
  const result = [];

  for (const edge of edges) {
    const [u, v] = edge;

    graph[u].push(v);
  }

  const topo = topoSort(n, graph);

  for (const node of topo) {
    if (!visited[node]) {
      result.push(node);
      find(node, visited, graph);
    }
  }

  return result;
}

function topoSort(V, adj) {
  const indegree = Array(V).fill(0);
  const queue = [];
  const result = [];

  for (const arr of adj) {
    for (const node of arr) {
      indegree[node]++;
    }
  }

  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const node = queue.shift();
    const neighbours = adj[node];

    result.push(node);

    for (const neighbour of neighbours) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  return result;
}

function find(node, visited, graph) {
  const neighbours = graph[node];
  visited[node] = true;

  for (const neighbour of neighbours) {
    if (!visited[neighbour]) dfs(neighbour, visited, graph);
  }
}
