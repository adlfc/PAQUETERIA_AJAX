<?php


$servidor  = "localhost";
$basedatos = "paqueteria";
$usuario   = "root";
$password  = "";

$datos=$_REQUEST['datos'];

$oCliente = json_decode($datos);


// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "insert into cliente (id,nombre,apellidos,email,telefono,direccion,cod_postal,pais)
values ('".$oCliente->id."','".$oCliente->nom."','".$oCliente->ape."','".$oCliente->em."','".$oCliente->telef."','".$oCliente->dire."','".$oCliente->cp."','".$oCliente->pa."')";

$resultados = @mysql_query($sql, $conexion) or die(mysql_error());

$mensaje='Alta de cliente realizada';
$error = false;

$respuesta = array($error,$mensaje);

echo json_encode($respuesta);

mysql_close($conexion);

?>