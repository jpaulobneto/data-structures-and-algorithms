module.exports = class Cell {
  constructor(value = null, prevCell = null, nextCell = null) {
    this.value = value;
    this.prev = prevCell;
    this.next = nextCell;
  }
};
