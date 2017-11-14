import {expect, assert} from 'chai';
import sinon from 'sinon';
import {isPermutation} from './arrays-strings';

describe('function isPermutation()', () => {

  it('takes two strings and returns a boolean', () => {
    assert.isBoolean(isPermutation('abc', 'def'));
  })

  it('returns true if one argument is a permutation of the other (same letters but rearranged; e.g. "slow" and "lows") otherwise returns false', () => {
    expect(isPermutation('candy', 'cando')).to.be.false;
    expect(isPermutation('super', 'ureps')).to.be.true;
  })
})
