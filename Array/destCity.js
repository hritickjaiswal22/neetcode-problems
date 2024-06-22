function destCity(paths) {
  const hash = {};

  for (const path of paths) {
    const [src, dest] = path;

    hash[src] = dest;
  }

  for (const path of paths) {
    const [src, dest] = path;

    if (!hash[src]) return src;
    if (!hash[dest]) return dest;
  }
}
