$(document).ready(function(){
    $('#tabela1 tr:even').css('background', '#b2aaaa');//parzyste
    $('#tabela1 tr:odd').css('background', '#54f400');
    $('#tabela1 tr:first').css('background', '#9600f4');
    $('#tabela1 tr:last').css('background', '#f40000');
    $('#tabela1 tr:eq(3)').css('background', 'rgba(92,6,9,0.83)');
    $('#tabela1 td:contains("Sól")').css('background', 'lightblue');//jezeli zawiera nazwe sol to zmienia kolor na lightblue
    
    
    
    
    $('#niewidoczny').click(function(){
        $('#zdj').hide(1500)
    })
        
    $('#widoczny').click(function(){
        $('#zdj').show(1500)
    })
    
    
    
/*
    $('p:hiddn').show(3000);
*/
    
});


