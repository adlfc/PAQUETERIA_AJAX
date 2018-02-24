/* INICIO */

$("#bajaEmpl").click(cargarBajaEmpleado);


function cargarBajaEmpleado() 
{

    // Oculto todos los formularios menos este
    $("form:not('#formBajaEmple')").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#formBajaEmple').size() == 0) {
        $("<div>").appendTo('#formularios').load("BajaEmpleado/formBajaEmple.html",
            function() {
                $.getScript("BajaEmpleado/bajaEmpleado.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#formBajaEmple').show("normal");
    }
}

