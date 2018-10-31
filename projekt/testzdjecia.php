<?php
session_start();

    $polaczenie = @new mysqli('localhost','root','','sklep');
    if(!$polaczenie->connect_errno){
        
        $link = "SELECT `nazwa_jpg` FROM `zdjecia` WHERE `id_przedmiotu` = '2' ";
        if($rezultat = $polaczenie->query($link)){
        
            while($wiersz = $rezultat->fetch_assoc()){
                
                $zdjecie = $wiersz['nazwa_jpg'];
                echo "<img style=\"width:22%; height:60%; \" src=\"$zdjecie\">";
            }
            
        }else{
            echo "błędne zapytanie";
        }
        

    }else{
        echo "Error:".$polaczenie->connect_errno;
    }




?>
