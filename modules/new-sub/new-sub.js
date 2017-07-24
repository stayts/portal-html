jQuery(document).ready(function ($) {
    $(".step:first").find(".req .right").addClass('req-text');
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
                var list = $(".select-list");
                var help = $(".help-line");
                var fields = $(".textedit, .dropdown");
                fields.blur(inValid);
                fields.click(resetKey);
                btnext.click(nextStep);
                btdone.click(doneEdit);
                edit.click(editStep);



                function doneEdit() {
                    target.hide().addClass("done").removeClass("open").find(".textedit").attr('contenteditable', 'false');
                    target.delay(100).show('slide', 200);
                    showNext();
                    $(".editable-subscribe").addClass("review-container");
                    $(".step").addClass("review").removeClass("review-edit");
                    $(this).hide();
                    $("#new-card").slideUp();



                }

                function nextStep() {

                    target.hide().addClass("done").removeClass("open").find(".textedit").attr('contenteditable', 'false');
                    target.delay(100).show('slide', 200);
                    targetnext.hide().removeClass("done not-started").addClass("open").find(".textedit").attr('contenteditable', 'true');
                    targetnext.delay(100).show('fade', 200);
                    target.find(".req .right").removeClass('req-text');
                    targetnext.find(".req .right").addClass('req-text');

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

                function inValid() {
                    help.fadeOut();
                    list.delay(100).slideUp();
                    if ($(this).hasClass('req-text')) {

                        if ($(this).text().length === 0) {
                            $(".required").text("Fill all required fileds").fadeIn();
                            $(this).addClass("reqempty");

                        } else {
                            $(this).removeClass("reqempty");
                        }
                    }
                    $.each((target.find('.req-text')), function () {
                        if ($(this).text() === '') {
                            alert("yup");
                            $(".required").text("Fill all required fileds").fadeIn();
                            $("#calculate").addClass("inactive");
                            target.find(".next").addClass("inactive");
                            return false;

                        } else {

                            $(".required").text("").fadeOut();
                            if (target.find('#calculate').length === 0) {
                                target.find(".next").removeClass("inactive");
                            } else {
                                $("#calculate").removeClass("inactive");
                            }

                        }
                    });

                }

                function resetKey() {
                    var help = $(this).closest(".item").find(".help-line");
                    help.fadeIn();
                    target.find('.detail-total').slideUp();
                    $(this).removeClass("reqempty");
                }

                function showNext() {
                    if (targetnext.find('.req-text').length === 0) //all req fields are filled
                    {
                        alert('boo');
                        $(".required").text("").fadeOut();
                        targetnext.find(".next").removeClass("inactive");
                    }
                    if (targetnext.find('#calculate').length === 0) {
                        targetnext.find(".next").addClass("inactive");
                    }
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


});
