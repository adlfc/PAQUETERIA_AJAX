

$(document).ready(function()
{


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/queja/consultarQuejas.php', null, mostrarQuejas, 'json');

     function mostrarQuejas(oQueja, sStatus, oXHR)
     {

          $("#formBajaQueja").children().remove();

          var option = "<label class='titulo'>Baja Queja</label>";

          option += "<select id='bajaQueja' name='bajaQuej' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oQueja.length;i++)
     	{
     		option += "<option value='"+oQueja[i].id+"'>Queja "+oQueja[i].id+", Descripción: "+oQueja[i].descripcion+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="button" id="aceptarBajaQueja" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaQueja").append(option);

          $("#aceptarBajaQueja").click(function(){

              //event.preventDefault();
                eliminarQueja();

          });

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     function eliminarQueja() 
     {

         var oSelectQueja = $("#bajaQueja");
         var iIdQueja = oSelectQueja.val();
         var sDatos = {queja:iIdQueja};
        $.post("gestion/queja/bajaQueja.php", sDatos, respuestaBajaQueja, 'json');
      
     }

     function respuestaBajaQueja(respuesta, sStatus, oAjax)
     {
          if(respuesta == true)
          {
               alert("Queja dada de baja");
               $.post('gestion/queja/consultarQuejas.php', null, mostrarQuejas, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja la queja");
          }

     }

});