function pseudoPalindromicPaths(root) {
  function find(node, path) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      path = path + node.val;

      if (hash[path]) return hash[path];

      const result = Number(canFormPalindrome(path));

      hash[path] = result;

      return result;
    }

    path += node.val;

    return find(node.left, path) + find(node.right, path);
  }

  const hash = {};

  return find(root, "");
}

function canFormPalindrome(str) {
  const hash = {};
  let odds = 0;

  for (const digit of str) {
    if (hash[digit]) hash[digit]++;
    else hash[digit] = 1;
  }

  for (const val of Object.values(hash)) {
    if (val % 2) odds++;
  }

  if (str.length % 2 === 0) return odds === 0;
  return odds === 1;
}
