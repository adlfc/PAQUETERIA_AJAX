$("#modiQueja").click(function(){

$.get('gestion/queja/consultarQuejas.php', null, mostrarQuejas, 'json');

     function mostrarQuejas(oQuejas, sStatus, oXHR)
     {

     	 $("#formModiQuejas").children().remove();
     	 var option = "<label class='titulo'>Modificar Quejas</label>";

          option += "<select id='modifiQueja' name='modifiQueja' class='form-control'>";

          option += "<option value='primero'>Seleccione una queja...</option>";

     	for(var i=0;i<oQuejas.length;i++)
     	{
     		option += "<option value='"+oQuejas[i].id+"'>"+oQuejas[i].id+" - "+oQuejas[i].descripcion+"</option>";
     	}

          option += "</option>";
          
          $("#formModiQuejas").append(option);

          $("#modifiQueja").change(function(){


          	mostrarFormulario();
          });
     }

     function mostrarFormulario()
     {
     	$("#modifiQueja").nextAll().remove();
        var oSelectQueja = $("#modifiQueja");
        var iIdQueja = oSelectQueja.val();
        var sDatos = {queja:iIdQueja};
        $.post("gestion/queja/modificarQueja.php", sDatos, montarFormularioQueja, 'json');
     }

     function montarFormularioQueja(oQuejas, sStatus, oXHR)
     {
     	var formu = '<br><div class="form-group">';
     		  formu += '<label for="descripcionQueja">Descripción:</label>';
          formu +='<input type="text" class="form-control" placeholder="Descripción de la queja"  id="descripcionQueja" name="descripcionQueja" value="'+oQuejas[0].descripcion+'">';
          formu += '</div>';


          formu += '<div class="form-group">';
          formu += '<label for="fechaQueja">Fecha:</label>';
          formu += '<input type="text" class="form-control datepicker" id="fechaQueja" placeholder="Fecha" name="fechaQueja" value="'+oQuejas[0].fecha+'">';
          formu += '</div>';
                
                formu += '<div class="form-group">';
                formu += '<label>Resuelta: </label>';
                formu += '<div class="radio">';
                formu += '<label><input type="radio" name="optradio8" value="Sí" checked>Sí</label>';
                formu += '</div>';
                formu += '<div class="radio">';
                formu += '<label><input type="radio" name="optradio8" value="No">No</label>';
                formu += '</div>';
                formu += '</div>';

                formu += '<div class="form-group">';
                formu += '<button type="button" id="aceptarModificarQueja" class="btn btn-primary">Aceptar</button>';
                formu += '</div>';
          
        $("#formModiQuejas").append(formu); 

        $("#aceptarModificarQueja").click(function(){

        	var oForm=document.getElementById("formModiQuejas");

        	id=$("#modifiQueja").val();
        	descripcion = oForm.descripcionQueja.value.trim();
        	fecha = oForm.fechaQueja.value.trim();
			    resuelta = oForm.optradio8.value.trim();
          
          var queja = {
           	id:id,
            des:descripcion,
            fe:fecha,
            res:resuelta
        	};

        	var oQueja=JSON.stringify(queja);
        	var pasar={sDatos:oQueja};

          	$.post("gestion/queja/updateaQueja.php", pasar, respuestaModificarQueja, 'json');
          });   
     }
      function respuestaModificarQueja(respuesta,sStatus,oXHR)
		{
		   if(respuesta == true)
          {
               alert("Queja modificada");
               $.post('gestion/queja/consultarQuejas.php', null, mostrarQuejas, 'json');
          }

          else
          {
               alert("Error al intentar modificar la queja");
          }
		}
});