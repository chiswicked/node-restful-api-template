const chai = require('chai');

chai.should();

const DefaultRuleEvaluator = require('../../tools/operation').DefaultRuleEvaluator;

const ruleEvaluator = new DefaultRuleEvaluator();


describe('DefaultRuleEvaluator', () => {
    it('should accept property argument to be a function', () => {
        const func = () => 5;
        ruleEvaluator.evaluate(func, 'EQUAL_TO', 5).should.be.true;
    });
    it('should accept value argument to be a function', () => {
        const func = () => 5;
        ruleEvaluator.evaluate(5, 'EQUAL_TO', func).should.be.true;
    });
    it('should accept property and value arguments to be functions', () => {
        const funcProperty = () => 5;
        const funcValue = () => 5;
        ruleEvaluator.evaluate(funcProperty, 'EQUAL_TO', funcValue).should.be.true;
    });

    describe('EQUAL_TO operator', () => {
        it('should evaluate 5 and 5 to be true', () => {
            ruleEvaluator.evaluate(5, 'EQUAL_TO', 5).should.be.true;
        });

        it('should evaluate 0 and 0 to be true', () => {
            ruleEvaluator.evaluate(0, 'EQUAL_TO', 0).should.be.true;
        });

        it('should evaluate -5.5 and -5.50 to be true', () => {
            ruleEvaluator.evaluate(-5.5, 'EQUAL_TO', -5.50).should.be.true;
        });

        it('should evaluate 5 and 6 to be false', () => {
            ruleEvaluator.evaluate(5, 'EQUAL_TO', 6).should.be.false;
        });

        it('should evaluate 0 and 0.000001 to be false', () => {
            ruleEvaluator.evaluate(0, 'EQUAL_TO', 0.000001).should.be.false;
        });

        it('should evaluate -5 and 5 to be false', () => {
            ruleEvaluator.evaluate(-5, 'EQUAL_TO', 5).should.be.false;
        });
    });

    describe('GREATER_THAN operator', () => {
        it('should evaluate 6 and 5 to be false', () => {
            ruleEvaluator.evaluate(6, 'GREATER_THAN', 5).should.be.true;
        });

        it('should evaluate 0 and -0.000001 to be false', () => {
            ruleEvaluator.evaluate(0, 'GREATER_THAN', -0.000001).should.be.true;
        });

        it('should evaluate 5 and -5 to be false', () => {
            ruleEvaluator.evaluate(5, 'GREATER_THAN', -5).should.be.true;
        });

        it('should evaluate 5 and 6 to be true', () => {
            ruleEvaluator.evaluate(5, 'GREATER_THAN', 6).should.be.false;
        });

        it('should evaluate -5 and 6 to be true', () => {
            ruleEvaluator.evaluate(-5, 'GREATER_THAN', 6).should.be.false;
        });

        it('should evaluate 0 and 0.000001 to be true', () => {
            ruleEvaluator.evaluate(0, 'GREATER_THAN', 0.000001).should.be.false;
        });
    });

    describe('LESS_THAN operator', () => {
        it('should evaluate 5 and 6 to be true', () => {
            ruleEvaluator.evaluate(5, 'LESS_THAN', 6).should.be.true;
        });

        it('should evaluate -5 and 6 to be true', () => {
            ruleEvaluator.evaluate(-5, 'LESS_THAN', 6).should.be.true;
        });

        it('should evaluate 0 and 0.000001 to be true', () => {
            ruleEvaluator.evaluate(0, 'LESS_THAN', 0.000001).should.be.true;
        });

        it('should evaluate 6 and 5 to be false', () => {
            ruleEvaluator.evaluate(6, 'LESS_THAN', 5).should.be.false;
        });

        it('should evaluate 0 and -0.000001 to be false', () => {
            ruleEvaluator.evaluate(0, 'LESS_THAN', -0.000001).should.be.false;
        });
        it('should evaluate 5 and -5 to be false', () => {
            ruleEvaluator.evaluate(5, 'LESS_THAN', -5).should.be.false;
        });
    });

    describe('JOZSI operator', () => {
        it('should throw exception', () => {
            (() => {
                ruleEvaluator.evaluate(6, 'JOZSI', 5);
            }).should.throw(Error, /Undefined/);
        });
    });
});
