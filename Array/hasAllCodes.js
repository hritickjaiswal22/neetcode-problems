// /* YOU'RE IDEA IS ABSOLUTLEY RIGHT !!!! */

// function hasAllCodes(s, k) {
//   if (s.length < k) return false;

//   let str = "";
//   const hash = {};

//   for (let i = 0; i < k; i++) {
//     str += s[i];
//   }
//   hash[str] = true;

//   for (let i = k; i < s.length; i++) {
//     let temp = str.substring(1);
//     temp += s[i];
//     str = temp;

//     hash[temp] = true;

//     if (Object.keys(hash).length === 2 ** k) return true;
//   }

//   return false;
// }

function hasAllCodes(s, k) {
  const hash = {};

  for (let i = 0; i + k - 1 < s.length; i++) {
    const temp = s.substring(i, i + k);

    if (!hash[temp]) hash[temp] = true;
  }

  if (Object.keys(hash).length === 2 ** k) return true;
  return false;
}
