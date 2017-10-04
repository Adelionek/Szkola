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

var regImie = /^[a-zążźćóńęł]{2,32}$/i;//regex do sprawdzania imienia, usuneliśmy funkcje sprawdz i robimy to łatwiej
var regNazwisko = /^[a-zążźćóńęł]{2,32}(\-[a-zążźćóńęł]{2,32})?$/i;//regex do nazwiska jest podobny do imienia tylko dotajemy \- zeby mozna bylo uzyc myslnika.

var regLogin = /^[a-z0-9]{1}[\w\.\-]{4,30}[a-z0-9]{1}$/i;

var regMail = /^[a-z]{1}[\w\.\-]{0,30}@(\w{1,20}\.){1,7}[a-z]{1,3}$/i;

//Hasło musi bć bezpieczne tzn. małe litery, duże litery, cyfry, znak specjalny min 8 znaków

var regHaslo = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|\_).{8,35})$/;


function sprawdzimie() {
        var sprawdz = regImie.test(elImie.value);
    
    if (sprawdz){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne imie';
            this.focus();//pozostaje w tym danym elemencie
    }
    
}

//dodaj zdarzenie blur dla elementow i dla niego wykonaj funkcje sprawdz 
function sprawdznazwisko() {
        var sprawdz = regNazwisko.test(elNazwisko.value);
    if (sprawdz){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne nazwisko';
            this.focus();//pozostaje w tym danym elemencie
    }
    
}
function sprawdzlogin() {
        var sprawdz = regLogin.test(elLogin.value);
    if (sprawdz){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędny login';
            this.focus();//pozostaje w tym danym elemencie
    }
    
}
function blokujmail(){
    var sprawdz = regMail.test(elMail1.value);
    if(sprawdz){
        elMail2.disabled = false;
        elMail2.focus();
        elMail1.disabled = true;
        elKomunikat.textContent = '';
    }else{
        elMail1.value = '';
        elKomunikat.textContent = 'Błędny e-mail';
        elMail1.focus();
        
    }
}
function mail(){
    if (elMail1.value != this.value){
        //rozne
        elMail1.value = '';
        this.value = '';//czyszczenie obydwu pol
        elMail1.disabled = false;//odblokowauje 1 mail bo wczesniej byl zablokowany 
        elMail1.focus();//focus na mail1 
        this.disabled = true;//blok 2 maila
        elKomunikat.textContent = 'Adresy poczty są różne';
        
    }else{
        //rowne
        elKomunikat.textContent = '';
        elMail1.disabled = true;
        elMail2.disabled = true;
    }   
}

function blokujhaslo(){
    var sprawdz = regHaslo.test(elHaslo.value);
    if(sprawdz){
        elHaslo2.disabled = false;
        elHaslo2.focus();
    }else{
        elHaslo.value = '';
        elHaslo.focus();
        elKomunikat.textContent = 'Hasło nie spełnia wymagań';
    }
    //po wyjsciu nie mozna juz zmienic nic w 1 polu
}


function sprawdzhaslo(){
    if (elHaslo.value !== elHaslo2.value){
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




elImie.addEventListener('blur', sprawdzimie);
elNazwisko.addEventListener('blur', sprawdznazwisko);
elLogin.addEventListener('blur', sprawdzlogin);
elMail1.addEventListener('blur', blokujmail);
elMail2.addEventListener('blur', mail);

elHaslo.addEventListener('blur', blokujhaslo);
elHaslo2.addEventListener('blur', sprawdzhaslo);
elRegulamin.addEventListener("click", regulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', wyslij);

///zamien litery w imieniu 
    





