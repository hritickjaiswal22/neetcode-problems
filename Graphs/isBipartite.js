// USING BFS

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  const n = graph.length;
  const visited = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (visited[i] === -1) {
      if (!find(i, graph, visited)) return false;
    }
  }

  return true;
}

function find(startNode, graph, visited) {
  const queue = [];

  queue.push(startNode);
  visited[startNode] = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    const neighbours = graph[node];

    for (const neighbour of neighbours) {
      if (visited[neighbour] === -1) {
        if (visited[node] === 0) visited[neighbour] = 1;
        else visited[neighbour] = 0;

        queue.push(neighbour);
      } else if (visited[neighbour] === visited[node]) return false;
    }
  }

  return true;
}

// USING DFS

function isBipartite(graph) {
  const n = graph.length;
  const visited = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (visited[i] === -1) {
      if (!find(i, 0, visited, graph)) return false;
    }
  }

  return true;
}

function find(node, nodeColor, visited, graph) {
  visited[node] = nodeColor;
  const neighbours = graph[node];

  const oppColor = nodeColor === 0 ? 1 : 0;

  for (const neighbour of neighbours) {
    if (visited[neighbour] === -1) {
      if (!find(neighbour, oppColor, visited, graph)) return false;
    } else if (visited[neighbour] === nodeColor) return false;
  }

  return true;
}
