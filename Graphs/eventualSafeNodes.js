// So basically we have to find all the nodes which are NOT PART OF A CYCLE OR LEAD TO NODES THAT ARE PART OF A CYCLE

function eventualSafeNodes(graph) {
  const n = graph.length;
  const visited = Array(n).fill(false);
  const pathVisited = Array(n).fill(false);
  const check = Array(n).fill(false);
  const result = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      find(i, visited, pathVisited, check, graph);
    }
  }

  for (let i = 0; i < n; i++) {
    if (check[i]) result.push(i);
  }

  return result;
}

function find(node, visited, pathVisited, check, graph) {
  visited[node] = true;
  pathVisited[node] = true;
  const neighbours = graph[node];

  for (const neighbour of neighbours) {
    if (!visited[neighbour]) {
      if (find(neighbour, visited, pathVisited, check, graph)) return true;
    } else if (pathVisited[neighbour]) return true;
  }

  pathVisited[node] = false;
  check[node] = true; // Since all the neighbours are checked now it is safe

  return false;
}
