$(document).ready(function(){
          $("#aceptarBajaCli").click(function(){

          		event.preventDefault();

               	var oSelectEmpleado = $("#bajaCli");
         		var iIdEmpleado = oSelectEmpleado.val();

            var oCliente = new Cliente(iIdEmpleado,null,null,null,null,null,null,null,null);

         		var sDatos = "datos" + JSON.stringify(oCliente);

        $.post("bajaCliente.php", sDatos, respuestaBajaCliente, 'json');
          }); 
     });


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/cliente/consultarClientes.php', null, mostrarCientes, 'json');

     function mostrarCientes(oClientes, sStatus, oXHR)
     {

          $("#formBajaCliente").children().remove();

          var option = "<label class='titulo'>Baja Cliente</label>";

          option += "<select id='bajaCli' name='bajaClient' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oClientes.length;i++)
     	{
     		option += "<option value='"+oClientes[i].id+"'>"+oClientes[i].nombre+" "+oClientes[i].apellidos+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="submit" id="aceptarBajaCli" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaCliente").append(option);

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     /*function eliminarEmpleado() 
     {

         var oSelectEmpleado = $("#bajaEmp");
         var iIdEmpleado = oSelectEmpleado.val();
         var sDatos = JSON.stringify(iIdEmpleado);

        $.post("gestion/empleado/bajaEmpleado.php", sDatos, respuestaBajaCliente, 'json');

     }*/

     function respuestaBajaCliente(respuesta, sStatus, oAjax)
     {
          if(respuesta == true)
          {
               alert("Cliente dado de baja");
               $.post('gestion/empleado/consultarClientes.php', null, mostrarCientes, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja al cliente");
          }
     }

