$("#altaAduana").click(function(){

    $.get('gestion/articulo/consultarArticulos.php', null, mostrarArticulos, 'json');

});



    function mostrarArticulos(oArticulo, sStatus, oXHR)
    {

        console.log(oArticulo);

        $("#listaArticulos").children().remove();

        var option = "";

        for(var i=0;i<oArticulo.length;i++)
        {
          option += "<option value='"+oArticulo[i].id+"'>"+oArticulo[i].id+" "+oArticulo[i].descripcion+"</option>";
        }

        $(option).appendTo('#listaArticulos');
    }

    $("#aceptarAltaAduana").click(aceptarAltaAduana);

/*function cargarcomboArticulos(){
    $.get('gestion/aduana/getArticulos.php',null,cargarArticulosAduana,'json');
}

function cargarArticulosAduana(oArrayArticulos, sStatus, oXHR){
    $("#listaArticulos").empty();

    $(oArrayArticulos).each(function(){
        $('<option>').val(this.id).text(this.descripcion).appendTo("#listaArticulos");
    });
}*/


function aceptarAltaAduana() {
    if(validarAltaAduana()){
        var sArticulo = $("#listaArticulos").val();
        var sDeclaracion=$("#declaracion").val().trim();
        var sTasa=$("#tasa").val().trim();
       

        var oAduana={
            articulo:sArticulo,
            declaracion:sDeclaracion,
            tasa:sTasa
        };

        var aduana=JSON.stringify(oAduana);

        $.ajax({ url : "gestion/aduana/altaAduana.php",
            data:{datos:aduana},
            async: true,
            dataType :'json',
            method: "POST",
            cache: false,
            success: tratarRespuestaAltaAduana,
            error :tratarRespuestaAltaAduana
        });
    }
}

function tratarRespuestaAltaAduana(oArrayRespuesta,sStatus,oXHR){
   

    if (oArrayRespuesta[0] == true){
        alert("Aduana registrada previamente");
    } else {
       alert("Aduana dada de alta");
    }
}



function validarAltaAduana(){
    var bValido=true;
    var sError="";
    //limpia errores
    $('input,select').removeClass("error");

        var sArticulo = $("#listaArticulos").val();
        var sDeclaracion=$("#declaracion").val().trim();
        var sTasa=$("#tasa").val().trim();

   var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;

    if(oExpReg.test(sDeclaracion) == false){
        bValido = false;
        sError += "\nDeclaración incorrecta";
        $('#declaracion').addClass("error");
    }

    var oExpReg = /^[0-9]{1,}$/;

    if(oExpReg.test(sTasa) == false){
        bValido = false;
        sError += "\nTasa incorrecta";
        $('#tasa').addClass("error");
    }

    

    if(!bValido){
        alert(sError);
    }

    return bValido;
}



