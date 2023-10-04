(async() =>  {var gHList = await fetch("https://api.github.com/users/Hezzu/repos").then(e=>e.json());
    console.log(gHList);
let gHDiv = document.getElementById("cWindow");
    gHDiv.innerHTML = gHList.map(e=>
        `<div class = "gHList">
            <a href="//github.com/${e.full_name}">${e.name}</a>
        </div>` 
    ).join("");
})();
