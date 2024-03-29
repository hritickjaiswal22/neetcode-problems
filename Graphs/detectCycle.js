class Solution {
  detectCycle(adj, visited, startNode) {
    const queue = [];

    queue.push([startNode, -1]);
    visited[startNode] = true;

    while (queue.length > 0) {
      const [node, parent] = queue.shift();
      const neighbours = adj[node];

      for (const neighbour of neighbours) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push([neighbour, node]);
        } else if (parent != neighbour) {
          return true;
        }
      }
    }
    return false;
  }
  // Function to detect cycle in an undirected graph.
  isCycle(V, adj) {
    const visited = Array(V).fill(false);

    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        if (this.detectCycle(adj, visited, i)) return true;
      }
    }

    return false;
  }
}

class Solution {
  // Function to detect cycle in an undirected graph.
  detectCycle(adj, node, parent, visited) {
    visited[node] = true;
    const neighbours = adj[node];

    for (const neighbour of neighbours) {
      if (!visited[neighbour]) {
        if (this.detectCycle(adj, neighbour, node, visited)) return true;
      } else if (neighbour != parent) {
        return true;
      }
    }

    return false;
  }

  isCycle(V, adj) {
    // code here
    const visited = Array(V).fill(false);

    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        if (this.detectCycle(adj, i, -1, visited)) return true;
      }
    }

    return false;
  }
}

console.log(new Solution().isCycle(4, [[], ["2"], ["1", "3"], ["2"]]));
