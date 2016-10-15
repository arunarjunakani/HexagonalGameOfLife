var nodeArr = [];

function step() {
  for (var n in nodeArr) {
    object.checkSwap();
  }
  for (var n in nodeArr) {
    object.doSwap();
  }
}

// TODO move to Node prototype in src.js
// Node()
// alive bool
// swap bool temporary variable to allow swapping
function Node(x, y) {
  this.swap = false;

  // countLivingNeighbors()
  // return int number of living neighbors
  // uses listNeighbors()
  function countLivingNeighbors() {
    var sum = 0;
    for (var n in listNeighbors()) {
      if (n.alive) {
        sum++;
      }
    }
    return sum;
  }

  // checkSwap()
  // check if the nodes should swap
  // use countLivingNeighbors() to determine wether the square should be
  // swapped or not.
  // TODO currently only for square boards
  var checkSwap = function() {

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

  // doSwap()
  // swap alive to dead and dead to alive if marked to change.
  var doSwap = function() {
    if(this.swap) {
      this.alive = !this.alive;
      this.swap = false;
    }
  }
}

}
