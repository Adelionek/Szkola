function zegar(){
    
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var r;
    r = (h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);
    document.getElementById('czas').innerHTML = r;
    setTimeout('zegar()', 1000);
};
zegar();

var elImie = document.getElementsByName('imie');
var elNazwisko = document.getElementsByName('nazwisko');
var elEmail = document.getElementsByName('email');
var elHaslo = document.getElementsByName('haslo1');
var elHaslo2 = document.getElementsByName('haslo2');
var elRegulamin = document.getElementsByName('regulamin');
var elZarejestruj = document.getElementsByName('zarejestruj');
var elKomunikat = document.getElementsByName('komunikat');



var regImie = /^[a-z]{1}[a-zążźćęńół]{2,31}$/; 
var regNazwisko = /^[a-z]{1}[a-zążźćóńęł]{1,31}[a-a]{1}(\-[a-zążźćóńęł]{1,31})?$/i;
var regMail = /^[a-z]{1}[\w\.\-]{0,30}@(\w{1,20}\.){1,7}[a-z]{1,3}$/i;

//Hasło musi bć bezpieczne tzn. małe litery, duże litery, cyfry, znak specjalny min 8 znaków

var regHaslo = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|\_).{8,35})$/;


function sprawdzimie() {
        var sprawdz = regImie.test(elImie.value);
    
    if (sprawdz){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne imie';
            this.focus();
    }
}

function sprawdznazwisko() {
        var sprawdz = regNazwisko.test(elNazwisko.value);
    if (sprawdz){
        elKomunikat.textContent = '';
    }else{
            elKomunikat.textContent = 'Błędne nazwisko';
            this.focus();
    }
    
}

function blokujmail(){
    var sprawdz = regMail.test(elMail1.value);
    if(sprawdz){
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Błędny e-mail';        
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
}


function sprawdzhaslo(){
    if (elHaslo.value !== elHaslo2.value){
        //rozne
        elHaslo.value = '';
        elHaslo2.value = '';
        elHaslo.disabled = false;
        elHaslo.focus();
        elHaslo2.disabled = true;
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


function zmien(){
    elKomunikat.innerHTML = "ZZZ";
}

elImie.addEventListener('blur', zmien);
elNazwisko.addEventListener('blur', sprawdznazwisko);
elLogin.addEventListener('blur', sprawdzlogin);
elMail1.addEventListener('blur', blokujmail);
elMail2.addEventListener('blur', mail);

elHaslo.addEventListener('blur', blokujhaslo);
elHaslo2.addEventListener('blur', sprawdzhaslo);
elRegulamin.addEventListener("click", regulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', wyslij);

    





