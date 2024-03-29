// 1. Insert all nodes with indegree 0

class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
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
}

// NOTE : IF YOU CAN'T CREATE A VALID TOPO SORT THEN THERE IS A CYCLE !!!

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    const indegree = Array(V).fill(0);
    const queue = [];
    let result = 0;

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

      result++;

      for (const neighbour of neighbours) {
        indegree[neighbour]--;
        if (indegree[neighbour] === 0) queue.push(neighbour);
      }
    }

    if (result !== V) return true;
    return false;
  }
}
