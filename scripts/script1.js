var idinterval = -1;
                function interval()
                {
                    if(idinterval == -1)
                    {
                    idinterval = setInterval(slider, 4000);
                    }
                    else
                    {
                        clearInterval(idinterval);
                        idinterval = -1;
                    }
                }
                function slider()
                {
                    var photo = document.getElementById("chance-banner-container");
                    if(photo.scrollLeft == 3600)
                    {
                        photo.style.scrollBehavior = "auto";
                        photo.scroll(0,0);
                        photo.style.scrollBehavior = "smooth";
                        photo.scrollBy(1200,0);
                    }
                    else
                    {
                        photo.style.scrollBehavior = "smooth";
                        photo.scrollBy(1200, 0);
                    }
                }
                function previous()
                {
                    interval();
                    var photo = document.getElementById("chance-banner-container");
                    if(photo.scrollLeft == 0)
                    {
                        photo.style.scrollBehavior = "auto";
                        photo.scroll(3600, 0);
                        photo.style.scrollBehavior = "smooth";
                        photo.scrollBy(-1200, 0);
                    }
                    else
                    {
                    photo.scrollBy(-1200, 0);
                    }
                    interval();
                }
                function next()
                {
                    interval();
                    var photo = document.getElementById("chance-banner-container");
                    if(photo.scrollLeft == 3600)
                    {
                        photo.style.scrollBehavior = "auto";
                        photo.scroll(0,0);
                        photo.style.scrollBehavior = "smooth";
                        photo.scrollBy(1200,0);
                    }
                    else
                    {
                    photo.style.scrollBehavior = "smooth";
                    photo.scrollBy(1200, 0);
                    }
                    interval();
                }
