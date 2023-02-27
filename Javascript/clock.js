var type = true;
var dateInfo = new Date();
function updateTime() {
  
    /* time */
    var hr = dateInfo.getHours(),
        _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes();
    var currentTime = hr + ":" + _min  + " ";
  
    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    /* date */
};
function changeTimeType(){
  if(type)
    {
        if (dateInfo.getHours() == 0) {
          hr = 12;
        } else if (dateInfo.getHours() > 12) {
          hr = dateInfo.getHours() - 12;
        } else {
          hr = dateInfo.getHours();
        }
        var am = document.getElementsByClassName("am")[0];
        var pm = document.getElementsByClassName("pm")[0];
        if(dateInfo.getHours() > 12)
        {
          am.innerHTML = "AM";
          pm.innerHTML = "PM";
          pm.style.color = "#ff0015";
          am.style.color = "#000000";
        }else{
          am.innerHTML = "AM";
          pm.innerHTML = "PM";
          am.style.color = "#ff0015";
          pm.style.color = "#000000";
        }
      } else{
        document.getElementsByClassName("am")[0].innerHTML = "";
        document.getElementsByClassName("pm")[0].innerHTML = "";
      }
      type = !type
    }

  // print time and date once, then update them every second
  updateTime(type);
  setInterval(() => {
    updateTime(type)
}, 1000);
