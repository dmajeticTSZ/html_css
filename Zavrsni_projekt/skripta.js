document.getElementById("btnLijevo").onclick = function(){
    let slika=1;
    switch(slika){
        case 1:
        document.getElementById("pocImgprva").style="display: block;";
        document.getElementById("pocImgdruga").style="display: none;";
        break;
    }
}

document.getElementById("btnDesno").onclick = function(){
    let slika=1;
    slika++;
    switch(slika){
        case 1:
            document.getElementById("pocImgprva").style="display: block;";
            document.getElementById("pocImgdruga").style="display: none;";
            break;
        case 2:
            document.getElementById("pocImgprva").style="display: none;";
            document.getElementById("pocImgdruga").style="display: block;";
            break;
    }
}