// DETECT IF RUNNING IOS
var OS;
OS = iOS();
function iOS() {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }
  return false;
}

if (OS) {
  var everything = document.getElementById("body");
  everything.className -= "code";
  everything.className += "sans-serif";
  console.log(everything.className);
}



// SCROLL DOWN BUTTON
$('.js-scroll-to').click(function(e) {
  
	target = $($(this).attr('href'));
  
	if (target.offset()) {
		$('html, body').animate({scrollTop: target.offset().top + 'px'}, 600);
	}

	e.preventDefault();
});



$('.next').click(function(e) {

  var selected = $(".js-list-item.js-current-panel");
  var anchors = $(".js-list-item");

  var pos = anchors.index(selected);
  var next = anchors.get(pos+1);
  var prev = anchors.get(pos-1);
  
  target = $(next);
  
  $(selected).removeClass("js-current-panel");
  $(next).addClass("js-current-panel");
  
	if (target.offset()) {
		$('html, body').animate({scrollTop: target.offset().top + 'px'}, 300);
	}
 

	e.preventDefault();
});


$('.js-prev').click(function(e) {

  var selected = $(".js-list-item.js-current-panel");
  var anchors = $(".js-list-item");
  var pos = anchors.index(selected);
  var next = anchors.get(pos+1);
  var prev = anchors.get(pos-1);
  
  target = $(prev);
  
  $(selected).removeClass("js-current-panel");
  $(prev).addClass("js-current-panel");
  
  if (target.offset()) {
		$('html, body').animate({scrollTop: target.offset().top + 'px'}, 600);
	}
  
	e.preventDefault();
});


// REFRESH SECTION WHEN CLICKED

var sections = '#1, #2, #3';

$(sections).on("click", function() {
  var id = this.id;
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = id + '.js';
  this.appendChild(script);
});



// MODALS
$(document).ready(function() {
  $('#blah').addClass('hidden');
});

$( "#about-button" ).click(function() {
  $( "#about-modal" ).toggleClass("hidden", 300, "linear");
  $( "#contact-modal" ).addClass("hidden", 300, "linear");
});

$( "#contact-button" ).click(function() {
  $( "#contact-modal" ).toggleClass("hidden", 300, "linear");
  $( "#about-modal" ).addClass("hidden", 300, "linear");
});

$( "#exit-btn" ).click(function() {
  $( "#about-modal" ).addClass("hidden", 300, "linear");
  $( "#contact-modal" ).addClass("hidden", 300, "linear");
});
