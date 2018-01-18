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
    var deletedVal = storage[first];
    if (count === 1) {
      delete storage[first];
      count--;
      return deletedVal;
    } else if (count > 1) {
      delete storage[first];
      count--;
      first++;
      return deletedVal;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};