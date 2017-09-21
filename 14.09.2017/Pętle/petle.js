
//
//for (var i=0; i<100 ; i++){
//    document.write(i +' raz');
//    if(i!=1){document.write('y')}
//    document.write('<br>');
//}


//uzytkownik z klawiatury podaje wartosc liczby poczatkowej i koncowej petli, po kazdjek liczbie dodaj przecinek a tylko po ostatniej podaj kropke. pierwsza liczba musi byc mniejsza od drugiej


//var a = prompt('Podaj liczbe a ');
//var b = prompt('Podaj liczbe b ');
//
//for (var i=a; i<=b; i++) {
//    var znak = ',';
//    if (i==b) { znak = '.'; }
//    document.write(i + znak + '<br>');
//}



//*************Pętla while**************

//var i = 0;
//while (i++ < 5){
//    document.write(i + '<br>');
//}
//
//var wiek;
//wiek=prompt('Podaj wiek');
//var wiek1=18;
//
//while(wiek!=wiek1);{
//    wiek=prompt('podaj wiek');
//    if (wiek==wiek1){
//    document.write('Masz 18 lat');
//    }
//}

//****dowhile*****

//do {
//    var wiek = prompt('podaj wiek');
//    if (wiek==18){
//        document.write('masz 18 lat')
//    }
//}
//while (wiek !=18);


//Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl na stronie.

//var liczby = [];
//var liczba;

//for (var i=0; i<5; i++){
//do {
//        liczba = prompt('Podaj liczbe podzielna przez 2');
//    }
//
//
//}
//

//Uzytkownik podaje z klawiatury liczbe, zabezpiecz przed podaniem litery, znaku specjalnego

//document.write('<input type="text" id="liczba">');
//document.write('<button id="przycisk">Wyślij</button>');
//var elPrzycisk = document.getElementById('przycisk');
//var elLiczba = document.getElementById('liczba');
//
//
//elPrzycisk.onclick = function(){
//    var wartosc = elLiczba.value;
//    if(!isNaN(wartosc)){
//        console.log(wartosc);
//    }
//
//}

//Program wyswietlajace liczby 1-10 w pieciu rzedach. PO kazdej liczbie ma byc przecinek a po ostatniej w kazdym rzedzie ma byc kropka

//for (var i=1 ; i<=10 ; i++){
//    document.write('<input type="text" id="liczba>' + i + '">');
//}


//for(var j=1 ; j<5 ; j++){
//    for (var i =1 ; i<= 10; i++){
//    if(i!=10){
//        document.write(i + ',');
//    }else{
//        document.write(i + '.')
//        }
//    }
//    document.write('<br>');
//}

//uzytkownik podaje z klawiatury maksymalna ilosc gwaizdek.Zrob petle, w ktorej zabezpieczysz przed podaniem błędnych danych. Użytkownik może również w formularzu podać inny znak jaki chce wyswietlic na ekranie






//Uzywtkownik podaje z klawiatury login i haslo. Jesli login to janisz a haslo to okon na ekranie wyswietli sie w kolorze czerwonym haslo. Jesli haslo bedzie błędne to w kolorze niebieskim wysiwetli sie bledne haslo


//var elLogin = document.getElementById('login');
//var elpass = document.getElementById('pass');
//var elprzycisk = document.getElementById('przycisk');
//var elWynik = document.getElementById('wynik');
//
//elprzycisk.onclick = function(){
//    var login = elLogin.value;
//    var pass = elpass.value;
//    if(login == 'Janusz' && pass == 'okon'){
//        elWynik.style.color = 'red';
//        elWynik.innerHTML = pass;
//    }else{
//        elWynik.style.color = 'blue';
//        elwynik.innerHTML = pass;
//
//    }
//}
//


//var max = prompt('Podaj maksymalną ilość gwiazdek');
//
//
//
//    for (var i=0 ; i<max ; i++){
//
//        for(var j=0 ; j<=i ; j++)
//        {
//            document.write("*");
//        }
//    document.write("<br>")
//
//        }

 var tab = ['Anna','Adrian','Janusz','Andrzej'];
//
//for (var i=0 ; i<= tab.length - 1 ; i++){
//    document.write(tab[i] + ',');
//}

//wyswietlanie elementow tablicy pokolei for each

function p(indeks, wartosc){
    document.write(wartosc + 1 + ' pierwszy element tablicy ' + indeks + '<br>');
}
tab.forEach(p);












