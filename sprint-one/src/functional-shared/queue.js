var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = 0;
  someInstance.last = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.count > 0) {
      this.last++;
    }
    this.storage[this.last] = value;
    this.count++;
  }, 
  dequeue: function() {
    if (this.count > 0) {
      var deleted = this.storage[this.first];
      delete this.storage[this.first];
      if (this.count > 1) {
        this.first++;
      }
      this.count--;
      return deleted;
    }
  }, 
  size: function() {
    return this.count;
  }
};