

function loginCredentialsCheck() {
    var logininput = document.getElementsByClassName("loginfield")[0];
    var passwordinput = document.getElementsByClassName("passwordfield")[0];

    function logSucc() {
        var logininput = document.getElementsByClassName("loginfield")[0];
        var passwordinput = document.getElementsByClassName("passwordfield")[0];
        logininput.style.border = "none";
        logininput.style.backgroundColor = "white";
        passwordinput.style.border = "none";
        passwordinput.style.backgroundColor = "white";

        var login = document.getElementById("login");
        login.style.display = "none";
        var account = document.getElementById("account");
        account.style.display = "block";
        document.getElementById("loginalert").style.display = "none";
        /*Close login*/
        var spanregister = document.getElementById("registerformdisplay");
        spanregister.style.display = "none";
        var spanlogin = document.getElementById("loginformdisplay");
        spanlogin.style.display = "block";
        var form = document.getElementById("loginform");
        form.style.display = "none";
        var transparent = document.getElementById("transparent");
        transparent.style.display = "none";
        var bodyelem = document.getElementsByTagName("body")[0];
        bodyelem.style.position = "static";
        bodyelem.style.overflowY = "visible";
        bodyelem.style.width = "100%";
        bodyelem.style.height = "100%";

        var logininput = document.getElementsByClassName("loginfield")[0];
        var passwordinput = document.getElementsByClassName("passwordfield")[0];
        logininput.style.border = "none";
        logininput.style.backgroundColor = "white";
        passwordinput.style.border = "none";
        passwordinput.style.backgroundColor = "white";

        sessionStorage.setItem("username", logininput.value);

        logininput.value = "";
        passwordinput.value = "";

        sessionStorage.setItem("storagelogged", 1);
        location.reload();
    }
    
    var db;
    var dbReq = indexedDB.open('mydatabase', 1);
   
     dbReq.onupgradeneeded = function(event) {
       // Set the db variable to our database so we can use it!  
       db = event.target.result;
     
       // Create an object store named notes. Object stores
       // in databases are where data are stored.
       let users = db.createObjectStore('users', {autoIncrement: true});
     }
     dbReq.onsuccess = function(event) {
       db = event.target.result;
       let tx = db.transaction(['users'], 'readonly');
    let store = tx.objectStore('users');
    // Set up a request to get the sticky note with the key 1
    let req = store.getAll();
    // We can use the note if the request succeeds, getting it in the
    // onsuccess handler
    req.onsuccess = function(event) {
    let user = event.target.result;
   for(let usr of user) {
    if (usr.login == logininput.value && usr.password == passwordinput.value) {
        console.log("Znaleziono");
        
        logSucc();

        return;
    } else {
        console.log("user not found");
    }
    logininput.style.border = "4px solid red";
    logininput.style.backgroundColor = "#f18973";
    passwordinput.style.border = "4px solid red";
    passwordinput.style.backgroundColor = "#f18973";
    document.getElementById("loginalert").style.display = "block";
   }
    
    }
    // If we get an error, like that the note wasn't in the object
    // store, we handle the error in the onerror handler
    req.onerror = function(event) {
    alert('error getting note 1 ' + event.target.errorCode);
    }
        }
        dbReq.onerror = function(event) {
        alert('error opening database ' + event.target.errorCode);
        // Set up an object store and transaction

}
}
var counter = 0;
    var isFullfilled = [0, 0, 0, 0, 0, 0, 0, 0];

