<?php 

header('Content-type: application/json; charset=utf-8');

$datos = $_POST['sDatos'];

$empleado = json_decode($datos);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE empleado SET nombre='".$empleado->nom."',apellidos='".$empleado->ape."',gestor='".$empleado->ges."',manager='".$empleado->mana."',oficina='".$empleado->ofi."' WHERE id='".$empleado->id."'";

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