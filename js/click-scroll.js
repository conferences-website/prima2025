$(document).ready(function () {
    var $nav = $('.navbar');
    var $links = $('.click-scroll'); 
    var $collapse = $('.navbar-collapse');

    // Funzione scroll con offset della navbar
    function scrollToTarget($target) {
        if ($target.length) {
            var offsetClick = $target.offset().top - $nav.outerHeight();
            $('html, body').animate({ scrollTop: offsetClick }, 300);
        }
    }

    // Gestione click sui link
    $links.on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var $target = $(href);

        if (!$target.length) return;

        // Aggiorna stato attivo
        $links.removeClass('active').addClass('inactive');
        $(this).addClass('active').removeClass('inactive');

        // 🔑 Fix per i dropdown su mobile: chiudiamo subito il menu aperto
        if ($(this).hasClass('dropdown-item')) {
            $('.dropdown-menu.show').removeClass('show');
        }

        if ($collapse.hasClass('show')) {
            // MOBILE: chiudi navbar e poi scrolla
            $collapse.one('hidden.bs.collapse', function () {
                scrollToTarget($target);
            }).collapse('hide');
        } else {
            // DESKTOP
            scrollToTarget($target);
        }
    });

    // Evidenziazione attiva durante lo scroll
    $(document).on('scroll', function () {
        var scrollPos = $(document).scrollTop() + $nav.outerHeight() + 10;

        $links.each(function () {
            var href = $(this).attr('href');
            var $target = $(href);
            if ($target.length) {
                var top = $target.offset().top;
                var bottom = top + $target.outerHeight();

                if (scrollPos >= top && scrollPos < bottom) {
                    $links.removeClass('active').addClass('inactive');
                    $(this).addClass('active').removeClass('inactive');
                }
            }
        });
    });

    // Stato iniziale
    $links.addClass('inactive');
    $links.first().addClass('active').removeClass('inactive');
});
