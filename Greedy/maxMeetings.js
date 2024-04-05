class Solution {
  //Function to find the maximum number of meetings that can
  //be performed in a meeting room.
  maxMeetings(start, end, n) {
    const arr = [];
    let result = 1;
    let j = 0;

    for (let i = 0; i < start.length; i++) {
      arr.push({
        startTime: start[i],
        endTime: end[i],
      });
    }

    arr.sort((a, b) => {
      if (a.endTime < b.endTime) return -1;
      else if (a.endTime > b.endTime) return 1;
      else return b.startTime - a.startTime;
    });

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].startTime > arr[j].endTime) {
        result++;
        j = i;
      }
    }

    return result;
  }
}
