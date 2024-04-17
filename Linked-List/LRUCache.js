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
class DNode {
  constructor(_key, _val) {
    this.key = _key;
    this.val = _val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxSize = capacity;
  this.nodeMap = {};
  const frontNode = new DNode(-1, Number.MIN_SAFE_INTEGER);
  const backNode = new DNode(-1, Number.MAX_SAFE_INTEGER);
  this.size = 0;

  frontNode.next = backNode;
  backNode.prev = frontNode;
  this.front = frontNode;
  this.back = backNode;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.nodeMap[key]) return -1;

  const { val } = this.nodeMap[key];

  this.delete(key);
  this.add(key, val);

  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.nodeMap[key]) {
    this.delete(key);
    this.add(key, value);
  } else {
    if (this.size === this.maxSize) {
      const lruNode = this.back.prev;

      this.delete(lruNode.key);
      this.add(key, value);
    } else {
      this.add(key, value);
    }
  }
};

LRUCache.prototype.delete = function (key) {
  const deletedNode = this.nodeMap[key];
  const prevNode = deletedNode.prev;
  const nextNode = deletedNode.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;
  deletedNode.prev = null;
  deletedNode.next = null;
  delete this.nodeMap[key];
  this.size--;
};

LRUCache.prototype.add = function (key, val) {
  const newNode = new DNode(key, val);
  const mruNode = this.front.next;

  this.front.next = newNode;
  newNode.next = mruNode;
  newNode.prev = this.front;
  mruNode.prev = newNode;
  this.nodeMap[key] = newNode;
  this.size++;
};

LRUCache.prototype.print = function (key, val) {
  let temp = this.front;

  while (temp) {
    if (
      temp.val !== Number.MIN_SAFE_INTEGER &&
      temp.val !== Number.MAX_SAFE_INTEGER
    )
      console.log(temp.val);
    temp = temp.next;
  }

  console.log("End");
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const obj = new LRUCache(2);
obj.put(2, 2);
obj.put(1, 1);
obj.put(0, 0);
obj.get(1);
obj.get(1);
obj.get(0);
