<?php
class BaseDatos {
    public static function conexion() 
    {
        $conexion = new mysqli("localhost", "root", "", "paqueteria");
        
        if ($conexion->error) 
        {
            die("Error al conectar con la base de datos");
        }

        $conexion->set_charset("utf8");
        return $conexion;
    }
}

