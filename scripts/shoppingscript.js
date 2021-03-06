function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
        if(parseInt(localStorage.getItem("storageid"))>-1)
        {
            var identificator = localStorage.getItem("storageid");
        }
        else
        {
            var identificator = -1;
            localStorage.setItem("storageid", identificator);
        }
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
        logoimg.src = document.getElementsByClassName("product")[itemindex].src;
        itemlogo.appendChild(logoimg);
        
       
        var itemname = document.createElement("div");
        itemname.setAttribute("class", "item-name");
        itemname.setAttribute("id", "item-name"+identificator);
        item.appendChild(itemname);

        var itemdescription = document.createElement("div");
        itemdescription.innerHTML = document.getElementsByClassName("product-name")[itemindex].textContent;
        itemname.appendChild(itemdescription);

        var itemprice = document.createElement("div");
        itemprice.setAttribute("class", "price");
        itemprice.setAttribute("id", "price"+identificator);
        itemprice.innerHTML = document.getElementsByClassName("product-price-text")[itemindex].textContent;
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
        localStorage.setItem("storageid", identificator);
        localStorage.setItem("storageamount", identificator);

        
        var shoppingcounter = document.getElementById("shopcounter");
        shoppingcounter.style.display = "block";
        shoppingcounter.innerHTML = identificator+1;
        shoppingcounter.dataset.counter = identificator+1;
        
        if(shoppingcounter.dataset.counter > 9)
        {
            shoppingcounter.style.width = "30px";
        }
       

        if(localStorage.getItem("storageimage"+identificator))
        {
            var numberhelping = 0;
            while(localStorage.getItem("storageimage"+numberhelping))
            {
                numberhelping++;
            }
            localStorage.setItem("storageimage"+numberhelping, logoimg.src);
        }
        else
        {
        localStorage.setItem("storageimage"+identificator, logoimg.src);
        }

        if(localStorage.getItem("storagedescription"+identificator))
        {
            var numberhelping = 0;
            while(localStorage.getItem("storagedescription"+numberhelping))
            {
                numberhelping++;
            }
            localStorage.setItem("storagedescription"+numberhelping, itemdescription.innerHTML);
        }
        else
        {
        localStorage.setItem("storagedescription"+identificator, itemdescription.innerHTML);
        }

        if(localStorage.getItem("storageprice"+identificator))
        {
            var numberhelping = 0;
            while(localStorage.getItem("storageprice"+numberhelping))
            {
                numberhelping++;
            }
            localStorage.setItem("storageprice"+numberhelping, itemprice.innerHTML);
        }
        else
        {
        localStorage.setItem("storageprice"+identificator, itemprice.innerHTML);
        }

        }

        function deleteItem(identificatora)
                {
                    identificator--;
                    if(identificator<0)
                    {
                        document.getElementById("shopping-cart-footer").style.display = "none";
                        document.getElementById("shopping-cart-empty").style.display = "block";
                        localStorage.setItem("storageamount", -1);
                        document.getElementById("shopcounter").style.display = "none";
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
                    localStorage.removeItem("storageimage"+identificatora);
                    localStorage.removeItem("storagedescription"+identificatora);  
                    localStorage.removeItem("storageprice"+identificatora);
                    localStorage.setItem("storageid", identificator);
                    var shoppingcounter = document.getElementById("shopcounter");
                    shoppingcounter.innerHTML = identificator+1;
                    shoppingcounter.dataset.counter = identificator+1;
        
                    if(shoppingcounter.dataset.counter < 10)
                    {
                        shoppingcounter.style.width = "20px";
                    }
                }
//similar shopping
function createItemSimilar(itemindex)
         {       
        identificator++;
        var shoppingcounter = document.getElementById("shopcounter");
        shoppingcounter.style.display = "block";
        
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
        logoimg.src = document.getElementsByClassName("picturefamiliar")[itemindex].src;
        itemlogo.appendChild(logoimg);
        
       
        var itemname = document.createElement("div");
        itemname.setAttribute("class", "item-name");
        itemname.setAttribute("id", "item-name"+identificator);
        item.appendChild(itemname);

        var itemdescription = document.createElement("div");
        itemdescription.innerHTML = document.getElementsByClassName("namefamiliar")[itemindex].textContent;
        itemname.appendChild(itemdescription);

        var itemprice = document.createElement("div");
        itemprice.setAttribute("class", "price");
        itemprice.setAttribute("id", "price"+identificator);
        itemprice.innerHTML = document.getElementsByClassName("pricefamiliar")[itemindex].textContent;
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
        if(commasum == "0,00")
        {
            document.getElementById("shopping-cart-footer").style.display = "none";
            document.getElementById("shopping-cart-empty").style.display = "block";
        }
        var shoppingcarttotal = document.getElementById("shopping-cart-total").innerHTML = "<h3>Suma koszyka: "+commasum+"zł</h3>";
        localStorage.setItem("storageid", identificator);
        localStorage.setItem("storageamount", identificator);
        var shoppingcounter = document.getElementById("shopcounter");
        shoppingcounter.innerHTML = identificator+1;

        if(localStorage.getItem("storageimage"+identificator))
        {
            var numberhelping = 0;
            while(localStorage.getItem("storageimage"+numberhelping))
            {
                numberhelping++;
            }
            localStorage.setItem("storageimage"+numberhelping, logoimg.src);
        }
        else
        {
        localStorage.setItem("storageimage"+identificator, logoimg.src);
        }

        if(localStorage.getItem("storagedescription"+identificator))
        {
            var numberhelping = 0;
            while(localStorage.getItem("storagedescription"+numberhelping))
            {
                numberhelping++;
            }
            localStorage.setItem("storagedescription"+numberhelping, itemdescription.innerHTML);
        }
        else
        {
        localStorage.setItem("storagedescription"+identificator, itemdescription.innerHTML);
        }

        if(localStorage.getItem("storageprice"+identificator))
        {
            var numberhelping = 0;
            while(localStorage.getItem("storageprice"+numberhelping))
            {
                numberhelping++;
            }
            localStorage.setItem("storageprice"+numberhelping, itemprice.innerHTML);
        }
        else
        {
        localStorage.setItem("storageprice"+identificator, itemprice.innerHTML);
        }

        }
