function showMenu()
{
    var rightmenu = document.getElementById("rightmenu");
    rightmenu.style.transform = "translateX(0)";
    document.body.style.overflowY = "hidden";

    var transparent = document.getElementById("transparent");
    transparent.style.backgroundColor = "transparent";
    transparent.style.display = "block";
}
function hideMenu()
{
    var rightmenu = document.getElementById("rightmenu");
    rightmenu.style.transform = "translateX(100%)";
    document.body.style.overflowY = "default";

    var transparent = document.getElementById("transparent");
    if(transparent.style.backgroundColor == "transparent") {
        transparent.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
    transparent.style.display = "none";
}
