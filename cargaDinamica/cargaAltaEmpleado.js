$(function() {

    $("#altaEmpl").click(cargaAltaEmpleado);
    $("a:not('#altaEmpl')").click(ocultar);

});
function cargaAltaEmpleado() {
    // Oculto todos los formularios menos este
    $("form:not('#formAltaEmpleados')").hide("normal");
    $("#listadoClientes, #listadoEmpleados, #listadoArtic, #verPaquetesNoEntregados, #verPaquetesEntregados, #listadoAduana, #listaQueja, #uml").hide("normal");
    // Verifico si ya he cargado el formulario antes
    if ($('#formAltaEmpleados').size() == 0) 
    {
        $("<div>").appendTo('#formularios').load("cargaDinamica/formAltaEmpleado.html",
            function() {
                $('#formAltaEmpleados').show("normal");
                $.getScript("gestion/empleado/altaEmpleado.js");
            });
    } else {
        // Lo muestro si está oculto
        $('#formAltaEmpleados').show("normal");
    }
}

function ocultar()
{
    $('#formAltaEmpleados').hide("normal");
}