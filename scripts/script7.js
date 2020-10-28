function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
        var identificator = -1;
         function createItem(itemindex)
         {       
             identificator++;
        var empty = document.getElementById("shopping-cart-empty");
        empty.style.display = "none";
        var showfooter = document.getElementById("shopping-cart-footer");
        showfooter.style.display = "block";
            
        var item = document.createElement("div");
        item.setAttribute("class", "shopping-cart-item");
        item.setAttribute("id", "shopping-cart-item"+identificator);
        var items = document.getElementById("shopping-cart-items");
        items.appendChild(item);

        var itemlogo = document.createElement("div");
        itemlogo.setAttribute("class", "item-logo");
        itemlogo.setAttribute("id", "item-logo"+identificator);
        item.appendChild(itemlogo);

        var logoimg = document.createElement("img");
        logoimg.src = document.getElementsByClassName("onelogo")[itemindex].src;
        itemlogo.appendChild(logoimg);

        var itemname = document.createElement("div");
        itemname.setAttribute("class", "item-name");
        itemname.setAttribute("id", "item-name"+identificator);
        item.appendChild(itemname);

        var itemdescription = document.createElement("div");
        itemdescription.innerHTML = document.getElementsByClassName("oneproduct")[itemindex].textContent;
        itemname.appendChild(itemdescription);

        var itemprice = document.createElement("div");
        itemprice.setAttribute("class", "price");
        itemprice.setAttribute("id", "price"+identificator);
        itemprice.innerHTML = document.getElementsByClassName("price")[itemindex].textContent;
        itemname.appendChild(itemprice);

        var bin = document.createElement("div");
        bin.setAttribute("class", "bin");
        bin.setAttribute("id", "bin"+identificator);
        item.appendChild(bin);

        var binimg = document.createElement("img");
        binimg.src = "pictures/bin.png";
        binimg.setAttribute("onclick", "deleteItem("+identificator+")");
        bin.appendChild(binimg);
        
        var dottedprice = document.getElementById("price"+identificator).textContent.replace(",", ".");
        var correctprice = dottedprice.slice(0, dottedprice.search("zł"));
        
        var dottedtotal = document.getElementById("shopping-cart-total").textContent.replace(",", ".");
        var cleantotal = dottedtotal.slice(0, dottedtotal.search("zł"));
        var cleantotal2 = cleantotal.substring(14);
        var sum = parseFloat(cleantotal2)+parseFloat(correctprice);
        sum = sum.toFixed(2)+"";
        var commasum = sum.replace(".",",");
        var shoppingcarttotal = document.getElementById("shopping-cart-total").innerHTML = "<h3>Suma koszyka: "+commasum+"zł</h3>";
        }

        function deleteItem(identificatora)
                {
                    identificator--;
                    if(identificator<0)
                    {
                        document.getElementById("shopping-cart-footer").style.display = "none";
                        document.getElementById("shopping-cart-empty").style.display = "block";
                    }

        var dottedprice = document.getElementById("price"+identificatora).textContent.replace(",", ".");
        var correctprice = dottedprice.slice(0, dottedprice.search("zł"));
        
        var dottedtotal = document.getElementById("shopping-cart-total").textContent.replace(",", ".");
        var cleantotal = dottedtotal.slice(0, dottedtotal.search("zł"));
        var cleantotal2 = cleantotal.substring(14);
        var sum = parseFloat(cleantotal2)-parseFloat(correctprice);
        sum = sum.toFixed(2)+"";
        var commasum = sum.replace(".",",");
        var shoppingcarttotal = document.getElementById("shopping-cart-total").innerHTML = "<h3>Suma koszyka: "+commasum+"zł</h3>";

                    var item = document.getElementById("shopping-cart-item"+identificatora);
                    item.parentElement.removeChild(item);

                }
                function plusItem()
                {
                    var quantitynumber = document.getElementById("quantitynumber").value;
                    var intnumber = parseFloat(quantitynumber);
                    intnumber++;
                    document.getElementById("quantitynumber").value = intnumber;

                }   
                function minusItem()
                {
                    var quantitynumber = document.getElementById("quantitynumber").value;
                    var intnumber = parseFloat(quantitynumber);
                    if(intnumber == 1)
                    {
                        return;
                    }
                    intnumber--;
                    document.getElementById("quantitynumber").value = intnumber;
                }