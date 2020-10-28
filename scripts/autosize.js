function sizeInput(identificator)
{
    var fieldlength = document.getElementById(identificator).value.length;
    var fieldappearance = document.getElementById(identificator).size = fieldlength;
}
function moveCursor(identificator)
{
    var input = document.getElementById(identificator);
    setTimeout(function(){ input.selectionStart = input.selectionEnd = input.value.length; }, 100);
    localStorage.setItem("username", input.value);
}
function openInput(identificator)
{
    var input = document.getElementById(identificator);
    if(identificator == "newemailinput") {
        document.getElementById("newemail").style.display = "block";
    }
    input.focus();
}
function closeEmailInput()
{
    var regemail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(regemail.test(document.getElementById("newemailinput").value)) {
            document.getElementById("actualemail").value = document.getElementById("newemailinput").value ;
            document.getElementById("newemailinput").value = "";
            document.getElementById("newemail").style.display = "none";
            alert("Zmieniono e-mail");
        }
        else {
            document.getElementById("newemailinput").value = "";
            document.getElementById("newemail").style.display = "none";
            alert("Niepoprawny e-mail. E-mail nie został zmieniony");
        }
   
}
function checkLength() {
    var input = document.getElementById("username");
    if(input.value.length < 3) {
        alert("Nazwa za krótka. Nazwa nie została zmieniona");
        input.value = localStorage.getItem("username");
    }
    else {
        alert("Zmieniono nazwe uzytkownika");
    }
}
function changePasswordAccount() {
    localStorage.setItem("lastpass", document.getElementById("actualpassword").value);
    document.getElementById("actualpassword").value = "";
    document.getElementsByClassName("newpassword")[0].style.display = "block";
    document.getElementsByClassName("newpassword")[1].style.display = "block";
}
function closeNewPassword() {
    var regone = /[A-Z]/;
    var regtwo = /[0-9]/;
    var regthree = /(?=.*?[#?!@$%^&*-])/;

    if((document.getElementById("actualpassword").value != localStorage.getItem("lastpass")) || document.getElementsByClassName("newpasswordinput")[0].value == "" || (document.getElementsByClassName("newpasswordinput")[0].value != document.getElementsByClassName("newpasswordinput")[1].value ) ) {
        document.getElementById("actualpassword").value = localStorage.getItem("lastpass");
    document.getElementsByClassName("newpasswordinput")[0].value = "";
    document.getElementsByClassName("newpasswordinput")[1].value = "";
    document.getElementsByClassName("newpassword")[0].style.display = "none";
    document.getElementsByClassName("newpassword")[1].style.display = "none";
    alert("Niepoprawne dane. Hasło nie zostało zmienione");
    }
    else {
        if(!regone.test(document.getElementsByClassName("newpasswordinput")[0].value) || !regtwo.test(document.getElementsByClassName("newpasswordinput")[0].value) || !regthree.test(document.getElementsByClassName("newpasswordinput")[0].value)) {
            document.getElementById("actualpassword").value = localStorage.getItem("lastpass");
    document.getElementsByClassName("newpasswordinput")[0].value = "";
    document.getElementsByClassName("newpasswordinput")[1].value = "";
    document.getElementsByClassName("newpassword")[0].style.display = "none";
    document.getElementsByClassName("newpassword")[1].style.display = "none";
    alert("Hasło zbyt proste. Hasło nie zostało zmienione");
        }
        else {
        document.getElementById("actualpassword").value = document.getElementsByClassName("newpasswordinput")[1].value;
    document.getElementsByClassName("newpasswordinput")[0].value = "";
    document.getElementsByClassName("newpasswordinput")[1].value = "";
    document.getElementsByClassName("newpassword")[0].style.display = "none";
    document.getElementsByClassName("newpassword")[1].style.display = "none";
    alert("Zmieniono hasło");
        }
    }
}