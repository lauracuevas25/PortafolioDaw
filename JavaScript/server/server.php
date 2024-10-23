<?php
	// Cabeceras
	header("Access-Control-Allow-Origin: *");
  	header("Content-Type: text/plain"); 
	// Recuperacion de campos mediante $_GET o $_POST
	echo "El texto recibido por el servidor es: " . $_GET["mi_campo"];
?>