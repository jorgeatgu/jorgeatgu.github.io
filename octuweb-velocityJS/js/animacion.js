/* Animacion para el artículo de "Animando SVG con VelocityJS" por Jorge Aznar :) http://jorgeatgu.com
========================================================================== */

$("#primera").delay(200)
    .velocity({
        y2: 600
    }, {
        duration: 1000,
        easing: "spring"
    })
    .delay(150)
    .velocity({
        strokeWidth: 1500,
        complete: function() {
            $("#segunda")
                .delay(200)
                .velocity({
                    x2: 0
                }, {
                    duration: 1000,
                    easing: "swing"
                })
                .delay(50)
                .velocity({
                    strokeWidth: 1500,
                    complete: function() {
                        $("#tercera")
                            .delay(200)
                            .velocity({
                                x2: 1200,
                                y2: 600
                            }, {
                                duration: 1000,
                                easing: "spring"
                            })
                            .delay(50)
                            .velocity({
                                strokeWidth: 1500,
                                complete: function() {
                                    $("#cuarta")
                                        .delay(200)
                                        .velocity({
                                            x2: 1200,
                                            y2: 0
                                        }, {
                                            duration: 1000,
                                            easing: "swing"
                                        })
                                        .delay(50)
                                        .velocity({
                                            strokeWidth: 1500,
                                            complete: function() {
                                                $("#contenedor-logo")
                                                    .show(300)
                                            }
                                        });
                                }
                            });
                    }
                });
        }
    });

$(".logo-boton").hover(function() {
    $("#logo").velocity({
        rotateZ: 360,
        scale: 1.5
    }, {
        loop: 1
    })
});

$(".logo-boton").click(function(){
    $("#cuarta, #tercera, #segunda, #primera").velocity({
        strokeWidth: 1,
        x2: 0
    }, {
        duration: 750
    })
    .delay(25)
    .velocity({
        y2:0,
        x1:0
    }, {
        duration: 500
    });
    $("#contenedor-logo").delay(1500)
    .velocity({
        scale: 0
    }, {
        duration: 500,
        easing: "spring"
    });
});
