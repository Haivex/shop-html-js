function changeTheme()
{
    var radios = document.getElementsByClassName("colorthemes");
    var linkcatch = document.getElementsByTagName("link")[0];
    var linkcatch2 = document.getElementsByTagName("link")[1];
    for(var i=0; i<radios.length; i++)
    {
        if(radios[i].checked)
        {   
            if(i==0)
            {
                linkcatch.href = "appearance.css";
                linkcatch2.href = "account.css";
                localStorage.setItem("theme", 0);
                break;
            }
            else{
                linkcatch.href = "darkthemeappearance.css";
                linkcatch2.href = "darkthemeaccount.css";
                localStorage.setItem("theme", 1);
                break;
            }

        }
    }
}
function changeAllTheme()
{
    if(parseInt(localStorage.getItem("theme")) == 1 && parseInt(sessionStorage.getItem("storagelogged")) == 1)
    {
        var linkcatch = document.getElementsByTagName("link")[0];
        linkcatch.href = "darkthemeappearance.css";
        
    }
}
function changeManagmentRadio() {
    if(parseInt(localStorage.getItem("theme")) == 1)
    {
        var radios = document.getElementsByClassName("colorthemes");
        radios[1].checked = true;

        var linkcatch = document.getElementsByTagName("link")[0];
        var linkcatch2 = document.getElementsByTagName("link")[1];
        linkcatch.href = "darkthemeappearance.css";
        linkcatch2.href = "darkthemeaccount.css";
    }
}
function changeAvailableTheme()
{
    if(parseInt(localStorage.getItem("theme")) == 1)
    {
    var linkcatch = document.getElementsByTagName("link")[3];
    linkcatch.href = "darkavailableproduct.css";
    }
}
function changeNoProductTheme()
{
    if(parseInt(localStorage.getItem("theme")) == 1)
    {
    var linkcatch = document.getElementsByTagName("link")[3];
    linkcatch.href = "darknoproduct.css";
    }
}
function changeSearchingTheme()
{
    if(parseInt(localStorage.getItem("theme")) == 1)
    {
    var linkcatch = document.getElementsByTagName("link")[3];
    linkcatch.href = "darksearching.css";
    }
}