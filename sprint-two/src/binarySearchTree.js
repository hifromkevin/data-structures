var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null; 
  tree.right = null; 
  tree.children = [];
  _.extend(tree, binaryTreeMethods);

  return tree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
};

binaryTreeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (target > this.value) {
    if (this.right !== null) {
      return this.right.contains(target);
    }
  } else if (target < this.value) {
    if (this.left !== null) {
      return this.left.contains(target);
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(log n)
  contains: O(log n)
  depthFirstLog: O(log n)
 */
