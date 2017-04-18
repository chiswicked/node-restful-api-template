const chai = require('chai');

chai.should();

const Operation = require('../../src/tools/operation').Operation;

describe('Operation', () => {
  it('should accept string and function arguments', () => {
    const operation = new Operation('OP_ID', (property, value) => property === value);
    operation.id.should.be.equal('OP_ID');
    operation.func.should.be.a('function');
  });
  it('should throw exception if first argument is not a string', () => {
    (() => new Operation(1, (property, value) => property === value)).should.throw(Error);
  });
  it('should throw exception if second argument is not a function', () => {
    (() => new Operation(('OP_ID', 1))).should.throw(Error);
  });
  it('should throw exception if second argument is not a function with a return value', () => {
    (() => new Operation(('OP_ID', () => { }))).should.throw(Error);
  });
});
