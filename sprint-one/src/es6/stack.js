class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[this.counter] = val;
    this.counter++;
  }
  pop() {
    if (this.counter > 0) {
      var deletedValue = this.storage[this.counter - 1];
      delete this.storage[this.counter - 1];
      this.counter--; 
      return deletedValue;
    }
  }
  size() {
    return this.counter;
  }

}

