$("#btnListadoAduana").click(function(){

    vaciarTablas(document.querySelector("#listadoAduana"));
	

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado aduanas";

	$("#listadoAduana").append(labelTitulo);

	 $.get('gestion/aduana/getAduanas.php', null, listarAduanas, 'json');

     function listarAduanas(oAduanas, sStatus, oXHR) 
     		{
     			
     			var sTabla = '<table class="table table-striped table-responsive">';
            	sTabla += '<thead><tr>';
            	sTabla += '<th>Artículo</th><th>Declaración</th><th>Tasa</th></tr>';
            	sTabla += '</thead>';
            	sTabla += '<tbody>';
     			
     			for (var i = 0; i < oAduanas.length; i++) {
     				if(oAduanas[i].activo=="Si")
                    {
     				   sTabla += '<tr>';
            		  sTabla += '<th>'+oAduanas[i].nombreArti+'</th><th>'+oAduanas[i].declaracion+'</th>';
            		  sTabla += '<th>'+oAduanas[i].tasa+'</th></tr>';
            		}
     			}
     			sTabla += '</tbody>';
     			$("#listadoAduana").append(sTabla);
            }



function vaciarTablas(objetoParent)
{
    while(objetoParent.children.length != 0)
    {
        objetoParent.removeChild(objetoParent.firstElementChild);
    }
}
});