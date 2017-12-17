
var grid_of_life = [];

for (var index = 0; index < 20; index++) {
  grid_of_life[index] = new Array(20);
  
  for (var index2 = 0; index2 < 20; index2++) {
    grid_of_life[index][index2]= Math.random() >= 0.5;
    
  } 
}

setInterval(function() {
  process.stdout.write('\033c');
  draw();
  run();
}, 1000);

function run() {
  for (var x = 0; x < grid_of_life.length; x++) {
    for (var y = 0; y < grid_of_life[x].length; y++) {
      evaluate(x, y);
    }
  }
}

function draw() {
   for (var x = 0; x < grid_of_life.length; x++) {
    for (var y = 0; y < grid_of_life[x].length; y++) {
      var cell = grid_of_life[x][y];
      
      if (cell) { process.stdout.write("*"); }
      else { process.stdout.write(" ");}
    }
    process.stdout.write("\n");
  }
}

function evaluate(x,y) {
  var cell = grid_of_life[x][y];
  
  var alive=0, dead=0;
  for (var x1 = x-1; x1 <=x+1; x1++){
    for (var y1 = y-1; y1 <= y+1; y1++){
      if(x1<0 || y1<0 || x1>19|| y1>19 ){
        continue;
      }else{
        if (x1 == x && y1 == y) {
          continue; 
        } else {
          var status;  
          status=grid_of_life[x1][y1];
          if (status){
            alive++;
          }
          else{
            dead++;
          }
        }
      }
    }
  }
  
  if (cell) {
    if (alive < 2) {
      grid_of_life[x][y] = false;
    } else if (alive == 2 || alive == 3) {
      grid_of_life[x][y] = true;
    } else if (alive > 3) {
      grid_of_life[x][y] = false;
    }
  } else {
    if(alive == 3) {
      grid_of_life[x][y] = true;
    } else {
      grid_of_life[x][y] = false;
    }
  }
}
