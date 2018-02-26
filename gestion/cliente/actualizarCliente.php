<?php 

header('Content-type: application/json; charset=utf-8');

$datos = $_POST['sDatos'];

$cliente = json_decode($datos);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE cliente SET nombre='".$cliente->nom."',apellidos='".$cliente->ape."',email='".$cliente->em."',telefono='".$cliente->telef."',direccion='".$cliente->dire."',cod_postal='".$cliente->cp."',pais='".$cliente->pa."' WHERE id='".$cliente->id."'";

    if($db->query($sql))
    {
    	$respuesta = true;
    }

    else
    {
    	$respuesta = false;
    }

    echo $respuesta;

?>