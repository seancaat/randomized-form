var elem = document.getElementById('3');
var params = { width: window.innerWidth, height: window.innerHeight }
var two = new Two(params).appendTo(elem);

var midx = two.width / 2;
var midy = two.height / 2;
var width = two.width;
var height = two.height;

// grow / shrink on alternate clicks, setting new colors each time
// need variable to track the state

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
  'rgb(90,86,88)',
  'rgb(113,113,113)',
  'rgb(202,202,202)',
  ];

  var dots = [];

  var radius = 5;
  var strandLength = 16;
  var dot = two.makeCircle(midx, midy, radius);
  dot.opacity = 0;

//function go_three(event) {
  
  var whole = two.makeGroup(); 

  for(i = 0; i < strandLength; i++){
    var cir = dot.clone();
    dots.push(cir);
  }

  // random walk
  // closed curve with a random amount of anchors?
  // dynamic vertices?
  //infinite tween?

  for(i = 0; i < dots.length; i++) {
    var rand_rad = 350 * Math.random();
    var orb = two.makeCircle(midx, midy, rand_rad);
    orb.fill = colors[Math.floor(Math.random() * colors.length)];
    orb.opacity = 0.25;
    orb.noStroke();
    whole.add(orb);
  }
  
  two.update();

//}



