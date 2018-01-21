var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

//takes a string and adds it to the set
setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

//takes any string and returns boolean if/if not found
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//takes string and removes it from a set
setPrototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
  Add: O(1)
  Contains: O(n)
  Remove: O(1)
 */