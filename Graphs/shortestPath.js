// Using Toposort for DAGs
function shortestPath(N, M, edges) {
  const graph = Array(N)
    .fill()
    .map(() => []);
  const indegree = Array(N).fill(0);
  const queue = [];
  const topo = [];
  const dist = Array(N).fill(Number.MAX_SAFE_INTEGER);

  for (const edge of edges) {
    const [u, v, weight] = edge;

    graph[u].push([v, weight]);
  }

  for (const arr of graph) {
    for (const edge of arr) {
      const v = edge[0];

      indegree[v]++;
    }
  }

  for (let i = 0; i < N; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    const node = queue.shift();
    const neighbours = graph[node];

    topo.push(node);

    for (const neighbour of neighbours) {
      const v = neighbour[0];
      indegree[v]--;

      if (indegree[v] === 0) queue.push(v);
    }
  }

  dist[0] = 0;

  for (let i = 0; i < topo.length; i++) {
    const node = topo[i];
    const neighbours = graph[node];

    for (const neighbour of neighbours) {
      const [v, weight] = neighbour;

      dist[v] = Math.min(dist[v], weight + dist[node]);
    }
  }

  return dist;
}

// For unweighted graph
function shortestPath(N, M, edges, src = 0) {
  const graph = Array(N)
    .fill()
    .map(() => []);
  const dist = Array(N).fill(Number.MAX_SAFE_INTEGER);
  const queue = [];

  for (const edge of edges) {
    const [u, v] = edge;

    graph[u].push(v);
    graph[v].push(u);
  }

  dist[src] = 0;
  queue.push(src);

  while (queue.length > 0) {
    const node = queue.shift();
    const neighbours = graph[node];

    for (const neighbour of neighbours) {
      if (dist[node] + 1 < dist[neighbour]) {
        queue.push(neighbour);
        dist[neighbour] = dist[node] + 1;
      }
    }
  }

  return dist;
}
