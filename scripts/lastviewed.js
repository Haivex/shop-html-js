function showlastViewed() {

    var lastviewedcontainer = document.getElementById("lastviewedcontainer");
    var secondlastviewed = document.getElementById("secondlastviewed");

    var singleviewedcontainer = document.getElementsByClassName("singleviewedcontainer")[0];
    var singleviewedcontainer2 = document.getElementsByClassName("singleviewedcontainer")[1];

    var line = document.getElementsByClassName("line")[0];

    var lasttitle = document.getElementsByClassName("lasttitle")[0]; 
    var lastprice = document.getElementsByClassName("lastprice")[0];
    var lastiimg = document.getElementsByClassName("lastimg")[0];
    var visitedlink = document.getElementsByClassName("visitedlink")[0];

    var lasttitle2 = document.getElementsByClassName("lasttitle")[1]; 
    var lastprice2 = document.getElementsByClassName("lastprice")[1];
    var lastiimg2 = document.getElementsByClassName("lastimg")[1];
    var visitedlink2 = document.getElementsByClassName("visitedlink")[1];

    if(localStorage.getItem("lastname")) { lastviewedcontainer.style.display = "flex"; }
    

    singleviewedcontainer.style.display = "flex";
    lasttitle.textContent = localStorage.getItem("lastname");
    lastprice.textContent = localStorage.getItem("lastprice");
    lastiimg.src = localStorage.getItem("lastimg");
    visitedlink.href = localStorage.getItem("lastlocation");

    if(localStorage.getItem("lastname2")) 
    {
         line.style.display = "flex";
        secondlastviewed.style.display = "flex";
           
    singleviewedcontainer2.style.display = "flexx";
    lasttitle2.textContent = localStorage.getItem("lastname2");
    lastprice2.textContent = localStorage.getItem("lastprice2");
    lastiimg2.src = localStorage.getItem("lastimg2");
    visitedlink2.href = localStorage.getItem("lastlocation2");
    }
}

function getlastViewed() {

    var lastimg = document.getElementById("pageimg").src;
    var lastprice = document.getElementById("itemprice").innerHTML;
    var lasttitle = document.getElementById("pagetitle").innerHTML;
    var lastlocation = document.location.href;

    if(!localStorage.getItem("lastname"))
    {
    localStorage.setItem("lastname", lasttitle);
    localStorage.setItem("lastprice", lastprice);
    localStorage.setItem("lastimg", lastimg);
    localStorage.setItem("lastlocation", lastlocation);
    return;
    }
    else if(!localStorage.getItem("lastname2"))
    {
    if(localStorage.getItem("lastname") == lasttitle)
    {
        return;
    }
    localStorage.setItem("lastname2", lasttitle);
    localStorage.setItem("lastprice2", lastprice);
    localStorage.setItem("lastimg2", lastimg);
    localStorage.setItem("lastlocation2", lastlocation);
    return;
    }
    else {
        if(localStorage.getItem("lastname") == lasttitle)
        {
            return;
        }
        localStorage.setItem("lastname2", localStorage.getItem("lastname"));
        localStorage.setItem("lastprice2", localStorage.getItem("lastprice"));
        localStorage.setItem("lastimg2", localStorage.getItem("lastimg"));
        localStorage.setItem("lastlocation2", localStorage.getItem("lastlocation"));

        localStorage.setItem("lastname", lasttitle);
        localStorage.setItem("lastprice", lastprice);
        localStorage.setItem("lastimg", lastimg);
        localStorage.setItem("lastlocation", lastlocation);
    }
}