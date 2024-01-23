class TrieNode {
  constructor() {
    this.node = Array(26).fill(null);
  }
}

var Trie = function () {
  this.root = new TrieNode();
  this.hash = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let temp = this.root.node;

  for (const char of word) {
    const index = char.charCodeAt(0) - 97;

    if (temp[index]) {
      temp = temp[index].node;
    } else {
      temp[index] = new TrieNode();
      temp = temp[index].node;
    }
  }

  this.hash[word] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (this.hash[word]) return true;
  return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let temp = this.root.node;

  for (const char of prefix) {
    const index = char.charCodeAt(0) - 97;

    if (temp[index]) {
      temp = temp[index].node;
    } else return false;
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
