
$.get('gestion/empleado/consultarEmpleados.php', null, mostrarEmpleados, 'json');

     function mostrarEmpleados(oEmpleados, sStatus, oXHR)
     {

          $("#formBajaEmple").children().remove();

          var option = "<label class='titulo'>Baja Empleados</label>";

          option += "<select id='bajaEmpl' name='bajaEmple' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oEmpleados.length;i++)
     	{
     		option += "<option>"+oEmpleados[i].nombre+" "+oEmpleados[i].apellidos+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="button" id="aceptarBajaEmple" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaEmple").append(option);

     }