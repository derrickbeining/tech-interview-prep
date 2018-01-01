'use strict'

function LinkedList(val) {
  this.head = val ?
    new LinkedList.Node(val) :
    null;
}

const LL = LinkedList;

LL.Node = function (val) {
  this.val = val || null;
  this.next = null;
}

LinkedList.prototype = {
  constructor: LinkedList,

  append: function append(val) {
    if (this.head !== null) {
      let end = this.head;
      while (end.next !== null) end = end.next;
      end.next = new LinkedList.Node(val);
    }

    else {
      this.head = new LinkedList.Node(val);
    }

    return this;
  },

  remove: function remove(val) {
    if (this.head.val === val) {
      if (this.head.next !== null) {
        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
      }
      else {
        this.head = null;
      }
    }

    else {
      let curr = this.head;
      while (curr.next !== null) {
        if (curr.next.val === val) {
          const oldNext = curr.next;
          const newNext = oldNext.next;
          curr.next = newNext;
          oldNext.next = null;
        }

        else {
          curr = curr.next;
        }
      }
    }
    return this;
  },

}

function removeDuplicates(list) {
  const uniqueVals = {};
  let currentNode = list.head;
  if (!currentNode) return new LinkedList();

  // while (currentNode) {
  //   if (!uniqueVals[currentNode.val]) {
  //     uniqueVals[currentNode.val] = 1;
  //   }
  // }

  // for (let val in uniqueVals) {

  // }

}


module.exports = {
  LinkedList,
  removeDuplicates,
}
