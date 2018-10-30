var elDodawanie = document.getElementById("dod");
var elOdejmowanie = document.getElementById("odej");
var elMnozenie = document.getElementById("mnoz");
var elDzielenie = document.getElementById("dziel");
var elWynik = document.getElementById("wynik");
var elPierwszy = document.getElementById("pierwsza");
var elDrugi = document.getElementById("druga");

// elDodawanie.onclick dodawanie(){
   


/*var form = document.forms["formularz"];
var a = form.pierwsza.value;
var b = form.druga.value;*/

elDodawanie.onclick = function(){
    var a = parseFloat(elPierwszy.value);
    var b = parseFloat(elDrugi.value);
    elWynik.innerHTML = a + b;
}

function odejmowanie(){
    var a = form.pierwsza.value;
    var b = form.druga.value;
    a = parseFloat(a);
    b = parseFloat(b);

    elWynik.textContent = a - b;
}

function mnozenie(){
    var a = form.pierwsza.value;
    var b = form.druga.value;
    a = parseFloat(a);
    b = parseFloat(b);
    elWynik.textContent = a * b;
}

function dzielenie(){
    var a = form.pierwsza.value;
    var b = form.druga.value;
    a = parseFloat(a);
    b = parseFloat(b);
    elWynik.textContent = a / b;
    if(b==0){
        elWynik.textContent = 'Nie dzielimy przez 0'};
}

