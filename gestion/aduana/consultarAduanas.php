<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");

    $sql = "SELECT * FROM aduana where activo = 'Si'";

    $query = $db->query($sql);

    $aduanas = array();

    while($fila = $query->fetch_object())
        $aduanas[] = $fila;

    echo json_encode($aduanas, JSON_UNESCAPED_UNICODE);

?>