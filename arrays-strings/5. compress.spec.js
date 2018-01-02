const {expect, assert} = require('chai');
const {compress} = require('./arrays-strings');

describe('function compress()', () => {
  xit('takes a string and returns a string', () => {
    assert.isString(compress('super neat string'));
  })

  xit('encodes the input string by replacing all characters with the the same character followed by the number of times the character occurred in a row', () => {
    expect(compress('aabcccccaaa')).to.equal('a2b1c5a3');
    expect(compress('efefeffffffff')).to.equal('e1f1e1f1e1f8');
  })

  xit('returns the input string if it is not longer than the compressed form', () => {
    expect(compress('aabbcc')).to.equal('aabbcc');
  })
})
