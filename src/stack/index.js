const Cell = require('../cell/unidirecional-cell');

module.exports = class Stack {
  constructor() {
    this.top = new Cell();
    this.size = 0;
  }

  isEmpty() {
    return this.top.next == null;
  }

  pop() {
    const { value } = this.top.next;

    this.top.next = this.top.next.next;
    this.size -= 1;

    return value;
  }

  getValues() {
    const values = [];

    while (!this.isEmpty()) {
      values.push(this.pop());
    }

    return values;
  }

  push(value) {
    const newCell = new Cell(value);

    newCell.next = this.top.next;
    this.top.next = newCell;
    this.size += 1;
  }
};
