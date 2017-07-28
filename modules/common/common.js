//COMMMMMONNNN

var $;
var st;

var container;
var btedit;
var btsave;

var help = $(".help-line");
var reqtext = $("#required");
var calculate = $("#calculate");
var list = $(".select-list");
var totalcount = calculate.closest('div').find(".totalcount");

var txt = $(".txt");
var checkbox = $(".checkbox");
var select = $(".select");

//for thefirst step add validation class
var req_now = $(".req >.txt:visible");


// step function






function resetKey() {
    var help = $(this).closest(".item").find(".help-line");
    help.fadeIn();
    totalcount.slideUp();
    $(this).removeClass("reqempty");
}

function inValid() {
    alert("invaaaal");
    //st = $(this).closest(obj);
    var help = $(".help-line:visible");
    var reqtext = $("#required:visible");
    var calculate = $("#calculate");
    var list = $(".select-list:visible");
    help.fadeOut();
    list.delay(100).slideUp();
    if ($(this).hasClass('req-text')) {

        if ($(this).text().length === 0) {
            reqtext.text("Fill all required fileds").fadeIn();
            $(this).addClass("reqempty");

        } else {
            $(this).removeClass("reqempty");
        }
    }
    $.each(req_now, function () {
        if ($(this).text() === '') {
            alert("yup");
            reqtext.text("Fill all required fileds").fadeIn();
            calculate.addClass("inactive");
            return false;

        } else {

            reqtext.text("").fadeOut();
            if (calculate.length !== 0) {
                calculate.removeClass("inactive");
            }

        }
    });

}

//done
function selectList() {
    var list = $(".select-list");
    var select = $(".select");

    list.hide();
    //click
    select.click(function () {
        $(this).closest("div").find(list).slideToggle();
        resetKey();
    });
    //leave the input field
    list.mouseleave(function () {
        help.fadeOut();
    });
    //choose the value
    $(".data").click(function () {
        $(this).closest(".dropdown").find(".input-field").html($(this).html());
        if (list.is(":visible")) {
            list.delay(100).slideUp();
        }
    });
}

function calculateFn() {

    calculate.click(function () {
        alert(st.className);
        calculate.addClass("inactive");
        totalcount.delay(200).slideDown();
        $(this).addClass("inactive");
    });
}

function checkBox() {
    checkbox.click(function () {
        $(this).toggleClass("enabled");
    });
}


//toggle attr in forms



$.fn.toggleAttr = function (attribute, option1, option2) {
    return this.each(function () {
        var $this = $(this);
        if ($this.attr(attribute) != option1) {
            $this.attr(attribute, option1);
        } else {
            $this.attr(attribute, option2);
        }
    });
}


function arrowUpDown() {
    $(".arrow-up, .arrow-dwn").toggleClass("arrow-up arrow-dwn");

}



function fancySlide(obj) {
    obj.delay(100).show('slide', 200);
    var myClass = obj.attr("class");
    var last_obj = obj.last();
    var next_obj = obj.nextAll('".' + myClass + '"').first();
    if (next_obj !== last_obj) {
        next_obj.delay(100).show('slide', 200);
    }

}

function selectCard(object) {
    var ccard = $('"' + object + '.card"');

    ccard.click(function () {
        if ($(this).not('.active')) {
            ccard.removeClass("active");
            $(this).addClass("active");
        }
    });
}
