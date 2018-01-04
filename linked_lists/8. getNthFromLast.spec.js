import {expect} from 'chai';
import {LinkedList} from './LinkedList';

describe('getNthFromLast()', () => {
  let LL = new LinkedList()
    .append(5).append(5).append(1).append(3).append(4).append(5).append(1);

  xit('is an instance method on LinkedLists', () => {
    expect(LinkedList.prototype).to.haveOwnProperty('getNthFromLast');
  })

  xit(`takes a number, e.g. N, and returns the value of the node that
      is N positions from the last node in the list`, () => {
        expect(LL.getNthFromLast(0)).to.equal(1);
        expect(LL.getNthFromLast(1)).to.equal(5);
        expect(LL.getNthFromLast(2)).to.equal(4);
        expect(LL.getNthFromLast(3)).to.equal(3);
        expect(LL.getNthFromLast(4)).to.equal(1);
        expect(LL.getNthFromLast(5)).to.equal(5);
        expect(LL.getNthFromLast(6)).to.equal(5);
  })

  xit('returns the last node in the list by default when no argument is passed', () => {
    expect(LL.getNthFromLast()).to.equal(1);
  })

  xit('returns `undefined` if the number passed in exceeds the length of the list', () => {
    expect(LL.getNthFromLast(7)).to.be.undefined;
  })
})
