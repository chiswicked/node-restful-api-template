class Operation {
    constructor(id, func) {
        this.id = id;
        this.func = func;
    }
}

class DefaultRuleEvaluator {
    constructor() {
        this.operations = [];

        this.operations.push(new Operation('EQUAL_TO', (property, value) => property === value));
        this.operations.push(new Operation('GREATER_THAN', (property, value) => property > value));
        this.operations.push(new Operation('LESS_THAN', (property, value) => property < value));
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

module.exports.DefaultRuleEvaluator = DefaultRuleEvaluator;
