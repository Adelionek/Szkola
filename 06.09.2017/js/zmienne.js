//document.write('ZSK');
//console.log("test");

var imie = 'Maciej';
var nazwisko;
nazwisko = 'Nowak';
document.write(imie + ' ' + nazwisko);

var wiek1 = 19;
var wiek2 = 20;
var sredniWiek = (wiek1 + wiek2) / 2;
console.log(sredniWiek);

//alert(sredniWiek);

var a = 5, b = "3";

var suma = a + b;
console.log(suma);

var c = 2.5;

console.log(typeof(c));

var dziesietna = 20;
var oktalna = 020;
var hex = 0x20

console.log(dziesietna);
console.log(oktalna);
console.log(hex);

console.trace();

var test;
console.log(test);

var zmienna = true;
console.log(typeof(zmienna));

var j = "1";
console.log(typeof(j));

j = parseInt(j);
console.log(typeof(j));

var j = "1";
console.log(typeof(j));

var g = "1.5"
g = parseInt(g);
console.log(typeof(g));

var wiek = prompt('Podaj swój wiek');
var kolor = prompt('Podaj kolor');
//document.getElementById('naglowek').innerHTML = wiek;

var naglowek = document.getElementById('naglowek');
naglowek.innerHTML = wiek;
naglowek.style.color = kolor;
