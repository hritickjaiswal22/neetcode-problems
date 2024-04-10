function simplifyPath(path) {
  const stack = [];
  let i = 0;
  let temp = "";

  path = removeDoubleForwardSlashes(path);
  if (path[path.length - 1] !== "/") path += "/";
  path = path.substring(1);

  for (const char of path) {
    if (char === "/") {
      if (temp === "..") stack.pop();
      else if (temp === ".") {
      } else stack.push(temp);

      temp = "";
    } else temp += char;
  }

  return "/" + stack.join("/");
}

function removeDoubleForwardSlashes(str) {
  if (str.indexOf("//") === -1) return str;

  const regex = new RegExp("//", "g");
  const temp = str.replace(regex, "/");

  return removeDoubleForwardSlashes(temp);
}
