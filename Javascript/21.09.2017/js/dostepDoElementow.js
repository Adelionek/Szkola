// Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className= 'zielony';

//Metoda GetsElementByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if (elNaglowek.length > 0){
    console.log(elNaglowek);
    console.log(elNaglowek.length);
    elNaglowek[0].className = 'czerwony';
}

//Metoda getElementsByClassName()


var elCzerwony = document.getElementsByClassName('czerwony');
//.length ile klas jest na stronie
if(elCzerwony.length > 0){
    console.log(elCzerwony.length);

}
// wolniejszy sposob
elCzerwony.item(elCzerwony.length -1).className='zielony';

//szybszy sposob
elCzerwony[elCzerwony.length -1].classname = 'zielony';

//Metoda getElementsbyName

var elAuta = document.getElementsByName('auto');
console.log('elAuta');
elAuta[1].className = 'grey';

//nie dziala







//Metoda querySelctor()
//zwraca pierwsze dopasowania

var elImie =document.querySelector('li#i2');//li drugie id
elImie.className = 'zielony';

//Metoda QuerySelectoAll()

var elImiona = document.querySelectorAll('li.grey');
console.log(elImiona);
elImiona[0].className = 'zielony';


//do domu.
//zmien wszystkie elementy w liscie z imionmi na czerwone, wykorzystaj metode

var poczatekElem = document.getElementById('ks2');
var poprzedniElem = poczatekElem.previousElementSibling;
var nastepnyElem = poczatekElem.nextElementSibling;

poczatekElem.classname = 'zielony';
poprzedniElem.classname = 'zielony';
nastepnyElem.classname = 'zielony';

//firstchild,lastchild



var lista = document.getElementsByTagName('ul')[2];
console.log(lista);

var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.className = 'czerwony';
ostatni.className = 'czerwony';

pierwszy.setAttribute('class','czerwony')//drugi sposob na zmiane klasy


//zmien pierwszy element input na button i przypisz wartosc "wyslij"



var input = document.getElementsByTagName('input')[0];
console.log(input);

input.setAttribute('type','button');
//input.value = 'Wyślij'

input.setAttribute('value', 'Wyślij');
var link = document.getElementById('link');
link.setAttribute('href','http://zsk.poznan.pl');








