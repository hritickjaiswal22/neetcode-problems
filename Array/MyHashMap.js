// class HashNode {
//   constructor(_key, _value) {
//     this.key = _key;
//     this.value = _value;
//     this.next = null;
//   }
// }

// var MyHashMap = function () {
//   this.result = Array(1000).fill(null);
//   this.size = 1000;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function (key, value) {
//   const index = key % this.size;

//   if (!this.result[index]) {
//     const listNode = new HashNode(key, value);

//     this.result[index] = listNode;
//   } else {
//     let temp = this.result[index];

//     while (temp) {
//       if (temp.key === key) {
//         temp.value = value;
//         return;
//       }
//     }

//     const listNode = new HashNode(key, value);
//     listNode.next = this.result[index];
//     this.result[index] = listNode;
//   }
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function (key) {
//   const index = key % this.size;

//   if (!this.result[index]) return -1;

//   let temp = this.result[index];

//   while (temp) {
//     if (temp.key === key) return temp.value;

//     temp = temp.next;
//   }

//   return -1;
// };

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function (key) {
//   const index = key % this.size;

//   if (this.result[index]) {
//     if (this.result[index].key === key) {
//       const temp = this.result[index];
//       this.result[index] = temp.next;
//       temp.next = null;
//       return;
//     }

//     let prev = this.result[index];
//     let temp = this.result[index];

//     while (temp) {
//       if (temp.key === key) {
//         prev.next = temp.next;
//         temp.next = null;
//         return;
//       }
//       prev = temp;
//       temp = temp.next;
//     }
//   }
// };

// /**
//  * Your MyHashMap object will be instantiated and called as such:
//  * var obj = new MyHashMap()
//  * obj.put(key,value)
//  * var param_2 = obj.get(key)
//  * obj.remove(key)
//  */

var MyHashMap = function () {
  this.hash = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.hash[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this.hash[key] !== undefined) return this.hash[key];
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.hash[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
