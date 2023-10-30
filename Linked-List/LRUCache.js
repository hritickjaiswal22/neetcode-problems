// class DNode {
//   constructor(val, key) {
//     this.val = val;
//     this.key = key;
//     this.prev = null;
//     this.next = null;
//   }
// }
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function (capacity) {
//   this.capacity = capacity;
//   this.head = new DNode(Number.MAX_SAFE_INTEGER);
//   this.tail = new DNode(Number.MAX_SAFE_INTEGER);
//   this.head.next = this.tail;
//   this.tail.prev = this.head;
//   this.count = 0;
//   this.hash = {};
// };

// LRUCache.prototype.remove = function (key) {
//   if (this.count === 0 || !this.hash[key]) return;

//   const removedNode = this.hash[key];
//   const prevNode = removedNode.prev;
//   const nextNode = removedNode.next;

//   prevNode.next = nextNode;
//   nextNode.prev = prevNode;
//   removedNode.next = null;
//   removedNode.prev = null;
//   delete this.hash[key];
//   this.count--;
// };

// LRUCache.prototype.add = function (key, val) {
//   const newNode = new DNode(val, key);

//   this.hash[key] = newNode;
//   const tailPrev = this.tail.prev;
//   tailPrev.next = newNode;
//   newNode.prev = tailPrev;
//   newNode.next = this.tail;
//   this.tail.prev = newNode;
//   this.count++;
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   if (!this.hash[key] || this.count === 0) return -1;

//   const val = this.hash[key].val;

//   this.remove(key);
//   this.add(key, val);

//   return val;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.hash[key]) {
//     this.remove(key);
//   } else if (this.count === this.capacity) {
//     const deletedKey = this.head.next.key;
//     this.remove(deletedKey);
//   }

//   this.add(key, value);
// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */
