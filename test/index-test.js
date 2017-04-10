const chai = require('chai');
chai.use(require('chai-http'));

const expect = chai.expect;

const app = require('../index');

describe('Canary test', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });
});

describe('GET / HTTP/1.1', () => {
    it('should return Hello World', () => {
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
