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
            $(function() {
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
                            $(function() {
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
                                            $(function() {
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
                                                            $(function() {
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
                                                                    });
                                                            });
                                                        }
                                                    });
                                            });
                                        }
                                    });
                            });
                        }
                    });
            });
        }
    });
