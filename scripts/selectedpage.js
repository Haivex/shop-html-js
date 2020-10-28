function loadPage()
{
    var selectedoption = document.getElementById("producenci").value;
    window.open(selectedoption, "_self");
    
}
function changeArrow()
{
    var selectform = document.getElementById("producenci");
    if(selectform.length == 0)
    {
     selectform.style.backgroundImage = "url(pictures/caret-square-down-regular.svg"; 
    }
}