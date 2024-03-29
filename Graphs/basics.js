function adjacencyMatrix(n, edges) {
  const graph = Array(n + 1)
    .fill()
    .map((_) => Array(n + 1).fill(0));

  for (const edge of edges) {
    const [u, v] = edge;

    graph[u][v] = 1;
    graph[v][u] = 1;
  }

  return graph;
}

function adjacencyList(n, edges) {
  const graph = Array(n + 1)
    .fill()
    .map((_) => []);

  for (const edge of edges) {
    const [u, v] = edge;

    graph[u].push(v);
    graph[v].push(u);
  }

  return graph;
}

function bfs(graph) {
  const n = graph.length;
  const visited = Array(n).fill(false);
  const queue = [];
  const result = [];

  queue.push(1);
  visited[1] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    const neighbours = graph[node];

    result.push(node);

    for (const neighbour of neighbours) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    }
  }

  return result;
}

function dfs(graph) {
  function find(graph, node, visited, result) {
    if (visited[node]) return;

    visited[node] = true;
    result.push(node);
    const neighbours = graph[node];

    for (const neighbour of neighbours) {
      find(graph, neighbour, visited, result);
    }
  }

  const result = [];
  const visited = Array(graph.length).fill(false);

  find(graph, 1, visited, result);

  return result;
}

console.log(
  dfs(
    adjacencyList(8, [
      [1, 2],
      [1, 3],
      [2, 5],
      [2, 6],
      [3, 4],
      [3, 7],
      [4, 8],
      [7, 8],
    ])
  )
);
