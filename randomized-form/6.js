var elem = document.getElementById('6');
var params = { width: window.innerWidth, height: window.innerHeight };
var two = new Two(params).appendTo(elem);

var mid = {x: two.width / 2, y: two.height / 2};
var width = two.width;
var height = two.height;

var styles = {
  family: 'proxima-nova, sans-serif',
  size: 80,
  fill: 'transparent',
  stroke: 'black',
  leading: 50,
  weight: 900
};


var text = two.makeText('fuck it.', mid.x, mid.y, styles);

//$("#6").click(function() {
//  console.log('clicked');
//  var tween = new TWEEN.Tween(text)
//                  .to({rotation: Math.PI}, 300)
//                  .easing(TWEEN.Easing.Exponential.Out)
//                  .start();
//  
//  animate();
//  
//  tween.onUpdate(function(object) {
//	console.log(object.rotation);
//  });
//  
//  function animate() {
//    requestAnimationFrame(animate);
//    TWEEN.update();
//    two.update();
//  }
//});



two.update();