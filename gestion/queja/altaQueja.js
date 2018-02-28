

    $.get('gestion/articulo/consultarPaquetes.php', null, mostrarPaquetes, 'json');
    $.get('gestion/empleado/consultarEmpleados.php', null, mostrarEmpleados, 'json');



function mostrarPaquetes(oPaquetes, sStatus, oXHR)
{

    $("#listaPaquetes").children().remove();

    var option = "";

    for(var i=0;i<oPaquetes.length;i++)
    {
      option += "<option value='"+oPaquetes[i].id+"'>"+oPaquetes[i].id+"</option>";
    }

    $(option).appendTo('#listaPaquetes');
}

function mostrarEmpleados(oEmpleado, sStatus, oXHR)
{


    $("#listaEmpleados").children().remove();

    var option = "";

    for(var i=0;i<oEmpleado.length;i++)
    {
      option += "<option value='"+oEmpleado[i].id+"'>"+oEmpleado[i].nombre+" "+oEmpleado[i].apellidos+"</option>";
    }

    $(option).appendTo('#listaEmpleados');
}


$("#aceptarAltaQueja").click(aceptarAltaQueja);

function aceptarAltaQueja() {
	
	var oForm=document.getElementById("formAltaQuejas");
    if(validarAltaQueja()){
		 var sDescripcion=$("#descripcionQueja").val().trim();
		 var sFecha= $("#fechaQueja").val().trim();
		 var sResuelta=oForm.optradio8.value;
        var sPaquete = $("#listaPaquetes").val();
	    var sEmpleado = $("#listaEmpleados").val();
       
       
       

        var oQueja={
           descripcion:sDescripcion,
            fecha:sFecha,
            resuelta:sResuelta,
			paquete:sPaquete,
			empleado:sEmpleado
        };

        var queja=JSON.stringify(oQueja);

        $.ajax({ url : "gestion/queja/altaQueja.php",
            data:{datos:queja},
            async: true,
            dataType :'json',
            method: "POST",
            cache: false,
            success: tratarRespuestaAltaQueja,
            error :tratarRespuestaAltaQueja
        });
    }
}

function tratarRespuestaAltaQueja(oArrayRespuesta,sStatus,oXHR){
   

    if (oArrayRespuesta[0] == true){
        alert("Queja registrada previamente");
    } else {
       alert("Queja dada de alta");
    }
}



function validarAltaQueja(){
    var bValido=true;
    var sError="";
    //limpia errores
    $('input,select').removeClass("error");
	var oForm=document.getElementById("formAltaQuejas");

         var sDescripcion=$("#descripcionQueja").val().trim();
		 var sFecha= $("#fechaQueja").val().trim();
		 var sResuelta=oForm.optradio8.value;
        var sPaquete = $("#listaPaquetes").val();
	    var sEmpleado = $("#listaEmpleados").val();
       
  var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;

    if(oExpReg.test(sDescripcion) == false){
        bValido = false;
        sError += "\nDescripción incorrecta";
        $('#descripcionQueja').addClass("error");
    }

    var oExpReg = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/;

    if(oExpReg.test(sFecha) == false){
        bValido = false;
        sError += "\nFecha incorrecta";
        $('#fechaQueja').addClass("error");
    }
	
	
	


    

    if(!bValido){
        alert(sError);
    }

    return bValido;
}



