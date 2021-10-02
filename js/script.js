$(document).ready(function () {
    $('#burger').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $('#login').click(function () {
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function () {
        $('.login-form').removeClass('popup');
    });

    // $('.submit-form').click(function () {
    //     $('.modal-wrap').removeClass('display-none');
    // });

    // $('.modal-close').click(function () {
    //     $('.modal-wrap').addClass('display-none');
    // });

    $(window).on('load scroll', function () {
        $('#burger').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('.login-form').removeClass('popup');
    });
});

