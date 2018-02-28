$("#modiPaq").click(function(){



/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/paquete/consultarPaquetes.php', null, mostrarPaquetes, 'json');

     function mostrarPaquetes(oPaquetes, sStatus, oXHR)
     {

     	$("#formModiPedido").children().remove();

     	var formPaquete = "<label class='titulo'>Modificar Paquete</label>";

          formPaquete += "<select id='comboModificarPedidos' name='comboModificarPedidos' class='form-control'>";

     	formPaquete += "<option value='primero'>Seleccione un paquete...</option>";

     	for(var i=0;i<oPaquetes.length;i++)
     	{
     		formPaquete += "<option value='"+oPaquetes[i].id+"'>Paquete: "+oPaquetes[i].id+"</option>";
     	}

          formPaquete += "</select>";

          $("#formModiPedido").append(formPaquete);

          $("#comboModificarPedidos").change(function(){
			    mostrarFormulario();

			}); 

     }

     function mostrarFormulario()
     {

     	var oSelectPaquetes = $("#comboModificarPedidos");
         var iIdPaquete = oSelectPaquetes.val();
         var sDatos = {paquete:iIdPaquete};


        $.post("gestion/paquete/modificarPaquete.php", sDatos, montarFormulario, 'json');

     }

     function montarFormulario(oPaquete, sStatus, oXHR)
     {

        console.log(oPaquete);

     	$("#comboModificarPedidos").nextAll().remove();

     	var campos = "<br>";

        /*campos += '<select  name="comboClien" id="comboClie" class="form-control">';
        campos +=
        campos += '</select>';*/

     	campos += '<div class="form-group"';
     	campos += '<label for="tarifa">Tarifa:</label>';
     	campos += '<input type="text" class="form-control" id="tarifa" placeholder="Tarifa" name="tarifa" value="'+oPaquete[0].tarifa+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="fechaEntrega">Fecha de entrega:</label>';
     	campos += '<input type="text" class="form-control datepicker" id="fechaEntrega" placeholder="Fecha de Entrega" name="fechaEntrega" value="'+oPaquete[0].fecha_entrega+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="volumen">Volumen:</label>';
     	campos += '<input type="text" class="form-control" id="volumen" placeholder="Volumen" name="volumen" value="'+oPaquete[0].volumen+'"">';
     	campos += '</div>';

        campos += '<div class="form-group"';
        campos += '<label for="peso">Peso:</label>';
        campos += '<input type="text" class="form-control" id="peso" placeholder="Peso" name="peso" value="'+oPaquete[0].peso+'"">';
        campos += '</div>';

        campos += '<div class="form-group"';
        campos += '<label for="valor">Valor:</label>';
        campos += '<input type="text" class="form-control" id="valor" placeholder="Valor" name="valor" value="'+oPaquete[0].volumen+'"">';
        campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label>Urgente: </label>';
            campos += '<div class="radio">';
         	  campos += '<label><input type="radio" name="optradio3" value="Sí" checked>Sí</label>';
            campos += '</div>';
            campos += '<div class="radio">';
                campos += '<label><input type="radio" name="optradio3" value="No">No</label>';
            campos += '</div>';
        campos += '</div>';

        campos += '<div class="form-group"';
        campos += '<label>Entregado: </label>';
            campos += '<div class="radio">';
              campos += '<label><input type="radio" name="optradio4" value="Si" checked>Sí</label>';
            campos += '</div>';
            campos += '<div class="radio">';
                campos += '<label><input type="radio" name="optradio4" value="No">No</label>';
            campos += '</div>';
        campos += '</div>';

        campos += '<div class="form-group"';
        campos += '<label>Publica: </label>';
            campos += '<div class="radio">';
              campos += '<label><input type="radio" name="optradio5" value="Sí" checked>Sí</label>';
            campos += '</div>';
            campos += '<div class="radio">';
                campos += '<label><input type="radio" name="optradio5" value="No">No</label>';
            campos += '</div>';
        campos += '</div>';

        campos += '<div class="form-group"';
        campos += '<label>Internacional: </label>';
            campos += '<div class="radio">';
              campos += '<label><input type="radio" name="optradio6" value="Sí" checked>Sí</label>';
            campos += '</div>';
            campos += '<div class="radio">';
                campos += '<label><input type="radio" name="optradio6" value="No">No</label>';
            campos += '</div>';
        campos += '</div>';

        campos += '<div class="form-group"';
        campos += '<label>Asegurado: </label>';
            campos += '<div class="radio">';
              campos += '<label><input type="radio" name="optradio7" value="Sí" checked>Sí</label>';
            campos += '</div>';
            campos += '<div class="radio">';
                campos += '<label><input type="radio" name="optradio7" value="No">No</label>';
            campos += '</div>';
        campos += '</div>';

        campos += '<div class="form-group">';
        campos += '<button type="button" id="aceptarModificarPaquete" class="btn btn-primary">Aceptar</button>';
     	campos += '</div>';

     	$("#formModiPedido").append(campos);

     	$("#aceptarModificarPaquete").click(function(){


     		var oForm=document.getElementById("formModiPedido");

     		idPaque = oForm.comboModificarPedidos.value.trim();
     		tarifa = oForm.tarifa.value.trim();
	        fecha = oForm.fechaEntrega.value.trim();
			volumen = oForm.volumen.value.trim();
            peso = oForm.peso.value.trim();
            valor = oForm.valor.value.trim();
            urgente = oForm.optradio3.value.trim();
            entregado = oForm.optradio4.value.trim();
            publica = oForm.optradio5.value.trim();
            internacional = oForm.optradio6.value.trim();
            asegurado = oForm.optradio7.value.trim();

	        var paquete = {
           
            id:idPaque,
            tar:tarifa,
            fe:fecha,
            vol:volumen,
            pes:peso,
            val:valor,
            urg:urgente,
            ent:entregado,
            pub:publica,
            int:internacional,
			aseg:asegurado,

        	};

        	
        	var oPaquete = JSON.stringify(paquete);
        	var pasarDatos = {sDatos:oPaquete};

        	//console.log(oCliente);

		    $.post("gestion/paquete/actualizarPaquete.php", pasarDatos, respuestaModificarPaquete, 'json');

		}); 
     }

     function respuestaModificarPaquete(respuesta, sStatus, oAjax)
     {

     		if(respuesta == true)
     		{
     			alert("Paquete modificado");
     			$.get('gestion/paquete/consultarPaquetes.php', null, mostrarPaquetes, 'json');
     		}

     		else
     		{
     			alert("Error");
     		}
     }

});