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
                $("#dos")
                    .delay(1000)
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
                                $("#tres")
                                    .delay(1000)
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
                                                $("#cuatro")
                                                    .delay(1000)
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
                                                                $("#cinco")
                                                                    .delay(2000)
                                                                    .velocity({
                                                                        x2: 0,
                                                                        y2: 600
                                                                    }, {
                                                                        duration: 1500,
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
