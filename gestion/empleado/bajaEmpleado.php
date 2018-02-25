<?php 

header('Content-type: application/json; charset=utf-8');

$dato=$_GET['datos'];
$idEmpleado = json_decode($dato);

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `empleado` SET `activo`='No' where id='".$idEmpleado."'";

    $query = $db->query($sql);

    if($query)
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