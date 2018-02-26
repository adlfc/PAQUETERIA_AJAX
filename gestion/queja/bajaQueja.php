<?php 

header('Content-type: application/json; charset=utf-8');

$idQueja = $_POST['queja'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `queja` SET `activo`='No' where id='".$idQueja."'";

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