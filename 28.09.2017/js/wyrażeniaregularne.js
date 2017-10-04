// https://regex101.com/ NAJ
// http://regex.pl/
// http://regexp.pl/
// http://www.regexlib.com/?AspxAutoDetectCookieSupport=1

//Wyrażenia regularne
// var tekst = 'Zespół Szkół Komunikacji';
// var regex = /Szkół/;
// var sprawdz = regex.test(tekst);

// var tekst1 = 'Technik informatyk';
/*var regex1 = /^informatyk$/; //false
var regex1 = /^informatyk/; //false
var regex1 = /informatyk$/;*/ //true
// var regex1 = /Tech[a-z]?/;
// var regex1 = /Tech[a-z]*/;
// var regex1 = /Tech[a-z]{1,2}/;
// var regex1 = /Tech[a-z]{1,3}/;
// var regex1 = /Tech[a-z\s]{1,3}/;
// var regex1 = /[a-z]+/;
// var regex1 = /[a-z]+/g;
// var regex1 = /([a-z]+)/gi;
// var regex1 = /\d{2}-\d{3}/; // kod pocztowy
// var regex1 = /\[0-9{2}-[0-9]{3}/; // kod pocztowy
// var sprawdz1 = regex1.test(tekst1);

// kod pocztowy Zad.dom

var elKod = document.getElementById('kod');
var elPrzycisk = document.getElementById('przycisk');
var elBlok = document.getElementById('blok');
var regex = /\[0-9{2}-[0-9]{3}/;
elPrzycisk.onclick = function(){

    if(kod == regex){
        elBlok.innerHTML = 'dobry kod pocztowy';
    }
    else {
        elBlok.innerHTML = 'zly kod pocztowy';
    }
}




