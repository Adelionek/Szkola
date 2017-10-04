var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elHaslo = document.getElementById('pass1');
var elHaslo2 = document.getElementById('pass2');
var elData = document.getElementById('date');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikat');

//deklaracja elementów po id
//onload

/*window.onload = function(){
    alert('zaladunek');*/

//zdarzenie po wyjsciu
//focus, blur

/*elImie.onblur = function() {

    if (elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne dane';
         }
    }  zly bo do imi nazwisko i do kazdego by byl ten sam warunek*/

/*function sprawdz() {

    if (elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne dane';
    }

}*/


function sprawdz() {

    if (this.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne dane';
            this.focus();//pozostaje w tym danym elemencie
    }

}

//dodaj zdarzenie blur dla elementow i dla niego wykonaj funkcje sprawdz



function mail(){
    if (elMail1.value != elMail2.value){
        //rozne
        elMail1.value = '';
        elMail2.value = '';//czyszczenie obydwu pol
        elMail1.disabled = false;//odblokowauje 1 mail bo wczesniej byl zablokowany
        elMail1.focus();//focus na mail1
        elMail2.disabled = true;//blok 2 maila

        elKomunikat.textContent = 'Adresy poczty są różne';
    }else{
        //rowne
        elKomunikat.textContent = '';
        elMail1.disabled = true;
        elMail2.disabled = true;
    }


}

function blokujmail(){
    elMail2.disabled = false;
    elMail2.focus();
    elMail1.disabled = true;//po wyjsciu nie mozna juz zmienic nic w 1 polu
}



function sprawdzhaslo(){
    if (elHaslo.value != elHaslo2.value){
        //rozne
        elHaslo.value = '';
        elHaslo2.value = '';//czyszczenie obydwu pol
        elHaslo.disabled = false;//odblokowauje 1 haslo bo wczesniej byl zablokowany
        elHaslo.focus();//focus na haslo
        elHaslo2.disabled = true;//blok 2 hasla

        elKomunikat.textContent = 'Hasla są różne';
    }else{
        //rowne
        elKomunikat.textContent = '';
        elHaslo.disabled = true;
        elHaslo2.disabled = true;
    }


}

function blokujhaslo(){
    elHaslo2.disabled = false;
    elHaslo2.focus();
    elHaslo.disabled = true;//po wyjsciu nie mozna juz zmienic nic w 1 polu
}

function regulamin(){
    if (elRegulamin.checked){
        elPrzycisk.disabled = false;
    }else{
        elPrzycisk.disabled = true;
    }
}



function odblokuj(){
    var zablokowane = document.querySelectorAll('input[disabled]');
    if (zablokowane.length > 0){
        for (var i=0 ; i<zablokowane.length ; i++){
            zablokowane[i].disabled = false;
        }
    }
}

function wyslij(){
    document.write('<div>');
    document.write('Imię: ' + elImie.value + '<br>');//br ?
    document.write('Nazwisko: ' + elNazwisko.value + '<br>');
    document.write('Login: ' + elLogin.value + '<br>');
    document.write('Adres poczty: ' + elMail1.value + '<br>');
    document.write('Data urodzenia: ' + elData.value + '<br>');

}




elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elLogin.addEventListener('blur', sprawdz);
elMail1.addEventListener('blur', blokujmail);
elMail2.addEventListener('blur', mail);
elHaslo.addEventListener('blur', blokujhaslo);
elHaslo2.addEventListener('blur', sprawdzhaslo );
elRegulamin.addEventListener("click", regulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', wyslij);

///






