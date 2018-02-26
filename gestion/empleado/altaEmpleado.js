window.addEventListener("load",inicio,false);
function inicio(){
	document.getElementById("aceptarAltaEmple").addEventListener("click", aceptarAltaEmpleado,false);
}
function aceptarAltaEmpleado() {
	
		var oForm=document.getElementById("formAltaEmpleados");
		$("input").removeClass("error");
    if(validarAltaEmpleado()){
        
        nombre = oForm.nombreEmple.value.trim();
        apellidos = oForm.apellidosEmple.value.trim();
		gestor = oForm.optradio.value.trim();
		manager = oForm.optradio1.value.trim();
		oficina = oForm.oficina.value.trim();
        var empleado = {
           
            nom:nombre,
            ape:apellidos,
            ges:gestor,
			mana:manager,
			ofi:oficina
			
			
			
        };

        var oEmpleado=JSON.stringify(empleado);
        $.ajax({url:"gestion/empleado/altaEmpleado.php",
                data:{datos:oEmpleado},
                async:true,
                dataType:'json',
                method:"POST",
                cache:false,
                success: tratarRespuestaEmpleado,
                error: tratarRespuestaEmpleado     
        });
    }
}

function validarAltaEmpleado() {
    var bValido = true;
    var sError = "";
	var sMensaje="";
    $('input').removeClass("error");
	
	
	var oForm=document.getElementById("formAltaEmpleados");
	
	
	var sActivo = true;
	
	 
	
	
	var sNombre =oForm.nombreEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;

    if(oExpReg.test(sNombre) == false){
        bValido = false;
        sError += "\nNombre incorrecto";
       $("#nombreEmple").addClass("error");
    }
	

    var sApellidos = oForm.apellidosEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
        bValido = false;
        sError += "\nApellidos incorrectos";
        $("#apellidosEmple").addClass("error");
    }

   
   var sOficina= oForm.oficina.value.trim();
	
	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,4}$/;


	
	if (oExpReg.test(sOficina) == false){
	        bValido = false;
        sError += "\nNombre de oficina incorrecta";
       $("#oficina").addClass("error");
    }
	
	
	
	var sGestor = oForm.optradio.value.trim();
	 var sManager = oForm.optradio1.value.trim();
	
    if(!bValido){
        /*$("#divMensajes").dialog("open");
        $("#divMensajes").dialog("option","title","Error validacion");
        $("#pMensaje").html(sError);*/
		alert(sError);
    }
    return bValido;
}

function tratarRespuestaEmpleado(oArrayRespuesta,sStatus,oXHR)
{
    

    if (oArrayRespuesta[0] == true){
        /*$("#divMensajes").dialog("option","title","Error");
        $("#pMensaje").text(oArrayRespuesta[1]);*/alert("Empleado registrado previamente");
    } else {
        /* $('#divFrmAltaCliente').dialog("close");
        $("#divMensajes").dialog("option","title","Alta OK");
        $("#pMensaje").text(oArrayRespuesta[1]);
        $("#divfrmAltaCliente").dialog("close"); */
		sMensaje="Empleado dado de alta";
		alert(sMensaje);
    }
}

function tratarErrorEmpleado(oXHR,sStatus,sError){
    $("#divMensajes").dialog("open");
    $("#divMensajes").dialog("option","title",sStatus);
    $("#pMensaje").text(sError);
}

var bEmpleadoEncontrado=false;
var oAjaxvalidacionEmpleado = null;

/*function buscaCliente(sIdCliente){

    var sParametroGET = encodeURI("id="+sIdCliente);

    var sURL = encodeURI("gestion/cliente/buscaCliente.php?");

    llamadaAjaxValidacionCliente(sURL,sParametroGET);

}*/

function llamadaAjaxValidacionEmpleado(sURL,sParametroGET){

    oAjaxvalidacionEmpleado = objetoXHR();

    oAjaxvalidacionEmpleado.open("GET",sURL+sParametroGET,false);

    oAjaxvalidacionEmpleado.onreadystatechange = respuestaValidacionEmpleado;

    oAjaxvalidacionEmpleado.send(null);
}

function respuestaValidacionEmpleado(){

    if(oAjaxvalidacionEmpleado.readyState == 4 && oAjaxvalidacionEmpleado.status == 200)	{
        var oArrayRespuesta = JSON.parse(oAjaxvalidacionEmpleado.responseText);

        bEmpleadoEncontrado = oArrayRespuesta[0];
    }

}