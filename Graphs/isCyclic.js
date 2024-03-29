// class Solution {
//   // Function to detect cycle in a directed graph.
//   isCyclic(V, adj) {
//     // code here
//     const visited = Array(V).fill(false);
//     const pathVisited = Array(V).fill(false);

//     for (let i = 0; i < V; i++) {
//       if (!visited[i]) {
//         if (this.detectCycle(i, visited, pathVisited, adj)) return true;
//       }
//     }

//     return false;
//   }

//   detectCycle(node, visited, pathVisited, adj) {
//     visited[node] = true;
//     pathVisited[node] = true;
//     const neighbours = adj[node];

//     for (const neighbour of neighbours) {
//       if (!visited[neighbour]) {
//         if (this.detectCycle(neighbour, visited, pathVisited, adj)) return true;
//       } else if (pathVisited[neighbour]) return true;
//     }

//     pathVisited[node] = false;
//     return false;
//   }
// }

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    const visited = Array(V).fill(false);
    const pathVisited = Array(V).fill(false);

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.detectCycle(i, visited, pathVisited, adj)) return true;
      }
    }

    return false;
  }

  detectCycle(node, visited, pathVisited, adj) {
    visited[node] = true;
    pathVisited[node] = true;
    const neighbours = adj[node];

    for (const neighbour of neighbours) {
      if (!visited[neighbour]) {
        if (this.detectCycle(neighbour, visited, pathVisited, adj)) return true;
      } else if (pathVisited[neighbour]) return true;
    }

    pathVisited[node] = false;
    return false;
  }
}
