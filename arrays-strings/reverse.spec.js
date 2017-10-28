import {expect} from 'chai';
import sinon from 'sinon';
import {reverse} from './arrays-strings';

describe('function reverse()', () => {
  let splitSpy, sliceSpy;
  beforeEach('spy on .split and .slice string methods', () => {
    splitSpy = sinon.spy(String.prototype, 'split');
    sliceSpy = sinon.spy(String.prototype, 'slice');
  })
  afterEach('tear replace spies with original method', () => {
    splitSpy.restore();
    sliceSpy.restore();
  })

  it('takes a string and returns the reverse', () => {
    expect(reverse('abcdefg')).to.equal('gfedcba');
  })

  it('does not use .slice or .split string methods', () => {
    splitSpy.reset();
    sliceSpy.reset();
    reverse('abc');
    expect(splitSpy.notCalled).to.be.true;
    // expect(sliceSpy.called).to.be.false;
  })


})
