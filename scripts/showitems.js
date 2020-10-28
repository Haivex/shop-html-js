function showShoppingItem()
{
    if(parseInt(localStorage.getItem("storageid"))>-1)
    {
        var empty = document.getElementById("shopping-cart-empty");
        empty.style.display = "none";
        var showfooter = document.getElementById("shopping-cart-footer");
        showfooter.style.display = "block";
        
        for(var i = 0, j = 0; i<=parseInt(localStorage.getItem("storageamount")); i++)
        {
        if(!localStorage.getItem("storageprice"+i))
        {
            continue;
        }
        j++;
        var item = document.createElement("div");
        item.setAttribute("class", "shopping-cart-item");
        item.setAttribute("id", "shopping-cart-item"+i);
        var items = document.getElementById("shopping-cart-items");
        items.appendChild(item);

        var itemlogo = document.createElement("div");
        itemlogo.setAttribute("class", "item-logo");
        itemlogo.setAttribute("id", "item-logo"+i);
        item.appendChild(itemlogo);

        var logoimg = document.createElement("img");
        logoimg.src = localStorage.getItem("storageimage"+i);
        itemlogo.appendChild(logoimg);

        var itemname = document.createElement("div");
        itemname.setAttribute("class", "item-name");
        itemname.setAttribute("id", "item-name"+i);
        item.appendChild(itemname);

        var itemdescription = document.createElement("div");
        itemdescription.innerHTML = localStorage.getItem("storagedescription"+i);
        itemname.appendChild(itemdescription);

        var itemprice = document.createElement("div");
        itemprice.setAttribute("class", "price");
        itemprice.setAttribute("id", "price"+i);
        itemprice.innerHTML = localStorage.getItem("storageprice"+i);
        itemname.appendChild(itemprice);

        var bin = document.createElement("div");
        bin.setAttribute("class", "bin");
        bin.setAttribute("id", "bin"+i);
        item.appendChild(bin);

        var binimg = document.createElement("img");
        binimg.src = "pictures/bin.png";
        binimg.setAttribute("onclick", "deleteItem("+i+")");
        bin.appendChild(binimg);
        
        var dottedprice = document.getElementById("price"+i).textContent.replace(",", ".");
        var correctprice = dottedprice.slice(0, dottedprice.search("zł"));
        
        var dottedtotal = document.getElementById("shopping-cart-total").textContent.replace(",", ".");
        var cleantotal = dottedtotal.slice(0, dottedtotal.search("zł"));
        var cleantotal2 = cleantotal.substring(14);
        var sum = parseFloat(cleantotal2)+parseFloat(correctprice);
        sum = sum.toFixed(2)+"";
        var commasum = sum.replace(".",",");
        var shoppingcarttotal = document.getElementById("shopping-cart-total").innerHTML = "<h3>Suma koszyka: "+commasum+"zł</h3>";
        var shoppingcounter = document.getElementById("shopcounter");
        shoppingcounter.innerHTML = j;
        shoppingcounter.style.display = "block";
        }
    }
}