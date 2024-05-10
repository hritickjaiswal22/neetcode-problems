function maxLength(arr) {
  function find(i, hash) {
    if (i >= arr.length) {
      result = Math.max(result, Object.keys(hash).length);
      return;
    }

    if (isUnique(hash, arr[i])) {
      find(i + 1, fill(hash, arr[i]));
    } else {
      find(i + 1, hash);
    }
  }

  let result = 0;
  const temp = [];

  for (const str of arr) {
    const hash = {};
    let flag = true;

    for (const char of str) {
      if (hash[char]) {
        flag = false;
        break;
      }
      hash[char] = true;
    }

    if (flag) temp.push(str);
  }
  arr = temp;

  find(0, {});

  return result;
}

function isUnique(hash, str) {
  for (const char of str) {
    if (hash[char]) return false;
  }

  return true;
}

function fill(hash, str) {
  const temp = { ...hash };
  for (const char of str) {
    temp[char] = true;
  }

  return temp;
}
