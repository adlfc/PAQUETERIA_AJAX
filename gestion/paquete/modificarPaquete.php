<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");

$idPaquete = $_POST['paquete'];

    $sql = "SELECT * FROM paquete where id='".$idPaquete."'";

    $query = $db->query($sql);

    $paquetes = array();

    while($fila = $query->fetch_object())
        $paquetes[] = $fila;

    echo json_encode($paquetes, JSON_UNESCAPED_UNICODE);

?>