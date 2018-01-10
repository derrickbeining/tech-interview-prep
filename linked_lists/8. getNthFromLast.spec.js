import {expect} from 'chai';
import {LinkedList} from './LinkedList';

describe('LinkedList.getNthNodeFromLast()', () => {
  let LL = new LinkedList()
    .append(5).append(5).append(1).append(3).append(4).append(5).append(1);

  xit('is an instance method on LinkedLists', () => {
    expect(LinkedList.prototype).to.haveOwnProperty('getNthNodeFromLast');
  })

  xit(`takes a number, e.g. N, and returns the node that
      is N positions from the last node in the list`, () => {
        expect(LL.getNthNodeFromLast(0).val).to.equal(1);
        expect(LL.getNthNodeFromLast(1).val).to.equal(5);
        expect(LL.getNthNodeFromLast(2).val).to.equal(4);
        expect(LL.getNthNodeFromLast(3).val).to.equal(3);
        expect(LL.getNthNodeFromLast(4).val).to.equal(1);
        expect(LL.getNthNodeFromLast(5).val).to.equal(5);
        expect(LL.getNthNodeFromLast(6).val).to.equal(5);
  })

  xit('returns the last node in the list by default when no argument is passed', () => {
    expect(LL.getNthNodeFromLast().val).to.equal(1);
  })

  xit('returns `undefined` if the number passed in exceeds the length of the list', () => {
    expect(LL.getNthNodeFromLast(7)).to.be.undefined;
  })
})
