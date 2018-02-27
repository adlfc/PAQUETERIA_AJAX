$(function() {

    $("#altaEmpl").click(cargaAltaEmpleado);

});
function cargaAltaEmpleado() {
    // Oculto todos los formularios menos este
    $("form:not('#formAltaEmpleados')").hide("normal");
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