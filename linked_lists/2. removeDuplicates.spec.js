import {expect} from 'chai';
import {LinkedList, removeDuplicates} from './linked-list';

describe('removeDuplicates()', () => {

  let LLWithDuplicates;
  beforeEach('create a LLWithDuplicates', () => {
    LLWithDuplicates = new LinkedList()
      .append(5).append(5).append(1).append(3).append(4).append(5).append(1);
  })

  it('returns a new LinkedList', () => {
    const output = removeDuplicates(LLWithDuplicates);
    const isLLInstance = output instanceof LinkedList;
    const areSameList = LLWithDuplicates === output;
    expect(isLLInstance).to.be.true;
    expect(areSameList).to.be.false;
  })

  it(`takes an instance of a linked list and returns a copy of it without
      the nodes holding duplicate values`, () => {
    const LLMinusDuplicates = removeDuplicates(LLWithDuplicates);
    const head = LLMinusDuplicates.head;
    expect(head.val).to.equal(5)
    expect(head.next.val).to.equal(1)
    expect(head.next.next.val).to.equal(3)
    expect(head.next.next.next.val).to.equal(4)
  })
})
