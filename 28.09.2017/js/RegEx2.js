var text = 'Zespół Szkół Zespół komunikacji';
var regEx = /Zespół/;

var sprawdz = regEx.exec(text); //zwraca 1 dopasowanie
console.log(sprawdz);

var pliki = 'plik.mp3 arkusz.csv muzyka.mp3 text.txt';
var regEx1 = /\w+
