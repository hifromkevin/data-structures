class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.first = 0;
    this.last = 0;
  }

  enqueue(val) {
    if (this.counter === 0) {
      this.storage[this.counter] = val; 
    } else {
      this.last++;
      this.storage[this.last] = val; 
    }
    this.counter++;
  }
  dequeue() {
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
  }
  size() {
    return this.counter;
  }

}
