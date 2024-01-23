function minTime(n, edges, hasApple) {
  if (n === 1) return 0;
  function find(adjList, node, hasApple, isVisited) {
    isVisited[node] = true;

    let result = 0;

    for (const child of adjList[node]) {
      if (!isVisited[child])
        result += find(adjList, child, hasApple, isVisited);
    }

    if (result) {
      if (result && node !== 0) return result + 2;
      return result;
    }
    if (hasApple[node] && node !== 0) return 2;
    return 0;
  }

  const hash = {};
  const isVisited = Array(n).fill(false);

  for (const edge of edges) {
    const [a, b] = edge;

    if (hash[a]) hash[a].push(b);
    else hash[a] = [b];

    if (hash[b]) hash[b].push(a);
    else hash[b] = [a];
  }

  return find(hash, 0, hasApple, isVisited);
}
