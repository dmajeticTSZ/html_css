let slike=1;
document.getElementById("BtnLijevo").onclick = function(){
    slike++;
    if(slike>6){slike=1;}
    switch(slike){
        case 6:
            document.getElementById('head').style.backgroundImage="url(img/pocImg0.jpg)";
            break;
        case 5:
            document.getElementById('head').style.backgroundImage="url(img/pocImg.jpg)";
            break;
        case 4:
            document.getElementById('head').style.backgroundImage="url(img/pocImg2.jpg)";
            break;
        case 3:
            document.getElementById('head').style.backgroundImage="url(img/pocImg3.jpg)";
            break;
        case 2:
            document.getElementById('head').style.backgroundImage="url(img/pocImg4.jpg)";
            break;
        case 1:
            document.getElementById('head').style.backgroundImage="url(img/pocImg5.jpg)";
            break;
    }
}

let slika=1;
document.getElementById("BtnDesno").onclick = function(){
    slika++;
    if(slika>6){slika=1;}
    switch(slika){
        case 1:
            document.getElementById('head').style.backgroundImage="url(img/pocImg0.jpg)";
            break;
        case 2:
            document.getElementById('head').style.backgroundImage="url(img/pocImg.jpg)";
            break;
        case 3:
            document.getElementById('head').style.backgroundImage="url(img/pocImg2.jpg)";
            break;
        case 4:
            document.getElementById('head').style.backgroundImage="url(img/pocImg3.jpg)";
            break;
        case 5:
            document.getElementById('head').style.backgroundImage="url(img/pocImg4.jpg)";
            break;
        case 6:
            document.getElementById('head').style.backgroundImage="url(img/pocImg5.jpg)";
            break;
    }
}