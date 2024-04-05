class Solution {
  /**
    * @param number n
    * @param number k
    * @param number[] candies
    
    * @returns number[]
    */
  candyStore(n, k, candies) {
    let min = 0;
    let max = 0;
    let i = 0;
    let j = n - 1;

    candies.sort((a, b) => a - b);

    while (i <= j) {
      let temp = k;

      min += candies[i];
      i++;

      while (j > i && temp) {
        j--;
        temp--;
      }
    }

    i = 0;
    j = n - 1;

    while (i <= j) {
      let temp = k;

      max += candies[j];
      j--;

      while (j > i && temp) {
        i++;
        temp--;
      }
    }

    return [min, max];
  }
}

console.log(new Solution().candyStore(4, 2, [3, 2, 1, 4]));
