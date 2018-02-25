$(document).ready(function(){
          $("#aceptarBajaEmpl").click(function(){

          		event.preventDefault();

               	var oSelectEmpleado = $("#bajaEmp");
         		var iIdEmpleado = oSelectEmpleado.val();
         		var sDatos = JSON.stringify(iIdEmpleado);

        $.post("gestion/empleado/bajaEmpleado.php", sDatos, respuestaBajaEmpleado, 'json');
          }); 
     });


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/empleado/consultarEmpleados.php', null, mostrarEmpleados, 'json');

     function mostrarEmpleados(oEmpleados, sStatus, oXHR)
     {

          $("#formBajaEmple").children().remove();

          var option = "<label class='titulo'>Baja Empleados</label>";

          option += "<select id='bajaEmp' name='bajaEmple' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oEmpleados.length;i++)
     	{
     		option += "<option value='"+oEmpleados[i].id+"'>"+oEmpleados[i].nombre+" "+oEmpleados[i].apellidos+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="submit" id="aceptarBajaEmpl" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaEmple").append(option);

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     function eliminarEmpleado() 
     {

         var oSelectEmpleado = $("#bajaEmp");
         var iIdEmpleado = oSelectEmpleado.val();
         var sDatos = JSON.stringify(iIdEmpleado);

        $.post("gestion/empleado/bajaEmpleado.php", sDatos, respuestaBajaEmpleado, 'json');

     }

     function respuestaBajaEmpleado(respuesta, sStatus, oAjax)
     {
          if(respuesta == true)
          {
               alert("Empleado dado de baja");
               $.post('gestion/empleado/consultarEmpleados.php', null, mostrarEmpleados, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja al empleado");
          }
     }

