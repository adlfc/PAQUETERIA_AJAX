<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");

    $sql = "SELECT * FROM articulo where activo = 'Si'";

    $query = $db->query($sql);

    $articulos = array();

    while($fila = $query->fetch_object())
        $articulos[] = $fila;

    echo json_encode($articulos, JSON_UNESCAPED_UNICODE);

?>