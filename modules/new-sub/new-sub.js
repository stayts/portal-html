//close without saving
$("#closenew-sub").click(function () {
    $(".modal").fadeOut();
});
//reset the styling
var newstep = $(".editable-subscribe .step");
var newstone = $(".editable-subscribe .step:first")
alert("kuku")
$("*").removeClass('done, visited, open');
newstep.addClass("not-started");
newstone.removeClass("not-started").addClass("open ").find(".textedit").attr('contenteditable', 'true');
newstone.find(".next").addClass("inactive");
newstone.find(".req .right").addClass('req-text');
newstone.find(".req .right").addClass('req-text');
//add functions
selectList();
calculate();
selectCard();
checkBox();
//step click function
for (var i = 1; i <= $(".step").length; i++) {
    (function (i) {
            var target = $("#step" + i);
            var btnext = target.find(".next");
            var btdone = target.find(".donebtn");
            var edit = target.find(".edit");
            var targetnext = $("#step" + (i + 1));
            var fields = $(".textedit, .dropdown");
            fields.blur(inValid);
            fields.click(resetKey);
            btnext.click(nextNewSubStep);
            btdone.click(doneEdit);
            edit.click(editStep);

            function doneEdit() {
                saveStep();
                showNext();
                $(".editable-subscribe").addClass("review-container");
                $(".step").addClass("review").removeClass("review-edit");
                $(this).hide();
                $("#new-card").slideUp();
            }

            function nextNewSubStep() {

                nextStep();

                if (target.find(".content").hasClass("cust-payment")) {
                    $(".editable-subscribe").addClass("review-container");
                    $(".step").addClass("review");
                    $(".next").hide();

                    $("#new-card").slideUp();
                }
                targetnext.find(".next").addClass("inactive");
                showNext();
            }

            function editStep() {
                if ($(".editable-subscribe").hasClass("review-container")) {
                    btdone.show();
                    $(".next").hide();
                    $(".editable-subscribe").removeClass("review-container");
                    $(".step").removeClass("review").addClass("review-edit");
                }

                $(".open").addClass("done ").removeClass("open").find(".textedit").attr('contenteditable', 'false');
                target.hide().addClass("open").removeClass("done").find(".textedit").attr('contenteditable', 'true');
                target.delay(200).show('slide', 200);
            }

        }

        (i));
}

$("#add-card").click(function () {

    if ($(".imgCheck").hasClass("enabled")) {
        $("#billincc").addClass("copied").html($(".address-list").html()).slideDown();
    } else {
        $("#billincc").removeClass("copied").html($("#ccaddr").html()).slideDown();
    }
    $("#new-card").slideDown();

});
