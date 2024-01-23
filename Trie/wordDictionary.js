class TrieNode {
  constructor() {
    this.node = Array(26).fill(null);
    this.isWordEnd = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let temp = this.root;

  for (const char of word) {
    const index = char.charCodeAt(0) - 97;

    if (temp.node[index]) {
      temp = temp.node[index];
    } else {
      temp.node[index] = new TrieNode();
      temp = temp.node[index];
    }
  }

  temp.isWordEnd = true;
};

WordDictionary.prototype.searchHelper = function (word, i, temp) {
  if (i >= word.length) {
    if (temp.isWordEnd) return true;
    return false;
  }

  if (word[i] === ".") {
    let result = false;

    for (const node of temp.node) {
      if (node) result = result | this.searchHelper(word, i + 1, node);
    }

    return result;
  }
  const index = word[i].charCodeAt(0) - 97;

  if (temp.node[index]) {
    return this.searchHelper(word, i + 1, temp.node[index]);
  } else return false;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.searchHelper(word, 0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
