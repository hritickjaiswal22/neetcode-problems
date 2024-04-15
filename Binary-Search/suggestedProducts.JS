// https://www.youtube.com/watch?v=D4T2N0yAr20&t=223s
// YOU SHOULD HAVE BEEN ABLE TO DO THIS ONE BY YOURSELF 😭

function suggestedProducts(products, searchWord) {
  const result = [];
  let low = 0;
  let high = products.length - 1;
  let i = 0;

  products.sort();

  while (low <= high && i < searchWord.length) {
    while (low <= high && products[low][i] !== searchWord[i]) low++;
    while (low <= high && products[high][i] !== searchWord[i]) high--;

    const temp = [];
    let j = low;

    while (j <= high && j < low + 3) {
      temp.push(products[j]);
      j++;
    }

    if (temp.length) result.push(temp);
    i++;
  }

  while (result.length !== searchWord.length) result.push([]);

  return result;
}
