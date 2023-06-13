document.querySelector("Video").playbackRate = .6;
var settVis = true;
const settings = document.getElementById("settings");

let bCP = document.getElementById("backgCP");
let mCP = document.getElementById("mainCP");
let sCP = document.getElementById("secCP");
let tCP = document.getElementById("textCP");

function menuOpen(){
    if(!settVis){
        settings.style.transform = "scale(0)";
        // settings.style.opacity = 0;
        // settings.style.display = "none";
        settVis = !settVis;
    }else{
        // settings.style.display = "block";
        // settings.style.opacity = 1;
        settings.style.transform = "scale(1)";
        settVis = !settVis;
    }

}
bCP.addEventListener('input', () => {
    document.querySelector(":root").style.setProperty('--Background', bCP.value);
   });
mCP.addEventListener('input', () => {
    document.querySelector(":root").style.setProperty('--MainPane', mCP.value);
   });
sCP.addEventListener('input', () => {
    document.querySelector(":root").style.setProperty('--SubColor', sCP.value);
   });
tCP.addEventListener('input', () => {
    document.querySelector(":root").style.setProperty('--TextColor', tCP.value);
   });
