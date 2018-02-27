<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");

$idArticulo = $_POST['articulo'];

    $sql = "SELECT * FROM articulo where id='".$idArticulo."'";

    $query = $db->query($sql);

    $articulos = array();

    while($fila = $query->fetch_object())
        $articulos[] = $fila;

    echo json_encode($articulos, JSON_UNESCAPED_UNICODE);

?>