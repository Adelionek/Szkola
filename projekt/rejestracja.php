<?php
    session_start();

    if (isset($_POST['email']))
    {
        $dziala = true;
        

        
        $imie = $_POST['imie'];
        $nazwisko = $_POST['nazwisko'];
        $plec = $_POST['plec'];
        


                
        if(strlen($imie)<3 || strlen($imie)>30)
        { 
            $dziala = false;
            $_SESSION['e_imie']="Za krótkie imie";
        }
        
        $haslo1=$_POST['haslo1'];
        $haslo2=$_POST['haslo2'];
        
        if($haslo1 !== $haslo2)
        {
            $dziala = false;
            $_SESSION['e_haslo']="Hasła nie są takie same";
        }
        $haslo_hash = password_hash($haslo1,PASSWORD_DEFAULT);
        
        $email = $_POST['email'];
        
        if(!isset($_POST['regulamin'])){
            $dziala = false;
            $_SESSION['e_regulamin']="Zatwierdź regulamin";
        }
        mysqli_report(MYSQLI_REPORT_STRICT);
        
        try
        {
            $polaczenie = new mysqli('localhost','root','123','sklep');
            header('Content-type: text/html; charset=utf-8');
            
            
            
            if ($polaczenie->connect_error)
            {
                throw new Exception(mysqli_connect_errno());
            }else{
                $rezultat = $polaczenie->query("SELECT `id_uzytkownika` FROM `uzytkownicy` WHERE email = '$email'");
                
                if(!$rezultat)
                {
                    throw new Exception($rezultat->error);
                }
                
                $iloscmaili = $rezultat->num_rows;                
                if($iloscmaili>0)
                {
                    $dziala = false;
                    $_SESSION['e_email']="Istnieje już konto o takim emailu";
                }
                
                if ($dziala == true)
                {
                    $sql="INSERT INTO `uzytkownicy`(`id_uzytkownika`, `imie`, `nazwisko`, `haslo`, `email`, `plec`) VALUES (DEFAULT,'$imie','$nazwisko','$haslo_hash','$email','$plec')";
                    if($polaczenie->query($sql))
                    {
                        $_SESSION['udanarejestracja'] = true;
                        header('location:witamy.php');
                    }else{
                        echo "Błąd w zapytaniu";
                    }
                    exit();
                }
                $polaczenie->close();    
            }
        }
        
        catch(Exception $e)
        {
            echo '<span class="eror">Błąd serwera! Prosimy spróbować później</span>';
            //echo '</br>Informacja developerska'.$e;
        }
    }
?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
  <title>Proxy </title>
  <meta charset="utf-8">
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
       <div class="col-lg-6">
           <h3>Zarejestruj się</h3>
       </div>
   </div><br>
<div class="row">
    <div class="col-lg-6">
    <form method="post" action="rejestracja.php">
  <div class="form-group">
        <span id="komunikat"></span>
      <label for="name">Imię</label>
      <input type="text" class="form-control" name="imie" placeholder="Podaj Imię">
      <?php 
        if(isset($_SESSION['e_imie'])){ 
            echo '<div class="eror">'.$_SESSION['e_imie'].'</div>';
            unset($_SESSION['e_imie']);
        } 
      ?>
  </div>
  <div class="form-group">
      <label for="secondname">Nazwisko</label>
      <input type="text" name="nazwisko" class="form-control" placeholder="Podaj Nazwisko">
  </div>   
  <div class="form-group">
    <label for="Email1">Adres Email</label>
    <input type="email" class="form-control" name="email" placeholder="Podaj email">
    <?php if(isset($_SESSION['e_email'])){
    echo '<div class="eror">'.$_SESSION['e_email'].'</div>';
    unset($_SESSION['e_email']);
}   ?>

  </div>
  <div class="form-group">
    <label for="passreg">Hasło</label>
    <input type="password" class="form-control" name="haslo1" placeholder="Hasło">
  </div>
  <div class="form-group">
    <label for="passreg">Powtórz hasło</label>
    <input type="password" class="form-control" name="haslo2" placeholder="Powtórz hasło">
    <?php 
        if(isset($_SESSION['e_haslo'])){ 
            echo '<div class="eror">'.$_SESSION['e_haslo'].'</div>';
            unset($_SESSION['e_haslo']);
        } 
    ?>
  </div>
  <div class="form-group">
    <label for="sex">Płeć</label>
    <select name="plec" class="form-control" id="sex">
      <option>Mezczyzna</option>
      <option>Kobieta</option>
    </select>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input" name="regulamin">Zatwierdż regulamin</label>
  </div>
  <button type="submit" class="btn btn-primary" name="zarejestruj">Zarejestruj</button>
    <?php 
        if(isset($_SESSION['e_regulamin'])){ 
            echo '<div class="eror">'.$_SESSION['e_regulamin'].'</div>';
            unset($_SESSION['e_regulamin']);
        } 
    ?>
</form>
<br>
</div>
</div>   
</div>
<div class="container footer bg-faded">
    <?php
    
        if(!isset($_COOKIE['licznik'])){
            $_COOKIE['licznik']=0;
        }else{
            $_COOKIE['licznik']++;
        }

        //setcookie('licznik',$_COOKIE['licznik'],time()+60*60*24);

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
