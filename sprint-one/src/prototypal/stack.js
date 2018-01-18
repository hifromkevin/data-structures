var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.count] = val;
    console.log(this.storage);
    this.count++;
  }, 
  pop: function() {
    if (this.count > 0) {
      var deletedValue = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--; 
      return deletedValue;
    }
  }, 
  size: function() {
    return this.count; 
  }
};


