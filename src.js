//This creates the empty grid
var grid = [];

function step() {
  for (var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
      grid[i][j].checkSwap();
      console.log(grid[i][j]);
    }
  }
  for (var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      grid[i][j].doSwap();
    }
  }
  makeBoard(grid.length);
}

// This creates the Node object.
// Properties:
//  n, int, row of the node
//  m, int, column of the node
//  isAlive, bool, whether or not it's alive
// Functions:
//  TODO add other functions
//  toString() function
function Node(row, col)
{
  this.row = row;
  this.col = col;
  this.isAlive = false;
  this.shouldSwap = false;

  // countLivingNeighbors()
  // return int number of living neighbors
  // uses listNeighbors()
  this.countLivingNeighbors = function() {
    var sum = 0;
    var neighbors = getNeighbors(this.row, this.col);
    for (var i = 0; i < neighbors.length; i++) {
      if (neighbors[i].isAlive) {
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
  this.checkSwap = function() {
    // count the number of living neighbors
    var living = this.countLivingNeighbors();

    // alive : < 3 die
    //       : 3-4 alive
    //       : > 4 die
    //
    // dead  : = 3 alive
    //       : ! 3 dead
    if(this.isAlive) {
      if(living < 3 || living > 4) {
        // this.shouldSwap = true;
      }
    }
    else {
      if (living == 3) {
        this.shouldSwap = true;
      }
    }
  }

  // doSwap()
  // swap alive to dead and dead to alive if marked to change.
  this.doSwap = function() {
    if(this.shouldSwap) {
      this.isAlive = !this.isAlive;
      this.shouldSwap = false;
    }
  }

  this.toString = function()
  {
    return "Node(" + this.row + ", " + this.col + ")";
  };
}

//This will populate the array with tiles, based on which option the user choose for the size (1 = small, 2 = medium, 3 = large)
function setSize(size)
{
  //This clears the array so this method can be run several times.
  grid = [];

  var side = 600 / (size + .5) / Math.sqrt(3);
  document.getElementById('board').height = ((side * size) + (side * size / 2)) + (side/2);

  for(var i = 0; i < size; i++)
  {
    //The individual rows will be added one at a time
    var row = [];
    for(var j = 0; j < size; j++)
    {
      //Adds a new node to the row
      var hex = new Node(i, j);
      row.push(hex);
    }
    grid.push(row);
  }
  console.log(grid);
}

function getNeighbors(row, col)
{
    var node = grid[row][col];
    var neighbors = [];

    // left
    if(col-1 >= 0)
    {
      neighbors.push(grid[row][col-1]);
    }

    // right
    if(col+1 < grid[row].length)
    {
      neighbors.push(grid[row][col+1]);
    }

    // up
    if(row-1 >= 0)
    {
      neighbors.push(grid[row-1][col]);
    }

    // down
    if(row+1 < grid.length)
    {
      neighbors.push(grid[row+1][col]);
    }

    // even row
    //  odd  0 1
    // even 0 1 2
    //  odd  0 1
    if((node.row)%2 == 0)
    {
      if(col-1 >= 0)
      {
        if(row-1 >= 0)
        {
          neighbors.push(grid[row-1][col-1]);
        }
        if(row+1 < grid.length)
        {
          neighbors.push(grid[row+1][col-1]);
        }
      }
    }
    // odd row
    // even  1 2
    //  odd 0 1 2
    // even  1 2
    else
    {
      if(col+1 < grid[row].length)
      {
        if(row-1 >= 0)
        {
          neighbors.push(grid[row-1][col+1]);
        }
        if(row+1 < grid.length)
        {
          neighbors.push(grid[row+1][col+1]);
        }
      }
    }
    return neighbors;
}
