// function successfulPairs(spells, potions, success) {
//   const result = [];

//   potions.sort((a, b) => a - b);

//   for (const spell of spells) {
//     result.push(numberOfPotentPotions(spell, potions, success));
//   }

//   return result;
// }

// function numberOfPotentPotions(spell, potions, minPotency) {
//   let low = 0;
//   let high = potions.length - 1;
//   let result = potions.length;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);

//     if (potions[mid] * spell >= minPotency) result = Math.min(result, mid);

//     if (potions[mid] * spell >= minPotency) high = mid - 1;
//     else low = mid + 1;
//   }

//   return potions.length - result;
// }

function successfulPairs(spells, potions, success) {
  const result = [];

  potions.sort((a, b) => a - b);

  for (const spell of spells) {
    result.push(findSuccessfulPairs(spell, potions, success));
  }

  return result;
}

function findSuccessfulPairs(spell, potions, leastProduct) {
  const n = potions.length;
  let low = 0;
  let high = n - 1;
  let result = n;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    const isSuccessful = spell * potions[mid] >= leastProduct;

    if (isSuccessful) result = Math.min(result, mid);

    if (isSuccessful) high = mid - 1;
    else low = mid + 1;
  }

  if (result === n) return 0;
  return n - result;
}
