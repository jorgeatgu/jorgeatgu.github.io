        function animacionLogo(){
            var svgData = {
                "logo-zec" :
                {
                    "strokepath" :
                    [
                        {   "path": "M70.9,29.8 c-20.2,6.8-34.7,25.9-34.7,48.3c0,28.2,22.8,51,51,51s51-22.8,51-51c0-8.3-2-16.1-5.5-23.1",
                            "duration": 1000,
                            "strokeColor": '#fff',
                            "strokeWidth": 5
                            },
                        {   "path": "M60.3,75.4 c-1.1,11.4,5,22.8,16,27.8c13.8,6.3,30.1,0.1,36.4-13.7C119,75.6,112.9,59.3,99,53c-4.1-1.8-8.4-2.6-12.6-2.4",
                            "duration":1000,
                            "strokeColor": '#fff',
                            "strokeWidth": 5
                            },
                        {   "path": "M56.8,62 c-7,12.9-5.5,29.4,5.1,40.7c13.2,14.3,35.5,15.1,49.7,1.9s15.1-35.5,1.9-49.7c-3.9-4.2-8.6-7.2-13.6-9.1",
                            "duration":1000,
                            "strokeColor": '#fff',
                            "strokeWidth": 5
                            },
                        {   "path": "M59.7,45.2 C46,56.8,40.6,76.2,47.6,93.8c8.8,22,33.7,32.7,55.7,23.9S136.1,84,127.3,62c-2.6-6.5-6.6-12-11.5-16.3",
                            "duration":1000,
                            "strokeColor": '#fff',
                            "strokeWidth": 5
                            },

                    ],
                    "dimensions" : { "width": 150, "height":150 }
                }
            }

             $(document).ready(function(){
                 $('#logo-zec').lazylinepainter({
                        'svgData' : svgData,
                        'strokeWidth':7,
                        'strokeColor':'#fff',
                        'drawSequential': true
                        }).lazylinepainter('paint');
            });
        }

        function animacionSanidad () {
            var svgData = {
                "sanidad" :
                {
                    "strokepath" :
                    [
                        {   "path": "M207,149.1h-29l-13-92l-26,210l-23-118H98l-18,70.5l-14-70.5H0",
                            "duration": 1000,
                            "strokeColor": '#FF4136',
                            "strokeWidth": 10
                            }

                    ],
                    "dimensions" : { "width": 350, "height":300 }
                }
            }

             $(document).ready(function(){
                 $('#sanidad').lazylinepainter({
                        'svgData' : svgData,
                        'strokeWidth':10,
                        'strokeColor':'#FF4136',
                        'drawSequential': false,
                        'onComplete' : function(){
                            $('#sanidad')
                                 .delay(2300)
                                 .queue( function(next){
                                   $(this).hide();
                                   next();
                                 });
                        }
                        }).lazylinepainter('paint');

            });
        }








$.fn.animacion = function(){
    $(this)
        .css({display:"block"})
        .blast({delimiter: "character"})
        .velocity("transition.slideDownIn", { stagger: 70, drag: true, duration: 2000})
        .velocity({ opacity:0}, {duration: 20});
}

$.fn.animacionfinal = function(){
    $(this)
        .css({display:"block"})
        .blast({delimiter: "character"})
        .velocity("transition.slideDownIn", { stagger: 70, drag: true, duration: 2000})
}

$("#uno").delay(200)
    .velocity({y2: 600},{duration:1500,easing: "spring"})
    .delay(150)
    .velocity(
    {
        strokeWidth:1500,
        complete: function() {
           $(function(){
            $("#unotexto").animacion();
            $("html").addClass("background");
           });

        }
    }
    );

$("#dos")
    .delay(4500)
    .velocity({x2: 0},{duration:1500, easing: "swing"})
    .delay(50)
    .velocity(
     {
         strokeWidth:1500,
         complete: function() {
           $(function(){
            $("#dostexto").animacion();
           });

        }
     }
     );

$("#tres")
    .delay(10000)
    .velocity({x2: 1200, y2: 600},{duration:1500, easing: "spring"})
    .delay(50)
    .velocity({
         strokeWidth:1500,
         complete: function() {
           $(function(){
            $("#trestexto").animacion();
            animacionSanidad();
           });
        }
     }
     );

$("#cuatro")
    .delay(16000)
    .velocity({x2: 1200, y2: 0},{duration:1500, easing: "swing"})
    .delay(50)
    .velocity({
         strokeWidth:1500,
         complete: function() {
           $(function(){
            $("#cuatrotexto").animacion();
           });

        }
     }
     );

$("#cinco")
    .delay(20000)
    .velocity({x2: 0, y2: 600},{duration:2500, easing: "spring"})
    .delay(50)
    .velocity({
         strokeWidth:1500,
         complete: function() {
           $(function(){
            $("#textofinal").animacionfinal();
            $("#cinco, #cuatro, #tres, #dos, #uno").delay(2000).velocity({opacity: 0}, {duration: 1000, easing: "spring"});
            animacionLogo();
           });

        }
     }
     );