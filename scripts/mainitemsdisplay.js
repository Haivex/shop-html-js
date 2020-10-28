function showPopular()
{
    var itemscontainer = document.getElementsByClassName("items-container");
    itemscontainer[1].classList.add("active");
    itemscontainer[1].classList.remove("disable");
    itemscontainer[0].classList.remove("active");
    itemscontainer[0].classList.add("disable");
    itemscontainer[2].classList.remove("active");
    itemscontainer[2].classList.add("disable");
}
function showMostlyBought()
{
    var itemscontainer = document.getElementsByClassName("items-container");
    itemscontainer[2].classList.add("active");
    itemscontainer[2].classList.remove("disable");
    itemscontainer[0].classList.remove("active");
    itemscontainer[0].classList.add("disable");
    itemscontainer[1].classList.remove("active");
    itemscontainer[1].classList.add("disable");
}
function showNew()
{
    var itemscontainer = document.getElementsByClassName("items-container");
    itemscontainer[0].classList.add("active");
    itemscontainer[0].classList.remove("disable");
    itemscontainer[2].classList.remove("active");
    itemscontainer[2].classList.add("disable");
    itemscontainer[1].classList.remove("active");
    itemscontainer[1].classList.add("disable");
}