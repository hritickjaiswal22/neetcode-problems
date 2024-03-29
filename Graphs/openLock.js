function openLock(deadends, target) {
  const hash = {};
  const queue = [];
  const visited = {};

  for (const deadend of deadends) {
    hash[deadend] = true;
  }

  if (hash["0000"] || hash[target]) return -1;

  queue.push(["0000", 0]);
  visited["0000"] = true;

  while (queue.length > 0) {
    const [pat, dist] = queue.shift();

    if (pat === target) return dist;

    for (let i = 0; i < 4; i++) {
      const wheel = Number(pat[i]);

      // Increase
      const newLock1 = wheel + 1 === 10 ? 0 : wheel + 1;
      const newPat1 = pat.substring(0, i) + newLock1 + pat.substring(i + 1);
      if (!hash[newPat1] && !visited[newPat1]) {
        visited[newPat1] = true;
        queue.push([newPat1, dist + 1]);
      }

      // Decrease
      const newLock2 = wheel - 1 === -1 ? 9 : wheel - 1;
      const newPat2 = pat.substring(0, i) + newLock2 + pat.substring(i + 1);
      if (!hash[newPat2] && !visited[newPat2]) {
        visited[newPat2] = true;
        queue.push([newPat2, dist + 1]);
      }
    }
  }

  return -1;
}