function firstPasswordCheck() {
    var passwordone = document.getElementsByClassName("passwordfield")[1];
    var passwordtwo = document.getElementsByClassName("passwordfield")[2];
    var regone = /[A-Z]/;
    var regtwo = /[0-9]/;
    var regthree = /(?=.*?[#?!@$%^&*-])/;
    
    /*
    document.getElementsByClassName("requirement")[0].style.color = "red";
    document.getElementsByClassName("fa-times")[0].classList.replace("fa-check", "fa-times");
    document.getElementsByClassName("requirement")[1].style.color = "red";
    document.getElementsByClassName("fa-times")[1].classList.replace("fa-check", "fa-times");
    document.getElementsByClassName("requirement")[2].style.color = "red";
    document.getElementsByClassName("fa-times")[2].classList.replace("fa-check", "fa-times");
    document.getElementsByClassName("requirement")[3].style.color = "red";
    document.getElementsByClassName("fa-times")[3].classList.replace("fa-check", "fa-times");
    */

    if ((passwordone.value.length >= 8) && (passwordone.value.length <= 16)) {
        isFullfilled[0] = 1;
        document.getElementsByClassName("requirement")[0].style.color = "green";
        document.getElementById("firstRequirement").classList.replace("fa-times", "fa-check");
    }
    else {
        isFullfilled[0] = 0;
        document.getElementsByClassName("requirement")[0].style.color = "red";
        document.getElementById("firstRequirement").classList.replace("fa-check", "fa-times");
    }

    if (regone.test(passwordone.value)) {
        isFullfilled[1] = 1;
        document.getElementsByClassName("requirement")[1].style.color = "green";
        document.getElementById("secondRequirement").classList.replace("fa-times", "fa-check");
    }
    else {
        isFullfilled[1] = 0;
        document.getElementsByClassName("requirement")[1].style.color = "red";
        document.getElementById("secondRequirement").classList.replace("fa-check", "fa-times");
    }

    if (regtwo.test(passwordone.value)) {
        isFullfilled[2] = 1;
        document.getElementsByClassName("requirement")[2].style.color = "green";
        document.getElementById("thirdRequirement").classList.replace("fa-times", "fa-check");
    }
    else {
        isFullfilled[2] = 0;
        document.getElementsByClassName("requirement")[2].style.color = "red";
        document.getElementById("thirdRequirement").classList.replace("fa-check", "fa-times");
    }

    if (regthree.test(passwordone.value)) {
        isFullfilled[3] = 1;
        document.getElementsByClassName("requirement")[3].style.color = "green";
        document.getElementById("fourthRequirement").classList.replace("fa-times", "fa-check");
    }
    else {
        isFullfilled[3] = 0;
        document.getElementsByClassName("requirement")[3].style.color = "red";
        document.getElementById("fourthRequirement").classList.replace("fa-check", "fa-times");
    }

    if(isFullfilled[0] == 1 && isFullfilled[1] == 1 && isFullfilled[2] == 1 && isFullfilled[3] == 1) {
        document.getElementsByClassName("passwordfield")[1].style.border = "5px solid green";
    }
}

    function secondPasswordCheck() {

        var passwordone = document.getElementsByClassName("passwordfield")[1];
    var passwordtwo = document.getElementsByClassName("passwordfield")[2];
    var regone = /[A-Z]/;
    var regtwo = /[0-9]/;
    var regthree = /(?=.*?[#?!@$%^&*-])/;

        if ((passwordone.value == passwordtwo.value) && (passwordone.value.length >= 1) && (passwordtwo.value.length >=1)) {
            isFullfilled[4] = 1;
            document.getElementsByClassName("requirement")[4].style.color = "green";
            document.getElementById("fifthRequirement").classList.replace("fa-times", "fa-check");
        }
        else {
            isFullfilled[4] = 0;
            document.getElementsByClassName("requirement")[4].style.color = "red";
            document.getElementById("fifthRequirement").classList.replace("fa-check", "fa-times");
        }

        if(isFullfilled[0] == 1 && isFullfilled[1] == 1 && isFullfilled[2] == 1 && isFullfilled[3] == 1 && isFullfilled[4] == 1)  {
            document.getElementsByClassName("passwordfield")[2].style.border = "5px solid green";
        }

    }

    async function checkInDatabase() {
       let noemail = true;
    document.getElementById("registeremail").value;

    var db;
    var dbReq = indexedDB.open('mydatabase', 1);
   
     dbReq.onupgradeneeded = function(event) {
       // Set the db variable to our database so we can use it!  
       db = event.target.result;
     
       // Create an object store named notes. Object stores
       // in databases are where data are stored.
       let users = db.createObjectStore('users', {autoIncrement: true});
     }
     dbReq.onsuccess =  function(event) {
       db = event.target.result;
       let tx = db.transaction(['users'], 'readonly');
    let store = tx.objectStore('users');
    // Set up a request to get the sticky note with the key 1
    let req = store.getAll();
    // We can use the note if the request succeeds, getting it in the
    // onsuccess handler
    req.onsuccess = function(event) {
    let user = event.target.result;
   for(let usr of user) {
    if (usr.login == document.getElementById("registeremail").value) {
        console.log("Znaleziono");
        noemail = false;
        return;
    } else {
        console.log("user not found");
    }
   }
}
    }
    await new Promise((resolve, reject) => setTimeout(resolve, 100));
    console.log("Wartosc: "+noemail);
    return noemail;
}

    async function emailCheck() {
        let result = await checkInDatabase();
        var regemail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(regemail.test(document.getElementById("registeremail").value)) {
            var registeremail = document.getElementById("registeremail")
            document.getElementsByClassName("emailrequirement")[0].style.color = "green";
            document.getElementById("email1Requirement").classList.replace("fa-times", "fa-check");
            isFullfilled[6] = 1;
        }
            else {
                document.getElementsByClassName("emailrequirement")[0].style.color = "red";
                document.getElementById("email1Requirement").classList.replace("fa-check", "fa-times");
                isFullfilled[6] = 0;
            }

            if(result == true) {
                document.getElementsByClassName("emailrequirement")[1].style.color = "green";
                document.getElementById("email2Requirement").classList.replace("fa-times", "fa-check");
                isFullfilled[5] = 1;
        }
        else {
            document.getElementsByClassName("emailrequirement")[1].style.color = "red";
            document.getElementById("email2Requirement").classList.replace("fa-check", "fa-times");
            isFullfilled[5] = 0;
        }
            if(isFullfilled[5] == 1 && isFullfilled[6] == 1) {
                document.getElementById("email2Requirement").classList.replace("fa-times", "fa-check");
                document.getElementById("registeremail").style.border = "5px solid green";
            }
    }

    function checkRegulations() {
        if(document.getElementById("regulationscheckbox").checked)
        {
            isFullfilled[7] = 1;
        }
        else {
            isFullfilled[7] = 0;
        }
    }

    function registerCredentialsCheck() {
        counter = 0;
        for(var el of isFullfilled) {
            if(el == 1)
            {
                counter++;
            }
        }
        if(counter==8) {
            alert("Dodano użytkownika");

            var db;
 var dbReq = indexedDB.open('mydatabase', 1);

  dbReq.onupgradeneeded = function(event) {
    // Set the db variable to our database so we can use it!  
    db = event.target.result;
  
    // Create an object store named notes. Object stores
    // in databases are where data are stored.
    let users = db.createObjectStore('users', {autoIncrement: true});
  }
  dbReq.onsuccess = function(event) {
    db = event.target.result;
    addUser(db, document.getElementById("registeremail").value, document.getElementsByClassName("passwordfield")[1].value);
  }
  dbReq.onerror = function(event) {
    alert('error opening database ' + event.target.errorCode);
  }

  //******************************************************************* */

  function addUser(db, login, password) {
    // Start a database transaction and get the notes object store
    let tx = db.transaction(['users'], 'readwrite');
    let store = tx.objectStore('users');
    // Put the sticky note into the object store
    let user = {login: login, password: password};
    store.add(user);
    // Wait for the database transaction to complete
    tx.oncomplete = function() { console.log('stored user!') }
    tx.onerror = function(event) {
      alert('error storing note ' + event.target.errorCode);
    }
  }

        }
        else {
            alert("Popraw dane");
        }
    }

    function logOutRefresh() {
        sessionStorage.removeItem("storagelogged");
        sessionStorage.removeItem("username");
        location.replace("index.html");
    }

    function showPasswordReq() {
        document.getElementById("passwordrequirements").style.display = "block";
        document.getElementById("loginform").style.height = "430px";
    }

    function hidePasswordReq() {
        document.getElementById("passwordrequirements").style.display = "none";
        document.getElementById("loginform").style.height = "400px";
    }

    function showEmailReq() {
        document.getElementById("emailrequirements").style.display = "block";
    }

    function hideEmailReq() {
        document.getElementById("emailrequirements").style.display = "none";
    }