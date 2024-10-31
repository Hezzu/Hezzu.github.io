let clockType = false;
function updateTime() {

  
  let dateInfo = new Date();
  let hr, _min;
  let clock = document.getElementById("clock");
  hr = dateInfo.getHours(),
  _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes();

  if(clockType)
    {
        if (dateInfo.getHours() == 0) {
          hr = 12;
        } else if (dateInfo.getHours() > 12) {
          hr = dateInfo.getHours() - 12;
        } else {
          hr = dateInfo.getHours();
        }
        let am = document.getElementsByClassName("am")[0];
        let pm = document.getElementsByClassName("pm")[0];
        if(dateInfo.getHours() > 12)
        {
          am.innerHTML = "AM";
          pm.innerHTML = "PM";
          pm.style.color = getComputedStyle(document.documentElement).getPropertyValue("--TextColor");
          am.style.opacity = "0.5";
        }else{
          am.innerHTML = "AM";
          pm.innerHTML = "PM";
          am.style.color = getComputedStyle(document.documentElement).getPropertyValue("--TextColor");
          pm.style.opacity = "0.5";
        }
      } else{
        document.getElementsByClassName("am")[0].innerHTML = "";
        document.getElementsByClassName("pm")[0].innerHTML = "";
      }
  
    /* time */

    let currentTime = hr + ":" + _min  + " ";
  
    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  };
function changeTimeType(){
  clockType = !clockType;
  clock.style.opacity = 0;
  setTimeout(()=> {
    updateTime();
    clock.style.opacity = 1;
  }, 100);
}
updateTime(clockType);
setInterval(() => {
  updateTime()
}, 1000);


// End of Clock Script | Start of Name Change
let nickVar = true;
function nameChange(){
  nickVar = !nickVar;
  let nick = document.getElementById("nick");

  nickVar == false ? nick.innerHTML = "🌸Megu Megu🌸" : nick.innerHTML = "🌸Hezzu🌸";
}

// End of Name Change | Start of List button
let gHLWrapper = document.getElementById("lWrapper");
let iILWrapper = document.getElementById("gWrapper");
let expdr = document.getElementById("gHExpdr");
let checker = true;
function collapsable(){
  gHLWrapper.classList.toggle("collapsed");
  if(checker){
    expdr.innerHTML = "expand_less";
    checker = !checker;
  }else{
    expdr.innerHTML = "expand_more";
    checker = !checker;
  }
}
  function collapsableG(){
    iILWrapper.classList.toggle("collapsed");
    if(checker){
      expdr.innerHTML = "expand_less";
      checker = !checker;
    }else{
      expdr.innerHTML = "expand_more";
      checker = !checker;
    }
}