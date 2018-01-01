import {expect} from 'chai';
import {LinkedList} from './linked-list.solution';

describe('The Singly-Linked List', () => {
  let emptyLL;
  let nullLLNode;
  let nodeWithVal;
  let llWithVal;
  beforeEach('make new LL', () => {
    emptyLL = new LinkedList();
    nullLLNode = new LinkedList.Node();
    nodeWithVal = new LinkedList.Node('derp');
    llWithVal = new LinkedList('wat!')

  })

  describe('constructor function', () => {
    it('returns an instance of LinkedList', () => {
      expect(emptyLL).to.be.instanceOf(LinkedList);
    })
  })

  describe('LinkedList.Node constructor class method', () => {

    it('returns a LinkedList.Node instance', () => {
      expect(nullLLNode).to.be.an.instanceOf(LinkedList.Node);
    })
  })

  describe('LinkedList.Node instance properties', () => {
    it('has a `.val` and `.next` property', () => {
      expect(nullLLNode).to.haveOwnProperty('val');
      expect(nullLLNode).to.haveOwnProperty('next');
    })

    describe('`.val`', () => {
      it('is assigned null by default', () => {
        expect(nullLLNode.val).to.be.null;
      })

      it('is assigned whatever value is passed to the constructor', () => {
        expect(nodeWithVal.val).to.equal('derp');
      })
    })

    describe('`.next`', () => {
      it('is assigned null by default', () => {
        expect(nullLLNode.next).to.be.null;
      })

    })
  })

  describe('Linked List instance properties', () => {
    it('include a `.head` property', () => {
      expect(emptyLL).to.haveOwnProperty('head');
    })

    describe('`.head`', () => {
      it('is set to null by default', () => {
        expect(emptyLL.head).to.be.null;
      })

      it(`is assigned a LinkedList.Node with its \`.val\` property set to the value passed
      in to the LinkedList constructor`, () => {
        expect(llWithVal.head).to.be.instanceOf(LinkedList.Node);
        expect(llWithVal.head.val).to.equal('wat!');
    })
  })
})

  describe('Linked List instance methods', () => {


    it('has an `.append` instance method', () => {
      expect(LinkedList.prototype).to.haveOwnProperty('append');
      expect(emptyLL.append).to.equal(LinkedList.prototype.append);
    })

    it('has a `.remove` instance method', () => {
      expect(LinkedList.prototype).to.haveOwnProperty('remove');
      expect(emptyLL.remove).to.equal(LinkedList.prototype.remove);
    })
  })

  describe('`.append` instance method', () => {
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

    // it('takes any number of arguments and appends a new node to the list for each argument with the argument value as each node\'s .val property', () => {
    //   emptyLL.append(1, 2, 3);
    //   expect(emptyLL.head.val).to.equal(1);
    //   expect(emptyLL.head.next.val).to.equal(2);
    //   expect(emptyLL.head.next.next.val).to.equal(3);
    // })

   it('returns the Linked List instance to allow for chaining', () => {
      emptyLL.append(1).append(2);
      expect(emptyLL.head.next.val).to.equal(2);
    })

  })

  describe('.remove() instance method', () => {
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

})
