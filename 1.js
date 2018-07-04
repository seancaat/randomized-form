var elem = document.getElementById('1');
var params = { width: window.innerWidth, height: window.innerHeight }
var two = new Two(params).appendTo(elem);

var midX = two.width / 2;
var midY = two.height / 2;
var width = two.width;
var height = two.height;

//postion one circle somehwere ~1/3 acros the screen 
var cir1 = two.makeCircle(width*Math.random(), midY, width*0.25);
cir1.fill = 'rgb(235,49,60)';
cir1.noStroke();

var cir2 = two.makeCircle(width*Math.random(), midY*0.95, width*0.18);
cir2.fill = 'rgb(241,107,37)';
cir2.opacity = 0.75;
cir2.noStroke();

for (i = 0; i < 100; i+=25) {
  makeStripes(two, 
              width*Math.random()+i, height,
              width*Math.random() + i, 0,
              i * Math.random() / 5.5);
};

function makeStripes(two, x1, y1, x2, y2, linewidth) {
  var line = two.makeLine(x1, y1, x2, y2);
  line.linewidth = linewidth;
  line.stroke = 'rgb(72,72,72)'
  line.opacity = 0.9;
  return line;
}

two.update();





