const FixedQueue = require('.');

describe('FixedQueue', () => {
  it('is defined', () => {
    expect(FixedQueue).toBeDefined();
  });

  it('can be initialized', () => {
    expect(() => new FixedQueue()).not.toThrow();
  });

  describe('isEmpty()', () => {
    it('return true if queue is empty', () => {
      const queue = new FixedQueue();

      expect(queue.isEmpty()).toEqual(true);
    });
  });

  describe('isFull()', () => {
    it('return false if queue is not full', () => {
      const queue = new FixedQueue();

      expect(queue.isFull()).toEqual(false);
    });
  });

  describe('enqueue(value)', () => {
    it('10x queue initial size', () => {
      const queue = new FixedQueue();
      const values = [];

      for (let i = 1; i <= 20; i += 1) {
        values.push(i);
      }

      values.forEach(value => queue.enqueue(value));

      expect(queue).toMatchSnapshot();
    });
  });

  describe('dequeue()', () => {
    it('remove the next value from queue', () => {
      const queue = new FixedQueue();
      const values = [];

      for (let i = 1; i <= 20; i += 1) {
        values.push(i);
      }

      values.forEach((value) => {
        if (value % 10 === 0) queue.dequeue();

        queue.enqueue(value);
      });

      expect(queue).toMatchSnapshot();
    });
  });
});
