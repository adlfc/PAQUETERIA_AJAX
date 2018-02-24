<?php


header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');




$servidor  = "localhost";
$basedatos = "paqueteria";
$usuario   = "root";
$password  = "";


$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);


mysql_select_db($basedatos, $conexion) or die(mysql_error());

$id=$_REQUEST['id'];
$respuesta[0]=false;

$numFilas = mysql_num_rows(mysql_query("select * from cliente where id='".$id."'",$conexion));

if($numFilas!=0) {
    $respuesta[0] = true;
}



echo json_encode($respuesta);

mysql_close($conexion);

?>