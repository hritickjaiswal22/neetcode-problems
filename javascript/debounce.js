function debounce(fn, t) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    const ctx = this;

    timerId = setTimeout(() => fn.apply(ctx, args), t);
  };
}
