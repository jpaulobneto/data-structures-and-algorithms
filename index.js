const { LinkedList, SortedList } = require('./list');
const Stack = require('./stack');

console.log('\n===> List');

const linkedList = new LinkedList();
// add 3 values
linkedList.add(1);
linkedList.add(2, 1);
linkedList.add(3, 2);
console.log(linkedList.getValues().join(' -> '));

// remove from begin
linkedList.remove(1);
console.log(linkedList.getValues().join(' -> '));
// undo
linkedList.add(1);
console.log(linkedList.getValues().join(' -> '));

// remove from middle
linkedList.remove(2);
console.log(linkedList.getValues().join(' -> '));
// undo
linkedList.add(2, 1);
console.log(linkedList.getValues().join(' -> '));

// remove from end
linkedList.remove(3);
console.log(linkedList.getValues().join(' -> '));
// undo
linkedList.add(3, 2);
console.log(linkedList.getValues().join(' -> '));

console.log('\n===> Sorted List');

const sortedList = new SortedList();
sortedList.add(2);
sortedList.add(1);
sortedList.add(4);
sortedList.add(3);
sortedList.add(5);
console.log(sortedList.getValues().join(' -> '));

console.log('\n===> Stack');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getValues().join(' -> '));

