module.exports = class Cell {
  constructor(value = null, prevCell = null, nextCell = null) {
    this.value = value;
    this.prevCell = prevCell;
    this.next = nextCell;
  }
};
