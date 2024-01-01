function mostPoints(questions) {
  function find(i, t, questions) {
    if (i >= questions.length) return 0;
    if (t[i] !== null) return t[i];

    return (t[i] = Math.max(
      find(i + 1, t, questions),
      questions[i][0] + find(i + questions[i][1] + 1, t, questions)
    ));
  }

  const t = Array(questions.length + 1).fill(null);

  return find(0, t, questions);
}
