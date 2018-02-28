<?php 

header('Content-type: application/json; charset=utf-8');

$datos = $_POST['sDatos'];

$aduana = json_decode($datos);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE aduana SET declaracion='".$aduana->dec."',tasa='".$aduana->tas."' WHERE id='".$aduana->id."'";

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