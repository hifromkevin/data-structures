var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0) {
      var deletedValue = storage[count - 1];
      delete storage[count - 1];
      count--; 
      return deletedValue;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
