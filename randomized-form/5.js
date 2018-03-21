var elem = document.getElementById('5');
var params = { width: window.innerWidth, height: window.innerHeight };
var two = new Two(params).appendTo(elem);

var midx = two.width / 2;
var midy = two.height / 2;
var width = two.width;
var height = two.height;

var background;
var big_circle;
var angled_rect;
var offset_circle;
var affixed_circle;
var center_circle;
var quadrant_rect;
var center_rect;
var center_square;
var root_radius = 0;
var container;

var affixed_radius;
var offset_radius;
var center_square_radius;
var center_rect_length;
var quadrant_rect_radius;
var affixed_angle = 0;
var orbit; 
var orbits;
var affixed_orbit;

var cr_offset;
var cc_offset;

// harmony of difference
// certain probabilities, compositions, restraints lead to harmonic compositions
// inspired by the paintings of paintings of chung eun mo
// collage art of takeshi one
// svg background image?

$("#5").ready(draw());
$("#5").ready(go());

$("#5").click(function() {
  two.remove(angled_rect,
             offset_circle,
             affixed_circle,         
             center_circle, 
             quadrant_rect,                
             center_rect, 
             center_square);
  TWEEN.removeAll();
  draw();
  go();
});

function draw() {
  background = two.makeRectangle(midx, midy, width, height);
  background.noStroke();
  background.name = 'background';
  container = two.makeGroup(background);


  //var root_radius = width * 0.27;

  // root_radius = 0;
  // mobile responsive
  if (window.innerWidth < 500) {
    root_radius = height / 2.6;
  } else {
    root_radius = width * 0.27;
  }

  affixed_radius = root_radius * 0.57;
  offset_radius = root_radius * 0.74;
  center_square_radius = 2 * root_radius * 0.26;
  center_rect_length = center_square_radius * 1.4;
  quadrant_rect_radius = 2 * root_radius * 0.575;
  affixed_angle = 0;
  orbit = root_radius - affixed_radius;
  orbits = two.makeGroup();
  affixed_orbit = two.makeCircle(midx, midy, orbit);
  orbits.add(affixed_orbit);
  orbits.visible = false;

  cr_offset = (center_rect_length - center_square_radius);
  if (Math.random() >= 0.5) {
    cr_offset *= -1;
  }

  cc_offset = center_square_radius/2;
  if (Math.random() >= 0.5) {
    cc_offset *= -1;
  }

  big_circle = two.makeCircle(midx, midy, root_radius);
  big_circle.noFill();


  // SHAPES
  center_square = two.makeRectangle(midx, midy, 
                                        center_square_radius, center_square_radius);
  center_rect = two.makeRectangle(midx, midy + cr_offset, 
                                      center_square_radius, center_square_radius);
  center_circle = two.makeCircle(midx + cc_offset, midy, 
                                     cc_offset);

  //bass
  affixed_circle = two.makeCircle(midx, midy, affixed_radius);
  affixed_angle = Math.random() * 1000;
  pos = getPositions(affixed_angle, orbit);
  affixed_circle.translation.set(midx + pos.x, midy + pos.y);

  //drums
  angled_rect = two.makeRectangle(0, 0, quadrant_rect_radius*1.4, width*2);
  pos = getPositions(affixed_angle, root_radius);
  angled_rect.translation.set(midx + pos.x, midy + pos.y);
  angled_rect.rotation += affixed_angle;

  offset_circle = two.makeCircle(midx, midy, offset_radius);
  offset_move = Math.random() + 0.5;
  offset_circle.translation.set(affixed_circle.translation.x * offset_move,
                                affixed_circle.translation.y * offset_move);


  qr_offset = randomize_vector_flip(midx * 0.45, midy * 0.54);
  quadrant_rect = two.makeRectangle(midx + qr_offset.x, midy + qr_offset.y, 
                                        quadrant_rect_radius, quadrant_rect_radius);

  // LAYERS
  container.add(angled_rect,
                offset_circle,
                affixed_circle,         
                center_circle, 
                quadrant_rect,                
                center_rect, 
                center_square);
  container.linewidth = 0;
  container.mask = big_circle;



  // STYLES
  background.fill = '#96ccff';
  center_square.fill = "#ff725c";
  center_rect.fill = "#555555";
  center_circle.fill = "#ffb700";
  center_circle.opacity = 0.6;
  affixed_circle.fill = "#fbf1a9";

  angled_rect.fill = "#ffa3d7";
  quadrant_rect.fill = "#9eebcf";
  offset_circle.fill = "#a463f2";


  // REPOSITION
  center_circle.rotation = 10 * Math.random();

  center_circle.translation.set(midx, midy);
  center_rect.translation.set(midx, midy);

  center_square.scale = 0;
  center_rect.scale = 0;
  center_circle.scale = 0;

  offset_circle.scale = 0;
  affixed_circle.scale = 0;

  angled_rect.scale = 0;

  if(quadrant_rect.translation.y < midy) {
    quadrant_rect.translation.set(midx + qr_offset.x, 0 -  2 * quadrant_rect_radius);
  } else {
    quadrant_rect.translation.set(midx + qr_offset.x, height + 2 * quadrant_rect_radius);
  }
}

function go() {
  var oc_tween = new TWEEN.Tween(offset_circle)
              .to({ scale: 1 }, 400)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();

  var ac_tween = new TWEEN.Tween(affixed_circle)
              .to({ scale: 1 }, 500)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();


  var ar_tween = new TWEEN.Tween(angled_rect)
              .to({ scale: 1 }, 500)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();

  var qr_tween = new TWEEN.Tween(quadrant_rect.translation)
              .to({x: midx + qr_offset.x, y: midy + qr_offset.y}, 300)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();
  
  var cs_tween = new TWEEN.Tween(center_square)
            .to({scale: 1, rotation: Math.PI}, 200)
            .easing(TWEEN.Easing.Exponential.Out)
            .start();

  cs_tween.onComplete(function (object) {

    var cr_tween2 = new TWEEN.Tween(center_rect)
              .to({scale: 1}, 1)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();

    var cc_tween = new TWEEN.Tween(center_circle.translation)
              .to({ x: midx + cc_offset}, 100)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();

    var cc_tween = new TWEEN.Tween(center_circle)
              .to({ scale: 1 }, 100)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();
    
    var cr_tween = new TWEEN.Tween(center_rect.translation)
              .to({y: midy + cr_offset }, 350)
              .easing(TWEEN.Easing.Exponential.Out)
              .start();
  });
  
  animate();
  
  function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
      two.update();
  }
  
}


// HELPERS 

function getPositions(angle, orbit) {
    return {
        x: Math.cos(angle * Math.PI / 180) * orbit,
        y: Math.sin(angle * Math.PI / 180) * orbit
    };
}

function randomize_vector_flip(x, y) {
  var r = Math.random();
  if (r <= 0.33) {
    return {
      x: -1 * x,
      y: y
    }    
  } else if (r >= 0.33 && r <= 0.66) {
    return {
      x: x,
      y: -1*y
    }
  } else {
    return {
      x: -1 * x,
      y: -1 * y
    } 
  }
}

two.update();