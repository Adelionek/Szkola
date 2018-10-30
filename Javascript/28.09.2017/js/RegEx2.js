var text = 'Zespół Szkół Zespół komunikacji';
var regEx = /Zespół/;

var sprawdz = regEx.exec(text); //zwraca 1 dopasowanie
console.log(sprawdz);

var pliki = 'plik.mp3 arkusz.csv muzyka.mp3 text.txt';
var regEx1 = /\w+

var regImie = /^[A-Z]{1}{a-z}{1,31}/
//grupa moz byc zawarta ale nie musi

var regexLogin = /^[a-z0-9]{1}/

