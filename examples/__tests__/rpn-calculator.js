const RPNCalculator = require('../rpn-calculator');

describe('RPNCalculator', () => {
  it('is defined', () => {
    expect(RPNCalculator).toBeDefined();
  });

  it('can be initialized', () => {
    expect(() => new RPNCalculator()).not.toThrow();
  });

  it('loadExpression(expression)', () => {
    const rpnc = new RPNCalculator();

    rpnc.loadExpression('1,2,+,3,+');

    expect(rpnc.operands).toMatchSnapshot();
    expect(rpnc.operators).toMatchSnapshot();
  });

  it('calculate(expression)', () => {
    const rpnc = new RPNCalculator();
    const expected = [
      {
        expression: '5,8,+',
        result: 13,
      },
      {
        expression: '9,4,+,6,+',
        result: 19,
      },
      {
        expression: '9,4,+,6,+,2,+,5,+',
        result: 26,
      },
    ];

    expected.forEach(test => expect(rpnc.calculate(test.expression)).toEqual(test.result))
  });
});
