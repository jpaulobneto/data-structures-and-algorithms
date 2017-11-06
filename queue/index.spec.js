const Queue = require('.');

describe('Queue', () => {
  it('is defined', () => {
    expect(Queue).toBeDefined();
  });

  it('can be initialized', () => {
    expect(() => new Queue()).not.toThrow();
  });

  describe('isEmpty()', () => {
    it('return true if queue is empty', () => {
      const queue = new Queue();

      expect(queue.isEmpty()).toEqual(true);
    });

    it('return false if queue is not empty', () => {
      const queue = new Queue();

      queue.enqueue(1);

      expect(queue.isEmpty()).toBeFalsy();
    });
  });

  describe('enqueue(value)', () => {
    it('a list of values', () => {
      const queue = new Queue();
      const expected = [1, 2];

      expected.forEach(value => queue.enqueue(value));

      expect(queue.getValues()).toEqual(expected);
    });
  });

  describe('dequeue', () => {
    it('a list of values', () => {
      const queue = new Queue();
      const expected = [1, 2, 3, 4, 5];

      expected.forEach(value => queue.enqueue(value));

      expected.forEach(value => expect(queue.dequeue()).toEqual(value));
    });
  });

  describe('.size property', () => {
    it('is updated', () => {
      const queue = new Queue();
      const expected = [1, 2, 3, 4, 5];

      expect(queue.size).toEqual(0);

      expected.forEach(value => queue.enqueue(value));

      expect(queue.size).toEqual(expected.length);

      queue.getValues();

      expect(queue.size).toEqual(0);
    });
  });
});
