import {expect} from 'chai';
import {LinkedList} from './LinkedList';

describe('LinkedList.remove() instance method', () => {
  let emptyLL;
  let llWithVal;

  beforeEach('make new LL', () => {
    emptyLL = new LinkedList();
    llWithVal = new LinkedList('wat!')
  })

  it(`takes the value of the node being removed and removes the first node
       with that value`, () => {
    emptyLL.append(1).append(2).append(3);
    expect(emptyLL.head.next.val).to.equal(2);
    emptyLL.remove(2);
    expect(emptyLL.head.next.val).to.equal(3);
  })

  it('works when the node at `.head` is the only node and matches the removed value', () => {
    emptyLL.append(10);
    expect(emptyLL.head.val).to.equal(10);
    emptyLL.remove(10)
    expect(emptyLL.head).to.be.null;
  })

  it(`works when the node at \`.head\` is NOT the only node and matches the removed value`, () => {
    emptyLL.append(10).append(11);
    expect(emptyLL.head.val).to.equal(10);
    emptyLL.remove(10)
    expect(emptyLL.head.val).to.equal(11);
  })

  it('returns the Linked List instance for method chaining', () => {
    expect(llWithVal.remove('wat!')).to.be.an.instanceOf(LinkedList);
  })
})
