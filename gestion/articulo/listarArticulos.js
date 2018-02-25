    $("#btnListaArt").click(function(){
    vaciarTablas(document.querySelector("#listadoArtic"));
	

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado clientes";

	$("#listadoArtic").append(labelTitulo);

	 $.post('gestion/articulo/getArticulos.php', null, listarArticulos, 'json');

     function listarArticulos(oArticulos, sStatus, oXHR) 
     		{
     			
     			var sTabla = '<table class="table table-striped table-responsive">';
            	sTabla += '<thead><tr>';
            	sTabla += '<th>Descripcion</th><th>Peso</th><th>Valor</th><th>Comercial</th><th>Paquete</th></tr>';
            	sTabla += '</thead>';
            	sTabla += '<tbody>';
     			
     			for (var i = 0; i < oArticulos.length; i++) {
     				
                    if(oArticulos[i].activo=="Si")
     				{
                        sTabla += '<tr>';
                		sTabla += '<th>'+oArticulos[i].descripcion+'</th><th>'+oArticulos[i].peso+'</th>';
                		sTabla += '<th>'+oArticulos[i].valor+'</th><th>'+oArticulos[i].comercial+'</th>';
                		sTabla += '<th>'+oArticulos[i].id_paquete+'</th></tr>';
            		}
     			}
     			sTabla += '</tbody>';
     			$("#listadoArtic").append(sTabla);
            }



function vaciarTablas(objetoParent)
{
    while(objetoParent.children.length != 0)
    {
        objetoParent.removeChild(objetoParent.firstElementChild);
    }
}
});