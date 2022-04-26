var type
function updateTime(type) {
    var dateInfo = new Date();
    this.type = type
  
    /* time */
    var hr = dateInfo.getHours(),
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes();
  
    var currentTime = hr + ":" + _min ;
  
    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      day = dateInfo.getDate();
  
    // store date
    var currentDate = day + " " +  month[dateInfo.getMonth()] + " " + dateInfo.getFullYear();
    var tBlock = document.getElementById(dateInfo.getDay());
  
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
    tBlock.style.background = "#ff0015";

     if(type)
    {
        if (dateInfo.getHours() == 0) {
          hr = 12;
        } else if (dateInfo.getHours() > 12) {
          hr = dateInfo.getHours() - 12;
        } else {
          hr = dateInfo.getHours();
        }
        ampm = (dateInfo.getHours() > 12) ? "PM" : "AM";
        document.getElementsByClassName("ampm")[0].innerHTML = ampm;
        var currentTime = hr + ":" + _min;
        document.getElementsByClassName("hms")[0].innerHTML = currentTime;
      } else{
        document.getElementsByClassName("ampm")[0].innerHTML = "";
      }
};

  // print time and date once, then update them every second
  updateTime(type);
  setInterval(() => {
    updateTime(type)
}, 1000);
