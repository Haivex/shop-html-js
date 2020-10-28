var identificator = parseInt(localStorage.getItem("storageid"))
function deleteItem(identificatora) {
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
        localStorage.setItem("storageid", identificator);    
    }
}