function leastInterval(tasks, n) {
  const temp = Array(26).fill(0);
  const arr = [];
  let hash = {};
  const cooldown = n;

  for (const task of tasks) {
    const i = task.charCodeAt(0);
    temp[i]++;
  }

  for (let i = 0; i < 26; i++) {
    if (temp[i] > 0)
      arr.push({
        char: i,
        val: temp[i],
      });
  }

  arr.sort((a, b) => b.val - a.val);
}
