// TODO increase this value after challenge review
const INITIAL_SIZE = 2;

module.exports = class Queue {
  constructor() {
    this.storage = new Array(INITIAL_SIZE);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  getNextPosition(currentPosition) {
    return (currentPosition + 1) % this.storage.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.storage.length;
  }

  resize() {
    const { length } = this.storage;
    const NEW_SIZE = length + INITIAL_SIZE;
    const newStorage = new Array(NEW_SIZE);

    for (let i = 0; i < length; i += 1) {
      newStorage[i] = this.dequeue();
    }

    this.head = 0;
    this.tail = length;
    this.size = length;
    this.storage = newStorage;
  }

  dequeue() {
    const value = this.storage[this.head];

    // This line is opcional.
    this.storage[this.head] = undefined;

    this.head = this.getNextPosition(this.head);
    this.size -= 1;

    return value;
  }

  enqueue(value) {
    if (this.isFull()) {
      this.resize();
    }

    this.storage[this.tail] = value;
    this.tail = this.getNextPosition(this.tail);
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  getValues() {
    const values = [];

    while (!this.isEmpty()) {
      values.push(this.dequeue());
    }

    return values;
  }
};
