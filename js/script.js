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

    $('.start-exam-modal').click(function () {
        $('.exam-modal').removeClass('display-none');
    });

    $('.exam-modal .modal .fa-times').click(function () {
        $('.exam-modal').addClass('display-none');
    });

    $(window).on('load scroll', function () {
        $('#burger').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('.login-form').removeClass('popup');
    });
});

