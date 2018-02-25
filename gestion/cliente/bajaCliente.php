<?php 

header('Content-type: application/json; charset=utf-8');

$dato=$_POST['datos'];
$idCliente = json_decode($dato);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `cliente` SET `activo`='No' where id='".$idCliente->id."'";

    $query = $db->query($sql);

    if($query->affected_rows > 0)
    {
    	$respuesta = true;
    }

    else
    {
    	$respuesta = false;
    }

    //echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);
    echo $respuesta;
?>