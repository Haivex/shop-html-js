     //na dole skrypt bo nie zad
    var password = document.getElementById("passwordfieldone");

    password.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("login-button").click();
    }
});
    var selectedsearch = -1;
    var searchbar = document.getElementById("searching");
    document.getElementsByClassName("onesearch").length;
    searchbar.addEventListener("keydown", function(event) {
        if((event.key === "ArrowUp") || (event.key === "ArrowDown")) {
            event.preventDefault();
        }
    });
    searchbar.addEventListener("keyup", function(event) {
        if(event.key === "ArrowDown") {
            if(document.getElementsByClassName("onesearch").length > 0) {
                if(selectedsearch < document.getElementsByClassName("onesearch").length)
                {
                    if((selectedsearch > -1) && selectedsearch < document.getElementsByClassName("onesearch").length )
                    {
                        document.getElementsByClassName("selectedsearching")[0].classList.remove("selectedsearching");
                        selectedsearch++;
                    }
                    else if(selectedsearch == -1) {
                        selectedsearch++;
                    }
                    if(selectedsearch == document.getElementsByClassName("onesearch").length)
                    {
                        selectedsearch--;
                    }
                    document.getElementsByClassName("onesearch")[selectedsearch].classList.add("selectedsearching");
                    var link = document.getElementsByClassName("onesearch")[selectedsearch].href;
                }

            }
        }

        else if(event.key === "ArrowUp") {
            if(document.getElementsByClassName("onesearch").length > 0) {
                if(selectedsearch < document.getElementsByClassName("onesearch").length)
                {
                    if((selectedsearch > -1))
                    {
                        document.getElementsByClassName("selectedsearching")[0].classList.remove("selectedsearching");
                        selectedsearch--;
                    }
                    else if(selectedsearch == document.getElementsByClassName("onesearch").length) {
                        selectedsearch--;
                    }
                    if(selectedsearch == -1)
                    {
                        selectedsearch++;
                    }
                    document.getElementsByClassName("onesearch")[selectedsearch].classList.add("selectedsearching");
                    var link = document.getElementsByClassName("onesearch")[selectedsearch].href;
                }

            }
        }

        else if(event.key === "Enter") {
            if(document.getElementsByClassName("onesearch").length > 0) {
                    var link = document.getElementsByClassName("onesearch")[selectedsearch].href;
                    location.replace(link);

            }
        }
        else {
            selectedsearch = -1;
            return;
        }
    });
    