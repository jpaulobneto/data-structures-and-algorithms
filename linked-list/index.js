const Cell = require('./cell');

const BEGIN = 'begin';
const END = 'end';

class List {
  constructor() {
    this.top = new Cell(BEGIN);
    this.top.next = new Cell(END);
    // console.log(JSON.stringify(this, null, 2));
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
    // console.log(JSON.stringify(this, null, 2));
  }
}

const list = new List();

// add 3 values
list.add(1);
list.add(2, 1);
list.add(3, 2);
list.show();

// remove from begin
list.remove(1);
list.show();
// undo
list.add(1);
list.show();

// remove from middle
list.remove(2);
list.show();
// undo
list.add(2, 1);
list.show();

// remove from end
list.remove(3);
list.show();
// undo
list.add(3, 2);
list.show();

const sortedList = new List();
sortedList.addSorted(2);
sortedList.addSorted(1);
sortedList.addSorted(4);
sortedList.addSorted(3);
sortedList.addSorted(5);
sortedList.show();
