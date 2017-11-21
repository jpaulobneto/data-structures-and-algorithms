const hash = require('string-hash');
const HashItem = require('./item');

const INITIAL_SIZE = 64;

module.exports = class HashTable {
  constructor() {
    this.storage = new Array(INITIAL_SIZE);
    this.buckets = 0;
  }

  isResizable() {
    return this.buckets === 100 * this.storage.length;
  }

  getItem(key) {
    let current;
    const index = hash(key) % this.storage.length;

    current = this.storage[index];

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
    let item;

    if (this.isResizable()) {
      this.resize();
    }

    item = this.getItem(key);

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

  resize() {
    const { length } = this.storage;
    const oldStorage = this.storage;
    const NEW_SIZE = length + INITIAL_SIZE;

    this.storage = new Array(NEW_SIZE);
    this.buckets = 0;

    oldStorage.forEach((bucketParam) => {
      let bucket = bucketParam;

      while (bucket != null) {
        this.set(bucket.key, bucket.value);
        bucket = bucket.next;
      }
    });
  }
};
