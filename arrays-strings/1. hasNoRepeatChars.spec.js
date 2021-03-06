const {expect} = require('chai');
const {hasNoRepeatChars} = require('./arrays-strings');

describe('function hasNoRepeatChars()', () => {

  xit('takes a string and throws a TypeError otherwise', () => {
    expect(() => hasNoRepeatChars([])).to.throw(TypeError);
    expect(() => hasNoRepeatChars('string')).to.not.throw(TypeError);
  })

  xit('returns true if all characters in the input string are unique', () => {
    expect(hasNoRepeatChars('noPeatsHur')).to.be.true;
  })

  xit('returns true if passed an empty string', () => {
    expect(hasNoRepeatChars('')).to.be.true;
  })

  xit('returns false if any characters occur more than once', () => {
    expect(hasNoRepeatChars('repeats')).to.be.false;
  })

  xit('is not case-sensitive (e.g. "Cactus" would return false)', () => {
    expect(hasNoRepeatChars('Cactus')).to.be.false;
  })

  xit('does not use any data structures other than primitive strings', () => {
    const dsCharacters = [
      '= [',
      '= {',
      'Set',
      'Array',
      'Object',
      'String'
    ];

    const stringifiedFunc = hasNoRepeatChars.toString();
    const blockOpenIdx = stringifiedFunc.indexOf('{');
    const blockCloseIdx = stringifiedFunc.lastIndexOf('}')
    const codeBlock = stringifiedFunc.slice(blockOpenIdx, blockCloseIdx);
    for (let i = 0; i < dsCharacters.length; i++) {
       expect(codeBlock.includes(dsCharacters[i])).to.be.false;
    }
  })
})
