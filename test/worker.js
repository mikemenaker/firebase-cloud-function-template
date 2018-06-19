import { doWork } from '../src/worker';
import chai from 'chai';
chai.expect();

const expect = chai.expect;

describe('worker', () => {
  describe('doWork', () => {
    it('should be a function', async () => {
      expect(doWork).to.be.an('function');
    });
  });
})