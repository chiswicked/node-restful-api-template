const Trigger = require('../../models/trigger').Trigger;

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

describe('Trigger triggered', () => {
  it('should call RuleEvaluator with Rule properties', () => {
    const fakeRule = {
      property: 1,
      operator: 'op',
      value: 2,
    };

    const fakeEvaluate = sinon.spy();

    const fakeRuleEvaluator = {
      evaluate: fakeEvaluate,
    };

    const trigger = new Trigger(fakeRule, fakeRuleEvaluator);
    trigger.triggered;

    fakeEvaluate.should.have.been.calledWith(1, 'op', 2);
  });
});
