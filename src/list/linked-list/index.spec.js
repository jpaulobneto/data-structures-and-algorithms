const List = require('.');

describe('LinkedList', () => {
  it('can be instantiated', () => {
    expect(() => new List()).not.toThrow();
  });

  describe('add(value, afterOf)', () => {
    let list;

    beforeEach(() => {
      list = new List();
    });

    it('add a value to an empty list', () => {
      list.add(1);

      expect(list.getValues()).toMatchSnapshot();
    });

    it('add an value after another value #1', () => {
      list.add(1);
      list.add(2, 1);
      list.add(3, 2);

      expect(list.getValues()).toMatchSnapshot();
    });

    it('add an value after another value #2', () => {
      list.add(1);
      list.add(3, 1);
      list.add(2, 1);

      expect(list.getValues()).toMatchSnapshot();
    });
  });
});

