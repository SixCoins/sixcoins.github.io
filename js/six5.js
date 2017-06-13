var Menu = $('#menu-inner');
var Menu_img = $('#menu-img');
var Menu_img_inner = $('#menu-inner-img');
var Menu_btnDef = $('#menu-button-def');
var BTN_RCTA = $('#btn-RCTA');
var BTN_HOME = $('#btn-home');
var List = $('#list-inner');
var Menu_btnDef_height = Menu_btnDef.height();
$().ready(function (e) {

});
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