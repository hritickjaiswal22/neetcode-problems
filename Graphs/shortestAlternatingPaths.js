// ALL ON MY OWN!!!

function shortestAlternatingPaths(n, redEdges, blueEdges) {
  const result = Array(n).fill(Number.MAX_SAFE_INTEGER);
  const visited = Array(n)
    .fill()
    .map(() => new Set());
  const graph = Array(n)
    .fill()
    .map(() => {
      return {
        red: [],
        blue: [],
      };
    });
  const queue = [];

  for (const redEdge of redEdges) {
    const [u, v] = redEdge;

    graph[u].red.push(v);
  }

  for (const blueEdge of blueEdges) {
    const [u, v] = blueEdge;

    graph[u].blue.push(v);
  }

  queue.push([0, 0, "R"]);
  queue.push([0, 0, "B"]);

  while (queue.length > 0) {
    const [node, dist, lastEdge] = queue.shift();

    visited[node].add(lastEdge);

    if (dist < result[node]) result[node] = dist;

    if (lastEdge === "R") {
      const neighbours = graph[node].blue;

      for (const neighbour of neighbours) {
        if (dist + 1 < result[neighbour] || !visited[neighbour].has("B"))
          queue.push([neighbour, dist + 1, "B"]);
      }
    } else {
      const neighbours = graph[node].red;

      for (const neighbour of neighbours) {
        if (dist + 1 < result[neighbour] || !visited[neighbour].has("R"))
          queue.push([neighbour, dist + 1, "R"]);
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === Number.MAX_SAFE_INTEGER) result[i] = -1;
  }

  return result;
}
