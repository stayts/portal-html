//NEW SUB!

var $;
/*
var container;
container = $("#sub-create");
container.find(".txt").attr('contenteditable', 'false');
container.find(".next").addClass("inactive");
var st = container.find(".step:first");
st.addClass(".open");
st.find(".txt").attr('contenteditable', 'true');*/


$(".next").click(stepChange(".step"));
//btsave.click(stepChange);


function stepChange(obj) {
    st = $(this).closest(obj.className);
    st.toggleClass(" done open");
    st.find(".txt").toggleAttr('contenteditable', 'true', 'false');
    $(".acc-head").toggleClass('inactive');


}


var btdone = $(".done:visible");
var btnext = $('.next:visible');
var next_st = st.nextAll("div.step:first");
var last_st = st.last();

$("#closenew-sub").click(function () {
    $(".modal").fadeOut();
});


//activate next button

//validation
function inValidNewSub() {
    inValid();

    $.each(req_now, function () {
        if ($(this).text() === '') {
            nextInact();
            return false;

        } else {

            reqtext.text("").fadeOut();
            if (calculate.length === 0) {
                nextAct();
            }

        }

    });
}

//select list item
function selectListNewSub() {
    selectList();
    $(".data").click(function () {
        if (list.is(":visible")) {
            nextInact();
        }
    });
}

//do to next step
function NextStepSub() {
    alert("next");
    nextStep();
    closeSubStep();
}
checkbox.click(function () {
    checkBox();

    if (checkbox.hasClass("enabled")) {
        $("#billincc").addClass("copied").html($(".address-list").html()).slideDown();
    } else {
        $("#billincc").removeClass("copied").html($("#ccaddr").html()).slideDown();
    }


});
//finish editing step (in wizard and in edit mode)
function closeSubStep() {
    if (st.find(".content").hasClass("cust-payment")) {
        container.addClass("review-container");
        st.addClass("review").removeClass("review-edit");
        $(this).hide();
        $("#new-card").slideUp();
    } else {
        next_st.hide().removeClass("not-started");
    }
}

//open step for editing (edit mode)
function editStepSub() {
    stepChange();
    if (container.hasClass("review-container")) {
        btdone.show();
        btnext.hide();
        container.removeClass("review-container");
        st.removeClass("review").addClass("review-edit");
    }

}
//select CC function

//add cc function
$("#add-card").click(function () {
    $("#new-card").slideDown();

});

////
////nonspecific step functions

function nextStep() {
    stepChangeSub();
    fancySlide(next_st);
}

function showNext() {
    if (next_st.find('.req-text').length === 0) //all req fields are filled
    {
        alert('boo');
        $(".required").text("").fadeOut();
        next_st.find(".next").removeClass("inactive");
    }
    if (next_st.find('#calculate').length === 0) {
        next_st.find(".next").addClass("inactive");
    }
}

function stepChangeSub() {
    st.add(next_st).toggleClass("open done");
    txt.toggleAttr('contenteditable', 'false', 'true');
    req_now.toggleClass('req-text');
    if (!next_st === last_st) {
        next_st.find(".next").addClass("inactive");
        showNext();
    }
}

function nextAct() {
    st.find(".next").removeClass("inactive");
}
//deactivate next button
function nextInact() {
    st.find(".next").addClass("inactive");
}
