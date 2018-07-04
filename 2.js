var elem = document.getElementById('2');
var params = { width: window.innerWidth, height: window.innerHeight }
var two = new Two(params).appendTo(elem);

var midX = two.width / 2;
var midY = two.height / 2;
var width = two.width;
var height = two.height;

//pad the centers of rectangles s.t. they never fall off the page

var grass_pos_x = 0.85*midX*Math.random();
var grass_pos_y = 0.85*midY*Math.random();
var water_pos_x = 0.85*grass_pos_x + 100*Math.random();
var water_pos_y = 0.85*grass_pos_y;

var land1_pos_x = 0.85*midX*(1+Math.random());
var land1_pos_y = 0.85*midY*(1+Math.random());
var land2_pos_x = 0.85*land1_pos_x + 100*Math.random();
var land2_pos_y = 0.85*land1_pos_y;

var grass_rotation = Math.PI*Math.random();
var water_rotation = grass_rotation*0.7;

var land1_rotation = Math.PI*Math.random();
var land2_rotation = land1_rotation*0.95;

var rec1 = two.makeRectangle(
  grass_pos_x,
  grass_pos_y,
  two.width*0.4,
  two.width*0.02);
rec1.fill = 'rgb(4,138,88)';
rec1.noStroke();
rec1.rotation = grass_rotation;

var rec2 = two.makeRectangle(
  water_pos_x,
  water_pos_y,
  two.width*0.4, 
  two.width*0.02);
rec2.fill = 'rgb(131,159,225)';
rec2.noStroke();
rec2.rotation = water_rotation;

var rec3 = two.makeRectangle(
  land1_pos_x,
  land1_pos_y,
  two.width*0.4,
  two.width*0.02);
rec3.fill = 'rgb(212,147,128)';
rec3.noStroke();
rec3.rotation = land1_rotation;

var rec4 = two.makeRectangle(
  land2_pos_x,
  land2_pos_y,
  two.width*0.4, 
  two.width*0.02);
rec4.fill = 'rgb(240,217,202)';
rec4.noStroke();
rec4.rotation = land2_rotation;


var small_rec1 = two.makeRectangle(
  0,
  0,
  two.width*0.11,
  two.width*0.01);
var small_rec2 = two.makeRectangle(
  0,
  0,
  two.width*0.11,
  two.width*0.01);
var small_rec3 = two.makeRectangle(
  0,
  0,
  two.width*0.11,
  two.width*0.01);

var life = two.makeGroup(rec1, rec2);
var land = two.makeGroup(rec3, rec4);
var boards = two.makeGroup(small_rec1, small_rec2, small_rec3);

boards.fill = 'rgb(221,161,142)';
boards.noStroke();
boards.translation.set(Math.random()*midX, (1+Math.random())*midY);

small_rec2.translation.set(two.width*0.09, two.width*0.03);
small_rec3.translation.set(two.width*-0.05, two.width*0.06);

board1_rotation = Math.PI*Math.random();

small_rec1.rotation = board1_rotation;
small_rec2.rotation = 1.5*board1_rotation;
small_rec3.rotation = 0.7*board1_rotation;

var all = two.makeGroup(life, land, boards);
all.scale = 0.9;

//boards.translation.set()
//euclidean 

// make the boards then move them in a loop?

//for(i = 0; i < 3; i++) {
//  var i_x_multiplier = -40;
//  if (i % 2 == 0) {
//    i_x_multiplier = i_x_multiplier * -1;
//  }
//  two.makeRectangle(
//    //make these randoms the same random
//    //if i odd, then i multiplier in x direciton should be negative
//    boards_pos_x + i_x_multiplier*i,
//    boards_pos_y + 70*i,
//    two.width*0.11,
//    two.width*0.01);
//}


//put smaller rects at mid point between two groups +/- a certain random vector


//group rec1, rec2 
//group rec3, rec4

  
two.update();