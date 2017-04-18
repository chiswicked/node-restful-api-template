const chai = require('chai');
// const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const should = chai.should();
chai.use(sinonChai);

delete require.cache[require.resolve('../../src/tools/db')];
const db = require('../../src/tools/db');

describe('DataBase', () => {
  describe('get', () => {
    it('should return null by default', () => {
      should.not.exist(db.get());
    });
  });

  describe('close', () => {
    it('should close existing connection', (done) => {
      db.connection = {
        close() { done(); },
      };

      db.close();
      should.not.exist(db.connection);
    });
  });

  describe('connect', () => {
    it('should set connection if database is valid', (done) => {
      const callback = (error) => {
        should.not.exist(error);
        db.get().databaseName.should.be.equal('test');
        db.close();
        done();
      };

      db.connect('mongodb://localhost/test', callback);
    });
    it('should reject invalid schema', (done) => {
      const callback = (error) => {
        error.should.be.instanceOf(Error);
        done();
      };

      db.connect('invalid://localhost/test', callback);
    });
  });
});
