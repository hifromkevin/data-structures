var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push: function(val) {
    this.storage[this.count] = val; 
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