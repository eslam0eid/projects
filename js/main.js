$(document).ready(function ($) {
    "use strict";




    $('#slider-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav:true,
        navText:['<p>Next</p>','<p>Prev</p>'],
        responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1170: {
                        items: 1
                    }
                }
    })

 


    var UpperOffset = $("#upper").offset().top;



    $(window).scroll(function () {

        var wScroll = $(window).scrollTop();

        if (wScroll > UpperOffset) {
            $("#upper").slideUp()
            $(".navbar-expand-lg").css("backgroundColor", "rgb(8, 31, 62)");
            $(".navbar-expand-lg").css("top", "-8%");
            $(".navbar-expand-lg").css("height", "75");
            
            
        } else {
            $(".navbar").css("backgroundColor", "rgba(0, 108, 255, 0.5)");
            $("#upper").slideDown()
            $(".navbar-expand-lg").css("top", "0");
            $(".navbar-expand-lg").css("height", "95");
        }





    })



   






    //click on button to top
    $("#button-top .btn").click(function () {
        $("body ,html").animate({
            scrollTop: 0
        }, 1000)
    })






    // // show message when input is empty

    // $('[required]').blur(function () {

    //     if ($(this).val() == '') {
    //         $(this).next("span").fadeIn(1000);
    //         $(this).css("border", "1px solid #f00")
    //     } else {
    //         $(this).next("span").fadeOut();
    //         $(this).css("border", "1px solid #ddd")

    //     }
    // })


    
    // counter plugin
    $('.counter').counterUp({
        delay: 1,
        time: 1000
    });
    



})