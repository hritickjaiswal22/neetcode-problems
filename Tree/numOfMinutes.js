// CLOSE
// function numOfMinutes(n, headID, manager, informTime) {
//   const hash = {};
//   const queue = [];
//   let result = 0;

//   for (let i = 0; i < manager.length; i++) {
//     const head = manager[i];

//     if (hash[head]) hash[head].push(i);
//     else hash[head] = [i];
//   }

//   queue.push(hash[-1]);
//   result = informTime[headID];

//   while (queue.length) {
//     const arr = queue.shift();
//     const temp = [];
//     let max = 0;

//     // console.log(arr);

//     if (!arr || !arr.length) break;

//     for (const val of arr) {
//       const arr2 = hash[val];
//       if (arr2 && arr2.length) {
//         for (const val2 of arr2) {
//           max == Math.max(max, informTime[val2]);
//           temp.push(val2);
//         }
//       }
//     }

//     result += max;
//     queue.push(temp);
//   }

//   return result;
// }

// // I ARRIVED AT THE SAME LOGIC BUT GAVE A WRONG IMPLEMENTATION LEADING TO WRONG RESULT
// // BUT THE IDEA OR INTUTION WAS RIGHT
// function numOfMinutes(n, headID, manager, informTime) {
//   const hash = {};
//   const queue = [];
//   let result = 0;

//   for (let i = 0; i < manager.length; i++) {
//     const head = manager[i];

//     if (hash[head]) hash[head].push(i);
//     else hash[head] = [i];
//   }

//   queue.push([headID, 0]);

//   while (queue.length) {
//     const [managerId, time] = queue.shift();

//     result = Math.max(result, time);

//     if (hash[managerId]) {
//       for (const employee of hash[managerId]) {
//         queue.push([employee, time + informTime[managerId]]);
//       }
//     }
//   }

//   return result;
// }

function numOfMinutes(n, headID, manager, informTime) {}
