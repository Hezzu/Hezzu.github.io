(async() =>  {var gHList = await fetch("https://api.github.com/users/Hezzu/repos").then(e=>e.json());
let gHDiv = document.getElementById("lWrapper");
    gHDiv.innerHTML += gHList.map(e=>
        `<div class = "gHList">
            <a href="//github.com/${e.full_name}">${e.name}</a>
            <a><br/>${e.description}</a>
        </div>` 
    ).join("");
})();
