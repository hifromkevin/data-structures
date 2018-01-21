var Tree = function(value) {
  var newTree = {};
  newTree.count = 0;
  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var currentTree = this;
  var containsValue = false;

  var findValue = function(obj) {
    if (obj.value === target) {
      containsValue = true;
      return containsValue;
    } else {
      for (var i = 0; i < obj.children.length; i++) {
        findValue(obj.children[i]);
      }
    }
  };
  findValue(currentTree);
  return containsValue;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */