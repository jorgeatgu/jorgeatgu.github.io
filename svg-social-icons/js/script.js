$(document).ready(function() {

	var $images = $('svg');
	var $primerboton = $('#primer-boton');
	var $segundoboton = $('#segundo-boton');
	var $tercerboton = $('#tercer-boton');
	var $cuartoboton = $('#cuarto-boton');
	var $quintoboton = $('#quinto-boton');
	var $sextoboton = $('#sexto-boton');

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

	$('#segundo-boton').click(function(){
	    $("#primera-imagen,#tercera-imagen,#cuarta-imagen,#quinta-imagen,#sexta-imagen")
	      .delay(199)
	      .velocity({ scale: 0}, { duration: 500, easing: "easeInCirc"})
      $("#segunda-imagen")
        .delay(400)
        .velocity({scale: 2, translateX: "-20px"}, { duration: 2000, easing: [ 400, 20 ]})
       $('#primer-texto')
       	.delay(600)
       	.velocity({translateX: "600px", translateY: "-180px", opacity: "1"}, { duration:1000, easing: "spring"})
	});
});
