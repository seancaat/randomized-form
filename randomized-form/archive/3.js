var elem = document.getElementById('3');
var params = { width: window.innerWidth, height: window.innerHeight }
var two = new Two(params).appendTo(elem);

var midx = two.width / 2;
var midy = two.height / 2;
var width = two.width;
var height = two.height;

// how to loop colors?
// concatenate digits to a hexidecimal color maybe?

// add gradient, animation

// create array of colors
// each circle is random selection of a color in the array

var colors = [
  'rgb(236,112,99)',
  'rgb(155,96,52)',
  'rgb(245,189,75)',
  'rgb(231,231,130)',
  'rgb(234,240,183)',
  'rgb(173,213,167)',
  'rgb(106,183,128)',
  'rgb(109,191,137)',
  'rgb(34,95,62)',
  'rgb(124,199,177)',
  'rgb(106,188,204)',
  'rgb(131,207,240)',
  'rgb(184,209,236)',
  'rgb(62,88,167)',
  'rgb(212,175,207)',
  'rgb(245,219,234)',
  'rgb(250,190,208)',
  'rgb(245,287,203)',
  'rgb(211,3,34)',
  'rgb(0,0,0)',
  'rgb(90,86,88)',
  'rgb(113,113,113)',
  'rgb(202,202,202)',
]

// click tween the scale smaller, border thicker. change color to next random


var strand = two.makeGroup();

var stroke = 'white';

var dots = [];
var radius = 5;
var strokeLength = 30;

for (i = 0;  i < strokeLength; i++) {
  var x = 28*i;
  var y = height - 1000/(i*0.26);
  var dot = two.makeCircle(x, y, radius);
  dot.fill = colors[Math.floor(Math.random() * colors.length)];
  dot.stroke = stroke;
  dot.linewidth = 5;
  dots.push(dot);
  radius += 0.05*Math.pow(i, 1.60);  
}

strand.add(dots);
strand.translation.set(midx, midy);
//strand.rotation = Math.PI/2-0.2;
strand.scale = 0.25;

var strands = [];
var rotation = strand.rotation;
var num_strands = 94;
var group = two.makeGroup();

for (i = 0; i < num_strands; i++) {
  var strandN = strand.clone();
  strandN.rotation = rotation - 0.2*i;
  strands.push(strandN);
  group.add(strandN);
}

two.update();