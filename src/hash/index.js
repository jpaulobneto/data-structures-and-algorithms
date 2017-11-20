const hash = require('string-hash');
const HashItem = require('./item');

const INITIAL_SIZE = 4;

module.exports = class HashTable {
  constructor() {
    this.storage = new Array(INITIAL_SIZE);
    this.buckets = 0;
  }

  getItem(key) {
    let current;
    const index = hash(key) % this.storage.length;

    current = this.storage[index];

    if (current == null) {
      return null;
    }

    while (current != null) {
      if (current.key === key) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  get(key) {
    const item = this.getItem(key);

    if (item != null) {
      return item.value;
    }

    return null;
  }

  set(key, value) {
    let index;
    let item = this.getItem(key);

    if (item != null) {
      item.value = value;
    } else {
      item = new HashItem(key, value);
      index = hash(key) % this.storage.length;

      item.next = this.storage[index];
      this.storage[index] = item;
      this.buckets += 1;
    }
  }
};
