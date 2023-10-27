// SAW THE SOLUTION

function minFlips(s) {
  const n = s.length;
  let alt1 = "";
  let alt2 = "";
  let diff1 = 0;
  let diff2 = 0;
  let result = Number.MAX_SAFE_INTEGER;

  s += s;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      alt1 += "0";
      alt2 += "1";
    } else {
      alt1 += "1";
      alt2 += "0";
    }
  }

  for (let i = 0; i < n; i++) {
    if (alt1[i] !== s[i]) diff1++;
    if (alt2[i] !== s[i]) diff2++;
  }
  result = Math.min(result, diff1, diff2);

  for (let i = n; i < s.length; i++) {
    if (s[i - n] !== alt1[i - n]) diff1--;
    if (s[i - n] !== alt2[i - n]) diff2--;

    if (s[i] !== alt1[i]) diff1++;
    if (s[i] !== alt2[i]) diff2++;

    result = Math.min(result, diff1, diff2);
  }

  return result;
}
