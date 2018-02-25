<?php 

header('Content-type: application/json; charset=utf-8');

$idArticulo = $_POST['articulo'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `articulo` SET `activo`='No' where id='".$idArticulo."'";

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