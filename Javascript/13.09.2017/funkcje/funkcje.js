function witaj(imie){
    document.write('Witaj' +imie);
}
var name = 'Maciej';
witaj(name);

function poleProstokata(a,b){
    var pole = a*b;//zmienna likalna o nazwie pola
    return pole;
}
//var a = prompt('Podaj a');
//var b = prompt('Podaj b');
//var pole = poleProstokata (a,b);
//console.log(pole);

function poleObjetosc(szerokosc,dlugosc,wysokosc){
    var pole = szerokosc*dlugosc;
    var objetosc = pole*wysokosc;
    var wynik = [pole,objetosc];
    return wynik;
}

var pole = poleObjetosc(2,3,4)[0];
var objetosc = poleObjetosc (2,3,4)[1];
console.log('Pole'+pole);
console.log('objetosc'+objetosc);