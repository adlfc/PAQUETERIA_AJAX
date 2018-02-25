<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "SELECT cliente.nombre as nombreCli,paquete.* FROM paquete,cliente WHERE paquete.id_cliente=cliente.id ";
    $query = $db->query($sql);
    $paquetes = array();
    while($fila = $query->fetch_object())
        $paquetes[] = $fila;
	
    echo json_encode($paquetes, JSON_UNESCAPED_UNICODE);
?> 