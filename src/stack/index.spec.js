const Stack = require('.');

describe('Stack', () => {
  it('is defined', () => {
    expect(Stack).toBeDefined();
  });

  it('can be initialized', () => {
    expect(() => new Stack()).not.toThrow();
  });

  describe('isEmpty()', () => {
    const stack = new Stack();

    it('return true if stack is empty', () => {
      expect(stack.isEmpty()).toEqual(true);
    });

    it('return false if is not empty', () => {
      stack.push(1);
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('push()', () => {
    it('add a list of values', () => {
      const stack = new Stack();
      const values = [1, 2, 3, 4, 5];
      const expected = [5, 4, 3, 2, 1];

      values.forEach(value => stack.push(value));

      expect(stack.getValues()).toEqual(expected);
    });
  });

  describe('pop()', () => {
    it('the top stack value', () => {
      const stack = new Stack();
      const values = [1, 2, 3, 4, 5];
      const expected = [5, 4, 3, 2, 1];

      values.forEach(value => stack.push(value));

      expected.forEach(value => expect(stack.pop()).toEqual(value));
    });
  });

  describe('.size property', () => {
    it('is updated', () => {
      const stack = new Stack();
      const values = [1, 2, 3, 4, 5];

      expect(stack.size).toEqual(0);

      values.forEach(value => stack.push(value));

      expect(stack.size).toEqual(values.length);

      stack.getValues();

      expect(stack.size).toEqual(0);
    });
  });
});
