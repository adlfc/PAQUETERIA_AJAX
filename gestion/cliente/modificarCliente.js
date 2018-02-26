$("#modiCli").click(function(){



/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/cliente/consultarClientes.php', null, mostrarCientes, 'json');

     function mostrarCientes(oClientes, sStatus, oXHR)
     {

     	$("#formModiCliente").children().remove();

     	var formCliente = "<label class='titulo'>Modificar Cliente</label>";

          formCliente += "<select id='comboModificarClientes' name='comboModificarCliente' class='form-control'>";

     	formCliente += "<option value='primero'>Seleccione un cliente...</option>";

     	for(var i=0;i<oClientes.length;i++)
     	{
     		formCliente += "<option value='"+oClientes[i].id+"'>"+oClientes[i].nombre+" "+oClientes[i].apellidos+"</option>";
     	}

          formCliente += "</select>";

          $("#formModiCliente").append(formCliente);

          $("#comboModificarClientes").change(function(){

			    mostrarFormulario();

			}); 

     }

     function mostrarFormulario()
     {

     	var oSelectCliente = $("#comboModificarClientes");
         var iIdCliente = oSelectCliente.val();
         var sDatos = {cliente:iIdCliente};

        $.post("gestion/cliente/modificarCliente.php", sDatos, montarFormulario, 'json');

     }

     function montarFormulario(oClientes, sStatus, oXHR)
     {

     	$("#comboModificarClientes").nextAll().remove();

     	var campos = "<br>";

     	campos += '<div class="form-group"';
     	campos += '<label for="nombre">Nombre:</label>';
     	campos += '<input type="text" class="form-control" id="nombre" placeholder="Nombre" name="nombre" value="'+oClientes[0].nombre+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="apellidos">Apellidos:</label>';
     	campos += '<input type="text" class="form-control" id="apellidos" placeholder="Apellidos" name="apellido" value="'+oClientes[0].apellidos+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="email">Email:</label>';
     	campos += '<input type="text" class="form-control" id="email" placeholder="Email" name="email" value="'+oClientes[0].email+'"">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="telefono">Teléfono:</label>';
     	campos += '<input type="text" class="form-control" id="telefono" placeholder="Teléfono" name="telefono" value="'+oClientes[0].telefono+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="calle">Dirección / Calle:</label>';
     	campos += '<input type="text" class="form-control" id="calle" placeholder="Calle" name="calle" value="'+oClientes[0].direccion+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="codigopostal">Código Postal:</label>';
     	campos += '<input type="text" class="form-control" id="codigopostal" placeholder="Código Postal" name="codigopostal" value="'+oClientes[0].telefono+'">';
     	campos += '</div>';

     	campos += '<div class="form-group"';
     	campos += '<label for="pais">País:</label>';
     	campos += '<input type="text" class="form-control" id="pais" placeholder="País" name="pais" value="'+oClientes[0].pais+'">';
     	campos += '</div>';

     	campos += '<div class="form-group">';
        campos += '<button type="button" id="aceptarModiCli" class="btn btn-primary">Aceptar</button>';
        campos += '</div>';

     	$("#formModiCliente").append(campos);

     	$("#aceptarModiCli").click(function(){

     		console.log("click");

     		var oForm=document.getElementById("formModiCliente");

     		idCli = oForm.comboModificarClientes.value.trim();
     		nombre = oForm.nombre.value.trim();
	        apellidos = oForm.apellidos.value.trim();
			email = oForm.email.value.trim();
	        telefono = oForm.telefono.value.trim();
	        direccion = oForm.calle.value.trim();
			cod_post = oForm.codigopostal.value.trim();
			pais = oForm.pais.value.trim();

	        var cliente = {
           
            id:idCli,
            nom:nombre,
            ape:apellidos,
            em:email,
			telef:telefono,
			dire:direccion,
			cp:cod_post,
			pa:pais

        	};

        	
        	var oCliente = JSON.stringify(cliente);
        	var pasarDatos = {sDatos:oCliente};

        	//console.log(oCliente);

		    $.post("gestion/cliente/actualizarCliente.php", pasarDatos, respuestaModificarCliente, 'json');

		}); 
     }

     function respuestaModificarCliente(respuesta, sStatus, oAjax)
     {
     		console.log(respuesta);

     		if(respuesta == true)
     		{
     			alert("Cliente modificado");
     			$.get('gestion/cliente/consultarClientes.php', null, mostrarCientes, 'json');
     		}

     		else
     		{
     			alert("Error");
     		}
     }

});