var checker = false;
function huerot(){
    var cat = document.getElementById("cat");
    var headl = document.querySelector("h1");
    var timec = document.getElementsByClassName("clockButton")[0];
    var timecs = document.getElementsByClassName("clockButton")[1];

    if(checker == false){
    cat.classList.add("anim");
    headl.classList.add("anim");
    timec.classList.add("anim");
    timecs.classList.add("anim");
    document.body.classList.add("anim");
    }else{
        cat.classList.remove("anim");
        headl.classList.remove("anim");
        timec.classList.remove("anim");
        timecs.classList.remove("anim");
        document.body.classList.remove("anim");
    }

    checker = !checker;
};