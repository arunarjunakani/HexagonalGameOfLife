//This creates the empty grid
var grid = [];

//This creates the Node object. It's properties include its coordinates, and whether or not it's alive. It also has a toString() function
function Node(x, y)
{
  this.x = x;
  this.y = y;
  this.isAlive = false;
  this.toString = function()
  {
    return "Node(" + this.x + ", " + this.y + ")";
  };
}

//This will populate the array with tiles, based on which option the user choose for the size (1 = small, 2 = medium, 3 = large)
function populateArray(size)
{
  //This clears the array so this method can be run several times.
  grid = [];


  if(size == 1)
  {
    for(var i = 0; i < 5; i++)
    {
      //The individual rows will be added one at a time
      var row = [];
      if(i%2 == 0)
      {
        //If the row is even numbered, this will make 4 nodes in the row. Otherwise, it will make 5
        for(var j = 0; j < 4; j++)
        {
          //Adds a new node to the row
          var hex = new Node(i, j);
          row.push(hex);
          console.log("Even Row");
        }
      }
      else
      {
        for(var j = 0; j < 5; j++)
        {
          //Adds a new node to the row
          var hex = new Node(i, j);
          row.push(hex);
          console.log("Odd Row");
        }
      }
      grid.push(row);
    }
  }
  else if(size == 2)
  {
    for(var i = 0; i < 19; i++)
    {
      //The individual rows will be added one at a time
      var row = [];
      if(i%2 == 0)
      {
        //If the row is even numbered, this will make 4 nodes in the row. Otherwise, it will make 5
        for(var j = 0; j < 20; j++)
        {
          //Adds a new node to the row
          var hex = new Node(i, j);
          row.push(hex);
          console.log("Even Row");
        }
      }
      else
      {
        for(var j = 0; j < 21; j++)
        {
          //Adds a new node to the row
          var hex = new Node(i, j);
          row.push(hex);
          console.log("Odd Row");
        }
      }
      grid.push(row);
    }
  }
  /*
  else()
  {

  }*/
  console.log(grid);
}

function getNeighbors(i, j)
{
    var node = grid[i][j];
    var neighbors = [];
    console.log(i);
    console.log(j);
    if(j-1 >= 0)
    {
      neighbors.push(grid[i][j-1]);
    }

    if(j+1 < grid[i].length)
    {
      neighbors.push(grid[i][j+1]);
    }

    if(i-1 >= 0)
    {
      neighbors.push(grid[i-1][j]);
    }

    if(i+1 < grid.length)
    {
      neighbors.push(grid[i+1][j]);
    }

    console.log()
    if((node.x)%2 == 0)
    {
      console.log("Even row");
      if(j+1 < grid[1].length)
      {
        if(i-1 >= 0)
        {
          neighbors.push(grid[i-1][j+1]);
        }
        if(i+1 < grid.length)
        {
          neighbors.push(grid[i+1][j+1]);
        }
      }
    }
    else
    {
      console.log("Odd row");
      if(j-1 >= 0)
      {
        if(i-1 >= 0)
        {
          neighbors.push(grid[i-1][j-1]);
        }
        if(i+1 < grid.length)
        {
          neighbors.push(grid[i+1][j-1]);
        }
      }
    }
    console.log(neighbors.toString());
    return neighbors;
}
