$(document).ready(function() {
    if (window.location.hash) {
        setTimeout(function() {
            var target = $(window.location.hash);
            if (target.length) {
                console.log("Scrolling to:", target.offset().top - 83);
                $('html, body').scrollTop(target.offset().top - 83);
            }
        }, 50);
    }
});
