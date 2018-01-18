var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(val) {
  if (this.counter === 0) {
    this.storage[this.last] = val;
  } else {
    this.last++;
    this.storage[this.last] = val;
  }
  this.counter++;
}, 
Queue.prototype.dequeue = function() {
  var deletedVal = this.storage[this.first];
  if (this.counter === 1) {
    delete this.storage[this.first];
    this.counter--;
    return deletedVal;
  } else if (this.counter > 1) {
    delete this.storage[this.first];
    this.counter--;
    this.first++;
    return deletedVal;
  }
}, 
Queue.prototype.size = function() {
  return this.counter;
};


