$("document").ready(function() {
    //methods
    $.fn.load_ = $.fn.load;
    $.fn.load = function() {
        $.fn.load_.apply(this, arguments).hide().fadeIn('slow');
        $('.menu-button').removeClass('active');
    }
    $.fn.toggleArrow = function(a, b) {
        return this.html(function(_, html) {
            return $.trim(html) === a ? b : a;
        });
    }
    $(".opennav")
    $(".opennav").click(function() {
        $(".menu").toggleClass("open");
        $(this).toggleArrow('arrow_back', 'arrow_forward');
    });
    //portal menu buttons
    $("#home-portal").on("click", function() {
        $("#page-content").load("/portal/home-portal.html");
        $('#home-portal .menu-button').addClass('active');

    });
    $("#users-portal").on("click", function() {
        $("#page-content").load("/portal/users-portal.html");
        $('#users-portal .menu-button').addClass('active');
    });
    $("#bots-portal").on("click", function() {
        $("#page-content").load("/portal/bots-portal.html");
        $('#bots-portal .menu-button').addClass('active');
    });
    // go to index-billing.html
    $("#gotobilling-portal").on("click", function() {
        $("#modal").load("/portal/gotobilling-portal.html");
    });
    $("#gotobilling-go").on("click", function() {
        window.location.href = 'index-billing.html'
    });

    //billing menu buttons
    $("#home-billing").on("click", function() {
        $("#page-content").load("/billing/home-billing.html");
        $('#home-billing .menu-button').addClass('active');
    });
    $("#subscriptions-billing").on("click", function() {
        $("#page-content").load("/billing/subscriptions-billing.html");
        $('#subscriptions-billing .menu-button').addClass('active');
    });
    $("#entitlements-billing").on("click", function() {
        $("#page-content").load("/billing/entitlements-billing.html");
        $('#entitlements-billing .menu-button').addClass('active');
    });
    $("#statements-billing").on("click", function() {
        $("#page-content").load("/billing/statements-billing.html");
        $('#statements-billing .menu-button').addClass('active');
    });
    $("#makeadmin-billing").on("click", function() {
        $("#page-content").load("/billing/makeadmin-billing.html");
        $('#makeadmin-billing .menu-button').addClass('active');
    });
    // go to index-portal.html
    $("#gotoportal-billing").on("click", function() {
        $("#modal").load("/billing/gotoportal-billing.html");
    });
    $("#gotoportal-go").on("click", function() {
        window.location.href = 'index-portal.html'
    });
    //cancel-btn
    $(".cancel").on("click", function() {
        $("#modal").load("");
    });
});
