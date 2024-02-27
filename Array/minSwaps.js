function minSwaps(s) {
  let maxClosings = 0;
  let closings = 0;

  for (const bracket of s) {
    if (bracket === "]") closings++;
    else closings--;

    maxClosings = Math.max(maxClosings, closings);
  }

  return (maxClosings + 1) / 2;
}

/* https://www.youtube.com/watch?v=RZTapGf3pzI -> very good explanation 
and after that watch this https://www.youtube.com/watch?v=3YDBT9ZrfaU -> for the optimised solution.
*/
