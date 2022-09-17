function changeTheme(theme){
switch(theme){
    case "black":
        document.body.style.setProperty('--Website-background', '#131313')
        document.body.style.background = "#131313"
        document.body.style.setProperty('--Header-background', '#474747')
        document.body.style.setProperty('--HeaderSubDivs-background', '#818181')
        document.body.style.setProperty('--TopControls-background', '#4d4d4d')
        break
    case "white":
        document.body.style.setProperty('--Website-background', '#ffffff')
        document.body.style.background = "#ffffff"
        document.body.style.setProperty('--Header-background', '#bbbbbb')
        document.body.style.setProperty('--HeaderSubDivs-background', '#7c7c7c')
        document.body.style.setProperty('--TopControls-background', '#adadad')
        break
    case "color":
        document.body.style.setProperty('--Website-background', '#130044')
        document.body.style.background = "url(source/ColorBackground.webp)"
        document.body.style.setProperty('--Header-background', '#0099ff')
        document.body.style.setProperty('--HeaderSubDivs-background', '#00d9ff')
        document.body.style.setProperty('--TopControls-background', '#71009e')
        break
    case "contrast":
        document.body.style.setProperty('--Website-background', '#000000')
        document.body.style.background = "#000000"
        document.body.style.setProperty('--Header-background', '#bbbbbb')
        document.body.style.setProperty('--HeaderSubDivs-background', '#ffffff')
        document.body.style.setProperty('--TopControls-background', '#dddddd')
        break
    default:
        console.log("Error");
}
}
