$(document).ready(function(){
    $('.wrap').slick({
        infinite: true ,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button class="slider__nav-btn slick-prev">'+
        '<svg xmlns="http://www.w3.org/2000/svg" class="slider__nav-img" role="presentation">'+
        '<use xlink:href="img/prev.svg#prev"></use>'+
        '</svg>'+
        '</button>',
        nextArrow: '<button class="slider__nav-btn slick-next">'+
        '<svg xmlns="http://www.w3.org/2000/svg" class="slider__nav-img" role="presentation">'+
        '<use xlink:href="img/next.svg#next"></use>'+
        '</svg>'+
        '</button>'
    });
});