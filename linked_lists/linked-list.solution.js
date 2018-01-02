'use strict'

// ES5 Implementation
function LinkedList(val) {
  this.head = val ?
    new LinkedList.Node(val) :
    null;
}

LinkedList.Node = function (val) {
  this.val = val || null;
  this.next = null;
}

LinkedList.prototype = {
  constructor: LinkedList,

  append: function append(val) {
    if (this.head === null) {
      this.head = new LinkedList.Node(val);
    }

    else {
      let end = this.head;
      while (end.next !== null) end = end.next;
      end.next = new LinkedList.Node(val);
    }

    return this; // allow for chaining
  },

  // May include these convenience methods, not sure yet:

  // filter: function filter(fn) {
  //   const LL = new LinkedList;
  //   this.forEach(node => {
  //     if (fn(node)) LL.append(node);
  //   });
  //   return LL;
  // },

  // forEach: function forEach(fn) {
  //   let curr = this.head;
  //   while (curr !== null) {
  //     fn(curr);
  //     curr = curr.next;
  //   }
  // },

  // map: function map(fn) {
  //   const LL = new LinkedList;
  //   this.forEach(node => {
  //     LL.append(fn(node));
  //   })
  //   return LL;
  // },

  remove: function remove(val) {
    if (this.head.val === val) {
      if (this.head.next !== null) {
        // head matches but there are more nodes after it:
        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
      }
      else {
        // head matches and there are no nodes after it:
        this.head = null;
      }
    }

    else {
      // it's not head, so check the rest
      let curr = this.head;
      while (curr.next !== null) {
        if (curr.next.val === val) {
          // the next node matches, so displace it by reassigning curr.next to next.next
          // and assign next.next to null for good measure
          const oldNext = curr.next;
          const newNext = oldNext.next;
          curr.next = newNext;
          oldNext.next = null;
        }

        else {
          // move on the the next node
          curr = curr.next;
        }
      }
    }
    return this; // allows for method chaining
  },

}

function removeDuplicates(list) {
  const LLMinusDuplicates = new LinkedList;
  const uniqueVals = {};
  const buffer = [];
  let currentNode = list.head;
  while (currentNode !== null) {
    // if our list nodes are to be able to hold complex data types like {} and [],
    // we can serialize those values to be used as a hash to detect duplicates
    const val = JSON.stringify(currentNode.val);
    if (uniqueVals[ val ] === undefined) {
      // hash the value
      uniqueVals[ val ] = currentNode.val;
      // store the unique val
      buffer.push(currentNode.val);
    }

    currentNode = currentNode.next;
  }

  for (let val of buffer) {
    LLMinusDuplicates.append(val);
  }

  return LLMinusDuplicates;

}


module.exports = {
  LinkedList,
  removeDuplicates,
}
