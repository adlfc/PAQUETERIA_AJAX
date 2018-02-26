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

$oEmpleado = json_decode($datos);


// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $bd);


 if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }

$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

/*if ($res = $conexion->query($sql)){
    $num = $res->num_rows;    
}

//si existe damos error
if($num > 0){
	$mensaje = "Empleado registrado anteriormente";
	$error = TRUE;  
}
else{*/



$sql1 = "insert into empleado(id,nombre,apellidos,gestor,manager,oficina)
values ('".$oEmpleado->id."','".$oEmpleado->nom."','".$oEmpleado->ape."','".$oEmpleado->ges."','".$oEmpleado->mana."','".$oEmpleado->ofi."')";
	 if($conexion->query($sql1) === TRUE){
	        $respuesta = true;
	    } 
	    else {
		    $respuesta = false;
		}
	 

echo $respuesta;

?>