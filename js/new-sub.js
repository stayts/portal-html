jQuery(document).ready(function ($) {
    //close without saving
    $("#closenew-sub").click(function () {
        $(".modal").fadeOut();

    });





    //set the changeable fields vars
    var input = $('.textedit');
    var fields = $(".textedit, .select");
    var req = $(".req .textedit");
    req.blur(inValid);

    //make all content fields editable
    input.each(function () {
        $(this).attr('contenteditable', 'true');
    });
    $("#step-buy").hide();
    $(".taxed").hide();
    $(".help-line").hide();
    $('.detail-total').hide();
    $(".step").hide();
    $("div").removeClass('done, in-process, .visited');
    //show first page
    $("#step1").fadeIn();
    $('#calculate').fadeIn();
    $(".cust-details").addClass("visited");
    //help line for input fields
    fields.click(resetKey);
    input.blur(hideInfo);
    selectList();
    //calculate button
    calculate();





    //step click
    for (var i = 1; i < $(".step").length; i++) {
        (function (i) {
            var btnext = $("#next" + i);

            //  var btnextnext = $("#next" + (i + 1));
            var edit = $("#edit" + i);
            var stnext = $("#step" + (i + 1));
            var step = $("#step" + i);
            btnext.click(function () {

                $(".visited:not([class~='done'])").addClass("done");
                stnext.find(".content").removeClass("done");

                $(this).closest(".content:not([class~='done'])").addClass("done");
                $(".step").removeClass("open");
                stnext.addClass("open");
                stnext.find(".content:not([class~='visited'])").addClass("visited");
                $(".editable-subscribe:not([class~='in-process'])").addClass("in-process");
                input.attr('contenteditable', 'false');
                stnext.find(input).attr('contenteditable', 'true');
                stnext.delay(500).show('slide', 1000);


            });
            edit.click(function () {
                $(".step").removeClass("open");
                step.addClass("open");
                $(".visited:not([class~='done'])").addClass('done');
                $(this).closest(".content").removeClass("done");
                input.attr('contenteditable', 'false');
                $(this).closest(".content").find(input).attr('contenteditable', 'true');
                $(this).fadeOut();
                btnext.delay(500).fadeIn();


            });

        }(i));
    }



    /* $("#next-1").click(function () {
     $("div").removeClass("done");
     $(".cust-details:not([class~='done'])").addClass("done");
     $(".step").removeClass("open");
     $(".editable-subscribe:not([class~='in-process'])").addClass("in-process");
     $(".two").addClass("open");
     input1.attr('contenteditable', 'false');
     input2.attr('contenteditable', 'true');
     setTimeout(function () {
         $(".two").delay(500).show('slide', 1000);
         $("#next-1").fadeOut();
         $("#edit-details").delay(1000).fadeIn();

     }, 1000);
     showNext();
     editDetails();

 });




 $("#next-2").click(function () {
     //validate empty fields:
     if ($('.reqempty').length === 0) {
         $(".cust-info:not([class~='done'])").addClass("done");
         $(".editable-subscribe").addClass("in-process");
         $(".two").removeClass("open");
         $('.cust-info .textedit').attr('contenteditable', 'false');
         $('.cust-payment .textedit').attr('contenteditable', 'true');
         $(".three").addClass("open");
         $(".taxed").fadeIn();
         setTimeout(function () {
             $(".three").delay(500).show('slide', 1000);
             $("#next-2").fadeOut();
             $("#edit-address").delay(500).fadeIn();

         }, 1000);
         selectCard();
     } else {
         $("#required").fadeIn();
     }

 });

 $("#next-3").click(function () {
             $(".cust-payment:not([class~='done'])").addClass("done");
             $(".editable-subscribe").removeClass("in-process");
             $(".editable-subscribe").addClass("review");
             $(".three").removeClass("open");
             $("#cards img").hide();
             $(".radio").hide();
             $("#cards tr:not([class~='active'])").hide();
             $("#edit-address").delay(500).fadeIn();
             $("#edit-card").delay(500).fadeIn();
             $("#step-buy").delay(500).fadeIn();
    });*/
    //general behavior


    //FUNCTIONS

    function selectList() {

        var sel = $(".select");
        var list = $(".select-list");
        list.hide();
        //click
        sel.click(function () {
            $(this).closest("div").find(list).slideToggle();
        });
        //leave the input field
        sel.mouseleave(function () {

            if ($(".select-list:hover").length !== 0) {
                return;
            } else {
                list.delay(100).slideUp();
                //hideInfo();
            }
        });
        //leave the list
        list.mouseleave(function () {
            list.delay(100).slideUp();
            //hideInfo();
        });
        //choose the value
        $(".data").click(function () {
            $(this).closest(".dropdown").find(".input-field").html($(this).html());
            $(".select-list").delay(100).slideUp();
        });

    }

    function hideInfo() {
        var textBox;
        var help;
        textBox = $(this, ".textedit, .select");
        help = $(".help-line");
        help.delay(500).fadeOut();
        $('.detail-total').delay(200).slideUp();




    }

    function resetKey() {
        var textBox = $(this, ".textedit, .select");
        var help = textBox.closest(".item").find(".help-line");

        help.delay(100).fadeIn();
        $('.detail-total').delay(100).fadeOut();
        $("#calculate").delay(200).fadeIn();
        $("#next1").fadeOut();
    }

    function calculate() {
        $("#next1").hide();
        $("#calculate").click(function () {
            $('#calculate').fadeOut();
            $('.detail-total').delay(200).slideDown();
            $(".cust-details .select, .cust-details .textedit").css('pointer-events', 'none');
            $("#next1").delay(1000).fadeIn();
        });
        $(".detail-values").click(function () {
            $(".cust-details .select, .cust-details .textedit").css('pointer-events', 'auto');
        });

    }

    function inValid() {
        if ($(this).text().length === 0) {
            $("#required").fadeIn();
            $("#next-2").fadeOut();
            $(this).not('.regempty').addClass("reqempty");

        } else {

            $(this).removeClass("reqempty");
        }
        showNext();

    }

    function showNext() {
        if ($('.reqempty').length === 0) {
            $("#required").fadeOut();
            $("#next-2").delay(500).fadeIn();
        }
    }

    function editDetails() {
        $("#edit-details").click(function () {

            //  $(".editable-subscribe").removeClass("in-process");
            $(".cust-details").removeClass("done");
            $(".cust-info").addClass("done");
            $(".step").removeClass("open");
            $(".one").addClass("open");
            input1.attr('contenteditable', 'true');
            input2.attr('contenteditable', 'false');
            input3.attr('contenteditable', 'false');
            $(this).fadeOut();
            $("#next-1").delay(500).fadeIn();


        });
    }

    function selectCard() {
        var creditcard = $("#cards tr").not(".head, .addcc ");
        creditcard.click(function () {
            if ($(this).not('.active')) {
                $("#cards tr").removeClass("active");
                $(this).addClass("active");
                $("#next-3").delay(500).fadeIn();

            }
        });
    }


});
