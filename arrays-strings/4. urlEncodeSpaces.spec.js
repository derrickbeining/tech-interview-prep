const {expect} = require('chai');
const {urlEncodeSpaces} = require('./arrays-strings');

describe('function urlEncodeSpaces()', () => {

  it('takes a string of any length and replaces all spaces with %20', () => {
    expect(urlEncodeSpaces('Encode my spaces please!')).to.equal('Encode%20my%20spaces%20please!');
  })
})
