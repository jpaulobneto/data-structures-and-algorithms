const Stack = require('../src/stack');

const OPERATOR = /[+]/;

/**
 * Reverse Polish Notation Calculator
 */
class RPNCalculator {
  constructor() {
    this.operands = new Stack();
    this.operators = new Stack();
  }

  static sum(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
  }

  static getResult(operators, firstOperand, secondOperand) {
    if (operators === '+') return RPNCalculator.sum(firstOperand, secondOperand);

    return NaN;
  }

  loadExpression(expression) {
    const terms = expression.split(',');

    terms.forEach((term) => {
      if (OPERATOR.test(term)) {
        this.operators.push(term);
      } else {
        this.operands.push(Number(term));
      }
    });
  }

  calculate(expression) {
    // TODO this.validateExpression(expression);
    this.loadExpression(expression);

    while (this.operators.size > 0) {
      const firstOperand = this.operands.pop();
      const secondOperand = this.operands.pop();
      const operators = this.operators.pop();

      this.operands.push(RPNCalculator.getResult(
        operators,
        firstOperand,
        secondOperand,
      ));
    }

    return this.operands.pop();
  }
}

module.exports = RPNCalculator;
