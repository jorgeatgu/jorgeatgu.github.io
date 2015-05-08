$(document).ready(function() {

	var $images = $('svg');

	$images.velocity({ scale: 2 },{
      duration: 1000,
      loop: 1,
      easing: "spring"
    });

	$('button').click(function(){
	    $("$images")
	      .delay(199)
	      .velocity({ scale: 0}, { duration: 500, easing: "easeInCirc"})
	});
});