import './css/style.scss'
import './css/slick.css'
import './js/slick.min'

$('.header-burger').click(function() {
    $('.header-block').toggleClass('open');
    $(this).toggleClass('active');
});

$('.partners-list').slick({
    prevArrow: $('.partners-button-left'),
    nextArrow: $('.partners-button-right'),
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 880,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        },
    ]
});