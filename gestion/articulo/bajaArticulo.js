

$(document).ready(function()
{


/* ********** MOSTRAR COMBO BAJA EMPLEADO ************************************************************************* */


$.get('gestion/articulo/consultarArticulos.php', null, mostrarArticulos, 'json');

     function mostrarArticulos(oArticulos, sStatus, oXHR)
     {
          console.log(oArticulos.length);

          $("#formBajArticulo").children().remove();

          var option = "<label class='titulo'>Baja Articulo</label>";

          option += "<select id='bajaArticulo' name='bajaArticul' class='form-control'>";

     	//option += "<option>Seleccione un empleado...</option>";

     	for(var i=0;i<oArticulos.length;i++)
     	{
     		option += "<option value='"+oArticulos[i].id+"'>"+oArticulos[i].descripcion+"</option>";
     	}

          option += "</option>";

          option += '<input style="margin-top: 20px;" type="button" id="aceptarBajaArticulo" value="Aceptar" class="btn btn-primary"/>';

     	//document.querySelector("#formBajaEmple").innerHTML = option;
          
          $("#formBajArticulo").append(option);

          $("#aceptarBajaArticulo").click(function(){

              //event.preventDefault();
                eliminarArticulo();

          });

     }


/* ********** BONTON ACEPTAR BAJA EMPLEADO ******************************************************************** */


     


     function eliminarArticulo() 
     {

         var oSelectArticulo = $("#bajaArticulo");
         var iIdArticulo = oSelectArticulo.val();
         var sDatos = {articulo:iIdArticulo};
        $.post("gestion/articulo/bajaArticulo.php", sDatos, respuestaBajaArticulo, 'json');
      
     }

     function respuestaBajaArticulo(respuesta, sStatus, oAjax)
     {
          if(respuesta == true)
          {
               alert("Empleado dado de baja");
               $.post('gestion/articulo/consultarArticulos.php', null, mostrarArticulos, 'json');
          }

          else
          {
               alert("Error al intentar dar de baja al empleado");
          }

     }

});