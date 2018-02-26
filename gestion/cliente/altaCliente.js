window.addEventListener("load",inicio,false);
function inicio(){
	document.getElementById("aceptarAltaCli").addEventListener("click", aceptarAltaCliente,false);
}
function aceptarAltaCliente() {
	
		var oForm=document.getElementById("formAltaCliente");
		$("input").removeClass("error");
    if(validarAltaCliente()){
        
        nombre = oForm.nombre.value.trim();
        apellidos = oForm.apellidos.value.trim();
		email = oForm.email.value.trim();
        telefono = oForm.telefono.value.trim();
        direccion = oForm.calle.value.trim();
		cod_post = oForm.codigopostal.value.trim();
		pais = oForm.pais.value.trim();
        var cliente = {
           
            nom:nombre,
            ape:apellidos,
            em:email,
			telef:telefono,
			dire:direccion,
			cp:cod_post,
			pa:pais
			
			
			
        };

        var oCliente=JSON.stringify(cliente);
        $.ajax({url:"gestion/cliente/altaCliente.php",
                data:{datos:oCliente},
                async:true,
                dataType:'json',
                method:"POST",
                cache:false,
                success: tratarRespuestaCliente,
                error: tratarRespuestaCliente      
        });
    }
}

function validarAltaCliente() {
    var bValido = true;
    var sError = "";
    $('input').removeClass("error");
	
	
	var oForm=document.getElementById("formAltaCliente");
	
	
	var sActivo = true;
	
	 
	
	
	var sNombre =oForm.nombre.value.trim();
	

	var oExpReg = /^[a-zA-ZZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;

    if(oExpReg.test(sNombre) == false){
        bValido = false;
        sError += "\nNombre incorrecto";
       $("#nombre").addClass("error");
    }
	

    var sApellidos = oForm.apellidos.value.trim();
	

	var oExpReg = /^[a-zA-ZZñÑáéíóúÁÉÍÓÚ\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
        bValido = false;
        sError += "\nApellidos incorrectos";
        $("#apellidos").addClass("error");
    }

   var sEmail = oForm.email.value.trim();
	
	var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sEmail) == false){
        bValido = false;
        sError += "\nEmail incorrecto";
        $("#email").addClass("error");
    }

   

 	var sTelef = oForm.telefono.value.trim();
	
	var oExpReg =  /^[6|7|9][0-9]{8}$/;
	
	if (oExpReg.test(sTelef) == false){
        bValido = false;
        sError += "\nTeléfono incorrecto";
       $("#telefono").addClass("error");
    }
	
	var sDireccion= oForm.calle.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sDireccion) == false){
	        bValido = false;
        sError += "\nDirección incorrecta";
       $("#calle").addClass("error");
    }
	
	var sCodPost = oForm.codigopostal.value.trim();

	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	
	if (oExpReg.test(sCodPost) == false){
	   bValido = false;
        sError += "\nCódigo postal incorrecto";
       $("#codigopostal").addClass("error");
    }
	
    var sPais= oForm.pais.value.trim();


	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sPais) == false){	
	    bValido = false;
        sError += "País incorrecto<br>";
       $("#pais").addClass("error");
    }
	
	
    if(!bValido){
        /*$("#divMensajes").dialog("open");
        $("#divMensajes").dialog("option","title","Error validacion");
        $("#pMensaje").html(sError);*/
		alert(sError);
    }
    return bValido;
}

function tratarRespuestaCliente(oArrayRespuesta,sStatus,oXHR)
{
    $("#divMensajes").dialog("open");
    console.log(oArrayRespuesta[0]);
    console.log("dentro de respuesta");

    if (oArrayRespuesta[0] == true){
        /*$("#divMensajes").dialog("option","title","Error");
        $("#pMensaje").text(oArrayRespuesta[1]);*/
        alert("Cliente registrado previamente");
    } else {
        /* $('#divFrmAltaCliente').dialog("close");
        $("#divMensajes").dialog("option","title","Alta OK");
        $("#pMensaje").text(oArrayRespuesta[1]);
        $("#divfrmAltaCliente").dialog("close"); */
		alert("Cliente dado de alta");
		oForm.reset();
    }
}

function tratarErrorCliente(oXHR,sStatus,sError){
    $("#divMensajes").dialog("open");
    $("#divMensajes").dialog("option","title",sStatus);
    $("#pMensaje").text(sError);
}

var bClienteEncontrado=false;
var oAjaxvalidacionCliente = null;

/*function buscaCliente(sIdCliente){

    var sParametroGET = encodeURI("id="+sIdCliente);

    var sURL = encodeURI("gestion/cliente/buscaCliente.php?");

    llamadaAjaxValidacionCliente(sURL,sParametroGET);

}*/

function llamadaAjaxValidacionCliente(sURL,sParametroGET){

    oAjaxvalidacionCliente = objetoXHR();

    oAjaxvalidacionCliente.open("GET",sURL+sParametroGET,false);

    oAjaxvalidacionCliente.onreadystatechange = respuestaValidacionCliente;

    oAjaxvalidacionCliente.send(null);
}

function respuestaValidacionCliente(){

    if(oAjaxvalidacionCliente.readyState == 4 && oAjaxvalidacionCliente.status == 200)	{
        var oArrayRespuesta = JSON.parse(oAjaxvalidacionCliente.responseText);

        bClienteEncontrado = oArrayRespuesta[0];
    }

}