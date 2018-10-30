var przycisk = document.getElementById("przycisk");
var tekst = document.getElementById("tekst");
var haslo = document.getElementById("haslo");
var komentarz = document.getElementById("komentarz");


function sprawdz(){
    var wartoschasla = haslo.value;
    
    for(var i=0; i<wartoschasla.length ; i++){
        if(!isNaN(wartoschasla.charAt(i)) && wartoschasla.length>7){
            komentarz.innerHTML = "HASLO JEST DOBRE";
            komentarz.style.color='green';
        }else if(!isNaN(wartoschasla.charAt(i)) && (wartoschasla.length>4 && wartoschasla.length<7)){
            komentarz.innerHTML = "HASLO JEST SREDNIE";
            komentarz.style.color='blue';
        }else{
            komentarz.innerHTML = "HASLO JEST SŁABE";
            komentarz.style.color='yellow';
        }
    }
    if(wartoschasla.length == 0){
            komentarz.innerHTML = "HASLO JEST PUSTE";
            komentarz.style.color='red';
    }
}


przycisk.addEventListener('click',sprawdz);