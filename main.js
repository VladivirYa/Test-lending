
$('.nav-toggle').on('click', function () {
    $('#menu').toggleClass('active');
});

$("#vegas-carusel").vegas({
    timer: false,
    transition: 'fade',
    slides: [
        {src: "./img/slider_1.jpg"},
        {src: "./img/slider_2.jpg"}

    ]

});
$('.vegas-control-left').on('click', function () {
    $("#vegas-carusel").vegas('previous');
});
$('.vegas-control-right').on('click', function () {
    $("#vegas-carusel").vegas('next');
});

$(function () {
    $('#feedback').click(function () {
        $('.overlay').fadeIn();
    })
});

$('.btn-off').click(function () {
    $('.overlay').fadeOut()
});
// $('.overlay').click(function () {
//     $('.overlay').fadeOut();
// });

$(window).load('show', function () {
    $('.loader').fadeOut();
    $('.loader__inner').deley(500).fadeOut();
});