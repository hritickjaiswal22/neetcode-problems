// Works only on DAGs
// Linear ordering of vertices such that if there is an edge between u and v then U APPEARS BEFORE V IN THAT ORDERING
// https://www.youtube.com/watch?v=5lZ0iJMrUMk&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=21

class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    const visited = Array(V).fill(false);
    const stack = [];

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.find(i, visited, stack, adj);
      }
    }

    return stack.reverse();
  }

  find(node, visited, stack, adj) {
    visited[node] = true;
    const neighbours = adj[node];

    for (const neighbour of neighbours) {
      if (!visited[neighbour]) {
        this.find(neighbour, visited, stack, adj);
      }
    }

    stack.push(node);
  }
}
