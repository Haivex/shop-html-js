function previousPage()
{
    var actuallocation = window.location.href;
    var locationnumber = actuallocation.slice(actuallocation.length-6, actuallocation.length-5);
    if(locationnumber == 1)
    {
        return;
    }
    locationnumber--;
    window.open("searched"+locationnumber+".html", "_self");
    return;
}

function nextPage()
{
    var actuallocation = window.location.href;
    var locationnumber = actuallocation.slice(actuallocation.length-6, actuallocation.length-5);
    if(locationnumber == 3)
    {
        return;
    }
    locationnumber++;
    window.open("searched"+locationnumber+".html", "_self");
    return;
}