function timeRequiredToBuy(tickets, k) {
  let arr = [];
  let temp = [];
  let result = 0;

  for (let i = 0; i < tickets.length; i++) {
    arr.push({
      index: i,
      val: tickets[i],
    });
  }

  while (true) {
    for (let i = 0; i < arr.length; i++) {
      result++;
      const { index, val } = arr[i];

      if (index == k && val - 1 === 0) return result;
      else if (val - 1 > 0) {
        temp.push({
          index,
          val: val - 1,
        });
      }
    }

    arr = temp;
    temp = [];
  }
}
