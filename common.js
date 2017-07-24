var st = $(this).closest(".step");
var nextst = $(this).closest(".step").nextAll("div.step:first");

function saveStep() {

    $(this).closest(".step").hide().addClass("done").removeClass("open")
    $(this).closest(".step").find(".textedit").attr('contenteditable', 'false');
    $(this).closest(".step").delay(100).show('slide', 200);
    $(this).closest(".step").find(".req .right").removeClass('req-text');

}

function nextStep() {


    nextst.hide().removeClass("done not-started").addClass("open").find(".textedit").attr('contenteditable', 'true');
    nextst.delay(100).show('fade', 200);
    nextst.find(".req .right").addClass('req-text');

    if (st.find(".content").hasClass("cust-payment")) {
        $(".editable-subscribe").addClass("review-container");
        $(".step").addClass("review");
        $(".next").hide();

        $("#new-card").slideUp();
    }
    nextst.find(".next").addClass("inactive");
    showNext();
}


function showNext() {
    if (nextst.find('.req-text').length === 0) //all req fields are filled
    {
        alert('boo');
        $(".required").text("").fadeOut();
        nextst.find(".next").removeClass("inactive");
    }
    if (nextst.find('#calculate').length === 0) {
        nextst.find(".next").addClass("inactive");
    }
}

function resetKey() {
    var help = $(this).closest(".item").find(".help-line");
    help.fadeIn();
    st.find('.detail-total').slideUp();
    $(this).removeClass("reqempty");
}



function selectList() {
    var list = $(".select-list");
    list.hide();
    //click
    $(".select").click(function () {
        $(this).closest("div").find(list).slideToggle();
        $(".arrow-up, .arrow-dwn").toggleClass("arrow-up arrow-dwn");
    });
    //leave the input field
    list.mouseleave(function () {
        $(".help-line").fadeOut();
    });
    //choose the value
    $(".data").click(function () {
        $(this).closest(".dropdown").find(".input-field").html($(this).html());
        if (list.is(":visible")) {
            list.delay(100).slideUp();

            $(this).closest(".step").find(".next").addClass("inactive");
        }
    });
}

function calculate() {

    $("#calculate").click(function () {
        $('#calculate').addClass("inactive");
        $('.detail-total').delay(200).slideDown();
        $(this).closest(".step").find(".next").removeClass("inactive");
        $(this).addClass("inactive");
    });
}

function checkBox() {
    $(".imgCheck").click(function () {
        $(this).toggleClass("enabled");
    });
    $(".imgCheck").mouseup(function () {
        if (!$(this).hasClass("enabled")) {
            $("#billincc").addClass("copied").html($(".address-list").html()).slideDown();
        } else {
            $("#billincc").removeClass("copied").html($("#ccaddr").html()).slideDown();
        }
    });
}

function selectCard() {
    var creditcard = $("#my-cards .card");
    creditcard.click(function () {
        if ($(this).not('.active')) {
            creditcard.removeClass("active");
            $(this).addClass("active");
        }
    });
}
