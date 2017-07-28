////sub.html
var btedit = $(".edit");
var btsave = $(".save");
var container;
var st;


selectList();
checkBox();

container = $("#container");
container.find(".txt").attr('contenteditable', 'false');
st = $(".acc-content");

$(".acc-head").mouseup(function () {
    st = $(this).next(".acc-content");
});

btedit.click(stepChange);
btsave.click(stepChange);



function stepChange() {
    st = $(this).closest(".acc-content");
    st.toggleClass(" done open");
    st.find(".txt").toggleAttr('contenteditable', 'true', 'false');

    $(".acc-head").toggleClass('inactive');


}


$("#accordion").accordion({

    heightStyle: "content",
    collapsible: true,
    active: false

});

alert('oppa sub.js');

alert("acccc");
$("#subscribe").on("click", function () {
    $("#modal").load("/modules/new-sub/new-sub.html");
    alert('Load HTML newsub was performed.');

});
$("#yes").on("click", function () {
    window.location.href = '';
});
//cancel-btn
$("#no").on("click", function () {
    $("#modal").load("");
});
