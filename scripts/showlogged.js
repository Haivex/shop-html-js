function showLogged()
{
    if(parseInt(sessionStorage.getItem("storagelogged"))==1)
    {
        var login = document.getElementById("login");
        login.style.display = "none";
        var account = document.getElementById("account");

        document.getElementsByClassName("account-text")[0].innerHTML = sessionStorage.getItem("username");
        document.getElementById("accountbar").innerHTML = "Zarządzanie kontem "+sessionStorage.getItem("username");
        
        account.style.display = "block";
    }
}
function logOut()
{
    var login = document.getElementById("login");
    login.style.display = "block";
    var account = document.getElementById("account");
     account.style.display = "none";

    sessionStorage.removeItem("storagelogged");
    location.reload();
}