
$(function() {

    $('#altaCli').click(cargaAltaCliente);
    $("a:not('#altaCli')").click(ocultarAltaCli);
});



function cargaAltaCliente()
{
    $("form:not('#formAltaCliente')").hide("normal");
    $("#listadoClientes, #listadoEmpleados, #listadoArtic, #verPaquetesNoEntregados, #verPaquetesEntregados, #listadoAduana, #listaQueja, #uml").hide("normal");

    if ($('#formAltaCliente').size() == 0) {
    	$("<div>").appendTo('#formularios').load("cargaDinamica/formAltaCliente.html",
            function() {

            		$('#formAltaCliente').show("normal");
					$.getScript("gestion/cliente/altaCliente.js");

            });
		
    } 

    else 
    {
	   $('#formAltaCliente').show("normal");
    }
}

function ocultarAltaCli()
{
	$('#formAltaCliente').hide("normal");
}

