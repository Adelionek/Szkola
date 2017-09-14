//document.write('test');

var tekst = "ZSK - Zespół Szkół Komunikacji";
console.log(tekst.length); //30

var pierwszy = tekst.charAt(0);
console.log(pierwszy); //Z
console.log(tekst.charAt(tekst.length-1)); //i
console.log(tekst.charAt(11)); //Ł
console.log(tekst.charCodeAt(0)); //Z
console.log(tekst.charCodeAt(0) + 32); //z

//Zamiana na duże litery

var duze = tekst.toUpperCase();
document.write(duze);
var male = tekst.toLowerCase();
document.write('<br>' + male);

var duzaMale = tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();
document.write('<br>' + duzaMale);

/* Użytkownik wprowadza z klawiatury swoje imie. Zamień pierwszy znak na dużą litere, a pozostałe mają być małe. 
Wyświetl wszytsko w nagłówku drugiego stopnia w kolorze niebieskim. */

var imie = prompt("Podaj swoje imie");
var imiePoprawne = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
document.getElementById("naglowek").innerHTML = imiePoprawne;
document.getElementById("naglowek").style.color = "blue";

console.log(imiePoprawne.substr(0, 3));

var imie2 = "janusz";
console.log(imie2.substr(2, imie2.length - 2));