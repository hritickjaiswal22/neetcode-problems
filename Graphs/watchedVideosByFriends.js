function watchedVideosByFriends(watchedVideos, friends, id, level) {
  const n = friends.length;
  const visited = Array(n).fill(false);
  const queue = [];
  let curLvl = 0;

  queue.push(id);
  visited[id] = true;

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      const parent = queue.shift();
      size--;

      for (const friend of friends[parent]) {
        if (!visited[friend]) {
          visited[friend] = true;
          queue.push(friend);
        }
      }
    }

    curLvl++;
    if (curLvl === level) {
      return find(watchedVideos);
    }
  }

  return [];
}

function find(watchedVideos, queue) {
  const hash = {};
  const result = [];

  for (const friend of queue) {
    for (const video of watchedVideos[friend]) {
      if (hash[video]) hash[video]++;
      else hash[video] = 1;
    }
  }

  for (const video of Object.keys(hash)) {
    result.push({
      video,
      watchCount: hash[video],
    });
  }

  result.sort((a, b) => {
    if (a.watchCount === b.watchCount) {
      if (a.video < b.video) return -100;
      return 100;
    }
    return a.watchCount - b.watchCount;
  });

  return result.map((obj) => obj.video);
}
