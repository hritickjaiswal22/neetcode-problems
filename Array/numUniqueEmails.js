function numUniqueEmails(emails) {
  const hash = {};

  for (const email of emails) {
    const arr = email.split("@");
    const temp = arr[0];
    let local = "";
    let plusFlag = false;

    for (const char of temp) {
      if (char === ".") continue;
      else if (char === "+") break;
      else local += char;
    }

    hash[`${local}@${arr[1]}`] = true;
  }

  return Object.keys(hash).length;
}
