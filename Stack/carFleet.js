// TRYAGAIN
// VERY SIMPLE PROBLEM YOU SHOULD HAVE BEEN ABLE TO DO IT

function carFleet(target, position, speed) {
  if (position.length === 1) return 1;

  const arr = [];
  const stack = [];

  for (let i = 0; i < position.length; i++) {
    arr.push({
      position: position[i],
      speed: speed[i],
    });
  }

  arr.sort((a, b) => a.position - b.position);

  for (let i = arr.length - 1; i >= 0; i--) {
    const time = (target - arr[i].position) / arr[i].speed;
    if (!stack.length || time > stack[stack.length - 1]) stack.push(time);
  }

  return stack.length;
}
