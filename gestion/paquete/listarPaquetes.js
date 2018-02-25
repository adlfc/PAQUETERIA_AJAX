   $("#paqueteNoEntregado").click(function(){
    vaciarTablas(document.querySelector("#verPaquetesNoEntregados"));
	

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado paquetes no entregados";

	$("#verPaquetesNoEntregados").append(labelTitulo);

	 $.post('gestion/paquete/getPaquetes.php', null, listarPaquetesNoEntregados, 'json');

     function listarPaquetesNoEntregados(oPaquetes, sStatus, oXHR) 
     		{
     			
     			var sTabla = '<table class="table table-striped table-responsive">';
            	sTabla += '<thead><tr>';
            	sTabla += '<th>Cliente</th><th>Tarifa</th><th>Fecha de entrega</th><th>Volumen</th><th>Peso</th><th>Valor</th><th>Urgente</th><th>Pública</th><th>Internacional</th><th>Asegurado</th></tr>';
            	sTabla += '</thead>';
            	sTabla += '<tbody>';
     			
     			for (var i = 0; i < oPaquetes.length; i++) {
     				
                    if(oPaquetes[i].activo=="Si")
     				{
                        if(oPaquetes[i].entregado=="No")
                        {
                            sTabla += '<tr>';
                    		sTabla += '<th>'+oPaquetes[i].nombreCli+'</th><th>'+oPaquetes[i].tarifa+'</th>';
                            sTabla += '<th>'+oPaquetes[i].fecha_entrega+'</th><th>'+oPaquetes[i].volumen+'</th>';
                            sTabla += '<th>'+oPaquetes[i].peso+'</th><th>'+oPaquetes[i].valor+'</th>';
                            sTabla += '<th>'+oPaquetes[i].urgente+'</th><th>'+oPaquetes[i].publica+'</th>';
                    		sTabla += '<th>'+oPaquetes[i].internacional+'</th><th>'+oPaquetes[i].asegurado+'</th></tr>';
                		}
            		}
     			}
     			sTabla += '</tbody>';
     			$("#verPaquetesNoEntregados").append(sTabla);
            }

});
   $("#paqueteEntregado").click(function(){
    vaciarTablas(document.querySelector("#verPaquetesEntregados"));
    
    
    var labelTitulo=document.createElement("label");
    labelTitulo.setAttribute("class", "titulo");
    labelTitulo.textContent = "Listado paquetes entregados";

    $("#verPaquetesEntregados").append(labelTitulo);

     $.post('gestion/paquete/getPaquetes.php', null, listarPaquetesNoEntregados, 'json');

     function listarPaquetesNoEntregados(oPaquetes, sStatus, oXHR) 
            {
                
                var sTabla = '<table class="table table-striped table-responsive">';
                sTabla += '<thead><tr>';
                sTabla += '<th>Cliente</th><th>Tarifa</th><th>Fecha de entrega</th><th>Volumen</th><th>Peso</th><th>Valor</th><th>Urgente</th><th>Pública</th><th>Internacional</th><th>Asegurado</th></tr>';
                sTabla += '</thead>';
                sTabla += '<tbody>';
                
                for (var i = 0; i < oPaquetes.length; i++) {
                    
                    if(oPaquetes[i].activo=="Si")
                    {
                        if(oPaquetes[i].entregado=="Si")
                        {
                            sTabla += '<tr>';
                            sTabla += '<th>'+oPaquetes[i].nombreCli+'</th><th>'+oPaquetes[i].tarifa+'</th>';
                            sTabla += '<th>'+oPaquetes[i].fecha_entrega+'</th><th>'+oPaquetes[i].volumen+'</th>';
                            sTabla += '<th>'+oPaquetes[i].peso+'</th><th>'+oPaquetes[i].valor+'</th>';
                            sTabla += '<th>'+oPaquetes[i].urgente+'</th><th>'+oPaquetes[i].publica+'</th>';
                            sTabla += '<th>'+oPaquetes[i].internacional+'</th><th>'+oPaquetes[i].asegurado+'</th></tr>';
                        }
                    }
                }
                sTabla += '</tbody>';
                $("#verPaquetesEntregados").append(sTabla);
            }

});
function vaciarTablas(objetoParent)
{
    while(objetoParent.children.length != 0)
    {
        objetoParent.removeChild(objetoParent.firstElementChild);
    }
}   