var nodeArr = [];

function next() {
  for (var n in nodeArr) {
    object.process();
  }
  for (var n in nodeArr) {
    object.next();
  }
}

var node = {
  alive:false,
  swap:false,
  listNeighbors:function() {
    return [];
  }

  // countLivingNeighbors()
  // return int number of living neighbors
  // uses listNeighbors()
  countLivingNeighbors:function() {
    var sum = 0;
    for (var n in listNeighbors()) {
      if (n.alive) {
        sum++;
      }
    }
    return sum;
  }

  // process()
  // "process the node"
  // use countLivingNeighbors() to determine wether the square
  // should be swapped or not.
  // TODO currently only for square boards
  process:function() {

    // count the number of living neighbors
    var living = countLivingNeighbors();

    // alive : < 2 die
    //       : 2-3 alive
    //       : > 3 die
    //
    // dead  : = 3 alive
    //       : ! 3 dead
    if(alive) {
      if(living < 2 || living > 3) {
        this.swap = true;
      }
    }
    else {
      if (living == 3) {
        this.swap = false;
      }
    }
  }

  // next()
  // swap alive to dead and dead to alive if marked to change.
  next:function() {
    if(this.swap) {
      this.alive = !this.alive;
      this.swap = false;
    }
  }
}

}
