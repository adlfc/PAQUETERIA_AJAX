<?php
header('Content-type: application/json; charset=utf-8');

$idQueja = $_POST['queja'];

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");

    $sql = "SELECT * FROM queja where id='".$idQueja."'";

    $query = $db->query($sql);

    $quejas = array();

    while($fila = $query->fetch_object())
        $quejas[] = $fila;

    echo json_encode($quejas, JSON_UNESCAPED_UNICODE);

?>