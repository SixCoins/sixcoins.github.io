var Menu = $('#menu-inner');
var Menu_img = $('#menu-img');
var Menu_img_inner = $('#menu-inner-img');
var Menu_btnDef = $('#menu-button-def');
var BTN_RCTA = $('#btn-RCTA');
var BTN_HOME = $('#btn-home');
var List = $('#list-inner');
var Menu_btnDef_height = Menu_btnDef.height();
var about_header_name = $('#about-header-name');
var about_header_time = $('#about-header-time');
var about_header_info = $('#about-header-info');
var about_header = $('#about-header');
var about_body = $('#about-body');
var about_body2=$('#about-body2');
var about_body2_evaluation=$('#about-body2-evaluation');
var about_body3=$('#about-body3');
$().ready(function (e) {
    BTN_RCTA.on('click', function () {
        // 归档按钮点击事件
        BTN_RCTA.addClass('menu-button-add-bg');
        BTN_HOME.css('height', 'auto');
        BTN_HOME.addClass('button-menu');
        Menu.animate({height: '32px'}, 400);
        Menu_img.animate({width: '0', height: '0', padding: '0', border: '0'}, 400);
        Menu_img_inner.animate({padding: '0', height: '0'}, 400);
        Menu_btnDef.animate({height: '0'}, 400);
        var HEIGHT = $(document).height() - 32;
        List.scrollTop(0);
        List.animate({height: HEIGHT + 'px'}, 400, function () {
            List.animate({opacity: '1'}, 100);
        });
    });
    BTN_HOME.on('click', function () {
        List.animate({opacity: '0'}, 100, function () {
            BTN_RCTA.removeClass('menu-button-add-bg');
            BTN_HOME.css('height', '0');
            BTN_HOME.removeClass('button-menu');
            List.animate({height: '0'}, 400);
            Menu_btnDef.animate({height: Menu_btnDef_height}, 400);
            Menu_img_inner.animate({padding: '150px 42px 0 42px', height: '72px'}, 400);
            Menu_img.animate({width: '59px', height: '59px', padding: '3px'}, 400);
            Menu_img.css('border', '1px solid #a5a5a5');
            Menu.animate({height: '100%'}, 400);
        });
    });
    about_body2.on('click', function () {
        about_body2_evaluation.addClass('animate-about-body2-evaluation');
    });
    about_body3.on('click', function () {
        about_body2_evaluation.removeClass('animate-about-body2-evaluation');
    });
    // 个人信息
    // about_header_time.html(function () {
    //     var date = new Date();
    //     var seperator1 = "-";
    //     var month = date.getMonth() + 1;
    //     var strDate = date.getDate();
    //     if (month >= 1 && month <= 9) {
    //         month = "0" + month;
    //     }
    //     if (strDate >= 0 && strDate <= 9) {
    //         strDate = "0" + strDate;
    //     }
    //     return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    // });
    about_header_name.addClass('animate-about-header-name');
    about_header_time.addClass('animate-about-header-time');
    about_header_info.addClass('animate-about-header-info');
    about_header.addClass('animate-about-header');
    about_body.addClass('animate-about-body');
    about_body2.addClass('animate-about-body2');
});