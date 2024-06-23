function timeLimit(fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args)
        .then((val) => resolve(val))
        .catch(() => reject("Error"));
    });
  };
}

const cb = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 200);

cb(4)
  .then((vaal) => console.log(vaal))
  .catch((err) => console.log(err));
