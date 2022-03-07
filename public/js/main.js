$("#menu-tour-type > li.sub-menu-left-content").hover(
    function() {
        $('#sub-' + $(this).attr("section-name")).show()
        console.log('--T-- ' + $(this).attr("section-name"))
    },
    function() {
        $('#sub-' + $(this).attr("section-name")).hide()
        console.log('--T-- ' + $(this).attr("section-name"))
    }
);

$('#box-shaw').click(function() {
    $('.main-menu').addClass('show');
});

$('.main-menu').click(function(e) {
    if (e.target !== this)
        return;

    $('.main-menu').removeClass('show');
});

$(window).resize(function() {
    console.log($(window).height());
    $('.menu-wrapper').height($(window).height() - ($('.mobile-login-logout').height() + 48));
    console.log($('.menu-wrapper').height());
});

$(document).ready(function() {
    $('i.fas.fa-chevron-down ').click(function() {
        $('i.fas.fa-chevron-down ').addClass('active-mobile');
    });
});