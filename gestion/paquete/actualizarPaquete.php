<?php 

header('Content-type: application/json; charset=utf-8');

$datos = $_POST['sDatos'];

$paquete = json_decode($datos);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE paquete SET tarifa='".$paquete->tar."',fecha_entrega='".$paquete->fe."',volumen='".$paquete->vol."',peso='".$paquete->pes."',valor='".$paquete->val."',urgente='".$paquete->urg."',entregado='".$paquete->ent."',publica='".$paquete->pub."',internacional='".$paquete->int."',asegurado='".$paquete->aseg."' WHERE id='".$paquete->id."'";

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