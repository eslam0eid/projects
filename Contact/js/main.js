$(document).ready(function ($) {
    "use strict";






    var UpperOffset = $("#upper").offset().top;



    $(window).scroll(function () {

        var wScroll = $(window).scrollTop();

        if (wScroll > UpperOffset) {
            $("#upper").slideUp(500)
            $(".navbar-expand-lg").css("backgroundColor", "rgb(8, 31, 62)");
            $(".navbar-expand-lg").css("top", "-8%");
            $(".navbar-expand-lg").css("height", "75");
            
            
        } else {
            $(".navbar").css("backgroundColor", "rgba(0, 108, 255, 0.5)");
            $("#upper").slideDown(500)
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


  



})