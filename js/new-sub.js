jQuery(document).ready(function ($) {
    //close without saving
    $("#closenew-sub").click(function () {
        $(".modal").fadeOut();

    });

    //set the changeable fields vars
    var input = $('.textedit');
    var fields = $(".textedit, .dropdown");
    //reset the styling
    $("*").removeClass('done, visited, open');
    $(".step").addClass("not-started");
    $(".step:first").removeClass("not-started").addClass("open ");
    //make fields editable
    $("#next1").addClass("inactive");
    //add functions
    selectList();
    calculate();
    selectCard();
    contentEdit();
    //step click function
    for (var i = 1; i <= $(".step").length; i++) {
        (function (i) {
                var btnext = $("#next" + i);
                var edit = $("#edit" + i);
                var targetnext = $("#step" + (i + 1));
                var target = $("#step" + i);
                var btdone = $("#done" + i);
                fields.blur(inValid);
                fields.click(resetKey);
                btnext.click(nextStep);
                btdone.click(doneEdit);
                contentEdit();

                function doneEdit() {
                    target.hide().addClass("done").removeClass("open").delay(100).show('slide', 200);

                    showNext();

                    $(".editable-subscribe").addClass("review");
                    $(this).hide();
                    $("#step-buy").show();
                    contentEdit();



                }

                function contentEdit() {
                    if (target.hasClass('open')) {
                        alert("boo");
                        target.find(".textedit").attr('contenteditable', 'true');
                    }

                }

                function nextStep() {

                    target.hide().addClass("done").removeClass("open").delay(100).show('slide', 200);
                    targetnext.hide().removeClass("done not-started").addClass("open ").delay(100).show('fade', 200);
                    showNext();
                    contentEdit();

                    //specific pages
                    if (target.hasClass("cust-info")) {
                        $(".taxed").show();
                    }
                    if (target.find(".content").hasClass("cust-payment")) {
                        $(".editable-subscribe").addClass("review-container");
                        $(".step").addClass("review");
                    }


                }
                edit.click(function () {


                    $(".editable-subscribe").removeClass("review");
                    $(".open").addClass("done ").removeClass("open ").delay(100).show('fade', 200);
                    target.hide().addClass("open").removeClass("done").delay(200).show('slide', 200);
                    showNext();
                    contentEdit();

                });
                var list = $(".select-list");
                var help = $(".help-line");

                function inValid() {
                    help.fadeOut();
                    list.delay(100).slideUp();
                    if ($(this, ".req").text().length === 0) {
                        $(this).closest(".content").find(".required").text("This field is required").fadeIn();
                        $(this).addClass("reqempty");
                        showNext();

                    } else {
                        $(this).removeClass("reqempty");
                        $("#calculate").removeClass("inactive");
                        showNext();
                    }
                }

                function resetKey() {
                    var help = $(this).closest(".item").find(".help-line");
                    help.fadeIn();
                    target.find('.detail-total').slideUp();
                    $(this).removeClass("reqempty");

                    $(this).closest(".content").find(".required").text("").fadeOut();
                }

                function showNext() {
                    if ($('.reqempty').length === 0) //all req fields are filled
                    {
                        if (target.find("#calculate").length > 0) { //page 1 do not show next button in this function
                            return;
                        } else if (target.find("#my-cards").length > 0) {
                            target.find(".next").removeClass("inactive");
                        }
                    }
                }
            }
            (i));
    }
    //FUNCTIONS
    function stepBuy() {
        if ($(".edit-progress").length === 0) {
            $("#step-buy").hide();

        }
    }

    function selectList() {

        var list = $(".select-list");
        list.hide();
        //click
        $(".select").click(function () {
            $(this).closest("div").find(list).slideToggle();
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

            }

        });

    }

    function calculate() {
        $("#calculate").click(function () {
            $('#calculate').addClass("inactive");
            $('.detail-total').delay(200).slideDown();
            $("#next1").removeClass("inactive");
            $(this).addClass("inactive");
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

    $("#add-card").click(function () {
        $("#new-card").slideDown();
    });
});
