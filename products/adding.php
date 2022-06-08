<?php

function dodaj($name){

    if($_SESSION['ilosc']<20){
    echo "<script type='text/javascript'>
        var nazwa =$name ;
        alert('Dodano do koszyka przedmiot numer:'+nazwa);
    </script>";
    $_SESSION['identity'][$_SESSION['ilosc']]=$name;
    $_SESSION['ilosc'] = $_SESSION['ilosc']+1;
    }else{
        echo "<script type='text/javascript'>
            alert('Nie można więcej dodać');
        </script>";
    }
}

?>