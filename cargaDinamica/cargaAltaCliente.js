
$(function() {

    $('#altaCli').click(cargaAltaCliente);

});



function cargaAltaCliente()
{
    $("form:not('#formAltaCliente')").hide("normal");

    if ($('#formAltaCliente').size() == 0) {
    	$("<div>").appendTo('#formularios').load("cargaDinamica/formAltaCliente.html",
            function() {

            		$('#formAltaCliente').show("normal");
					$.getScript("gestion/cliente/altaCliente.js");

            });
		
    } 

    else 
    {
	   $('#formAltaProv').show("normal");
    }
}