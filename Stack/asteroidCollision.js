// function asteroidCollision(asteroids) {
//   const result = [];

//   for (const asteroid of asteroids) {
//     if (asteroid > 0) result.push(asteroid);
//     else {
//       while (
//         result.length &&
//         getTop(result) > 0 &&
//         Math.abs(asteroid) > Math.abs(getTop(result))
//       )
//         result.pop();

//       if (!result.length || getTop(result) < 0) result.push(asteroid);
//       else if (
//         getTop(result) > 0 &&
//         Math.abs(asteroid) === Math.abs(getTop(result))
//       )
//         result.pop();
//     }
//   }

//   return result;
// }

// function getTop(stack) {
//   return stack[stack.length - 1];
// }

function asteroidCollision(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    const top = stack[stack.length - 1];

    if (top && top > 0 && asteroid < 0) {
      stack.push(asteroid);

      while (
        stack.length > 1 &&
        stack[stack.length - 1] < 0 &&
        stack[stack.length - 2] > 0
      ) {
        const temp1 = stack.pop();
        const temp2 = stack.pop();

        if (Math.abs(temp1) === Math.abs(temp2)) {
        } else if (Math.abs(temp1) > Math.abs(temp2)) stack.push(temp1);
        else stack.push(temp2);
      }
    } else stack.push(asteroid);
  }

  return stack;
}
