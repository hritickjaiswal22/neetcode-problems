function isPalindrome(head) {
  //   if (!head.next) return true;
  //   let n = 0;
  //   let temp1 = head;
  //   let temp2 = head;
  //   while (temp1) {
  //     n++;
  //     temp1 = temp1.next;
  //   }
  //   temp1 = head;
  //   while (temp2 && temp2.next) {
  //     temp1 = temp1.next;
  //     temp2 = temp2.next.next;
  //   }

  let str1 = "";
  let str2 = "";
  let temp = head;

  while (temp) {
    str1 += temp.val;
    temp = temp.next;
  }

  str2 = str1;

  return str1 === str2.split("").reverse().join("");
}
