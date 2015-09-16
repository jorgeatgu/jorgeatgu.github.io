/* Animacion para el artículo de "Animando SVG con VelocityJS" por Jorge Aznar :) http://jorgeatgu.com
========================================================================== */


//Variables para cada línea. Y variables con el conjunto de todas las lineas

var primera = $("#primera");
var segunda = $("#segunda");
var tercera = $("#tercera");
var cuarta = $("#cuarta");

var grupoLineas = primera.add(segunda).add(tercera).add(cuarta);

//Variables para los divs que van a ser animados con los eventos de hover y click

var contenedor = $("#contenedor-logo");
var botonLogo = $(".logo-boton");
var logo = $("#logo");

//Funciones

function animancionLineas(){
    $(primera).delay(200)
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
                $(segunda)
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
                            $(tercera)
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
                                        $(cuarta)
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
                                                    $(contenedor)
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


function botonHover() {
    $(botonLogo).hover(function() {
        $(logo).velocity({
            rotateZ: 360,
            scale: 1.5
        }, {
            duration: 1000,
            loop: 1
        })
    });
}

function botonClick() {
    $(botonLogo).click(function(){
        $(grupoLineas).velocity({
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
        $(contenedor).delay(1500)
        .velocity({
            scale: 0
        }, {
            duration: 500,
            easing: "spring"
        });
    });
}

//Fire!!

$(document).ready(function() {
    animancionLineas();
    botonHover();
    botonClick();
});






