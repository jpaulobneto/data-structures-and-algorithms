const Cell = require('../cell/unidirecional-cell');

const BEGIN = 'begin';
const END = 'end';

module.exports = class List {
  constructor() {
    this.top = new Cell(BEGIN);
    this.top.next = new Cell(END);
  }

  add(value, targetValue = BEGIN) {
    let current;
    const newCell = new Cell(value);

    for (current = this.top; current.next.value !== END && current.value !== targetValue; current = current.next);

    newCell.next = current.next;
    current.next = newCell;
  }

  addSorted(value) {
    let current;
    const newCell = new Cell(value);

    for (current = this.top; current.next.value !== END && current.next.value < newCell.value; current = current.next);

    newCell.next = current.next;
    current.next = newCell;
  }

  remove(targetValue) {
    let current;

    for (current = this.top; current.next.value !== END && current.next.value !== targetValue; current = current.next);

    current.next = current.next.next;
  }

  show() {
    const values = [];

    for (let current = this.top.next; current.value !== END; current = current.next) {
      values.push(current.value);
    }
    console.log(values.join(' -> '));
  }
};
