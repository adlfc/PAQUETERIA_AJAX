<?php
header('Content-type: application/json; charset=utf-8');

$db = new mysqli('localhost', 'root', '', 'paqueteria');
$db->set_charset("utf8");

    $sql = "SELECT * FROM empleado where activo = 'Si'";

    $query = $db->query($sql);

    $empleados = array();

    while($fila = $query->fetch_object())
        $empleados[] = $fila;

    echo json_encode($empleados, JSON_UNESCAPED_UNICODE);

?>