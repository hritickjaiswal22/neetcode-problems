function successfulPairs(spells, potions, success) {
  const result = [];

  potions.sort((a, b) => a - b);

  for (const spell of spells) {
    result.push(numberOfPotentPotions(spell, potions, success));
  }

  return result;
}

function numberOfPotentPotions(spell, potions, minPotency) {
  let low = 0;
  let high = potions.length - 1;
  let result = potions.length;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (potions[mid] * spell >= minPotency) result = Math.min(result, mid);

    if (potions[mid] * spell >= minPotency) high = mid - 1;
    else low = mid + 1;
  }

  return potions.length - result;
}
