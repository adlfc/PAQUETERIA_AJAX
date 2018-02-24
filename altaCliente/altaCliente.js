$("#divfrmAltaCliente").dialog({//suponiendo que lo pongamos asÌ
    autoOpen: true,  // Es el valor por defecto
    close: function () {
        $("#frmAltaCliente")[0].reset();
    },
    hide: "fold",
    show: "fold",
    height:"auto",
    width:"auto",
    resizable:false,
    buttons: [{
        text: "Aceptar",
        click: aceptarAltaCliente
    }]
});

function aceptarAltaCliente() {
    if(validarAltaCliente()){
        idCliente = sIdCliente;
        nombre = sNombre;
        apellidos = sApellidos;
		email = sEmail;
        telefono = sTelefono;
        direccion = sDireccion;
		cod_post = sCodPost;
		pais = sPais;
        var cliente = {
            id:idCliente,
            nom:nombre,
            ape:apellidos,
            em:email,
			telef:telefono,
			dire:direccion,
			cp:cod_post,
			pa:pais
			
			
			
        };

        var oCliente=JSON.stringify(cliente);
        $.ajax({url:"altaCliente.php",
                data:{datos:oCliente},
                async:true,
                dataType:'json',
                method:"POST",
                cache:false,
                success: tratarRespuestaCliente,
                error: tratarErrorCliente      
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
	

	var oExpReg = /^[a-zA-ZÒ—·ÈÌÛ˙¡…Õ”⁄\s]{3,15}$/;

    if(oExpReg.test(sNombre) == false){
        bValido = false;
        sError += "Nombre incorrecto<br>";
       sNombre.addClass("error");
    }
	

    var sApellidos = oForm.apellidos.value.trim();
	

	var oExpReg = /^[a-zA-ZÒ—·ÈÌÛ˙¡…Õ”⁄\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
        bValido = false;
        sError += "Apellidos incorrectos<br>";
        sApellidos.addClass("error");
    }

   var sEmail = oForm.email.value.trim();
	
	var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sEmail) == false){
        bValido = false;
        sError += "Email incorrecto<br>";
        sEmail.addClass("error");
    }

   

 	var sTelef = oForm.telefono.value.trim();
	
	var oExpReg =  /^[6|7|9][0-9]{8}$/;
	
	if (oExpReg.test(sTelef) == false){
        bValido = false;
        sError += "TelÈfono incorrecto<br>";
       sTelef.addClass("error");
    }
	
	var sDireccion= oForm.calle.value.trim();


	var oExpReg = /^[0-9a-zA-ZÒ—·ÈÌÛ˙¡…Õ”⁄\s]{3,15}$/;
	
	if (oExpReg.test(sDireccion) == false){
	        bValido = false;
        sError += "DirecciÛn incorrecta<br>";
       sDireccion.addClass("error");
    }
	
	var sCodPost = oForm.codigopostal.value.trim();

	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	
	if (oExpReg.test(sCodPost) == false){
	   bValido = false;
        sError += "CÛdigo postal incorrecto<br>";
       sCodPost.addClass("error");
    }
	
    var sPais= oForm.pais.value.trim();


	var oExpReg = /^[a-zA-ZÒ—·ÈÌÛ˙¡…Õ”⁄\s]{3,15}$/;
	
	if (oExpReg.test(sPais) == false){	
	    bValido = false;
        sError += "PaÌs incorrecto<br>";
       sPais.addClass("error");
    }
	
	var sIdCliente=  oForm.idCli.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	

    if(oExpReg.test(sIdCliente) == false){
        bValido = false;
        sError += "Id incorrecto<br>";
        sIdCliente.addClass("error");
    }
	
    else {//comprobamos si existe el cliente antes de insertarlo
        buscaCliente(sIdCliente);
        if(bClienteEncontrado) {
            bValido = false;
            sError += "Cliente registrado con anterioridad<br>";
            sIdCliente.addClass("error");
        }
    }

    if(!bValido){
        $("#divMensajes").dialog("open");
        $("#divMensajes").dialog("option","title","Error validacion");
        $("#pMensaje").html(sError);
    }
    return bValido;
}

function tratarRespuestaCliente(oArrayRespuesta,sStatus,oXHR)
{
    $("#divMensajes").dialog("open");

    if (oArrayRespuesta[0] == true){
        $("#divMensajes").dialog("option","title","Error");
        $("#pMensaje").text(oArrayRespuesta[1]);
    } else {
        $('#divFrmAltaCliente').dialog("close");
        $("#divMensajes").dialog("option","title","Alta OK");
        $("#pMensaje").text(oArrayRespuesta[1]);
        $("#divfrmAltaCliente").dialog("close");
    }
}

function tratarErrorCliente(oXHR,sStatus,sError){
    $("#divMensajes").dialog("open");
    $("#divMensajes").dialog("option","title",sStatus);
    $("#pMensaje").text(sError);
}

var bClienteEncontrado=false;
var oAjaxvalidacionCliente = null;

function buscaCliente(sIdCliente){

    var sParametroGET = encodeURI("id="+sIdCliente);

    var sURL = encodeURI("buscaCliente.php?");

    llamadaAjaxValidacionCliente(sURL,sParametroGET);

}

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