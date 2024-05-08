// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// function minTime(n, edges, hasApple) {
//   function find(head) {
//     if (!head) return 0;

//     let sum = 0;
//     let temp = head;

//     while (temp) {
//       if (!visited[temp.val]) {
//         visited[temp.val] = true;

//         sum += find(graph[temp.val]);
//       }
//       temp = temp.next;
//     }

//     if (sum > 0) return sum + 2;
//     else if (hasApple[head.val]) return sum + 2;
//     return sum;
//   }

//   const graph = Array(n).fill(null);
//   const visited = Array(n).fill(false);

//   for (const edge of edges) {
//     const [u, v] = edge;

//     addToList(graph, u, v);
//     addToList(graph, v, u);
//   }

//   return find(graph[0]);
// }

// function addToList(graph, u, v) {
//   const newNode = new ListNode(v);

//   if (!graph[u]) graph[u] = newNode;
//   else {
//     newNode.next = graph[u];
//     graph[u] = newNode;
//   }
// }

function minTime(n, edges, hasApple) {
  function find(node) {
    const neighbours = graph[node];
    let result = 0;

    visited[node] = true;

    for (const neighbour of neighbours) {
      if (!visited[neighbour]) result += find(neighbour);
    }

    if (hasApple[node] || result > 0) result += 2;

    return result;
  }

  const graph = Array(n)
    .fill()
    .map(() => []);
  const visited = Array(n).fill(false);

  for (const edge of edges) {
    const [u, v] = edge;

    graph[u].push(v);
    graph[v].push(u);
  }

  let result = find(0);
  if (result > 0) result -= 2;

  return result;
}
