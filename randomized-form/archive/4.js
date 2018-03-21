var elem = document.getElementById('4');
var params = { width: window.innerWidth, height: window.innerHeight }
var two = new Two(params).appendTo(elem);

var midx = two.width / 2;
var midy = two.height / 2;
var width = two.width;
var height = two.height;


var stroke = 'white';
var linewidth = 0.5;
var pad_factor = 4;

// abc, 123
// 1234 snoop doggy dogg and dr dre is at the door
// pair with instrumental of song, ig paragraph
// on some multiples of i, make color stroke different
// pluck strings like guitar when mouse over??
//

var line1_vert = two.makeLine(midx*0.5+100,
                               0.5*midy,
                               midx*0.5+100,
                               1.5*midy);
  line1_vert.stroke = stroke;
//  line1_vert. linewidth = linewidth;


for(i = 0; i<20; i++) {
  var line1_ex = two.makeLine(midX*0.5-60,
                             0.5*midy-100+4*i,
                             midX*0.5-0.5,
                             0.5*midy-100+4*i);
  
  var arc1 = two.makeArcSegment(midx*0.5, 
                               0.5*midy+4*i, 
                               100, 100.5, 
                               2*Math.PI, Math.PI*3/2);
  
  var line1_horiz = two.makeLine(midx*0.5-60,
                                1.5*midy-78+4*i,
                                midx*0.5+200,
                                1.5*midy-78+4*i);
  line1_ex.stroke = stroke;
  line1_ex.linewidth = linewidth;
  line1_horiz.stroke = stroke;
  line1_horiz.linewidth = linewidth;
  arc1.fill = stroke;
  arc1.noStroke();
  
  
}

for(i = 0; i<1; i++) {
  // on some multiples of i, make color stroke different
  var arc2 = two.makeArcSegment(midx, 0.5 * midy + 4*i, 
                                100, 100.5, 
                                2*Math.PI, Math.PI);
  arc2.fill = stroke;
  arc2.noStroke();
  
  var p1 = new Two.Anchor(midx + 100, 0.5 * midy, Two.Commands.curve);
  var p2 = new Two.Anchor(midx, midy, 
                          midx - 00, midy - 20,
                          midx + 200, midy + 20,
                          Two.Commands.curve);
  var p3 = new Two.Anchor(midx - 100, 1.5 * midy - 78, Two.Commands.curve);
  
  var curve2 = two.makeCurve([
    new Two.Anchor(midx + 100, 0.5 * midy, Two.Commands.curve),
    new Two.Anchor(midx, midy, midx - 00, midy - 20, midx + 200, midy + 20, Two.Commands.curve),
    new Two.Anchor(midx - 100, 1.5 * midy - 78, Two.Commands.curve)
  ], true);
  curve2.noFill();
  
   var line2_horiz = two.makeLine(midx-100,
                                1.5*midy-78+4*i,
                                midx+100,
                                1.5*midy-78+4*i);
  line2_horiz.stroke = stroke;
  line2_horiz.linewidth = linewidth;
}



for(i = 0; i<20; i++) {
  // on some multiples of i, make color stroke different?
  var line3_horiz = two.makeLine(midx*1.5, 
                                 0.5*midy+4*i, 
                                 midx*1.5+200,
                                 0.5*midy+4*i);
  var line3_diag = two.makeLine(midx*1.5+200, 
                                0.5*midy+4*i, 
                                midx*1.5+100, 
                                0.5*midy+120+4*i);
  
  var arc3 = two.makeArcSegment(midx*1.5 + 100, 
                                0.5*midy + 120 + 4*i + 100, 
                                100, 100+linewidth, 
                                Math.PI/2, Math.PI * 2);
  
  line3_horiz.stroke = stroke;
  line3_horiz.linewidth = linewidth;
  line3_diag.stroke = stroke;
  line3_diag.linewidth = linewidth;
  arc3.fill = stroke;
  arc3.rotation = Math.PI; 
  arc3.noStroke();
}



two.update();