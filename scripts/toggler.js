function changeToggler(prefix)
{
    var input = document.getElementById(prefix+"togglerinput");
    var toggler = document.getElementById(prefix+"toggler");
    var circle = document.getElementById(prefix+"circle");
    if(input.checked)
    {
        toggler.style.backgroundColor = "#39FF14";
        circle.style.left = "21px";
    }
    else
    {
        toggler.style.backgroundColor = "#d50102";
        circle.style.left = "3px";
    }
}