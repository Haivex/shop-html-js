function showEmail()
{
    var email = document.getElementById("actualemail");
    var icon = document.getElementById("showemail");

    if( icon.classList.contains("fa-eye"))
    {
        icon.classList.replace("fa-eye", "fa-eye-slash");
    }
    else
    {
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }

    email.toggleAttribute("style");
    if(email.hasAttribute("style"))
    {
        email.setAttribute("style", "-webkit-text-security: square;");

    }
}
function hideEmail()
{
    var email = document.getElementById("actualemail");
    email.setAttribute("style", "-webkit-text-security: square;");
    var icon = document.getElementById("showemail");
    icon.classList.value = "far fa-eye-slash";
}