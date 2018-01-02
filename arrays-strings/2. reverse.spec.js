const {expect} = require('chai');
const sinon = require('sinon');
const {reverse} = require('./arrays-strings');

describe('function reverse()', () => {
  let splitSpy, sliceSpy;
  beforeEach('spy on .split and .slice string methods', () => {
    splitSpy = sinon.spy(String.prototype, 'split');
    sliceSpy = sinon.spy(String.prototype, 'slice');
  })
  afterEach('replace spies with original method', () => {
    splitSpy.restore();
    sliceSpy.restore();
  })

  xit('takes a string and returns the reverse', () => {
    expect(reverse('abcdefg')).to.equal('gfedcba');
  })

  xit('does not use .slice or .split string methods', () => {
    splitSpy.reset();
    sliceSpy.reset();
    reverse('abc');
    expect(splitSpy.notCalled).to.be.true;
    expect(sliceSpy.notCalled).to.be.true;
  })


})
