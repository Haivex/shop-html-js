function openLogin()
                {
                    var form = document.getElementById("loginform");
                    form.style.display = "block";
                    var transparent = document.getElementById("transparent");
                    transparent.style.display = "block";
                    var bodyelem = document.getElementsByTagName("body")[0];
                    bodyelem.style.position = "fixed";
                    bodyelem.style.overflowY = "scroll";
                    bodyelem.style.width = "100%";
                    bodyelem.style.height = "100%";
               }
                function closeLogin()
                {
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
                }
                function showShoppingCart()
                {
                    var shoppingcart = document.getElementById("shopping-cart-field") ;
                    shoppingcart.style.display = "block";
                } 
                function hideShoppingCart()
                {
                    var shoppingcart = document.getElementById("shopping-cart-field") ;
                    shoppingcart.style.display = "none";
                }
                function showProduct(id)
                {
                    var product_price_hover = document.getElementsByClassName("product-price-hover")[id];
                    product_price_hover.style.display = "block";
                    var infobutton = document.getElementsByClassName("infobutton")[id];
                    infobutton.style.display = "inline-block";
                    var addbutton= document.getElementsByClassName("addbutton")[id];
                    addbutton.style.display = "block";
                    var item = document.getElementsByClassName("item")[id];
                    item.style.border = "1px solid #9C9B9B";
                }
                function hideProduct(id)
                {
                    var product_price_hover = document.getElementsByClassName("product-price-hover")[id];
                    product_price_hover.style.display = "none";
                    var infobutton = document.getElementsByClassName("infobutton")[id];
                    infobutton.style.display = "none";
                    var addbutton= document.getElementsByClassName("addbutton")[id];
                    addbutton.style.display = "none";
                    var item = document.getElementsByClassName("item")[id];
                    item.style.border = "none";
                }
                function searchItem()
                {
                    document.getElementById("searching").style.borderRadius = "30px 30px 30px 30px";
                    var searches = document.getElementById("searches");
                    document.getElementById("searchlist").remove();
                    var searchlist = document.createElement("div");
                    searchlist.setAttribute("id", "searchlist");
                    searchlist.innerHTML = "ph faf dfa";
                    searches.appendChild(searchlist);
                    searchlist.innerHTML = "";
                    searches.style.display = "block";
                    var searchedItemsNumber = 0;
                    var searchbarcontent = document.getElementById("searching").value;
                    //
                    var itemslist = ["Jabłko czerwone świeże z polskich sadów", "Jabłko zielone świeże z polskich sadów", "Pomarańcza z Hiszpani", "Przepyszna gruszka z polskich sadów", "Przepiękne wiśnie suszone", "Banany BIO z palemek", "Soczyste truskawki"];
                    var linkslist = ["applered.html", "applegreen.html", "orange.html", "pear.html", "cherry.html", "banana.html", "strawberry.html"];
                    for(var i=0; i<itemslist.length; i++)
                    {
                        if(searchedItemsNumber >= 5)
                        {
                            searchedItemsNumber = 0;
                            break;
                        }
                        else
                        {
                            if(itemslist[i].toLocaleLowerCase().search(searchbarcontent.toLocaleLowerCase()) != -1 && isEmptyOrSpaces(searchbarcontent) != true)                        
                            {
                                document.getElementById("searching").style.borderRadius = "30px 30px 0px 0px";
                                var onesearch = document.createElement("a");
                                onesearch.setAttribute("class", "onesearch");
                                onesearch.href = linkslist[i];
                                onesearch.innerHTML = itemslist[i];
                               // onesearch.innerHTML = "<a class=linkstyle href="+linkslist[i]+">"+itemslist[i]+"</a>";
                                searchlist.appendChild(onesearch);
                                searchedItemsNumber += 1;
                            }
                        }
                    }
                }
                function scrollFamiliar(lengthpixels)
                {
                    var familiaritems = document.getElementById("itemfamiliarcontent");
                    familiaritems.scrollBy(lengthpixels, 0);
                }
                function zoomImg()
                {
                    var zoomed = document.getElementById("zoomedimg");
                    zoomed.style.display = "flex";
                    var transparent = document.getElementById("transparent");
                    transparent.style.display = "block";
                }
                function zoomOutImg()
                {
                    var transparent = document.getElementById("transparent");
                    transparent.style.display = "none";
                    var zoomed = document.getElementById("zoomedimg");
                    zoomed.style.display = "none";
                }
                function addWishlist(page)
                {
                    if(document.getElementById("account").style.display == 'block')
                    {
                        var staricon =  document.getElementById("wishlist-icon");
                        if(staricon.classList.contains("far"))
                        {
                        staricon.classList.replace("far", "fas");
                            var wishlisttext = document.getElementById("wishlist-text");
                            wishlisttext.innerHTML = "Na liście życzeń";
                            localStorage.setItem(page, page);

                        }
                        else {
                            staricon.classList.replace("fas", "far");
                            var wishlisttext = document.getElementById("wishlist-text");
                            wishlisttext.innerHTML = "Dodaj do listy życzeń";
                            localStorage.removeItem(page);
                        }
                   }
                   else
                   {
                    openLogin();
                   }
                }
                function loadWishlist(page)
                {
                    var staricon =  document.getElementById("wishlist-icon");
                    if(localStorage.getItem(page) != null)
                    {
                     staricon.classList.replace("far", "fas");
                     var wishlisttext = document.getElementById("wishlist-text");
                     wishlisttext.innerHTML = "Na liście życzeń";
                     localStorage.setItem(page, page);
                    }  
                }
                function displayLogin()
                {
                    var spanregister = document.getElementById("registerformdisplay");
                    spanregister.style.display = "none";
                    var spanlogin = document.getElementById("loginformdisplay");
                    spanlogin.style.display = "block";
                   
                }
                function displayRegister()
                {
                    var spanlogin = document.getElementById("loginformdisplay");
                    spanlogin.style.display = "none";
                    var spanregister = document.getElementById("registerformdisplay");
                    spanregister.style.display = "block";
                   
                }