$(function () {
    // archive
    // 选择层
    setTimeout(function () {
        $('.an-floor-1').removeClass('an-floor-1');
        $('.an-floor-2').removeClass('an-floor-2');
        $('.an-floor-3').removeClass('an-floor-3');
    },500);
    $('.archive-floor').on('click', function () {
        var Show = $(this);
        var Prev = $(this).prev('.archive-floor');
        var Next = $(this).next('.archive-floor');
        setTimeout(function () {
            Show.addClass('show-out');
            var allTitle = Show.children('p.old-title');
            setTimeout(function () {
                allTitle.removeClass('old-title');
                allTitle.addClass('new-title');
            }, 10);
            Show.find('ul li').fadeIn(400);
        }, 200);
        if (Prev.prev('.archive-floor').is('div')) {
            Prev.prev('.archive-floor').addClass('top-out');
        }
        if (Next.next('.archive-floor').is('div')) {
            Next.next('.archive-floor').addClass('bottom-out');
        }
        if (Prev.is('div')) {
            setTimeout(function () {
                Prev.addClass('top-out');
            }, 0);
        }
        if (Next.is('div')) {
            setTimeout(function () {
                Next.addClass('bottom-out');
            }, 0);
        }
        $('.archive-menu').fadeIn(900);
    });
    // archive返回按钮
    $('.archive-menu-img').on('click', function () {
        var showOut = $('.show-out')
        showOut.find('ul li').fadeOut(100);
        showOut.removeClass('show-out');
        setTimeout(function () {
            $('.top-out').removeClass('top-out');
            $('.bottom-out').removeClass('bottom-out');
        }, 0);
        $('.archive-menu').fadeOut(500);
        var newTitle = $('.new-title');
        setTimeout(function () {
            newTitle.removeClass('new-title');
            newTitle.addClass('old-title');
        }, 200);
    });
    //recent页面
    setTimeout(function () {
        $('.page-title').addClass('recentFadeout');
    },1300)
});