var kolory;

//Tworzenie tablicy za pomocą literału tablicy

kolory = ['biały', 'zielony', 'czerwony'];

var elKolor = document.getElementById("kolor");
elKolor.textContent = kolory[0];

//Tworzenie tablicy za pomocą konstruktora tablicy Array

var samochody = new Array('BMW', 'Audi', 'Ferrari');

console.log(samochody[0]);
console.log(samochody[samochody.length - 1]);   
document.write("Ilość elemntów wynosi: " + samochody.length);

//samochody[0] = prompt("Podaj autko");
//console.log(samochody[0]);

//Tablica wielowymiarowe

var tab = new Array(
    Array('Jan', 'Nowak', 'Poznań'),
    Array('Anna', 'Pawlak', 'Gniezno'),
    Array('Michał', 'Lulek', 'Warszawa')
);

console.log(tab);
document.write(tab[1][2]);

var imiona = ['Janusz', 'Andrzej', 'Marta'];
console.log(imiona);

var posortowaneImiona = imiona.sort();

console.log(posortowaneImiona);

var posortowaneImionaOdwrotnie = posortowaneImiona.reverse();
console.log(posortowaneImionaOdwrotnie);

imiona.pop(); //Usuwa ostatni element tablicy
imiona.shift(); //Usuwa pierwszy element tablicy
imiona.push("Pyssa"); //Dodaje element na końcu tablicy
imiona.unshift("Szulada"); //Dodaje element na początku tablicy

//Sprawdzanie czy element jest w tablicy

console.log(imiona.indexOf("Marta")); //1 istnieje, -1 nie istnieje

//Tablica z liczbami
var cyfry = [1, 2, 20, 190, -1];

console.log(cyfry);
//cyfry.sort(); NIE DZIAŁA ŁADNIE
//console.log(cyfry);

cyfry.sort(function (a, b){
    return (a - b);
});

console.log(cyfry);

function wypisz() {
    var elKolor1 = document.getElementById('kolor1').value;
    var elKolor2 = document.getElementById('kolor2').value;
    var elKolor3 = document.getElementById('kolor3').value;

    var kolory2 = [elKolor1, elKolor2, elKolor3];

    console.log(kolory2);
}