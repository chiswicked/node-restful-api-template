const Rule = require('../../src/models/rule').Rule;

const chai = require('chai');

chai.should();

describe('Rule properties', () => {
  it('should be set by the constructor', () => {
    const rule = new Rule(5, 'EQUAL_TO', 5);
    rule.property.should.be.equal(5);
    rule.operator.should.be.equal('EQUAL_TO');
    rule.value.should.be.equal(5);
  });
});
