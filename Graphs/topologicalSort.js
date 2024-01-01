function topoSort(V, adj) {
  const stack = [];
  const visited = Array(V).fill(false);
  const result = [];

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, visited, stack, adj);
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result;
}

function dfs(node, visited, stack, adjList) {
  if (visited[node]) return;

  visited[node] = true;

  for (const i of adjList[node]) {
    if (!visited[i]) dfs(i, visited, stack, adjList);
  }

  stack.push(node);
}
