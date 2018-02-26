window.addEventListener("load",inicio,false);
function inicio(){
	document.getElementById("aceptarAltaPaquete").addEventListener("click", aceptarAltaPaquete,false);
}
function aceptarAltaPaquete() {
	
		var oForm=document.getElementById("formAltaPedido");
		$("input").removeClass("error");
    if(validarAltaPaquete()){
        
        id_cliente = oForm.listaClientes.value.trim();
        tarifa = oForm.tarifa.value.trim();
		fecha = oForm.fechaEntrega.value.trim();
		volumen = oForm.volumen.value.trim();
		peso = oForm.peso.value.trim();
		valor = oForm.valor.value.trim();
		urgente = oForm.optradio3.value.trim();
		entregado = oForm.optradio4.value.trim();
		admin = oForm.optradio5.value.trim();
		internacional = oForm.optradio6.value.trim();
		asegurado = oForm.optradio7.value.trim();
        var paquete = {
           
          cli:id_cliente,
        tar:tarifa,
		fe:fecha,
		vol:volumen,
		pe:peso,
		val:valor,
		ur:urgente,
		ent:entregado,
		ad:admin,
		inter:internacional,
		ase:asegurado
			
			
			
        };

        var oPaquete=JSON.stringify(empleado);
        $.ajax({url:"gestion/paquete/altaPaquete.php",
                data:{datos:oPaquete},
                async:true,
                dataType:'json',
                method:"POST",
                cache:false,
                success: tratarRespuestaPaquete,
                error: tratarRespuestaPaquete     
        });
    }
}

function validarAltaPaquete() {
    var bValido = true;
    var sError = "";
	var sMensaje="";
    $('input').removeClass("error");
	
	
	var oForm=document.getElementById("formAltaPedido");
	
	
	var sActivo = true;
	
	 
	
	
	var doTarifa = parseFloat(oForm.tarifa.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doTarifa) == false){
        bValido = false;
        sError += "\nTarifa incorrecta";
       $("#tarifa").addClass("error");
    }
	

var dFechaEntrega= new Date(oForm.fechaEntrega.value.trim()).toLocaleDateString("es-ES");
	
	

	
	var oExpReg = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/;
	
	if (oExpReg.test(dFechaEntrega) == false){
	
		if(bValido == true){
        bValido = false;
        sError += "\nFecha incorrecta";
        $("#fechaEntrega").addClass("error");
    }

   
   var doVolumen= parseFloat(oForm.volumen.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doVolumen) == false){
	
		if(bValido == true){
	        bValido = false;
        sError += "\nVolumen incorrecto";
       $("#volumen").addClass("error");
    }
	
	 var doPeso= parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
	
		if(bValido == true){
	        bValido = false;
        sError += "\nPeso incorrecto";
       $("#peso").addClass("error");
    }
	
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
	
		if(bValido == true){
	        bValido = false;
        sError += "\nValor incorrecto";
       $("#valor").addClass("error");
    }
	
	
	
	
	
    if(!bValido){
        
		alert(sError);
    }
    return bValido;
}

function tratarRespuestaPaquete(oArrayRespuesta,sStatus,oXHR)
{
    

    if (oArrayRespuesta[0] == true){
        alert("Paquete registrado previamente");
    } else {
       
		sMensaje="Paquete dado de alta";
		alert(sMensaje);
    }
}

function tratarErrorEmpleado(oXHR,sStatus,sError){
    $("#divMensajes").dialog("open");
    $("#divMensajes").dialog("option","title",sStatus);
    $("#pMensaje").text(sError);
}

var bPaqueteEncontrado=false;
var oAjaxvalidacionPaquete = null;



function llamadaAjaxValidacionPaquete(sURL,sParametroGET){

    oAjaxvalidacionPaquete = objetoXHR();

    oAjaxvalidacionPaquete.open("GET",sURL+sParametroGET,false);

    oAjaxvalidacionPaquete.onreadystatechange = respuestaValidacionPaquete;

    oAjaxvalidacionPaquete.send(null);
}

function respuestaValidacionPaquete(){

    if(oAjaxvalidacionPaquete.readyState == 4 && oAjaxvalidacionPaquete.status == 200)	{
        var oArrayRespuesta = JSON.parse(oAjaxvalidacionPaquete.responseText);

        bPaqueteEncontrado = oArrayRespuesta[0];
    }

}