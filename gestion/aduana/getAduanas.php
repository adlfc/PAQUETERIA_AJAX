<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");


    $sql = "SELECT articulo.descripcion as nombreArti,aduana.declaracion,aduana.tasa,aduana.activo FROM aduana,articulo WHERE aduana.id_articulo=articulo.id";
    $query = $db->query($sql);
    $aduanas = array();
    while($fila = $query->fetch_object())
        $aduanas[] = $fila;
	
    echo json_encode($aduanas, JSON_UNESCAPED_UNICODE);
?> 