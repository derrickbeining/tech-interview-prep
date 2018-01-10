import {expect} from 'chai';
import {LinkedList, deleteNode} from './LinkedList';

describe('deleteNode()', () => {
  let LL = new LinkedList;
  beforeEach('make new LinkedList', () => {
    LL = new LinkedList()
    .append(5).append(5).append(1).append(3).append(4).append(5).append(1);
  })


  it(`takes a (singly) linked list node and deletes it from the list`, () => {
    const node = LL.getNthNodeFromLast(2);
    expect(node.val).to.equal(4);
    deleteNode(node);
    expect(LL.getNthNodeFromLast(2).val).to.equal(3);
    expect(LL.getNthNodeFromLast(1).val).to.equal(5);
    expect(LL.getNthNodeFromLast(0).val).to.equal(1);
  })

  it('returns false if the passed-in node is the last node in the list, otherwise it returns true', () => {
    const lastNode = LL.getNthNodeFromLast(0);
    const notLast = LL.getNthNodeFromLast(1);
    expect(deleteNode(lastNode)).to.be.false;
    expect(deleteNode(notLast)).to.be.true;
  })
})
