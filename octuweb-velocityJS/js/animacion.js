/* Animacion para el artículo de "Animando SVG con VelocityJS" por Jorge Aznar :) http://jorgeatgu.com
========================================================================== */

$("#uno").delay(200)
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
            $("#dos")
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
                        $("#tres")
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
                                    $("#cuatro")
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
                                                $("#cinco")
                                                    .delay(200)
                                                    .velocity({
                                                        x2: 0,
                                                        y2: 600
                                                    }, {
                                                        duration: 1000,
                                                        easing: "spring"
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
        }
    });

$(".logo-boton").click(function() {
    $("#logo").velocity({
        rotateZ: 360
    }, {
        loop: 2
    });
    $("#letras").hide();
});

$(".logo-boton").hover(function() {
    $("#logo").velocity({
        scale: 1.5
    }, {
        loop: 1
    });
});

