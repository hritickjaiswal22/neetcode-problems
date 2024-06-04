// function countOdds(low, high) {
//   const diff = Math.abs(high - low);
//   const half = Math.floor(diff / 2);

//   if (diff & 1) return half + 1;
//   else {
//     if (low & 1) return half + 1;
//     return half;
//   }
// }

function countOdds(low, high) {
  let result = Math.floor((high - low) / 2);

  if (high % 2) result++;

  return result;
}
