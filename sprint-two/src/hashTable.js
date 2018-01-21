

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);//{}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found = false;
  var bucket = this._storage.get(index);

  //if no bucket at this index, create and set bucket at this index
  if (bucket === undefined) {
    bucket = []; 
    this._storage.set(index, bucket); 
  }
  
  //check if key already exists in bucket, if so, overwrite value
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) { 
      bucket[i][1] = v;
      found = true;
    }
  }

  //if there is a bucket that does not yet contain tuple, add it
  if (found === false) {
    var tuple = [k, v];
    bucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  
  for (var i = 0; i < bucket.length; i++) { //iterate through bucket
    var tuple = bucket[i];
    if (tuple[0] === k) { //if bucket key matches input key
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) { 
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) { //iterate through bucket
    if (bucket[i][0] === k) { //if input key matches a bucket key
      bucket.splice(i, 1); //remove from bucket
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  Insert: O(1)
  Retrieve: O(n)
  Remove: O(n)
 */
