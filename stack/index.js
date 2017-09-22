const Cell = require('../cell/unidirecional-cell');

const TOP = 'top';

module.exports = class Stack {
  constructor() {
    this.top = new Cell(TOP);
  }

  isEmpty() {
    return this.top.next == null;
  }

  pop() {
    const { value } = this.top.next;

    this.top.next = this.top.next.next;

    return value;
  }

  clear() {
    while (!this.isEmpty()) {
      console.log(this.pop());
    }
  }

  push(value) {
    const newCell = new Cell(value);

    newCell.next = this.top.next;
    this.top.next = newCell;
  }
};
