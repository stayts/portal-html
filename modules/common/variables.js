var $;
var st = $(this).closest(".step");
var next_st = $(this).closest(".step").nextAll("div.step:first");
var last_st = $(this).closest(".step").last();
var list = st.find(".select-list");
var help = st.find(".help-line");
var reqtext = $("#required");
var calculate = $("#calculate");
var list = st.find(".select-list");
var totalcount = calculate.closest('div').find(".totalcount");
var btdone = st.find(".done");
var btnext = st.find('.next');
var btedit = st.find(".edit");
var txt = $(".txt");
var dropdown
var checkbox = $(".checkbox");
var select = $(".select");

var container;
var st_one = container.find(".step:first");
var allsteps = container.find(".step");
