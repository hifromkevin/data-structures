var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (count === 0) {
      storage[last] = value;
    } else {
      last++;
      storage[last] = value;
    }
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var deleted = storage[first];
      delete storage[first];
      if (count > 1) {
        first++;
      }
      count--;
      return deleted;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};