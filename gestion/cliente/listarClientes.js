    vaciarTablas(document.querySelector("#listadoClientes"));
	

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado clientes";

	$("#listadoClientes").append(labelTitulo);

	 $.get('gestion/cliente/getClientes.php', null, listarClientes, 'json');

     function listarClientes(oClientes, sStatus, oXHR) 
     		{
     			
     			var sTabla = '<table class="table table-striped table-responsive">';
            	sTabla += '<thead><tr>';
            	sTabla += '<th>Nombre</th><th>Apellidos</th><th>Email</th><th>Teléfono</th><th>Dirección</th><th>Código Postal</th><th>País</th></tr>';
            	sTabla += '</thead>';
            	sTabla += '<tbody>';
     			
     			for (var i = 0; i < oClientes.length; i++) {
     				
     				sTabla += '<tr>';
            		sTabla += '<th>'+oClientes[i].nombre+'</th><th>'+oClientes[i].apellidos+'</th>';
            		sTabla += '<th>'+oClientes[i].email+'</th><th>'+oClientes[i].telefono+'</th>';
            		sTabla += '<th>'+oClientes[i].direccion+'</th><th>'+oClientes[i].cod_postal+'</th>';
            		sTabla += '<th>'+oClientes[i].pais+'</th></tr>';
            		
     			}
     			sTabla += '</tbody>';
     			$("#listadoClientes").append(sTabla);
            }



function vaciarTablas(objetoParent)
{
    while(objetoParent.children.length != 0)
    {
        objetoParent.removeChild(objetoParent.firstElementChild);
    }
}
