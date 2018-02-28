
$(function() {

    $('#altaArt').click(cargaAltaArticulo);
    $("a:not('#altaArt')").click(ocultarAltaArticulo);
});



function cargaAltaArticulo()
{
    $("form:not('#formAltaArticulo')").hide("normal");
    $("#listadoClientes, #listadoEmpleados, #listadoArtic, #verPaquetesNoEntregados, #verPaquetesEntregados, #listadoAduana, #listaQueja, #uml").hide("normal");

    if ($('#formAltaArticulo').size() == 0) {
    	$("<div>").appendTo('#formularios').load("cargaDinamica/formAltaArticulo.html",
            function() {
$.getScript("gestion/articulo/altaArticulo.js");
            		$('#formAltaArticulo').show("normal");
					

            });
		
    } 

    else 
    {
	   $('#formAltaArticulo').show("normal");
    }
}

function ocultarAltaArticulo()
{
	$('#formAltaArticulo').hide("normal");
}

