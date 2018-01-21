var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) { 
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.tail) { 
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (this.head) {
      var value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   addToTail: O(1)
   removeHead: O(1)
   contains: O(n)
 */
