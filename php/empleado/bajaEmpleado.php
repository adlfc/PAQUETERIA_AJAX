<?php 

	require_once("../conexion.php");

	function obtenerClientePorId() 
	{
	    $id = $_GET['id'];

	    $conexion = BaseDatos::conexion();

	    $arrayClientes = [];

	    $sql = "SELECT * FROM cliente WHERE id = ".$id;
	    $resultado = $conexion->query($sql);

	    while ($fila = $resultado->fetch_object()) 
	    {
	        $arrayClientes[] = $fila;
	    }

	    $json = json_encode($arrayClientes);

	    echo $json;
	}

?>