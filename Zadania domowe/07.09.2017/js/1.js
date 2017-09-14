function zapisz() {

    var form = document.forms["formularz"];
    var tablica = new Array();
    
    tablica.push(form.login.value);
    tablica.push(form.password.value);
    
    alert(tablica);
}