/*
function valueChanged()
{
    if($('.allDayEvent').is(":checked"))   
        $(".eventTime").hide();
    else
        $(".eventTime").show();
} */


$(".allDayEvent").click(function() {
    if($(this).is(":checked")) {
        $(".eventTime").hide(300);
    } else {
        $(".eventTime").show(200);
    } });