<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "SELECT queja.descripcion,queja.fecha,queja.resuelta,queja.id_paquete,empleado.nombre as nombreEmple,queja.activo FROM queja,empleado WHERE queja.id_empleado=empleado.id";
    $query = $db->query($sql);
    $quejas = array();
    while($fila = $query->fetch_object())
        $quejas[] = $fila;
	
    echo json_encode($quejas, JSON_UNESCAPED_UNICODE);
?> 