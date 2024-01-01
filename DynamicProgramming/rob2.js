function rob(nums) {
  function find(i, stoleFromFirstHouse, moneys) {
    if (i >= moneys.length) return 0;
    if (t[stoleFromFirstHouse][i] !== null) return t[stoleFromFirstHouse][i];

    if (i === 0) {
      return Math.max(
        moneys[i] + find(i + 2, 1, moneys),
        find(i + 1, 0, moneys)
      );
    } else if (i === moneys.length - 1) {
      if (stoleFromFirstHouse) return find(i + 1, stoleFromFirstHouse, moneys);
      else return moneys[i] + find(i + 1, stoleFromFirstHouse, moneys);
    } else {
      return (t[stoleFromFirstHouse][i] = Math.max(
        moneys[i] + find(i + 2, stoleFromFirstHouse, moneys),
        find(i + 1, stoleFromFirstHouse, moneys)
      ));
    }
  }

  const t = Array(2)
    .fill()
    .map((_) => Array(nums.length + 1).fill(null));

  return Math.max(find(0, 0, nums), find(1, 0, nums));
}
