var x = Math.PI;
console.log(x);

//function pi(){
//    if (document.getElementById('wyborpi').checked == true){
//        alert('Wybrałeś PI');
//    }else if (document.getElementById('wybornic').checked == true){
//        alert('wybrales nic');
//    }else{
//        alert('Wybrałeś coś innego');
//    }
//}


//var x = document.getElementById('block');
//var y = document.getElementById('wyborpi');
//var z = document.getElementById('wybornic');
//function pi(){
//    if (y.checked == true){
//        x.innerHTML = Math.PI;
//    }else if (z.checked == true){
//        alert('wybrales nic');
//    }else{
//        alert('Wybrałeś coś innego');
//    }
//}



//var elblock = document.getElementById('block');
//var elWyborPI = document.getElementById('wyborpi');
//var elNic = document.getElementById('wybornic');
//
//
//function pi(){
//    if (elWyborPI.checked == true){
//        elblock.innerHTML = Math.PI;
//    }else if (elNic.checked == true){
//        elblock.innerHTML= '';
//        alert('wybrales nic');
//    }else{
//        alert('Wybrałeś coś innego');
//    }
//}


var pierwiastek = Math.sqrt(25);
console.log(pierwiastek);

//round,min,max

var a = 13.2;
var b = 28.5;

var minimalna = Math.min(a,b);
var maksymalna = Math.max (a,b);
console.log('minimalna' + minimalna);
console.log('maksymalna' + maksymalna);
var zaokraglenie = Math.round(b);
console.log('zaokroglenie' + zaokraglenie);

var zaokrMin = Math.round(minimalna);

//abs,round,floor;

var x = -56;
var y = -13.1;
var z = 14.9;

document.write(Math.abs(x) + '<br>');
document.write(Math.abs(y) + '<br>');
document.write(Math.abs(z) + '<br>');

document.write('<br>' + Math.round(x) + '<br>');
document.write(Math.round(y) + '<br>');
document.write(Math.round(y) + '<br>');

document.write('<br>' + Math.floor(x) + '<br>');
document.write(Math.floor(y) + '<br>');
document.write(Math.floor(y) + '<br>');

//potegi
var p = Math.pow(2,10);
console.log(p);

//losowanie
var losuj = Math.random();
console.log(losuj);

//losuj z przedziału od 0 do 10
var losuj1 = Math.floor(Math.random() *11);
console.log(losuj1);

for (var i=0; i<100 ; i++){
    document.write(Math.floor(Math.random()*91 + 10) + '<br>')
}














