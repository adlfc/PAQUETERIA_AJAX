

$(document).ready(function()
{


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/paquete/consultarPaquetes.php', null, mostrarPaquetes, 'json');

     function mostrarPaquetes(oPaquete, sStatus, oXHR)
     {

          $("#formBajaPaquete").children().remove();

          var option = "<label class='titulo'>Baja Paquete</label>";

          option += "<select id='bajaPaquete' name='bajaPaquet' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oPaquete.length;i++)
     	{
     		option += "<option value='"+oPaquete[i].id+"'>Paquete "+oPaquete[i].id+", Cliente "+oPaquete[i].id_cliente+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="button" id="aceptarBajaPaquete" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaPaquete").append(option);

          $("#aceptarBajaPaquete").click(function(){

              //event.preventDefault();
                eliminarPaquete();

          });

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     function eliminarPaquete() 
     {

         var oSelectPaquete = $("#bajaPaquete");
         var iIdPaquete = oSelectPaquete.val();
         var sDatos = {paquete:iIdPaquete};
         console.log(iIdPaquete);
        $.post("gestion/paquete/bajaPaquete.php", sDatos, respuestaBajaPaquete, 'json');
      
     }

     function respuestaBajaPaquete(respuesta, sStatus, oAjax)
     {
          if(respuesta == true)
          {
               alert("Paquete dado de baja");
               $.post('gestion/paquete/consultarPaquetes.php', null, mostrarPaquetes, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja al paquete");
          }

     }

});