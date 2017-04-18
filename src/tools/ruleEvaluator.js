class RuleEvaluator {
  constructor(operations) {
    if (operations.constructor !== Array) {
      throw new Error('Invalid arguments');
    }

    this.operations = operations;
  }

  evaluate(p, o, v) {
    const error = new Error('Undefined Rule Operator');

    let property = p;
    const operator = o;
    let value = v;

    if (typeof p === 'function') {
      property = p();
    }

    if (typeof v === 'function') {
      value = v();
    }

    let operation;

    this.operations.forEach((element) => {
      if (element.id === operator) {
        operation = element.func;
      }
    });

    if (operation === undefined) {
      throw error;
    }

    return operation(property, value);
  }
}

module.exports.RuleEvaluator = RuleEvaluator;
