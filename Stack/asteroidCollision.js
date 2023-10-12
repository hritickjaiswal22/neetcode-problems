function asteroidCollision(asteroids) {
  const result = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) result.push(asteroid);
    else {
      while (
        result.length &&
        getTop(result) > 0 &&
        Math.abs(asteroid) > Math.abs(getTop(result))
      )
        result.pop();

      if (!result.length || getTop(result) < 0) result.push(asteroid);
      else if (
        getTop(result) > 0 &&
        Math.abs(asteroid) === Math.abs(getTop(result))
      )
        result.pop();
    }
  }

  return result;
}

function getTop(stack) {
  return stack[stack.length - 1];
}
