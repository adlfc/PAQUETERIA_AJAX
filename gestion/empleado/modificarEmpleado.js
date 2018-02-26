$("#modiEmple").click(function(){

$.get('gestion/empleado/consultarEmpleados.php', null, mostrarEmpleados, 'json');

     function mostrarEmpleados(oEmpleados, sStatus, oXHR)
     {
     	 $("#formModiEmpleado").children().remove();
     	 var option = "<label class='titulo'>Modificar Empleados</label>";

          option += "<select id='modifiEmple' name='modifiEmple' class='form-control'>";

          option += "<option value='primero'>Seleccione un empleado...</option>";

     	for(var i=0;i<oEmpleados.length;i++)
     	{
     		option += "<option value='"+oEmpleados[i].id+"'>"+oEmpleados[i].nombre+" "+oEmpleados[i].apellidos+"</option>";
     	}

          option += "</option>";
          
          $("#formModiEmpleado").append(option);

          $("#modifiEmple").change(function(){


          	mostrarFormulario();
          });
     }

     function mostrarFormulario()
     {
     	$("#modifiEmple").nextAll().remove();
        var oSelectEmpleado = $("#modifiEmple");
        var iIdEmpleado = oSelectEmpleado.val();
        var sDatos = {empleado:iIdEmpleado};
        $.post("gestion/empleado/modificarEmpleado.php", sDatos, montarFormularioEmpleado, 'json');
     }

     function montarFormularioEmpleado(oEmpleados, sStatus, oXHR)
     {
     	var formu = '<br><div class="form-group">';
     		formu += '<label for="nombreEmple">Nombre:</label>';
            formu += '<input type="text" class="form-control" id="nombreEmple" placeholder="Nombre" name="nombreEmple" value="'+oEmpleados[0].nombre+'">';
            formu += '</div>';

            formu += '<div class="form-group">';
            formu += '<label for="apellidosEmple">Apellidos:</label>';
            formu += '<input type="text" class="form-control" id="apellidosEmple" placeholder="Apellidos" name="apellidosEmple" value="'+oEmpleados[0].apellidos+'">';
            formu += '</div>';

            formu += '<div class="form-group">';
            formu += '    <label>Gestor: </label>';
            formu += '    <div class="radio">';
            formu += '        <label><input type="radio" name="optradio" value="Sí" checked>Sí</label>';
					      
            formu += '    </div>';
            formu += '    <div class="radio">';
            formu += '        <label><input type="radio" name="optradio" value="No">No</label>';
            formu += '    </div>';
            formu += '</div>';

            formu += '<div class="form-group">';
            formu += '    <label>Manager: </label>';
            formu += '    <div class="radio">';
            formu += '        <label><input type="radio" name="optradio1"  value="Sí" checked>Sí</label>';
            formu += '    </div>';
            formu += '    <div class="radio">';
            formu += '        <label><input type="radio" name="optradio1" value="No">No</label>';
            formu += '    </div>';
            formu += '</div>';

            formu += '<div class="form-group">';
            formu += '    <label for="oficina">Oficina:</label>';
            formu += '    <input type="text" class="form-control" id="oficina" placeholder="Oficina" name="ofic" value="'+oEmpleados[0].oficina+'">';
            formu += '</div>';

			formu += '<div class="form-group">';
        	formu += '    <button type="button" id="aceptarModiEmple" class="btn btn-primary">Aceptar</button>';
        	formu += '    </div>';

        $("#formModiEmpleado").append(formu); 

        $("#aceptarModiEmple").click(function(){

        	var oForm=document.getElementById("formModiEmpleado");

        	id=$("#modifiEmple").val();
        	nombre = oForm.nombreEmple.value.trim();
        	apellidos = oForm.apellidosEmple.value.trim();
			gestor = oForm.optradio.value.trim();
			manager = oForm.optradio1.value.trim();
			oficina = oForm.oficina.value.trim();
        	var empleado = {
           	id:id,
            nom:nombre,
            ape:apellidos,
            ges:gestor,
			mana:manager,
			ofi:oficina
        	};

        	var oEmpleado=JSON.stringify(empleado);
        	var pasar={sDatos:oEmpleado};

          	$.post("gestion/empleado/updateaEmpleado.php", pasar, respuestaModificarEmpleado, 'json');
          });   
     }
      function respuestaModificarEmpleado(respuesta,sStatus,oXHR)
		{
		   if(respuesta == true)
          {
               alert("Empleado modificado");
               $.post('gestion/empleado/consultarEmpleados.php', null, mostrarEmpleados, 'json');
          }

          else
          {
               alert("Error al intentar modificar al empleado");
          }
		}
});