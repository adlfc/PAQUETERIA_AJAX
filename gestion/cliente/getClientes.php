<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "SELECT * FROM cliente";
    $query = $db->query($sql);
    $clientes = array();
    while($fila = $query->fetch_object())
        $clientes[] = $fila;
	
    echo json_encode($clientes, JSON_UNESCAPED_UNICODE);
?> 