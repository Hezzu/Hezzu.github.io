document.querySelector("Video").playbackRate = .6;
var settVis = true;
const settings = document.getElementById("settings");

const rootN = document.querySelector(":root");
let varChanger = getComputedStyle(rootN);
let bCP = document.getElementById("backgCP");
let mCP = document.getElementById("mainCP");
let sCP = document.getElementById("secCP");
let tCP = document.getElementById("textCP");

function menuOpen(){
    if(!settVis){
        settings.style.opacity = 0;
        settVis = !settVis;
    }else{
        settings.style.opacity = 1;
        settVis = !settVis;
    }

}
bCP.addEventListener('input', function() {
    document.querySelector(":root").style.setProperty('--Background', bCP.value);
   });
mCP.addEventListener('input', function() {
    document.querySelector(":root").style.setProperty('--MainPane', mCP.value);
   });
sCP.addEventListener('input', function() {
    document.querySelector(":root").style.setProperty('--SubColor', sCP.value);
   });
tCP.addEventListener('input', function() {
    document.querySelector(":root").style.setProperty('--TextColor', tCP.value);
   });
