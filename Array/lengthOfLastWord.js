// Redo done
function lengthOfLastWord(s) {
  const temp = s.trim();

  const arr = temp.split(" ");

  return arr[arr.length - 1].length;
}
