//Tworzeniei obiektu za pomocą literału
var janusz = {
    wzrost: 180,
    waga:79,
    miejsceUrodzenia: 'Poznań',
    plec: 'm',
};

console.log(janusz.wzrost);
//document.write(janusz); //wyswietla sie obiektowo

//Utwórz obiekt z właściwoścuami: marka, model, prędkość, wyświetl(metoda)

/*var auto = {
    marka: 'Ferrari',
    model: 'F400',
    predkosc: 280,
    wyswietl(){
    return 'Marka' + this.marka;
    }
}*/

//**********************************

var ksiazka = {
    tytul: 'Pan Tadeusz',
    rokWydania: '1834',
    gatunek: 'Poemat epicki',
        autor: {
            imie: 'Adam',
            nazwisko: 'Mickiewicz',
            wyswietlDane(){
                return 'Imie: ' + this.imie + '<br>Nazwisko ' + this.nazwisko;
            }
        }
}

//console.log(ksiazka['autor']['nazwisko']); 


var klucz = 'imie';
//console.log(ksiazka.autor);
//console.log(ksiazka.autor[klucz]);
//***********************************************

//tworzenie pustego obiektu 

var produkt = {};

//sprawdzamy czy właściwość istniehe

console.log(typeof(produkt.nazwa));
//dodawanie właściwości i metod
produkt.nazwa = 'pralka';
produkt.firma = 'Bosh';
produkt.model = 'WAK2024PI';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function() {
    return 'Nazwa produktu: ' + this.nazwa + '<br> Firma: ' + this.firma + '<br> model: ' + this.model + '<br> Waga: ' + this.waga + '<br> Cena: ' + this.cena; 
}
document.write(produkt.wyswietl());
console.log(typeof(produkt.nazwa));

//Przeksztalcić metodę wyświwetl dla obiektu produkt

