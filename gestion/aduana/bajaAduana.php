<?php 

header('Content-type: application/json; charset=utf-8');

$idAduana = $_POST['aduana'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `aduana` SET `activo`='No' where id='".$idAduana."'";

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