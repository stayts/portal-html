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
    $(".content").addClass("not-started");
    $(".h3").addClass("edit-progress");
    $(".step:first").find(".content").removeClass("not-started").addClass("open visited");
    $(".step:first").find(".h3").removeClass("edit-progress").addClass("active");
    //make fields editable
    $("#next1").addClass("inactive").closest(".step").find(input).attr('contenteditable', 'true');
    //add functions
    selectList();
    calculate();
    selectCard();

    //step click function
    for (var i = 1; i <= $(".step").length; i++) {
        (function (i) {
                var btnext = $("#next" + i);
                var edit = $("#edit" + i);
                var stnext = $("#step" + (i + 1));
                var targetnext = stnext.find(".content");
                var step = $("#step" + i);
                var target = step.find(".content");
                var btdone = $("#done" + i);
                fields.blur(inValid);
                fields.click(resetKey);

                btnext.click(nextStep);

                btdone.click(function () {

                    target.hide().addClass("done").removeClass("open").delay(100).show('slide', 200);
                    target.find("#calculate").hide();
                    target.find(input).attr('contenteditable', 'false');
                    showNext();
                    $(".h3").removeClass("active edit-progress");
                    $(".editable-subscribe").addClass("review");
                    $(this).hide();
                    $("#step-buy").hide();




                });
                //   var fromstep = target.closest(".open").attr("id");
                function nextStep() {

                    target.hide().addClass("done").removeClass("open").delay(100).show('slide', 200);
                    target.find("#calculate").hide();
                    target.find(input).attr('contenteditable', 'false');
                    targetnext.find(input).attr('contenteditable', 'true');
                    targetnext.hide().removeClass("done not-started").addClass("open visited").delay(100).show('fade', 200);
                    showNext();
                    step.find(".h3").removeClass("active edit-progress");
                    stnext.find(".h3").addClass("active");



                    //specific pages
                    if (target.hasClass("cust-info")) {
                        $(".taxed").show();
                    }
                    if (target.hasClass("cust-payment")) {
                        $(".editable-subscribe").addClass("review");
                        $("#step-buy").show();
                        $(".next").hide();
                    }


                }
                edit.click(function () {
                    stepBuy();

                    $(".editable-subscribe").removeClass("review");
                    $(".h3").addClass("edit-progress");
                    $(".h3").removeClass("active");
                    step.find(".h3").addClass("active");

                    $(".open").find(input).attr('contenteditable', 'false');
                    $(".open").addClass("done not-started").removeClass("open visited").delay(100).show('fade', 200);
                    target.find(input).attr('contenteditable', 'true');
                    step.find(".h3").addClass("active");
                    step.find(".donebtn").show();
                    target.hide().addClass("open").removeClass("done").delay(200).show('slide', 200);
                    target.find("#calculate").show();
                    showNext();
                    /*                        if (target.hasClass("cust-info")) {
                                            $(".taxed").show();
                                        }*/
                    if (target.hasClass("cust-payment")) {

                    }

                })
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
                    target.closest(".step").find('.detail-total').slideUp();
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
