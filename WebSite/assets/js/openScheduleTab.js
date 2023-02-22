/*adjusted from https://www.w3schools.com/howto/howto_js_vertical_tabs.asp*/
function openScheduleTab(evt, schedTabName) {
    var i, schedTabcontent, schedTablinks;
    schedTabcontent = document.getElementsByClassName("schedTabcontent");
    for (i = 0; i < schedTabcontent.length; i++) {
      schedTabcontent[i].style.display = "none";
    }
    schedTablinks = document.getElementsByClassName("schedTablinks");
    for (i = 0; i < schedTablinks.length; i++) {
      schedTablinks[i].className = schedTablinks[i].className.replace(" active", "");
    }
    document.getElementById(schedTabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 
  document.getElementById("defaultOpen").click();