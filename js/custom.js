var lists = $('.options-list-item');
var content = $('.options-container-text');

$('.aa').on('click', function () {
    lists.removeClass('active');
    $(this).addClass('active');
    content.removeClass('active');
    $('.a').addClass('active');
});
$('.bb').on('click', function () {
    lists.removeClass('active');
    $(this).addClass('active');
    content.removeClass('active');
    $('.b').addClass('active');
});
$('.cc').on('click', function () {
    lists.removeClass('active');
    $(this).addClass('active');
    content.removeClass('active');
    $('.c').addClass('active');
});
$('.dd').on('click', function () {
    lists.removeClass('active');
    $(this).addClass('active');
    content.removeClass('active');
    $('.d').addClass('active');
});
$('.ee').on('click', function () {
    lists.removeClass('active');
    $(this).addClass('active');
    content.removeClass('active');
    $('.e').addClass('active');
});
$('.main-hamb').on('click', function () {
    $('.main').show();
    $('.close-main').show();

});
$('.close-main').on('click', function () {
   $('.main').hide();
    $('.close-main').hide();
});

$('.list-item').on('click', function () {
    $('.list-item').removeClass('active-list-item');
    $(this).addClass('active-list-item');
    if ($(this).data("tab") === 'a') {
        $('.tab-content').hide();
        $('.tab-content-a').show();
    } else if ($(this).data("tab") === 'b') {
        $('.tab-content').hide();
        $('.tab-content-b').show();
    } else if ($(this).data("tab") === 'c') {
        $('.tab-content').hide();
        $('.tab-content-c').show();
    } else {

    }
});


$('.options-item').hover(function () {
    $('.btn-option-item').removeClass('btn-option-item-active');
    $(this).find('.btn-option-item').addClass("btn-option-item-active");
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('.js-tab-price-item-a').on('click', function () {
   $('.js-tab-price-item-a-content').show();
    $('.js-tab-price-item-b-content').hide();
    $('.js-tab-price-item-b').removeClass('tab-price-item-active');
    $(this).addClass('tab-price-item-active');
});
$('.js-tab-price-item-b').on('click', function () {
    $('.js-tab-price-item-b-content').show();
    $('.js-tab-price-item-a-content').hide();
    $('.js-tab-price-item-a').removeClass('tab-price-item-active');
    $(this).addClass('tab-price-item-active');
});