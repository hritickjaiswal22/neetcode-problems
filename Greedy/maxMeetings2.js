class Solution {
  /**
    * @param number N
    * @param number[] S
    * @param number[] F
    
    * @returns number[]
    */
  maxMeetings(N, start, end) {
    const arr = [];
    const result = [];
    let j = 0;

    for (let i = 0; i < start.length; i++) {
      arr.push({
        startTime: start[i],
        endTime: end[i],
        meetingNumber: i + 1,
      });
    }

    arr.sort((a, b) => {
      if (a.endTime < b.endTime) return -1;
      else if (a.endTime > b.endTime) return 1;
      else return b.startTime - a.startTime;
    });

    result.push(arr[0].meetingNumber);

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].startTime > arr[j].endTime) {
        result.push(arr[i].meetingNumber);
        j = i;
      }
    }

    result.sort((a, b) => a - b);

    return result;
  }
}
