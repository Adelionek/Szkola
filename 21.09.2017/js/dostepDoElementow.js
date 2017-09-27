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


.//do domu.
//zmien wszystkie elementy w liscie z imionmi na czerwone, wykorzystaj metode




