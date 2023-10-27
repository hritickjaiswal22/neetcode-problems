function interchangeableRectangles(rectangles) {
  const hash = {};
  let result = 0;

  for (const rectangle of rectangles) {
    const ratio = rectangle[0] / rectangle[1];

    if (hash[ratio]) hash[ratio]++;
    else hash[ratio] = 1;
  }

  for (const val of Object.values(hash)) {
    result += (val * (val - 1)) / 2;
  }

  return result;
}
