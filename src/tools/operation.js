class Operation {
  constructor(id, func) {
    if (typeof id !== 'string' || typeof func !== 'function' || typeof func(1, 1) === 'undefined') {
      throw new Error('Invalid arguments');
    }
    this.id = id;
    this.func = func;
  }
}

const operations = [];

operations.push(new Operation('EQUAL_TO', (property, value) => property === value));
operations.push(new Operation('GREATER_THAN', (property, value) => property > value));
operations.push(new Operation('LESS_THAN', (property, value) => property < value));

module.exports.Operation = Operation;
module.exports.operations = operations;
