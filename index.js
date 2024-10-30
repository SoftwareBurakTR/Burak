const resimler = document.querySelectorAll(".Hero-Content img");
let index= 0;
let aralikid =null;

document.addEventListener("DOMContentLoaded",kur);
function kur(){
    resimler[index].classList.add("Display-Slide");
    setInterval(sonraki,5000);
}
function goster(){
    index = (index<0)?resimler.length-1:(index>=resimler.length)?0:index;
    /*if(index<0){
        index=resimler.length;
    }
    else if(index>=resimler.length){
        index = 0;
    }*/
    resimler.forEach(element => {
        element.classList.remove("Display-Slide");
    });
    resimler[index].classList.add("Display-Slide");
}
function onceki (){
    index--;
    goster(index);
}
function sonraki(){
    index++;
    goster(index);
}