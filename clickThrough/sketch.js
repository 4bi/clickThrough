var option = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(137, 207, 240);
  var density = map(mouseX, 0, width, 20, 50);
  
  if (option == 1) {
    // option 1 : stitches
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        line (x-15, y-125, x+10, y+5);
      }
    }
  }
  else if (option == 2) {
    // option 2 : perspectives
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        line (x, y, width/2, height/20);
      }
    }
  }
  else if (option == 3) {
    // option 3 : overlapping cirles
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        ellipse (x, y, 100, 100);
      }
    }
  }
  else if (option == 4) {
    // option 4 : rotating arcs
    var count = 0;
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        strokeWeight (count*0.1);
        rect (x, y, 20, 20);
        count++;
      }
    }
  }
  else if (option == 5) {
    // option 5 : groups of 5
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        for (var i = 0; i < 16; i+= 4) {
          line (x + i, y, x +1, y + 12);
        }
      }
    }
  }
}

function mousePressed() {
  option++;
  if (option > 5) option = 1;
}