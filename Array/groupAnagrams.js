function groupAnagrams(strs) {
  const temp = [];
  const hash = {};
  const result = [];

  for (let i = 0; i < strs.length; i++) {
    const newStr = strs[i].split("").sort().join();
    temp.push(newStr);
  }

  for (let i = 0; i < temp.length; i++) {
    if (hash[temp[i]]) hash[temp[i]].push(strs[i]);
    else hash[temp[i]] = [strs[i]];
  }

  for (const arr of Object.values(hash)) {
    result.push(arr);
  }

  return result;
}
