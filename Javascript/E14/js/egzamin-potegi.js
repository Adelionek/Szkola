var elPrzycisk = document.getElementById("potega");
var elDrugiwynik = document.getElementById("drugiwynik");
var form = document.forms["formluarz2"];



elPrzycisk.onclick potegowanie(){
    var a = form.podstawa.value;
    var b = form.wykladnik.value;
    a = parseFloat(a);
    b = parseFloat(b);

    elDrugiwynik.textContent ='Wynik działania wynosi' + Math.pow(a,b);

}
