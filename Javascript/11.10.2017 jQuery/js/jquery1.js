$(document).ready(function() {
    $('div').css('background','yellow');
    $('.text').css('background','teal');
    $('#id2').css('color','white');
    $('#id1').css({'background': 'white', 'color': 'green'});
    $('*').css('color','black');
    $('*').css('font-family','arial','verdana');
    $('*').css({
        'color': 'red',
        'font-size': '90%'
    });
    
$('#btn1').on('click',function(){
    $('#przyciskTekst').css('color','pink')
});    
    
$('#ukryjAkapit').click(function(){
   // $('#akapit').hide(); 
   // $('#akapit').hide('slow'); 
   // $('#akapit').hide('fast'); 
   $('#akapit').hide(5000); 
});
    
$('#pokazAkapit').click(function(){
   // $('#akapit').show(); 
   // $('#akapit').show('fast'); 
   // $('#akapit').show('slow'); 
   $('#akapit').show(3500); 
});
    
$('#zmienHtml').click(function() {
    $('#html').html('<h1>Zmieniony tekst</h1>');
});  
    
$('#kolorInny').click(function(){
   $('input[type="text"]').css('background','brown'); 
   $('input[type="password"]').css('background','green'); 
});
    
    
$('#kolorInny').on('click',function(){
    $('input[type = "text"]')
})    
  
$('a').css('color','green');
$('#link a').css('color','black');
});