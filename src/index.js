import './css/style.scss'

$('.header-burger').click(function() {
    $('.header-block').toggleClass('open');
    $(this).toggleClass('active');
});