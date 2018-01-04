import {expect} from 'chai';
import {LinkedList} from './LinkedList';

describe('`.append` instance method', () => {
  let emptyLL;
  let llWithVal;

  beforeEach('make new LL', () => {
    emptyLL = new LinkedList();
    llWithVal = new LinkedList('wat!')
  })

  it('is an instance method', () => {
    expect(LinkedList.prototype).to.haveOwnProperty('append');
  })

  it(`assigns a new LinkedList Node to the \`.head\` property if
      if it is \`null\``, () => {
    emptyLL.append();
    expect(emptyLL.head).to.be.an.instanceof(LinkedList.Node);
    expect(emptyLL.head.next).to.equal(null);
  })

  it(`assigns a new LinkedList Node to the \`.next\` property of the last
      node in the chain`, () => {
    llWithVal.append();
    expect(llWithVal.head.next).to.be.an.instanceof(LinkedList.Node);
    expect(llWithVal.head.next.next).to.equal(null);
  })

  it(`takes any value as an argument and sets the \`.val\` of the appended node
      property to that value`, () => {
    llWithVal.append('new info');
    expect(llWithVal.head.next.val).to.equal('new info');
  })

 it('returns the Linked List instance to allow for chaining', () => {
    emptyLL.append(1).append(2);
    expect(emptyLL.head.next.val).to.equal(2);
  })

})
