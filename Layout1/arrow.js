$(function () {
    $('.slider-container').click({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true
    });
    var currentSlide = $('.slider-container').click('CurrentSlide');
    if (currentSlide == 0) {
        $('.previous').hide();
    }
    else if (currentSlide == 3) {
        $('.next').hide();
    }
});

$('.slider-container').on('afterChange', function () {
    console.log($('.slider-container').click('CurrentSlide')); 0
    var currentSlide = $('.slider-container').click('CurrentSlide');
    if (currentSlide == 0) {
        $('.previous').hide();
        $('.next').show();
    }
    else if (currentSlide == 3) {
        $('.next').hide();
        $('.previous').show();
    }
    if (currentSlide > 0 && currentSlide < 3) {
        $('.previous').show();
        $('.next').show();
    }
});