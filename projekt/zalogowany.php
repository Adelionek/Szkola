<?php
session_start();
if(isset($_SESSION['zalogowany']))

?>
<!DOCTYPE html>
<html lang="pl">
<head>
  <title>Projekt</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></head>
<link rel="stylesheet" href="projekt.css">
<body>

<header>
    <div class="container-fluid">
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="zalogowany.php"><img class="logo" src="Proxy_Logo3.gif"></a>

  <div id="navbar" class="collapse navbar-collapse" id="menu">
    <ul class="nav navbar-nav ml-auto">
      <li>
           <div>
               <a class="nav-link"><?php echo"Witaj ".$_SESSION['user']; ?>

               </a>
           </div>
        </li>
        <li>
            <div>
                <a class="nav-link" href="wyloguj.php">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>Wyloguj się
                </a>
            </div>
        
        </li>
    </ul>
  </div>
</nav> 
<div class="menu">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#">Droplista</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#">Nowości</a>
        </li>
        <li class="nav-item">
            <a  class="nav-link" data-toggle="pill" href="#">Informacje</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="kontakt.php">Kontakt</a>
        </li>
    </ul>
</div><br>
</div>
</header>
<div class="container">
    <div class="row">
        <div class="col-lg-12"><h4>Dostępne przedmioty</h4></div>
    </div>
    <div class="row">
        <div class="col-lg-4"><a href="produkt.php?id=5"><img src="Ciuchy/Kurtki/Levis/IMG_4465.JPG"></a><span>Kurtka levis</span></div>
        <div class="col-lg-4"><a href="produkt.php?id=6"><img src="Ciuchy/Kurtki/Burberry/1.jpg"></a><span>Wiatrówka burberry</span></div>
        <div class="col-lg-4"><a href="produkt.php?id=7"><img src="Ciuchy/Kurtki/Kurtkaralph/IMG_E4449.JPG"></a><span>Wiatrówka ralph</span></div>

    </div>
    <div class="row">
        <div class="col-lg-4"><a href="produkt.php?id=3"><img src="Ciuchy/Spodnie/Dresy.jpg"></a><span>Dresy Adidas</span></div>
        <div class="col-lg-4"><a href="produkt.php?id=4"><img src="Ciuchy/Swetry/gucci.jpg"></a><span>Sweter Gucci</span></div>
        <div class="col-lg-4"><a href="produkt.php?id=1"><img src="Ciuchy/Buty/Yeezy/yeezy.jpg"></a><span>Yeezy</span></div>
    </div>
    <div class="row">
        <div class="col-lg-4"><a href="produkt.php?id=2"><img src="Ciuchy/Koszulki/jordan1.JPG"></a><span>Koszulka jordan</span></div>
       
    </div>
</div>
   <div class="container footer bg-faded">
    <?php
        if(!isset($_COOKIE['licznik'])){
            $_COOKIE['licznik']=0;
        }else{
            $_COOKIE['licznik']++;
        }

        setcookie('licznik',$_COOKIE['licznik'],time()+60*60*24);
    
        if($_COOKIE['licznik'] == 1){
                echo "Liczba odwiedzin w ciągu ostatniego dnia:<span style=\"color:red\">{$_COOKIE["licznik"]}</span> raz";
            }else{
                echo "Liczba odwiedzin w ciągu ostatniego dnia:<span style=\"color:red\">{$_COOKIE["licznik"]}</span> razy";
            }
    echo "\t";
    echo " | ";
    
    
    
    
        $miesiac = date("m");

            switch($miesiac){
                case 0:
                    $miesiac = "styczeń";
                    break;
                case 1:
                    $miesiac = "luty";
                    break;
                case 2:
                    $miesiac = "marzec";
                    break;
                case 3:
                    $miesiac = "kwiecień";
                    break;
                case 5:
                    $miesiac = "maj";
                    break;
                case 6:
                    $miesiac = "czerwiec";
                    break;
                case 7:
                    $miesiac = "lipiec";
                    break;
                case 8:
                    $miesiac = "sierpień";
                    break;
                case 9:
                    $miesiac = "wrzesień";
                    break;
                case 10:
                    $miesiac = "październik";
                    break;
                case 11:
                    $miesiac = "listopad";
                    break;
                case 12:
                    $miesiac = "grudzień";
                    break;
            };

        $dzienTygodnia = date("w");

            switch($dzienTygodnia){
                case 0:
                    $dzienTygodnia = "Niedziela";
                    break; 
                case 1:
                    $dzienTygodnia = "Poniedziałek";
                    break; 
                case 2:
                    $dzienTygodnia = "Wtorek";
                    break; 
                case 3:
                    $dzienTygodnia = "Środa";
                    break; 
                case 4:
                    $dzienTygodnia = "Czwartek";
                    break; 
                case 5:
                    $dzienTygodnia = "Piątek";
                    break; 
                case 6:
                    $dzienTygodnia = "Sobota";
                    break;


            }
            echo "Dzisiaj jest ".$dzienTygodnia.", ".$dzien = date("d").".".$miesiac.".".$rok = date("Y");
        
    ?>
    Godzina: <span id="czas">x</span>
</div>
<script src="skrypt.js"></script>
</body>
</html>
