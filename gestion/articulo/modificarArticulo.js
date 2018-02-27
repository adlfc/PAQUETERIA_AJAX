$("#modiArti").click(function(){



/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/articulo/consultarArticulos.php', null, mostrarArticulos, 'json');

     function mostrarArticulos(oArticulos, sStatus, oXHR)
     {

     	$("#formModiArticulo").children().remove();

     	var formArticulo = "<label class='titulo'>Modificar Articulo</label>";

          formArticulo += "<select id='comboModificarArticulos' name='comboModificarArticulos' class='form-control'>";

     	formArticulo += "<option value='primero'>Seleccione un articulo...</option>";

     	for(var i=0;i<oArticulos.length;i++)
     	{
     		formArticulo += "<option value='"+oArticulos[i].id+"'>"+oArticulos[i].descripcion+"</option>";
     	}

          formArticulo += "</select>";

          $("#formModiArticulo").append(formArticulo);

          $("#comboModificarArticulos").change(function(){
			    mostrarFormulario();

			}); 

     }

     function mostrarFormulario()
     {

     	var oSelectArticulo = $("#comboModificarArticulos");
         var iIdArticulo = oSelectArticulo.val();
         var sDatos = {articulo:iIdArticulo};


        $.post("gestion/articulo/modificarArticulo.php", sDatos, montarFormulario, 'json');

     }

     function montarFormulario(oArticulo, sStatus, oXHR)
     {

        console.log(oArticulo);

     	$("#comboModificarClientes").nextAll().remove();

     	var campos = "<br>";

     	campos += '<div class="form-group"';
     	campos += '<label for="descripcion">Descripción:</label>';
     	campos += '<input type="text" class="form-control" id="descripcion" placeholder="Descripción"  name="descripcion" value="'+oArticulo[0].descripcion+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="peso">Peso:</label>';
     	campos += '<input type="text" class="form-control" id="peso" placeholder="Peso" name="peso" value="'+oArticulo[0].peso+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="valor">Valor:</label>';
     	campos += '<input type="text" class="form-control" id="valor" placeholder="Valor" name="valor" value="'+oArticulo[0].valor+'"">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label>Comercial: </label>';
            campos += '<div class="radio">';
         	  campos += '<label><input type="radio" name="optradio2" checked value="Sí" checked>Sí</label>';
            campos += '</div>';
            campos += '<div class="radio">';
                campos += '<label><input type="radio" name="optradio2" checked value="No">No</label>';
            campos += '</div>';
        campos += '</div>';

        campos += '<div class="form-group">';
        campos += '<button type="button" id="aceptarModiArticulo" class="btn btn-primary">Aceptar</button>';
     	campos += '</div>';

     	$("#formModiArticulo").append(campos);

     	$("#aceptarModiArticulo").click(function(){


     		var oForm=document.getElementById("formModiArticulo");

     		idArt = oForm.comboModificarArticulos.value.trim();
     		descr = oForm.descripcion.value.trim();
	        peso = oForm.peso.value.trim();
			valor = oForm.valor.value.trim();
	        comercial = oForm.optradio2.value.trim();

	        var articulo = {
           
            id:idArt,
            des:descr,
            pes:peso,
            val:valor,
			com:comercial

        	};

        	
        	var oArticulo = JSON.stringify(articulo);
        	var pasarDatos = {sDatos:oArticulo};

        	//console.log(oCliente);

		    $.post("gestion/articulo/actualizarArticulo.php", pasarDatos, respuestaModificarArticulo, 'json');

		}); 
     }

     function respuestaModificarArticulo(respuesta, sStatus, oAjax)
     {

     		if(respuesta == true)
     		{
     			alert("Articulo modificado");
     			$.get('gestion/articulo/consultarArticulos.php', null, mostrarArticulos, 'json');
     		}

     		else
     		{
     			alert("Error");
     		}
     }

});