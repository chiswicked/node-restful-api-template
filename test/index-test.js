const chai = require('chai');
chai.use(require('chai-http'));

const expect = chai.expect;

const app = require('../src/index');

describe('Canary test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});

describe('GET / HTTP/1.1', () => {
  it('should return 200 OK Hello World', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('string');
        res.should.equal.to('Hello World');
        done();
      });
  });
});

describe('POST / HTTP/1.1', () => {
  it('should return 405 Method Not Allowed', () => {
    chai.request(app)
      .post('/')
      .end((err, res) => {
        res.should.have.status(405);
        res.should.be.a('string');
        res.should.equal.to('Method Not Allowed');
        done();
      });
  });
});

describe('PUT / HTTP/1.1', () => {
  it('should return 405 Method Not Allowed', () => {
    chai.request(app)
      .post('/')
      .end((err, res) => {
        res.should.have.status(405);
        res.should.be.a('string');
        res.should.equal.to('Method Not Allowed');
        done();
      });
  });
});

