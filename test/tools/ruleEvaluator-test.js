const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

const RuleEvaluator = require('../../tools/ruleEvaluator').RuleEvaluator;

describe('RuleEvaluator', () => {
  it('should accept argument to be an array', () => {
    (() => new RuleEvaluator([
      { id: 'TRUE', func: () => true },
      { id: 'FALSE', func: () => false },
    ])).should.not.throw;
  });

  it('should throw error if non-array argument is supplied', () => {
    (() => new RuleEvaluator('JOZSI')).should.throw(Error);
  });

  describe('evaluate', () => {
    it('should call associated Operator\'s func method with property and value arguments (1)', () => {
      const trueStub = sinon.stub().returns(true);
      const falseStub = sinon.stub().returns(false);

      const ruleEvaluator = new RuleEvaluator([
        { id: 'TRUE', func: trueStub },
        { id: 'FALSE', func: falseStub },
      ]);
      ruleEvaluator.evaluate(1, 'TRUE', 2).should.be.true;
      trueStub.should.have.been.calledWith(1, 2);
      falseStub.should.not.have.been.called;
    });

    it('should call associated Operator\'s func method with property and value arguments (2)', () => {
      const trueStub = sinon.stub().returns(true);
      const falseStub = sinon.stub().returns(false);

      const ruleEvaluator = new RuleEvaluator([
        { id: 'TRUE', func: trueStub },
        { id: 'FALSE', func: falseStub },
      ]);
      ruleEvaluator.evaluate(2, 'FALSE', 1).should.be.false;
      trueStub.should.not.have.been.called;
      falseStub.should.have.been.calledWith(2, 1);
    });

    it('should throw Error if invalid operator is supplied', () => {
      const ruleEvaluator = new RuleEvaluator([
        { id: 'TRUE', func: () => true },
        { id: 'FALSE', func: () => false },
      ]);
      (() => ruleEvaluator.evaluate(1, 'UNDEFINED', 1)).should.throw(Error);
    });
  });
});
