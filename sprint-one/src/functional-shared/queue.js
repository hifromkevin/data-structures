var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = 0;
  someInstance.last = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {
  enqueue: function(val) {
    if (this.count === 0) {
      this.storage[this.last] = val;
    } else {
      this.last++;
      this.storage[this.last] = val;
    }
    this.count++;
  }, 
  dequeue: function() {
    var deletedVal = this.storage[this.first];
    if (this.count === 1) {
      delete this.storage[this.first];
      this.count--;
      return deletedVal;
    } else if (this.count > 1) {
      delete this.storage[this.first];
      this.count--;
      this.first++;
      return deletedVal;
    }
  }, 
  size: function() {
    return this.count;
  }
};