// function mostPoints(questions) {
//   function find(i, t, questions) {
//     if (i >= questions.length) return 0;
//     if (t[i] !== null) return t[i];

//     return (t[i] = Math.max(
//       find(i + 1, t, questions),
//       questions[i][0] + find(i + questions[i][1] + 1, t, questions)
//     ));
//   }

//   const t = Array(questions.length + 1).fill(null);

//   return find(0, t, questions);
// }

function mostPoints(questions) {
  // function find(i) {
  //   if (i >= questions.length) return 0;
  //   if (t[i] !== null) return t[i];

  //   return (t[i] = Math.max(
  //     find(i + 1),
  //     questions[i][0] + find(i + questions[i][1] + 1)
  //   ));
  // }

  const n = questions.length;
  const t = Array(n + 1).fill(null);

  t[n] = 0;

  for (let i = n - 1; i >= 0; i--) {
    t[i] = Math.max(
      t[i + 1],
      questions[i][0] +
        t[i + questions[i][1] + 1 >= n ? n : i + questions[i][1] + 1]
    );
  }

  return t[0];
}
