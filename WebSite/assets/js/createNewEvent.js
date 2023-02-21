
/**window.onload = function(){
    document.getElementById("submitNewEvent").onclick=function(){
        var eventName = $("#newEventName").val();
        var eventDate = $("#newEventDate").val();
        var allDayEvent = $("#allDayEvent:checked").val();
        var startTime = $("#startTime").val();
        var endTime = $("#endTime").val();
        var reoccuring = $("#reoccuring:checked").val();
    
        var daySchede = document.getElementById("daySched");
        var newRow = daySchede.insertRow(1);
        var leftCell = daySchede.insertCell(0);
        var rightCell = daySchede.insertCell(1);
    
        leftCell.innerHTML = startTime;
        rightCell.innerHTML = eventName;
    


}
}
  

/** 
$("#submitNewEvent").click(function(){
    var eventName = $("#newEventName").val();
    var eventDate = $("#newEventDate").val();
    var allDayEvent = $("#allDayEvent:checked").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var reoccuring = $("#reoccuring:checked").val();
    // if (username && password) {
      //  createEvent({subject: eventName, eventDate: eventDate, startTime: startTime, endTime: endTime, allDayEvent: allDayEvent, reoccuring: reoccuring});

        var daySched = document.getElementById("daySched");
        var newRow = daySched.insertRow(-1);
        var leftCell = daySched.insertCell(0);
        var rightCell = daySched.insertCell(1);

        leftCell.innerHTML = startTime;
        rightCell.innerHTML = eventName;
    if(eventName && eventDate){
        $.post(
            '/',
             {id: id, subject: eventName, /*description: eventDesc, eventDate: eventDate, startTime: startTime, endTime: endTime, allDayEvent: allDayEvent, /*location: eventLoc, reoccuring: reoccuring },
            function () {
            //  window.location = "/";
    
    
            }
        ).fail(function(res){
             alert("Error: " + res.getResponseHeader("error"));
         });
    
        
    }
    alert("Event Name: " + eventName + "start Time: " + startTime);
});*/