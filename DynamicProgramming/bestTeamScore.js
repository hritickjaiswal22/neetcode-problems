function bestTeamScore(scores, ages) {
  function find(i, prevIndex) {
    if (i >= combined.length) return 0;
    if (prevIndex >= 0 && t[i][prevIndex] !== null) return t[i][prevIndex];

    if (prevIndex >= 0) {
      if (combined[i].score >= combined[prevIndex].score)
        return (t[i][prevIndex] = Math.max(
          combined[i].score + find(i + 1, i),
          find(i + 1, prevIndex)
        ));
      else return (t[i][prevIndex] = find(i + 1, prevIndex));
    } else
      return Math.max(
        combined[i].score + find(i + 1, i),
        find(i + 1, prevIndex)
      );
  }

  const combined = [];
  const t = Array(scores.length + 1)
    .fill()
    .map((_) => Array(scores.length + 1).fill(null));

  for (let i = 0; i < scores.length; i++) {
    combined.push({
      score: scores[i],
      age: ages[i],
    });
  }

  combined.sort((a, b) => {
    if (a.age < b.age) return -100;
    else if (a.age > b.age) return 100;
    else return a.score - b.score;
  });

  return find(0, -1);
}

// function find(i, prevIndex) {
//     if (i >= combined.length) return 0;

//     if (prevIndex >= 0 && combined[prevIndex].score > combined[i].score)
//       return find(i + 1, prevIndex);
//     else
//       return Math.max(
//         combined[i].score + find(i + 1, i),
//         find(i + 1, prevIndex)
//       );
//   }
