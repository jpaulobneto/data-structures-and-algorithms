const Cell = require('../../cell/unidirecional-cell');

module.exports = class SortedList {
  constructor() {
    this.top = new Cell();
  }

  add(value) {
    let current = this.top;
    const newCell = new Cell(value);

    while (current.next !== null && current.next.value < newCell.value) {
      current = current.next;
    }

    newCell.next = current.next;
    current.next = newCell;
  }

  remove(targetValue) {
    let current = this.top;

    while (current.next !== null && current.next.value !== targetValue) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  getValues() {
    let current = this.top;
    const values = [];

    while (current.next !== null) {
      current = current.next;
      values.push(current.value);
    }

    return values;
  }
};
