var KodPocztowy = document.getElementById('kod')
var regEx = /^[0-9]{2}-[0-9]{3}$/;
var blokk = document.getElementById('blok');



KodPocztowy.addEventListener('input',sprawdz)

function sprawdz(){
    if (regEx.test(kod.value)){
        blokk.textContent = ('Poprawny kod pocztowy');
    }else{
        blokk.textContent = ('Błędny kod pocztowy');

    }
}
