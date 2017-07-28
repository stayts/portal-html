jQuery(document).ready(function ($) {


    $.getScript('/modules/common/common.js', function () {
        alert('Load common was performed.');
    });



    $('#home-portal.menu-button').addClass('active');
    $('#home-billing.menu-button').addClass('active');
    //methods
    $.fn.load_ = $.fn.load;
    $.fn.load = function () {
        $.fn.load_.apply(this, arguments).hide().fadeIn('slow');
        $('.menu-button').removeClass('active');
    };
    $.fn.toggleArrow = function (a, b) {
        return this.html(function (_, html) {
            return $.trim(html) === a ? b : a;
        });
    };
    // on load

    $(".opennav");
    $(".opennav").click(function () {
        $(".menu").toggleClass("open");
        $(this).toggleArrow('arrow_back', 'arrow_forward');
    });
    //portal menu buttons
    $("#home-portal").on("click", function () {
        $("#page-content").load("/portal/home-portal.html");
        $('#home-portal.menu-button').addClass('active');

    });
    $("#users-portal").on("click", function () {
        $("#page-content").load("/portal/users-portal.html");
        $('#users-portal.menu-button').addClass('active');
    });
    $("#bots-portal").on("click", function () {
        $("#page-content").load("/portal/bots-portal.html");
        $('#bots-portal.menu-button').addClass('active');
    });
    // go to index-billing.html
    $("#gotobilling-portal").on("click", function () {
        $("#modal").load("/portal/gotobilling-portal.html");
    });
    $("#gotobilling-go").on("click", function () {
        window.location.href = 'index-billing.html';
    });

    //billing menu buttons
    $("#home-billing").on("click", function () {
        $("#page-content").load("/billing/home-billing.html");
        $('#home-billing.menu-button').addClass('active');
    });
    $("#sub").on("click", function () {
        $("#page-content").load("/modules/sub/sub.html");
        $('#sub.menu-button').addClass('active');



    });
    $("#entitlements-billing").on("click", function () {
        $("#page-content").load("/billing/entitlements-billing.html");
        $('#entitlements-billing.menu-button').addClass('active');
    });
    $("#statements-billing").on("click", function () {
        $("#page-content").load("/billing/statements-billing.html");
        $('#statements-billing.menu-button').addClass('active');
    });
    $("#makeadmin-billing").on("click", function () {
        $("#page-content").load("/billing/makeadmin-billing.html");
        $('#makeadmin-billing.menu-button').addClass('active');
    });

});
