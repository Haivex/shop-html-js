function changeSizeArea() {
    var area = document.getElementById("aboutperson");
    if(area.value.length >= 67) {
        area.style.width = "500px";
    }
    else if(area.value.length >= 19) {
        let biggersize = area.offsetWidth + 7.8;
        area.style.width = biggersize+"px";
    }
    
    else if(area.value.length < 19)
    {
        area.style.width = "150px";
    }
    
    area.style.height = '';
    area.style.height = area.scrollHeight +3+ 'px';

    
}