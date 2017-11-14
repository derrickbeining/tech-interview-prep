import {expect, assert} from 'chai';
import {compress} from './arrays-strings';

describe('function compress()', () => {
  it('takes a string and returns a string', () => {
    assert.isString(compress('super neat string'));
  })

  it('encodes the input string by replacing all characters with the the same character followed by the number of times the character occurred in a row', () => {
    expect(compress('aabcccccaaa')).to.equal('a2b1c5a3');
    expect(compress('efefeffffffff')).to.equal('e1f1e1f1e1f8');
  })

  it('returns the input string if it is not longer than the compressed form', () => {
    expect(compress('aabbcc')).to.equal('aabbcc');
  })
})
