$(document).ready(function() {

	var $images = $('svg');

	$images.velocity({ scale: 2 },{
      duration: 1000,
      loop: 1,
      easing: "spring"
    });

	$('button').click(function(){
	    $("#segunda-imagen,#tercera-imagen,#cuarta-imagen,#quinta-imagen,#sexta-imagen")
	      .delay(199)
	      .velocity({ scale: 0}, { duration: 500, easing: "easeInCirc"})
      $("#primera-imagen")
        .delay(400)
        .velocity({scale: 2, translateX: "100px"}, { duration: 2000, easing: [ 400, 20 ]})
       $('#primer-texto')
       	.delay(600)
       	.velocity({translateX: "600px", translateY: "-180px", opacity: "1"}, { duration:1000, easing: "spring"})
	});
});