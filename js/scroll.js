$(document).ready(function () {
    $('.cta').click(function () {
        $('html, body').animate(
            {
                scrollTop: ($('#products').offset().top) -50
            },
            {
                duration: 800
            }
        );
    });
});

