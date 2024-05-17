function stoneGame(piles) {
  function create3DArray(n, sum) {
    // Dimensions of the array
    const dim1 = n + 1;
    const dim2 = n + 1;
    const dim3 = sum + 2;

    // Create the 3D array
    const array = new Array(dim1);

    for (let i = 0; i < dim1; i++) {
      array[i] = new Array(dim2);
      for (let j = 0; j < dim2; j++) {
        array[i][j] = new Array(dim3).fill(null);
      }
    }

    return array;
  }

  function find(low, high, sum) {
    if (low > high) {
      const bobPoints = totalSum - sum;

      if (sum > bobPoints) return true;
      return false;
    }
    if (t[low][high][sum] !== null) return t[low][high][sum];

    let result = false;
    const turn = low + (n - 1) - high;

    if (turn % 2 === 0) {
      result = result || find(low + 1, high, sum);
      result = result || find(low, high - 1, sum);
    } else {
      result = result || find(low + 1, high, sum - piles[low]);
      result = result || find(low, high - 1, sum - piles[high]);
    }

    return (t[low][high][sum] = result);
  }

  const n = piles.length;
  let totalSum = 0;

  for (const stone of piles) {
    totalSum += stone;
  }

  const t = create3DArray(n, totalSum);

  return find(0, n - 1, totalSum);
}

function stoneGame(piles) {
  return true;
}
