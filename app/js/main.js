$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: true
     });
     
     $('.works__inner').slick({
         slidesToShow: 4,
         slidesToScroll: 1
    //      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide_left.svg" alt=""></button>' ,
    //      nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide_right.svg" alt=""></button>',
    });

    $('.menu__list li').on('click', function(){
        $(".menu__list li").removeClass("active"); 
        $(this).addClass("active");
    });

});