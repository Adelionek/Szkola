<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<link rel="stylesheet" href="projekt.css">
</head>

<body>

<header>
<div class="container-fluid">
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="index.php"><img class="logo" src="Proxy_Logo3.gif"></a>

  <div id="navbar" class="collapse navbar-collapse" id="menu">
    <ul class="nav navbar-nav ml-auto">
      <li class="navlink-primary">

            <div>
                <a class="nav-link" href="logowanie.php">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>Zaloguj się
                </a>
            </div>
        
      </li>
      <li class="nav-item">
           <div>
                <a class="nav-link" href="rejestracja.php">
                    <i class="fa fa-user-o" aria-hidden="true"></i>Rejestracja
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
            <a class="nav-link" data-toggle="pill" href="#">Kontakt</a>
        </li>
    </ul>
</div><br>
</div>
</header>
<div class="container">
   <div class="row">
       <div class="col-lg-12">
           <div class="panel">
               <div class="panel-heading">
                  <h3>
                      <i class="fa fa-location-arrow"></i>
                      Location
                  </h3>
                </div>
               <div class="panel-body">
                   <div id="map">
                        <script>
                          function initMap() {
                            var uluru = {
                            lat: 52.4069200, lng: 16.9299300};
                            var map = new google.maps.Map(document.getElementById('map'), {
                              zoom: 15,
                              center: uluru
                            });
                            var marker = new google.maps.Marker({
                              position: uluru,
                              map: map
                            });
                          }
                        </script>
                        <script async defer
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZOSywC3UnxdXM3smdJuuM-ol5aGdElWk&callback=initMap">
                        </script>
                  </div>
               </div>
           </div>
       </div>
       <div class="col-lg-4">
           <div class="panel">
               <div class="panel-heading">
                   Nasze biuro
               </div>
               <div class="panel-body">
                   <i class="fa fa-map-marker">Ul. Fredry 13 62-070 Poznań</i><br>
                  <i class="fa fa-phone">+48 513030671</i><br>
               </div>
           </div>
           <div class="panel">
               <div class="panel-heading">
                   Godziny otwarcia
               </div>
               <div class="panel-body">
                   Poniedziałek: 10-18<br>
                   Wtorek: 10-18<br>
                   Środa: 10-18<br>
                   Czwartek: 10-18<br>
                   Piątek: 10-18<br>
                   Sobota: 10-14<br>
                   Niedziela: Nieczynne<br>
               </div>
           </div>
       </div>
       <div class="col-lg-8">
          <div class="panel">
            <div class="panel-heading">
               Skontaktuj się z nami
            </div>
            <div class="panel-body">
                <form id="kontakt">
                  <div class="form-group">
                      <input type="text" class="form-control" name="imie" placeholder="Podaj Imię">
                  </div>
                  <div class="form-group">
                      <input type="text" name="nazwisko" class="form-control" placeholder="Podaj Nazwisko">
                  </div>   
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Podaj email">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="wiadomosc" placeholder="Wiadomość" size="30">
                  </div>
                  <button type="submit" class="btn btn-primary" name="zarejestruj">Zarejestruj</button>
                    <?php
                        if(isset($_GET['zarejestruj'])){
                            $adres="adelionek@gmail.com";
                            $tytul = "kontakt ze strony";
                            $wiadomosc = "Działa";
                            
                            mail($adres,$tytul,$wiadomosc);
                        }
                    
                    ?>
                </form>
            </div>
           
           </div>
        </div>
   </div>
    
    
    
    
     
</div>
<div class="container footer bg-faded">
    <?php
/*        if(!isset($_COOKIE['licznik'])){
            setcookie('licznik',0,time()+60*60*24);
        }else{
            $licznik = $_COOKIE['licznik'];
            $licznik++;
        }

        setcookie('licznik',$licznik,time()+60*60*24);
    
        if($_COOKIE['licznik'] == 1){
                echo "Liczba odwiedzin w ciągu ostatniego dnia:<span style=\"color:red\">{$_COOKIE["licznik"]}</span> raz";
            }else{
                echo "Liczba odwiedzin w ciągu ostatniego dnia:<span style=\"color:red\">{$_COOKIE["licznik"]}</span> razy";
            }*/
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
