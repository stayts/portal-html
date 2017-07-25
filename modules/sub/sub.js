selectList();
$("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false

});
$(".step:first").removeClass("open").addClass("done").find(".textedit").attr('contenteditable', 'false');
$(".edit").click(function () {

    alert("boom")
    $(this).closest(".step").hide().addClass("open").removeClass("done")
    $(this).closest(".step").find(".textedit").attr('contenteditable', 'true');
    $(this).closest(".step").delay(100).show('slide', 200);
    $(this).closest(".step").find(".req .right").addClass('req-text');


});
var st = $(this).closest(".step");
var nextst = $(this).closest(".step").nextAll("div.step:first");
var list = $(".select-list");
var help = $(".help-line");

function saveStep() {

    $(this).closest(".step").hide().addClass("done").removeClass("open")
    $(this).closest(".step").find(".textedit").attr('contenteditable', 'false');
    $(this).closest(".step").delay(100).show('slide', 200);
    $(this).closest(".step").find(".req .right").removeClass('req-text');

}
$(".save").click(saveStep);

$(".textedit").click(resetkey).focusout(validate);

var textBox;
var status;

function validate() {
    textBox = $(this, ".textedit");
    status = textBox.closest(". item").find(".status");
    var regex = /^[0-9]+$/;
    var x = textBox.text();

    if (x.match(regex)) {
        textBox.addClass("good");
        textBox.removeClass("error");
        status.removeClass("error");
        status.html('');

    } else {
        textBox.addClass("error");
        status.addClass("error");
        textBox.removeClass("good");
        status.html("Error message in forms will look like this");

    }
}

function resetkey() {

    textBox = $(this, ".textedit");
    textBox.removeClass("good");
    textBox.removeClass("bad");
    status.removeClass();
    status.html('');
}

$("#subscribe").on("click", function () {
    $("#modal").load("billing/subscribe-billing.html");
});
$("#yes").on("click", function () {
    window.location.href = '';
});
//cancel-btn
$("#no").on("click", function () {
    $("#modal").load("");
});
