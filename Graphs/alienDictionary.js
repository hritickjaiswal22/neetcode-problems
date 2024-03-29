class Solution {
  findOrder(dict, N, K) {
    const indegree = Array(K).fill(0);
    const graph = Array(K)
      .fill()
      .map(() => []);
    const queue = [];
    const result = [];

    for (let i = 0; i < N - 1; i++) {
      const char = this.compare(dict[i], dict[i + 1], graph);
    }

    for (const arr of graph) {
      for (const node of arr) {
        indegree[node]++;
      }
    }

    for (let i = 0; i < K; i++) {
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

    if (result.length !== K) {
      const temp = Array(K).fill(false);

      for (const node of result) {
        temp[node] = true;
      }

      for (let i = 0; i < temp.length; i++) {
        if (!temp[i]) result.push(i);
      }
    }

    return result.map((val) => String.fromCharCode(val + 97));
  }

  compare(str1, str2, graph) {
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
      if (str1[i] !== str2[j]) {
        const asci1 = str1[i].charCodeAt(0);
        const asci2 = str2[j].charCodeAt(0);

        graph[asci1 - 97].push(asci2 - 97);
        return;
      }
      i++;
      j++;
    }

    return;
  }
}
