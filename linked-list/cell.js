module.exports = class Cell {
  constructor(value = null, nextCell = null) {
    this.value = value;
    this.next = nextCell;
  }
};
