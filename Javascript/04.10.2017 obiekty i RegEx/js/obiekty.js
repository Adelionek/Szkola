//Tworzeniei obiektu za pomocą literału
var janusz = {
    wzrost: 180,
    waga:79,
    miejsceUrodzenia: 'Poznań',
    plec: 'm',
};
/*janusz.oczy = 'zielone';

console.log(janusz['oczy']);
console.log(janusz.oczy);*/

//console.log(janusz.wzrost);
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
                return 'Imie: ' + this.imie + '<br> Nazwisko ' + this.nazwisko;
            }
        }
}

console.log(ksiazka['autor']['imie']); 


var klucz = 'imie';
//console.log(ksiazka.autor);2
//console.log(ksiazka.autor[klucz]);
//***********************************************

//tworzenie pustego obiektu 

var produkt = {};
//sprawdzamy czy właściwość istnieje
console.log(typeof(produkt.nazwa));
//dodawanie właściwości i metod
produkt.nazwa = 'pralka';
produkt.firma = 'Bosh';
produkt.model = 'WAK2024PI';
produkt.waga = 8;
produkt.cena = 1500;

/*produkt.wyswietl = function() {
    return 'Nazwa produktu: ' + this.nazwa + '<br> Firma: ' + this.firma + '<br> model: ' + this.model + '<br> Waga: ' + this.waga + '<br> Cena: ' + this.cena; 
}
document.write(produkt.wyswietl());
console.log(typeof(produkt.nazwa));*/

//Przeksztalcić metodę wyświwetl dla obiektu produkt

var tab = [produkt.nazwa, produkt.firma, produkt.model, produkt.waga, produkt.cena,] // tablica z wynikiem 
for (var i = 0; i <=tab.length -1; i++){
    document.write(tab[i] + '<br>')
 }   

    
var newtab = [produkt.nazwa, produkt.firma, produkt.waga, produkt.model, produkt.cena];
    for (var n=0 ; n <    newtab.length -1 ; n++){
        document.write(newtab[i] + '<br>')
    }

    
    


//*************************************************

var hotel = new Object();
	hotel.nazwa = 'Wielki Hotel Poznań',
	hotel.pokoje = 1922,
	hotel.zarezerwowanePokoje = 1410,
	hotel.silownia = true,
	hotel.basen = true,
	hotel.rodzajPokoje = ['pojedynczy', 'podwójny', 'rodzinny', 'apartament']

	hotel.wolnePokoje = function(){
		return this.pokoje - this.zarezerwowanePokoje;
	}
	console.log(hotel.wolnePokoje());

//***************************************************
//var tablica = new Array();

function Hotel(nazwa, pokoje, zarezerwowanePokoje){
	this.nazwa = nazwa;
	this.pokoje = pokoje;
	this.zarezerwowanePokoje = zarezerwowanePokoje;
	this.wolnePokoje = function(){
		return this.pokoje - this.zarezerwowanePokoje;
	}
};

var hotelLech = new Hotel('Lech', 200, 167);
var hotelMerkury = new Hotel('Merkury', 600, 497);

document.write('Wolne pokoje w hotelu Lech: ' + hotelLech.wolnePokoje() + '<br>');
document.write('Wolne pokoje w hotelu Merkury: ' + hotelMerkury.wolnePokoje() + '<br>');

//Tablice w obiekcie

var platnosci = {
	pokoj1: [50, 100],
	pokoj2: [50, 100, 1000],
	pokoj3: [50, 100],
	pokoj4: [50, 100]
};

console.log(platnosci.pokoj1[0]);
console.log(platnosci.pokoj2.length);

function Auto(marka){
	this.marka = 'Ferrari'
};

var samochod = new Auto();
	console.log(samochod.marka);


//*********************************************************************************

function Osoba(imie, nazwisko, wiek, plec){
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wiek = wiek;
	this.plec = plec;
	this.narodowosc = 'Polska';
}

var czarek = new Osoba ('Cezary', 'Nowak', 19, 'M')
console.log(czarek.narodowosc);

//Utwórz konstruktor o nazwie pies i parametrach imie, rasa, waga oraz ulubione zajęcia. W ulubionychzajęciach może być wiele wartości. Utwórz trzy obiekty o nazwach Azor, Eddie oraz Saba.

function Pies(imie, rasa, waga, ulubioneZajecia){
	this.imie = imie;
	this.rasa = rasa;
	this.waga = waga;
	this.ulubioneZajecia = ulubioneZajecia;
};


var Azor = new Pies('Azor', 'Jamnik', 7, ['Leżenie','Spacery','Leżenie']);
var Eddie = new Pies('Eddie', 'Doberman',20, ['Warczenie','Gryzienie','Sikanie']);
var Saba = new Pies('Saba', 'Posokowiec',10, ['Aportowanie','Lizanie','Jedzenie']);

console.log(Azor);
console.log(Saba);
console.log(Eddie);


var psy = [Azor, Eddie, Saba];
Eddie.ulubioneZajecia.push('spanie');
var rozmiar = 'mały';

for(var i=0; i < psy.length; i++){
    if (psy[i].waga > 10){
        rozmiar = 'duży';
    }
    document.write('Pies ' + psy[i].imie + ' jest ' + rozmiar + '<br>')
}

var tab = ['Jan', 'Nowak', 'Poznań'];
var i;
for (i in tab){
    document.write(i + tab[i] + '<br>');
}

//SZYBKA MOZLIWOSC WYSWIETLENIA TABLICY

var a;
for(a in Eddie){
    if(a == 'imie' || a == 'rasa')
    document.write(a + ': ' + Eddie[a] + '<br>');
}

function Pole(a,b){
    return a*b;
};

console.log(Pole.length);
console.log(Pole.constructor);
console.log(Pole.prototype);

function uczen(imie,nazwisko){ 
    this.imie = imie;
    this.nazwisko = nazwisko;
};

var Maciej = new uczen('Maciej', 'Nowak');

uczen.prototype.narodowosc = 'Polska';

uczen.prototype.wyswietlUcznia = function(){
    return 'Imię: ' + this.imie + ' Nazwisko: ' + this.nazwisko + ' Narodowosc: ' + this.narodowosc;
}
/*document.write(Maciej.wyswietlUcznia());
document.write(uczen.prototype.imie);
document.write(Maciej.constructor.prototype.narodowosc);*/

//*******************************************************************************

function Rower(firma,kolor){
    this.firma = firma;
    this.kolor = kolor;
}


Rower.prototype.iloscKol = 2;


var romet= new Rower('Romet', 'Biały');

//wyswietl wlasne obiekty z konstruktorem Romet
for (var pole in romet){
    if(romet.hasOwnProperty(pole)){
        document.write(pole + ' = ' + romet[pole]);
    }
}

//****************************************************************
var pies = {
    nazwa: 'pies',
    waga: '10'
};

function Zwierze(imie){
    this.imie = imie;
}

Zwierze.prototype = pies; //zmieniamy ze pies bedzie jako zwierze

var kajtek1 = new Zwierze('kajtek');
var kajtek2 = new Zwierze('kajtek');
kajtek2.waga = 11;
console.log(kajtek1.waga);



//na pewno będą wyrazenia regularne i jedno z konstruktorów i jedno z obiektóe