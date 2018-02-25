$("#listadoQueja").click(function(){

    vaciarTablas(document.querySelector("#listaQueja"));
	

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado quejas";

	$("#listaQueja").append(labelTitulo);

	 $.get('gestion/queja/getQuejas.php', null, listarQuejas, 'json');

     function listarQuejas(oQuejas, sStatus, oXHR) 
     		{
     			
     			var sTabla = '<table class="table table-striped table-responsive">';
            	sTabla += '<thead><tr>';
            	sTabla += '<th>Descripcion</th><th>Fecha</th><th>Resulta</th><th>Paquete</th><th>Empleado</th></tr>';
            	sTabla += '</thead>';
            	sTabla += '<tbody>';
     			
     			for (var i = 0; i < oQuejas.length; i++) {
     				if(oQuejas[i].activo=="Si")
                    {
     				   sTabla += '<tr>';
                      sTabla += '<th>'+oQuejas[i].descripcion+'</th><th>'+oQuejas[i].fecha+'</th>';
                      sTabla += '<th>'+oQuejas[i].resuelta+'</th><th>'+oQuejas[i].id_paquete+'</th>';
            		  sTabla += '<th>'+oQuejas[i].nombreEmple+'</th></tr>';
            		}
     			}
     			sTabla += '</tbody>';
                sTabla += '</table>';
     			$("#listaQueja").append(sTabla);
            }



function vaciarTablas(objetoParent)
{
    while(objetoParent.children.length != 0)
    {
        objetoParent.removeChild(objetoParent.firstElementChild);
    }
}
});