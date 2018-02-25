<?php 

header('Content-type: application/json; charset=utf-8');

$idCliente = $_POST['cliente'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `cliente` SET `activo`='No' where id='".$idCliente->id."'";

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