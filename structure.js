function even(x) {
  return x%2
}

function create(name, i, j) {
    switch (name) {
      case "2cell":
        grid[i][j].alive = true;
        grid[i+1][j+i%2].alive = true;
        break;
      case "Spinner":
        grid[i][j].alive = true;
        grid[i+1][j+i%2].alive = true;
        grid[i+2][j].alive = true;
        break;
      case "Mouth":
        grid[i][j].alive = true;
        grid[i][j+2].alive = true;
        grid[i+2][j+1].alive = true;
        break;
      case "Needle":

        break;
      case "Dancer":

        break;
      case "Star":

        break;
      case "Rotator":

        break;
      case "Bat":

        break;
      case "Snake":

        break;
      case "Morpher":

        break;
      case "Tristar":

        break;
      case "Swimmer":

        break;
      default:

    }
}
