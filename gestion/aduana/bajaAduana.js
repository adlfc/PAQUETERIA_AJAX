

$("#btnBajaAduana").click(function()
{


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/aduana/consultarAduanas.php', null, mostrarAduanas, 'json');

     function mostrarAduanas(oAduana, sStatus, oXHR)
     {

          $("#formBajaAduana").children().remove();

          var option = "<label class='titulo'>Baja Aduana</label>";

          option += "<select id='bajaAduana' name='bajaAduan' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oAduana.length;i++)
     	{
     		option += "<option value='"+oAduana[i].id+"'>Aduana "+oAduana[i].id+", Declaración: "+oAduana[i].declaracion+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="button" id="aceptarBajaAduana" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajaAduana").append(option);

          $("#aceptarBajaAduana").click(function(){

              //event.preventDefault();
                eliminarAduana();

          });

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     function eliminarAduana() 
     {

         var oSelectAduana = $("#bajaAduana");
         var iIdAduana = oSelectAduana.val();
         var sDatos = {aduana:iIdAduana};
        $.post("gestion/aduana/bajaAduana.php", sDatos, respuestaBajaAduana, 'json');
      
     }

     function respuestaBajaAduana(respuesta, sStatus, oAjax)
     {
          if(respuesta == true)
          {
               alert("Aduana dada de baja");
               $.post('gestion/aduana/consultarAduanas.php', null, mostrarAduanas, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja a aduana");
          }

     }

});