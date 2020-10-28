function changeColor()
{
    var bar = document.getElementById("banner-container");
    var accountbar = document.getElementById("accountbar");
    var selectedcolor = document.getElementById("coloring").value;
    bar.style.backgroundColor = selectedcolor;
    var containertitle =  document.getElementsByClassName("categories-title-container");
    var titleamount = containertitle.length;
    for(var i=0; i<titleamount; i++)
    {
    containertitle[i].style.borderTop = "8px solid "+selectedcolor;
    }
    accountbar.style.borderTop = "8px solid "+selectedcolor;
    var shops = document.getElementById("shops");
    shops.style.backgroundColor = selectedcolor;

    var categoriescontainer = document.getElementById("categories-container");
    categoriescontainer.style.backgroundColor = selectedcolor;

    var contactcontainer = document.getElementById("contact-container");
    contactcontainer.style.backgroundColor = selectedcolor;

    var categoriescontent = document.getElementsByClassName("list");
    for(var i=0; i<categoriescontent.length; i++)
    {
    categoriescontent[i].style.color = "black";
    }
    
     var R = parseInt(selectedcolor.substring(1,3),16);
    var G = parseInt(selectedcolor.substring(3,5),16);
    var B = parseInt(selectedcolor.substring(5,7),16);
    var percent = 95;
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
    var lightercolor = "#"+RR+GG+BB;
    var newsletter = document.getElementById("newsletter-container");
    newsletter.style.backgroundColor = lightercolor;

    var newsletterinput = document.getElementById("newsletter-input-field");
    newsletterinput.style.backgroundColor = selectedcolor;
    newsletterinput.style.border = "1px solid black";

    var hamburger = document.getElementById("hamburger");
    var shoppingcart = document.getElementById("shopping-cart");
    document.getElementById("loginform").style.backgroundColor = selectedcolor;

    var contactline = document.getElementById("contact-content-container");
    contactline.style.borderLeft = "1px dashed black";

    var loginbutton = document.querySelector("#loginformdisplay button");
    loginbutton.style.border = "5px solid black";

    var loginbutton2 = document.querySelector("#registerformdisplay button");
    loginbutton2.style.border = "1px solid black";

    document.querySelector('body').style.setProperty("--thumbcolor", selectedcolor);
    document.querySelector('body').style.setProperty("--menuhover", lightercolor);

    localStorage.setItem("color", selectedcolor);
}
function changeAllSelectedColor()
{
    if(localStorage.getItem("color") && parseInt(sessionStorage.getItem("storagelogged")) == 1)
    {
    var bar = document.getElementById("banner-container");
    bar.style.backgroundColor = localStorage.getItem("color");
    var containertitle =  document.getElementsByClassName("categories-title-container");
    var titleamount = containertitle.length;

    for(var i=0; i<titleamount; i++)
    {
    containertitle[i].style.borderTop = "8px solid "+localStorage.getItem("color");
    }
    var shops = document.getElementById("shops");
    shops.style.backgroundColor = localStorage.getItem("color");;

    var categoriescontainer = document.getElementById("categories-container");
    categoriescontainer.style.backgroundColor = localStorage.getItem("color");

    var contactcontainer = document.getElementById("contact-container");
    contactcontainer.style.backgroundColor = localStorage.getItem("color");

    document.querySelector('body').style.setProperty("--thumbcolor", localStorage.getItem("color"));
    
   
    if(document.getElementById("accountbar"))
    {
        document.getElementById("accountbar").style.borderTop = "8px solid "+localStorage.getItem("color");
    }

    var categoriescontent = document.getElementsByClassName("list");
    for(var i=0; i<categoriescontent.length; i++)
    {
    categoriescontent[i].style.color = "black";
    }
    
     var R = parseInt(localStorage.getItem("color").substring(1,3),16);
    var G = parseInt(localStorage.getItem("color").substring(3,5),16);
    var B = parseInt(localStorage.getItem("color").substring(5,7),16);
    var percent = 95;
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
    var lightercolor = "#"+RR+GG+BB;
    var newsletter = document.getElementById("newsletter-container");
    newsletter.style.backgroundColor = lightercolor;

    var newsletterinput = document.getElementById("newsletter-input-field");
    newsletterinput.style.backgroundColor = localStorage.getItem("color");
    newsletterinput.style.border = "1px solid black";

    var hamburger = document.getElementById("hamburger");
    var shoppingcart = document.getElementById("shopping-cart");
    
    document.getElementById("loginform").style.backgroundColor = localStorage.getItem("color");

   document.getElementById("rightmenu").style.backgroundColor = localStorage.getItem("color");

   var loginbutton = document.querySelector("#loginformdisplay button");
   loginbutton.style.border = "1px solid black";

   var loginbutton2 = document.querySelector("#registerformdisplay button");
   loginbutton2.style.border = "1px solid black";

    var contactline = document.getElementById("contact-content-container");
    contactline.style.borderLeft = "1px dashed black";

    document.querySelector('body').style.setProperty("--menuhover", lightercolor);
    }
}
function resetColor() {
    localStorage.removeItem("color");
    location.reload();
}
