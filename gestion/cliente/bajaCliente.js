$(document).ready(function(){
          
     


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/cliente/consultarClientes.php', null, mostrarCientes, 'json');

     function mostrarCientes(oClientes, sStatus, oXHR)
     {

          $("#formBajaCliente").children().remove();

          var option = "<label class='titulo'>Baja Cliente</label>";

          option += "<select id='bajaCl' name='bajaClient' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oClientes.length;i++)
     	{
     		option += "<option value='"+oClientes[i].id+"'>"+oClientes[i].nombre+" "+oClientes[i].apellidos+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="button" id="aceptarBajaCli" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaCliente").append(option);

          $("#aceptarBajaCli").click(function(){

            eliminarCliente();
             
          }); 

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     function eliminarCliente() 
     {
         var oSelectCliente = $("#bajaCl");
         var iIdCliente = oSelectCliente.val();
         var sDatos = {cliente:iIdCliente};

        $.post("gestion/cliente/bajaCliente.php", sDatos, respuestaBajaCliente, 'json');

     }

     function respuestaBajaCliente(respuesta, sStatus, oAjax)
     {
          console.log("Hola");
          console.log(respuesta);
          if(respuesta == true)
          {
               alert("Cliente dado de baja");
               $.post('gestion/cliente/consultarClientes.php', null, mostrarCientes, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja al cliente");
          }
     }

});