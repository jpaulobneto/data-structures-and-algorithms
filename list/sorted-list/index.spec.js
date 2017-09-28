const List = require('.');

describe('SortedList', () => {
  it('can be instantiated', () => {
    expect(() => new List()).not.toThrow();
  });

  describe('add(value)', () => {
    let list;

    beforeEach(() => {
      list = new List();
    });

    it('add a value to an empty list', () => {
      list.add(1);

      expect(list.getValues()).toMatchSnapshot();
    });

    it('add an values sorted', () => {
      list.add(2);
      list.add(1);
      list.add(3);

      expect(list.getValues()).toMatchSnapshot();
    });
  });
});

