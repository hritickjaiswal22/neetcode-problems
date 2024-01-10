var UndergroundSystem = function () {
  this.checkInLogs = {};
  this.logs = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInLogs[id] = {
    startStation: stationName,
    checkInTime: t,
  };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const { startStation, checkInTime } = this.checkInLogs[id];

  const totalTimeSpent = t - checkInTime;

  const str = `[${startStation},${stationName}]`;

  if (this.logs[str]) {
    this.logs[str].totalTime += totalTimeSpent;
    this.logs[str].freq++;
  } else {
    this.logs[str] = {
      totalTime: totalTimeSpent,
      freq: 1,
    };
  }

  delete this.checkInLogs[id];
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const str = `[${startStation},${endStation}]`;

  return this.logs[str].totalTime / this.logs[str].freq;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
