<?php

    error_reporting(0);
    session_start();

    if(!isset($_SESSION['ilosc'])){
        $_SESSION['ilosc']=0;
        for($i=0 ; $i<=12 ; $i++){
            $_SESSION['identity'][$i]=" ";
        }
    }

    require_once("removing.php");

    if (isset($_GET['name'])) {
        $name=$_GET['name'];
        usun($name);
    }
    
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../img/logo.jpg">
    <title>BIURTECH</title>
    <link rel="stylesheet" href="cart.css">
</head>
<body>
    
    <div id="container"> 
        <div id="header">

            <div id="logos">

                <img src="../img/logo.jpg" alt="logo">

                <span><a href="../main/mainP.php">BIURTECH</a></span>

                <a href="../cart/cart.php" id="cart"><img src="../img/shopping-cart .png" alt="koszyk"><span id="counter">
                    
                <?php
                
                    echo ":".$_SESSION['ilosc'];
                
                ?>

                </span></a>

            </div>

            <div id="navi">

                <a href="../desks/desksP.php">Biurka</a>

                <a href="../chairs/chairsP.php">Fotele</a>

                <a href="../ele/electronicsP.php">Elektronika</a>

            </div>

        </div>

        <div id="content">

            <div id="number">
                <p>
                    Ilość elementów :
                    <?php
                        echo $_SESSION['ilosc'];
                    ?>
                    /20
                </p>
            </div>

            <fieldset id="inside">

                <legend>Koszyk</legend>

                <?php
                    require_once("../tabs.php");
                
                    for($i = 0 ; $i<=20 ; $i++){
                        if($_SESSION['identity'][$i]==1){
                            echo "
                            <div class=\"product\">
                                <img src=\"$photos[0]\">
                                <span>$names[0]</span>
                                <span>$prices[0]</span>
                                <a href=\"cart.php?name=1\" id=\"removing\" >Usuń</a>
                            </div>                          
                            ";
                        }else if($_SESSION['identity'][$i]==2){
                            echo "
                            <div class=\"product\">
                                <img src=\"$photos[1]\">
                                <span>$names[1]</span>
                                <span>$prices[1]</span>
                                <a href=\"cart.php?name=2\" id=\"removing\" >Usuń</a>
                            </div>                          
                            ";
                        }else if($_SESSION['identity'][$i]==3){
                            echo "
                            <div class=\"product\">
                                <img src=\"$photos[2]\">
                                <span>$names[2]</span>
                                <span>$prices[2]</span>
                                <a href=\"cart.php?name=3\" id=\"removing\" >Usuń</a>
                            </div>                          
                            ";
                        }else if($_SESSION['identity'][$i]==4){
                            echo "
                            <div class=\"product\">
                                <img src=\"$photos[3]\">
                                <span>$names[3]</span>
                                <span>$prices[3]</span>
                                <a href=\"cart.php?name=4\" id=\"removing\" >Usuń</a>
                            </div>                          
                            ";
                        }else if($_SESSION['identity'][$i]==5){
                            echo "<img src=".$photos[4].">";
                        }else if($_SESSION['identity'][$i]==6){
                            echo "<img src=".$photos[5].">";
                        }else if($_SESSION['identity'][$i]==7){
                            echo "<img src=".$photos[6].">";
                        }else if($_SESSION['identity'][$i]==8){
                            echo "<img src=".$photos[7].">";
                        }else if($_SESSION['identity'][$i]==9){
                            echo "<img src=".$photos[8].">";
                        }else if($_SESSION['identity'][$i]==10){
                            echo "<img src=".$photos[9].">";
                        }else if($_SESSION['identity'][$i]==11){
                            echo "<img src=".$photos[10].">";
                        }else if($_SESSION['identity'][$i]==12){
                            echo "<img src=".$photos[11].">";
                        }
                    }
                ?>

                <div class="product">

                    <?php
                        if($_SESSION['ilosc']>=20){
                            echo "<p id=\"pls\">Koszyk jest pełny</p>";
                        }else{
                            echo "<p id=\"pls\">Dodaj do koszyka <a href=\"../main/mainP.php\" id=\"plus\"> +</a></p>";
                        }
                    ?>         
                </div>   

            </fieldset>

            <div id="delivery">

            </div>
        </div>
        <div id="footer">

            <div id="info">
                <ul>
                    <li>Dane kontaktowe:</li>
                    <li>e-mail: biurtech.kontakt@firma.com</li>
                    <li>numer telefonu: +48 987 765 453</li>
                    <li>fax: +420 224312850</li>
                </ul>
            </div>

            <div id="author">
                <ul>
                    <li>Kamil Głowczyński</li>
                    <li>numer w dzienniku: 7</li>
                </ul>
            </div>

        </div>
    </div>
</body>
</html>