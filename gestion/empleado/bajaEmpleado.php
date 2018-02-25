<?php 

header('Content-type: application/json; charset=utf-8');

$idEmpleado = $_POST['empleado'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "UPDATE `empleado` SET `activo`='No' where id='".$idEmpleado."'";

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