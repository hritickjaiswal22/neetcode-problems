function findOrder(numCourses, prerequisites) {
  const graph = Array(numCourses)
    .fill()
    .map(() => []);
  const indegree = Array(numCourses).fill(0);
  const queue = [];
  let result = [];

  for (const prerequisite of prerequisites) {
    const [a, b] = prerequisite;

    graph[b].push(a);
  }

  for (const arr of graph) {
    for (const node of arr) {
      indegree[node]++;
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    const node = queue.shift();
    const neighbours = graph[node];

    result.push(node);

    for (const neighbour of neighbours) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) queue.push(neighbour);
    }
  }

  if (result.length === numCourses) return result;
  return [];
}
