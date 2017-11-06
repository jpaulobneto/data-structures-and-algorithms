const Cell = require('../cell/bidirecional-cell');

module.exports = class Queue {
  constructor() {
    this.head = new Cell();
    this.tail = new Cell();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size -= 1;

    return value;
  }

  enqueue(value) {
    const newCell = new Cell(value);

    newCell.prev = this.tail.prev;
    newCell.next = this.tail;

    this.tail.prev.next = newCell;
    this.tail.prev = newCell;

    this.size += 1;
  }

  getValues() {
    const values = [];

    while (!this.isEmpty()) {
      values.push(this.dequeue());
    }

    return values;
  }

  isEmpty() {
    return this.tail.prev.value == null;
  }
};
