function bestClosingTime(customers) {
  let ys = 0;
  let ns = 0;
  let minPenalty = Number.MAX_SAFE_INTEGER;
  let result = customers.length;

  for (const customer of customers) {
    if (customer === "Y") ys++;
  }

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    // minPenalty = Math.min(minPenalty, ns + ys);
    if (ns + ys < minPenalty) {
      minPenalty = ns + ys;
      result = i;
    }

    if (customer === "Y") ys--;
    else ns++;
  }
  if (ns < minPenalty) {
    minPenalty = ns;
    result = customers.length;
  }

  return result;
}
