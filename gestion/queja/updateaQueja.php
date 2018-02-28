<?php 

header('Content-type: application/json; charset=utf-8');

$datos = $_POST['sDatos'];

$queja = json_decode($datos);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE queja SET descripcion='".$queja->des."',fecha='".$queja->fe."',resuelta='".$queja->res."' WHERE id='".$queja->id."'";

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