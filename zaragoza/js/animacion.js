/* Animaciones con Lazypainter
========================================================================== */

//Animacion del logo de Zaragoza en Común

function animacionLogo() {
    var svgData = {
        "logo-zec": {
            "strokepath": [{
                    "path": "M37.2,2.5C17,9.3,2.5,28.4,2.5,50.8c0,28.2,22.8,51,51,51s51-22.8,51-51c0-8.3-2-16.1-5.5-23.1",
                    "duration": 1000,
                    "strokeColor": '#fff',
                    "strokeWidth": 5
                }, {
                    "path": "M26.6,48.1c-1.1,11.4,5,22.8,16,27.8C56.4,82.2,72.7,76,79,62.2c6.3-13.9,0.2-30.2-13.7-36.5c-4.1-1.8-8.4-2.6-12.6-2.4",
                    "duration": 1000,
                    "strokeColor": '#fff',
                    "strokeWidth": 5
                }, {
                    "path": "M23.1,34.7 c-7,12.9-5.5,29.4,5.1,40.7c13.2,14.3,35.5,15.1,49.7,1.9C92.1,64.1,93,41.8,79.8,27.6c-3.9-4.2-8.6-7.2-13.6-9.1",
                    "duration": 1000,
                    "strokeColor": '#fff',
                    "strokeWidth": 5
                }, {
                    "path": "M26,17.9 c-13.7,11.6-19.1,31-12.1,48.6c8.8,22,33.7,32.7,55.7,23.9s32.8-33.7,24-55.7c-2.6-6.5-6.6-12-11.5-16.3",
                    "duration": 1000,
                    "strokeColor": '#fff',
                    "strokeWidth": 5
                }, {
                    "path": "M43,66.9c-0.8,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.3-0.9-2.2v-0.1c0-1.2,0.4-2.3,1.3-3.2l16.4-19h-14c-0.8,0-1.6-0.3-2.2-0.9 c-0.6-0.6-0.9-1.3-0.9-2.1c0-0.8,0.3-1.6,0.9-2.2c0.6-0.6,1.3-0.9,2.2-0.9h20.2c0.8,0,1.6,0.3,2.2,0.9c0.6,0.6,0.9,1.3,0.9,2.2v0.1 c0,1.1-0.4,2.2-1.3,3.2l-16.4,19h14.6c0.8,0,1.6,0.3,2.2,0.9c0.6,0.6,0.9,1.3,0.9,2.2c0,0.8-0.3,1.6-0.9,2.1 c-0.6,0.6-1.3,0.9-2.2,0.9H43z",
                    "duration": 100,
                    "strokeColor": '#fff',
                    "strokeWidth": 1
                }

            ],
            "dimensions": {
                "width": 150,
                "height": 150
            }
        }
    }

    $(document).ready(function() {
        $('#logo-zec').lazylinepainter({
            'svgData': svgData,
            'strokeWidth': 7,
            'strokeColor': '#fff',
            'drawSequential': true,
            'onStart': function() {
                $('path:last-child').css({"fill": "#fff", "fill-opacity": "1"});
            }
        }).lazylinepainter('paint');
    });
}

//Animacion del logo de Sanidad con la librería Lazypainter

function animacionSanidad() {
    var svgData = {
        "sanidad": {
            "strokepath": [{
                    "path": "M207,149.1h-29l-13-92l-26,210l-23-118H98l-18,70.5l-14-70.5H0",
                    "duration": 1000,
                    "strokeColor": '#FF4136',
                    "strokeWidth": 10
                }

            ],
            "dimensions": {
                "width": 350,
                "height": 300
            }
        }
    }

    $(document).ready(function() {
        $('#sanidad').lazylinepainter({
            'svgData': svgData,
            'strokeWidth': 10,
            'strokeColor': '#FF4136',
            'drawSequential': false,
            'onComplete': function() {
                $('#sanidad')
                    .delay(2300)
                    .queue(function(next) {
                        $(this).hide();
                        next();
                    });
            }
        }).lazylinepainter('paint');

    });
}


/* Animacion principal con VelocityJS y BlastJS
========================================================================== */

//Funciones creadas para la animación del texto con BlastJS

$.fn.animacion = function() {
    $(this)
        .css({
            display: "block"
        })
        .blast({
            delimiter: "character"
        })
        .velocity("transition.slideDownIn", {
            stagger: 70,
            drag: true,
            duration: 2000
        })
        .velocity({
            opacity: 0
        }, {
            duration: 20
        });
}

$.fn.animacionfinal = function() {
    $(this)
        .css({
            display: "block"
        })
        .blast({
            delimiter: "character"
        })
        .velocity("transition.slideDownIn", {
            stagger: 70,
            drag: true,
            duration: 2000
        })
}

//Animaciones de los line de SVG con VelocityJS

$("#uno").delay(200)
    .velocity({
        y2: 600
    }, {
        duration: 1500,
        easing: "spring"
    })
    .delay(150)
    .velocity({
        strokeWidth: 1500,
        complete: function() {
            $(function() {
                $("#unotexto").animacion();
                $('#marea')
                  .delay(1000)
                  .queue(function (next) {
                    $(this).show();
                    next();
                  });
                $('#marea')
                  .delay(2000)
                  .queue(function (next) {
                    $(this).hide();
                    next();
                  });
            });
        }
    });

$("#dos")
    .delay(4500)
    .velocity({
        x2: 0
    }, {
        duration: 1500,
        easing: "swing"
    })
    .delay(50)
    .velocity({
        strokeWidth: 1500,
        complete: function() {
            $(function() {
                $("#dostexto").animacion();
                $('#pah')
                  .delay(1000)
                  .queue(function (next) {
                    $(this).show();
                    next();
                  });
                $('#pah')
                  .delay(2500)
                  .queue(function (next) {
                    $(this).hide();
                    next();
                  });
            });
        }
    });

$("#tres")
    .delay(10000)
    .velocity({
        x2: 1200,
        y2: 600
    }, {
        duration: 1500,
        easing: "spring"
    })
    .delay(50)
    .velocity({
        strokeWidth: 1500,
        complete: function() {
            $(function() {
                $("#trestexto").animacion();
                animacionSanidad();
            });
        }
    });

$("#cuatro")
    .delay(16000)
    .velocity({
        x2: 1200,
        y2: 0
    }, {
        duration: 1500,
        easing: "swing"
    })
    .delay(50)
    .velocity({
        strokeWidth: 1500,
        complete: function() {
            $(function() {
                $("#cuatrotexto").animacion();
                $("html").addClass("background");
                $('#naranja')
                  .delay(1000)
                  .queue(function (next) {
                    $(this).show();
                    next();
                  });
                $('#naranja')
                  .delay(2500)
                  .queue(function (next) {
                    $(this).hide();
                    next();
                  });
            });

        }
    });

$("#cinco")
    .delay(20000)
    .velocity({
        x2: 0,
        y2: 600
    }, {
        duration: 2500,
        easing: "spring"
    })
    .delay(50)
    .velocity({
        strokeWidth: 1500,
        complete: function() {
            $(function() {
                $("#textofinal").animacionfinal();
                $("#cinco, #cuatro, #tres, #dos, #uno").delay(2000).velocity({
                    opacity: 0
                }, {
                    duration: 1000,
                    easing: "spring"
                });
                $('#twittear')
                  .delay(2500)
                  .queue(function (next) {
                    $(this).show().css("display", "block");
                    next();
                  });
                animacionLogo();
            });

        }
    });