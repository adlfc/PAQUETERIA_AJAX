<?php 

header('Content-type: application/json; charset=utf-8');

$idPaquete = $_POST['paquete'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `paquete` SET `activo`='No' where id='".$idPaquete."'";

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