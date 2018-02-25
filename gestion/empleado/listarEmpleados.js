  
   $("#listadoEmpl").click(function(){

    vaciarTablas(document.querySelector("#listadoEmpleados"));
	

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado empleados";

	$("#listadoEmpleados").append(labelTitulo);

	 $.get('gestion/empleado/getEmpleados.php', null, listarEmpleados, 'json');

     function listarEmpleados(oEmpleados, sStatus, oXHR) 
     		{
     			
     			var sTabla = '<table class="table table-striped table-responsive">';
            	sTabla += '<thead><tr>';
            	sTabla += '<th>Nombre</th><th>Apellidos</th><th>Gestor</th><th>Manager</th><th>Oficina</th></tr>';
            	sTabla += '</thead>';
            	sTabla += '<tbody>';
     			
     			for (var i = 0; i < oEmpleados.length; i++) {
     				if(oEmpleados[i].activo=="Si")
                    {
     				   sTabla += '<tr>';
            		  sTabla += '<th>'+oEmpleados[i].nombre+'</th><th>'+oEmpleados[i].apellidos+'</th>';
            		  sTabla += '<th>'+oEmpleados[i].gestor+'</th><th>'+oEmpleados[i].manager+'</th>';
            		  sTabla += '<th>'+oEmpleados[i].oficina+'</th></tr>';
            		}
     			}
     			sTabla += '</tbody>';
     			$("#listadoEmpleados").append(sTabla);
            }



function vaciarTablas(objetoParent)
{
    while(objetoParent.children.length != 0)
    {
        objetoParent.removeChild(objetoParent.firstElementChild);
    }
}
});