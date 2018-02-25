<?php


$servidor  = "localhost";
$basedatos = "paqueteria";
$usuario   = "root";
$password  = "";

$datos=$_REQUEST['datos'];

$oCliente = json_decode($datos);


// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password) or die(mysqli_error());
mysqli_query("SET NAMES 'utf8'", $conexion);

mysqli_select_db($basedatos, $conexion) or die(mysqli_error());

$sql = "insert into cliente (id,nombre,apellidos,email,telefono,direccion,cod_postal,pais)
values ('".$oCliente->id."','".$oCliente->nom."','".$oCliente->ape."','".$oCliente->em."','".$oCliente->telef."','".$oCliente->dire."','".$oCliente->cp."','".$oCliente->pa."')";

$resultados = @mysqli_query($sql, $conexion) or die(mysqli_error());

$mensaje='Alta de cliente realizada';
$error = false;

$respuesta = array($error,$mensaje);

echo json_encode($respuesta);

mysqli_close($conexion);

?>