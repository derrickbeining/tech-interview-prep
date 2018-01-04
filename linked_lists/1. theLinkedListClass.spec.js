import {expect} from 'chai';
import {LinkedList} from './LinkedList';

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


    it('includes an `.append` instance method', () => {
      expect(LinkedList.prototype).to.haveOwnProperty('append');
      expect(emptyLL.append).to.equal(LinkedList.prototype.append);
    })

    it('includes a `.remove` instance method', () => {
      expect(LinkedList.prototype).to.haveOwnProperty('remove');
      expect(emptyLL.remove).to.equal(LinkedList.prototype.remove);
    })
  })

})
