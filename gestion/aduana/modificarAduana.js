$("#modiAduana").click(function(){

$.get('gestion/aduana/consultarAduanas.php', null, mostrarAduanas, 'json');

     function mostrarAduanas(oAduanas, sStatus, oXHR)
     {

     	 $("#formModiAduana").children().remove();
     	 var option = "<label class='titulo'>Modificar Aduana</label>";

          option += "<select id='modifiAduana' name='modifiAduana' class='form-control'>";

          option += "<option value='primero'>Seleccione una aduana...</option>";

     	for(var i=0;i<oAduanas.length;i++)
     	{
     		option += "<option value='"+oAduanas[i].id+"'>"+oAduanas[i].id+" - "+"Artículo: "+oAduanas[i].id_articulo+" - "+oAduanas[i].declaracion+"</option>";
     	}

          option += "</option>";
          
          $("#formModiAduana").append(option);

          $("#modifiAduana").change(function(){


          	mostrarFormulario();
          });
     }

     function mostrarFormulario()
     {
     	$("#modifiAduana").nextAll().remove();
        var oSelectAduana = $("#modifiAduana");
        var iIdAduana = oSelectAduana.val();
        var sDatos = {aduana:iIdAduana};
        $.post("gestion/aduana/modificarAduana.php", sDatos, montarFormularioAduana, 'json');
     }

     function montarFormularioAduana(oAduanas, sStatus, oXHR)
     {
           var formu = '<br><div class="form-group">';
           formu += '     <label for="declaracion">Declaración:</label>';
           formu += '     <input type="text" class="form-control" placeholder="Declaración"  id="declaracionAduana" name="declaracionAduana" value="'+oAduanas[0].declaracion+'">';
           formu += ' </div>';

           formu += ' <div class="form-group">';
           formu += '     <label for="valor">Tasa:</label>';
           formu += '     <input type="text" class="form-control" id="tasaAduana" placeholder="Tasa" name="tasaAduana" value="'+oAduanas[0].tasa+'">';
           formu += ' </div>';

           formu += '<div class="form-group">';
           formu += '     <button type="button" id="aceptarModificarAduana" class="btn btn-primary">Aceptar</button>';
           formu += ' </div>';

          
        $("#formModiAduana").append(formu); 

        $("#aceptarModificarAduana").click(function(){

        	var oForm=document.getElementById("formModiAduana");

        	id=$("#modifiAduana").val();
        	declaracion = oForm.declaracionAduana.value.trim();
        	tasa = oForm.tasaAduana.value.trim();
			   
          var aduana = {
           	id:id,
            dec:declaracion,
            tas:tasa
        	};

        	var oAduana=JSON.stringify(aduana);
        	var pasar={sDatos:oAduana};

          	$.post("gestion/aduana/updateaAduana.php", pasar, respuestaModificarAduana, 'json');
          });   
     }
      function respuestaModificarAduana(respuesta,sStatus,oXHR)
		{
		   if(respuesta == true)
          {
               alert("Aduana modificada");
               $.post('gestion/aduana/consultarAduanas.php', null, mostrarAduanas, 'json');
          }

          else
          {
               alert("Error al intentar modificar la aduana");
          }
		}
});