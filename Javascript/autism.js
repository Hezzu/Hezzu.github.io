var checker = false;
function huerot(){
    var headl = document.querySelector("h1");

    if(checker == false){
    headl.classList.add("anim");
    document.body.classList.add("anim");
    }else{
        headl.classList.remove("anim");
        document.body.classList.remove("anim");
    }

    checker = !checker;
};