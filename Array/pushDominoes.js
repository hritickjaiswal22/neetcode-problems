// function pushDominoes(dominoes) {
//   const len = dominoes.length;
//   const rights = Array(len).fill(null);
//   const lefts = Array(len).fill(null);
//   let result = "";

//   if (dominoes[0] === "R") rights[0] = 0;
//   if (dominoes[len - 1] === "L") lefts[len - 1] = len - 1;

//   for (let i = 1; i < len; i++) {
//     if (dominoes[i] === "R") rights[i] = i;
//     else if (dominoes[i] === "L") rights[i] = null;
//     else rights[i] = rights[i - 1];
//   }

//   for (let i = len - 2; i >= 0; i--) {
//     if (dominoes[i] === "L") lefts[i] = i;
//     else if (dominoes[i] === "R") lefts[i] = null;
//     else lefts[i] = lefts[i + 1];
//   }

//   for (let i = 0; i < len; i++) {
//     if (lefts[i] !== null || rights[i] !== null) {
//       if (lefts[i] !== null && rights[i] !== null) {
//         const dist1 = i - rights[i];
//         const dist2 = lefts[i] - i;

//         if (dist1 === dist2) result += ".";
//         else if (dist1 < dist2) result += "R";
//         else result += "L";
//       } else if (lefts[i] !== null) result += "L";
//       else result += "R";
//     } else result += ".";
//   }

//   return result;
// }

// pushDominoes(".L.R...LR..L..");

function pushDominoes(dominoes) {
  const n = dominoes.length;
  const lefts = Array(n).fill(-1);
  const rights = Array(n).fill(-1);
  let prev = -1;
  let result = "";

  for (let i = 0; i < n; i++) {
    const domino = dominoes[i];

    if (domino === "R") {
      prev = 0;
      rights[i] = 0;
    } else if (prev !== -1) {
      if (domino === "L") prev = -1;
      else {
        prev++;
        rights[i] = prev;
      }
    }
  }

  prev = -1;

  for (let i = n - 1; i >= 0; i--) {
    const domino = dominoes[i];

    if (domino === "L") {
      prev = 0;
      lefts[i] = 0;
    } else if (prev !== -1) {
      if (domino === "R") prev = -1;
      else {
        prev++;
        lefts[i] = prev;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (lefts[i] === 0 || rights[i] === 0) result += dominoes[i];
    else if (lefts[i] === rights[i]) result += ".";
    else if (lefts[i] > 0 && rights[i] > 0) {
      if (lefts[i] < rights[i]) result += "L";
      else result += "R";
    } else if (lefts[i] > 0) result += "L";
    else result += "R";
  }

  return result;
}
