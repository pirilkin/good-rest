$(document).ready(function () {
    //----стрелка вниз----//
    $('.arrow-down a').click(function (e) {
        e.preventDefault();
        var height = $('.menu').innerHeight();
        var down = $("#footer");

        var footer = $(down).offset().top - height;
        $('html').animate({
            scrollTop: footer

        }, 1000)
        console.log(down);
    })
    //-------------//

  
    //-----всплывающая форма------//
    $('.onClick, .btn').click(function (e) {
        e.preventDefault();
        $('.form').toggleClass('active');
    });
    $('.closeForm').click(function (e) {
        e.preventDefault();
        $('.form').removeClass('active');
    });
    //-----------//
    //---ввод номера в форму---///
    $('.online_phone').mask('+7 (999) 999-99-99', {
        autoclear: false,
      });
    //----popup----//
    $('.default').click(function (e) {
        e.preventDefault();
    })
    $('.burger').click(function () {
        $('.menu-t').toggleClass('open');
        if ($('.menu-t').hasClass('open')) {
            $('.menu-t').animate({
                top: 50,
                right: 15
            }, 600)
            $(this).children().attr('class', 'fa fa-times');
            $('.kindAdd, .moreAdd, .countriesAdd' ).removeClass('active');
            
        } else {
            $('.menu-t').animate({
                top: -350,
                right: 15
            }, 600)
            $(this).children().attr('class', 'fa fa-bars');
        }
    })
    //-----------////
    //---всплывающие окна в header-nav---///
    $('.countriesDefault').click(function (e) {
        e.preventDefault();
        $('.kindAdd, .moreAdd' ).removeClass('active');
        $('.countriesAdd').toggleClass('active');
    });
    $('.kindDefault').click(function (e) {
        e.preventDefault();
        
        $('.kindAdd').toggleClass('active');
        $('.countriesAdd, .moreAdd' ).removeClass('active');
    });
    $('.moreDefault').click(function (e) {
        e.preventDefault();
        $('.kindAdd,.countriesAdd' ).removeClass('active');
        $('.moreAdd').toggleClass('active');
    });
});