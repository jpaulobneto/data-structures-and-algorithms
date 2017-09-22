const List = require('./linked-list');
const Stack = require('./stack');

console.log('\n===> List');

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

console.log('\n===> Sorted List');

const sortedList = new List();
sortedList.addSorted(2);
sortedList.addSorted(1);
sortedList.addSorted(4);
sortedList.addSorted(3);
sortedList.addSorted(5);
sortedList.show();

console.log('\n===> Stack');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.clear();

