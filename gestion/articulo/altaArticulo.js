window.addEventListener("load",inicio,false);



	 
function inicio(){
	$.getScript('gestion/articulo/consultarPaquetes.php');

 function mostrarPaquetes(oPaquetes, sStatus, oXHR)
     {
          console.log(oPaquetes.length);

          $("#formAltaArticulo").children().remove();

          var option = "<select id='listaPaquetes' name='listaPaquetes' class='form-control'>";

     	

     	for(var i=0;i<oPaquetes.length;i++)
     	{
     		option += "<option value='"+oPaquetes[i].id+"'>"+oPaquetes[i].descripcion+"</option>";
     	}

          option += "</option>";

          

     	
          
          $("#formAltaArticulo").append(option);

          

     }
	document.getElementById("aceptarAltaArticulo").addEventListener("click", aceptarAltaArticulo,false);
}
function aceptarAltaArticulo() {
	
		var oForm=document.getElementById("formAltaArticulo");
		$("input").removeClass("error");
    if(validarAltaArticulo()){
        
        descripcion = oForm.descripcion.value.trim();
        peso = oForm.peso.value.trim();
		valor = oForm.valor.value.trim();
		comercial = oForm.optradio2.value.trim();
		paquete = oForm.listaPaquete.value.trim();
        var articulo = {
           
            des:descripcion,
            pe:peso,
            val:valor,
			com:comercial,
			paq:paquete
			
			
			
        };

        var oArticulo=JSON.stringify(articulo);
        $.ajax({url:"gestion/articulo/altaArticulo.php",
                data:{datos:oArticulo},
                async:true,
                dataType:'json',
                method:"POST",
                cache:false,
                success: tratarRespuestaArticulo,
                error: tratarRespuestaArticulo     
        });
    }
}

function validarAltaArticulo() {
    var bValido = true;
    var sError = "";
	var sMensaje="";
    $('input').removeClass("error");
	
	
	var oForm=document.getElementById("formAltaArticulo");
	
	
	var sActivo = true;
	
	 
	
	
	var sDescripcion = oForm.descripcion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;

    if(oExpReg.test(sDescripcion) == false){
        bValido = false;
        sError += "\nDescripción incorrecta";
       $("#descripcion").addClass("error");
    }
	

    var doPeso = parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
        bValido = false;
        sError += "\nPeso incorrecto";
        $("#peso").addClass("error");
    }

   
   var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;

	
	if (oExpReg.test(doValor) == false){
	        bValido = false;
        sError += "\Valor incorrecto";
       $("#valor").addClass("error");
    }
	
	
	
	var sComercial = oForm.optradio2.value.trim();
	
	
    if(!bValido){
        /*$("#divMensajes").dialog("open");
        $("#divMensajes").dialog("option","title","Error validacion");
        $("#pMensaje").html(sError);*/
		alert(sError);
    }
    return bValido;
}

function tratarRespuestaArticulo(oArrayRespuesta,sStatus,oXHR)
{
    

    if (oArrayRespuesta[0] == true){
        alert("Artículo registrado previamente");
    } else {
        
		sMensaje="Artículo dado de alta";
		alert(sMensaje);
    }
}

function tratarErrorArticulo(oXHR,sStatus,sError){
    $("#divMensajes").dialog("open");
    $("#divMensajes").dialog("option","title",sStatus);
    $("#pMensaje").text(sError);
}

var bArticuloEncontrado=false;
var oAjaxvalidacionArticulo = null;



function llamadaAjaxValidacionArticulo(sURL,sParametroGET){

    oAjaxvalidacionArticulo = objetoXHR();

    oAjaxvalidacionArticulo.open("GET",sURL+sParametroGET,false);

    oAjaxvalidacionArticulo.onreadystatechange = respuestaValidacionArticulo;

    oAjaxvalidacionArticulo.send(null);
}

function respuestaValidacionArticulo(){

    if(oAjaxvalidacionArticulo.readyState == 4 && oAjaxvalidacionArticulo.status == 200)	{
        var oArrayRespuesta = JSON.parse(oAjaxvalidacionArticulo.responseText);

        bArticuloEncontrado = oArrayRespuesta[0];
    }

}