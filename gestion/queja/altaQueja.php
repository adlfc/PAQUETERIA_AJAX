<?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

$servidor  = "localhost";
$usuario   = "root";
$password  = "";
$bd = "paqueteria";

$datos=$_REQUEST['datos'];

$oQueja = json_decode($datos);


// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $bd);


 if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }

$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli





$sql1 = "insert into queja(id,descripcion,fecha,resuelta,id_paquete,id_empleado) values ('".$oQueja->id."','".$oQueja->descripcion."','".$oQueja->fecha."','".$oQueja->resuelta."','".$oQueja->paquete."','".$oQueja->empleado."')";

	 if($conexion->query($sql1))
	 {
	       
 		$respuesta = true;
    } 
    else 
    {
	   
	    $respuesta = false;
	}

echo $respuesta;



?>