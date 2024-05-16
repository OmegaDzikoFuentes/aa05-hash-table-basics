const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {

    this.count = 0;

    this.capacity = numBuckets;

    this.data = new Array(this.capacity).fill(null);

  }

  hash(key) {

    let sha256Hash = sha256(key); // Compute the SHA-256 hash

    let first8CharHash = sha256Hash.slice(0, 8); // Take the first 8 characters

    return parseInt(first8CharHash, 16)


  }

  hashMod(key) {

    let sha256Hash = sha256(key); // Compute the SHA-256 hash

    let first8CharHash = sha256Hash.slice(0, 8); // Take the first 8 characters

    return parseInt(first8CharHash, 16) % this.data.length;


  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
