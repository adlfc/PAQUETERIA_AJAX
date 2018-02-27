<?php 

header('Content-type: application/json; charset=utf-8');

$datos = $_POST['sDatos'];

$articulo = json_decode($datos);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE articulo SET descripcion='".$articulo->des."',peso='".$articulo->pes."',valor='".$articulo->val."',comercial='".$articulo->com."' WHERE id='".$articulo->id."'";

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