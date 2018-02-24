window.addEventListener("load",inicio,false);


var oPaqueteria = new Paqueteria();
 
//#########################################################################################
// PAQUETERIA
//#########################################################################################

var btnIndex = document.getElementById("activo");
btnIndex.addEventListener("click", volverIndex, false);

function volverIndex()
{
	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
 	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
    formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();
 

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
}


//#########################################################################################
// CLIENTES
//#########################################################################################

var formAltaCliente = document.getElementById("altaCli");
formAltaCliente.addEventListener("click", altaCliente, false);

function altaCliente()
{
 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "block";
 	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
 	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
 	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";

}

var formBajaCliente = document.getElementById("bajaCli");
formBajaCliente.addEventListener("click", bajaCliente, false);
 

function bajaCliente()
{
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "block";
 	formBajaCliente.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";
	bajaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var listCliente = document.getElementById("listadoCli");
listCliente.addEventListener("click", listCLientes, false);

function listCLientes()
{
 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";
	bajaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";
	altaPaquete.reset();

	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
    var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

//#########################################################################################
// EMPLEADOS
//#########################################################################################

var altaEmpleados = document.getElementById("altaEmpl");
altaEmpleados.addEventListener("click", altaEmpleado, false);

function altaEmpleado()
{
	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "block";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	altaPaquete.reset();
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var bajaEmpleados = document.getElementById("bajaEmpl");
bajaEmpleados.addEventListener("click", bajaEmpleado, false);

function bajaEmpleado()
{
	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "block";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var listaEmpleados = document.getElementById("listadoEmpl");
listaEmpleados.addEventListener("click", listaEmpleado, false);

function listaEmpleado()
{
	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "block";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

//#########################################################################################
// ARTICULOS
//#########################################################################################

var altaArti = document.getElementById("altaArt");
altaArti.addEventListener("click", altaArticulo, false);

function altaArticulo()
{
	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "block";
	altaArtic.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var bajaArticulo = document.getElementById("bajaArt");
bajaArticulo.addEventListener("click", bajaArticulos, false);

function bajaArticulos()
{
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var listaArticulo = document.getElementById("btnListaArt");
listaArticulo.addEventListener("click", listArticul, false);

function listArticul()
{
	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
		document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

//#########################################################################################
// PAQUETES
//#########################################################################################

var altaPaq = document.getElementById("altaPaquete");
altaPaq.addEventListener("click", altaPaquete, false);

function altaPaquete()
{
	var verAltaPaquete = document.getElementById("formAltaPedido");
 	verAltaPaquete.style.display = "block";
 
	
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
 	bajaArtic.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var bajaPaque = document.getElementById("btnBajaPaquete");
bajaPaque.addEventListener("click", bajaPaquetes, false);

function bajaPaquetes()
{
	document.getElementById("formBajaPaquete").style.display = "block";

	document.getElementById("formAltaCliente").style.display = "none";
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("listadoClientes").style.display = "none";

	document.getElementById("formAltaEmpleados").style.display = "none";
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";

	document.getElementById("formAltaArticulo").style.display = "none";
	document.getElementById("formBajArticulo").style.display = "none";
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("listadoArtic").style.display = "none";

	document.getElementById("formAltaPedido").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("verPaquetesNoEntregados").style.display = "none";
	document.getElementById("verPaquetesEntregados").style.display = "none";

	document.getElementById("formAltaAduana").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("listadoAduana").style.display = "none";

	document.getElementById("formAltaQuejas").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var paqueteNoEntregado = document.getElementById("paqueteNoEntregado");
paqueteNoEntregado.addEventListener("click", listaPaquetesNoEntregado, false);

function listaPaquetesNoEntregado()
{
	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "block";

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

 	var verAltaPaquete = document.getElementById("formAltaPedido");
 	verAltaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var paqueteEntregado = document.getElementById("paqueteEntregado");
paqueteEntregado.addEventListener("click", listaPaquetesEntregado, false);

function listaPaquetesEntregado()
{
	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "block";
	
	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

 	var verAltaPaquete = document.getElementById("formAltaPedido");
 	verAltaPaquete.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

//#########################################################################################
// ADUANAS
//#########################################################################################

var altaAdu = document.getElementById("altaAduana");
altaAdu.addEventListener("click", altaAduana, false);

function altaAduana()
{
	var verAltaAduana = document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "block";
	verAltaAduana.reset();
 
 	
 	rellenaComboArticulos2("listaArticulos");
 	
 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

   	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();
	
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
 	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

	var altaPaq = document.getElementById("formAltaPedido");
 	altaPaq.style.display = "none";
	
 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
 	
}

var bajaAduan = document.getElementById("btnBajaAduana");
bajaAduan.addEventListener("click", bajaAduanas, false);

function bajaAduanas()
{
	document.getElementById("formBajaAduana").style.display = "block";

	document.getElementById("formAltaCliente").style.display = "none";
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("listadoClientes").style.display = "none";

	document.getElementById("formAltaEmpleados").style.display = "none";
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";

	document.getElementById("formAltaArticulo").style.display = "none";
	document.getElementById("formBajArticulo").style.display = "none";
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("listadoArtic").style.display = "none";

	document.getElementById("formAltaPedido").style.display = "none";
	
	document.getElementById("formModiPedido").style.display = "none";
	
	document.getElementById("verPaquetesNoEntregados").style.display = "none";
	document.getElementById("verPaquetesEntregados").style.display = "none";

	document.getElementById("formAltaAduana").style.display = "none";
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("listadoAduana").style.display = "none";

	document.getElementById("formAltaQuejas").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}

var listaAduanas = document.getElementById("btnListadoAduana");
listaAduanas.addEventListener("click", verListaAduana, false);

function verListaAduana()
{
		var verListaAduanas = document.getElementById("listadoAduana");
 	verListaAduanas.style.display = "block";
	
		var verAltaAduana = document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();
 
 	
 	rellenaComboArticulos2("listaArticulos");
 	
 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

   	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();
	
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
 	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

	var altaPaq = document.getElementById("formAltaPedido");
 	altaPaq.style.display = "none";
	
 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";

	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";

}


var formularioQuejas = document.getElementById("altaQueja");
formularioQuejas.addEventListener("click", altaQueja, false);

function altaQueja()
{

	document.getElementById("formAltaQuejas").style.display = "block";
 
 	var verAltaAduana = document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();
 
 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

   	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();
	
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";
 	bajaArtic.reset();

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";

	var altaPaq = document.getElementById("formAltaPedido");
 	altaPaq.style.display = "none";
	
 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";

 	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
	
	
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";

}

var bajaQueja = document.getElementById("btnBajaQueja");
bajaQueja.addEventListener("click", bajaQuejas, false);

function bajaQuejas()
{
	document.getElementById("formBajaQueja").style.display = "block";

	document.getElementById("formAltaCliente").style.display = "none";
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("listadoClientes").style.display = "none";

	document.getElementById("formAltaEmpleados").style.display = "none";
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";

	document.getElementById("formAltaArticulo").style.display = "none";
	document.getElementById("formBajArticulo").style.display = "none";
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("listadoArtic").style.display = "none";

	document.getElementById("formAltaPedido").style.display = "none";
	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formModiPedido").style.display = "none";
	//document.getElementById("listadoPedidos").style.display = "none";
	document.getElementById("verPaquetesNoEntregados").style.display = "none";
	document.getElementById("verPaquetesEntregados").style.display = "none";

	document.getElementById("formAltaAduana").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("listadoAduana").style.display = "none";

	document.getElementById("formAltaQuejas").style.display = "none";
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
 	
}

var listarQuejas = document.getElementById("listadoQueja");
listarQuejas.addEventListener("click", listadoTodasQuejas, false);

function listadoTodasQuejas()
{
	var listadoQuejas = document.getElementById("listaQueja");
 	listadoQuejas.style.display = "block";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();

	var verUML = document.getElementById("uml");
 	verUML.style.display = "none";
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
}


//#########################################################################################
// UML
//#########################################################################################

var uml = document.getElementById("umlImage");
uml.addEventListener("click", mostarUML, false);

function mostarUML()
{
	var verUML = document.getElementById("uml");
 	verUML.style.display = "block";

 		var listadoQuejas = document.getElementById("listaQueja");
 	listadoQuejas.style.display = "block";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var altaEmpleados = document.getElementById("formAltaEmpleados");
 	altaEmpleados.style.display = "none";
	altaEmpleados.reset();

 	var formAltaCliente = document.getElementById("formAltaCliente");
 	formAltaCliente.style.display = "none";
	formAltaCliente.reset();

 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	var altaArtic = document.getElementById("formAltaArticulo");
 	altaArtic.style.display = "none";
	altaArtic.reset();

 	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "none";

 	var listadoArtic = document.getElementById("listadoArtic");
 	listadoArtic.style.display = "none";
	
	var altaPaquete = document.getElementById("formAltaPedido");
 	altaPaquete.style.display = "none";

 	var verPaqueteEntre = document.getElementById("verPaquetesEntregados");
 	verPaqueteEntre.style.display = "none";

 	var verPaquetesNoEntre = document.getElementById("verPaquetesNoEntregados");
 	verPaquetesNoEntre.style.display = "none";
	
	var verAltaAduana= document.getElementById("formAltaAduana");
 	verAltaAduana.style.display = "none";
	verAltaAduana.reset();
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiCliente").reset();
	
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("formModiEmpleado").reset();
	
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("formModiArticulo").reset();

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiPedido").reset();
	
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiAduana").reset();
	
	document.getElementById("formModiQuejas").style.display = "none";
	document.getElementById("formModiQuejas").reset();
	
	document.getElementById("listadoAduana").style.display = "none";
	
	document.getElementById("formAltaQuejas").style.display = "none";
	
	document.getElementById("formAltaQuejas").reset();

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";
}



/*#############################################################################################################################*/
/*VALIDACIONES DE LOS FORMULARIOS*/
/*VALIDACIONES clientes*/


function aceptarAltaCliente(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaCliente");
	var sErrores = "";
	var sMensaje ="";
	
	var sActivo = true;
	
	 
	var idCliente=  oForm.idCli.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idCliente) == false){
	
		if(bValido == true){
			bValido = false;		
			
			oForm.idCli.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		
		oForm.idCli.className = "form-control error";
	
	}
	else {
		
		oForm.idCli.className = "form-control";	
	}

	//Campo nombre
	var sNombre =oForm.nombre.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombre.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombre.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombre.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidos.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidos.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidos.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidos.className = "form-control";	
	}
	
	//Campo email
	var sEmail = oForm.email.value.trim();
	
	var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sEmail) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.getElementById("email").focus();		
		}
	
		sErrores += "\nEmail incorrecto";
		
		//Marcar error
		oForm.email.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.email.className = "form-control";	
	}
	
	
	
	
	//Campo telefono
	var sTelef = oForm.telefono.value.trim();
	
	var oExpReg =  /^[6|7|9][0-9]{8}$/;
	
	if (oExpReg.test(sTelef) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.telefono.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		oForm.telefono.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.telefono.className = "form-control";	
	}
	
	

	//Campo calle
	var sDireccion= oForm.calle.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.calle.focus();		
		}
	
		sErrores += "\nNombre de calle incorrecto";
		
		//Marcar error
		oForm.calle.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.calle.className = "form-control";	
	}
		
	//Campo codigopostal
	var sCodPost = oForm.codigopostal.value.trim();

	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	
	if (oExpReg.test(sCodPost) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.codigopostal.focus();		
		}
	
		sErrores += "\nCódigo postal incorrecto";
		
		//Marcar error
		oForm.codigopostal.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.codigopostal.className = "form-control";	
	}

	//Campo pais
	var sPais= oForm.pais.value.trim();


	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sPais) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.pais.focus();		
		}
	
		sErrores += "\nNombre de país incorrecto";
		
		//Marcar error
		oForm.pais.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.pais.className = "form-control";
	}
	
  if(idCliente == "" || sNombre =="" || sApellidos =="" || sEmail ==""  || sTelef=="" || sDireccion=="" || sCodPost=="" || sPais=="")
    {
        sErrores +="Debe rellenar todos los campos";
    }

	

	//Resultado
	if (bValido == false)
	{
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	
	else
	{
     var cliente= new Cliente(idCliente,sNombre,sApellidos,sEmail,sTelef,sDireccion,sCodPost,sPais,sActivo);
	 sMensaje=oPaqueteria.altaCliente(cliente);
	 oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarBajaCliente()
{
	var oForm = document.getElementById("formBajaCliente");
    var bValido = true;
    var clienteSeleccionado = oForm.baja.value.substr(0,2);
    var mensaje = "";

    var seleccNoValido = oForm.baja.value;

    if(seleccNoValido == "Seleccione un cliente...")
    {
    	alert("No hay ningún cliente seleccionado");
    }

    var clienteEncontrado = oPaqueteria.eliminarCliente(clienteSeleccionado);

   	if(clienteEncontrado)
   	{
   		alert("Cliente " + clienteSeleccionado + " dado de baja");
   	}

   	comboEliminarCliente();	

}

function comboEliminarCliente()
{
	var oForm = document.getElementById("formBajaCliente");

    var comboClientes = oPaqueteria.cogerTodosLosNombresClientes();

    var select = oForm.baja;

    var seleccionado = oForm.baja.value.trim();

    
    
   	if(comboClientes.length == 0)
    {
    	document.getElementById("baja").options.length = 0;
    	var option = document.createElement("option");
        option.setAttribute("value", "noCliente");
        var texto = document.createTextNode("Seleccione un cliente...");
        option.appendChild(texto);
        select.appendChild(option);
    }

    else
    {

		document.getElementById("baja").options.length = 0;

	    for (i = 0; i < comboClientes.length; i++) 
	    {
	        var option = document.createElement("option");
	        option.setAttribute("value", comboClientes[i]);
	        var texto = document.createTextNode(comboClientes[i]);
	        option.appendChild(texto);
	        select.appendChild(option);
	    }

    }
}

//#######################################################################

function aceptarAltaEmpleado(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaEmpleados");
	var sErrores = "";
	var sMensaje ="";

	var sActivo = true;
	
	// Validaciones

	//Campo id empleado
	var idEmpleado=  oForm.idEmple.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idEmpleado) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idEmple.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idEmple.className = "form-control";	
	}

	//Campo nombre
	var sNombre = oForm.nombreEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombreEmple.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombreEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombreEmple.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidosEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,15}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidosEmple.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidosEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidosEmple.className = "form-control";	
	}
	
	
	

	//Campo oficina
	var sOficina= oForm.oficina.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,4}$/;
	
	if (oExpReg.test(sOficina) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.oficina.focus();		
		}
	
		sErrores += "\nNombre de oficina incorrecto";
		
		//Marcar error
		oForm.oficina.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.oficina.className = "form-control";	
	}
		
	
	
  if(idEmpleado == "" || sNombre =="" || sApellidos =="" || sOficina =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }

	
    
	 var sGestor = oForm.optradio.value.trim();
	 var sManager = oForm.optradio1.value.trim();
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var empleado= new Empleado(idEmpleado, sNombre,sApellidos, sGestor, sManager, sOficina, sActivo);
	 sMensaje=oPaqueteria.altaEmpleado(empleado);

	  oForm.reset();
	}
	
	
	alert(sMensaje);
}

function aceptarEliminarEmpleado()
{
	var oForm = document.getElementById("formBajaEmple");
    var bValido = true;
    var empleadoSeleccionado = oForm.bajaEmple.value.substr(0,2);
    var mensaje = "";

    var seleccNoValido = oForm.bajaEmple.value;

    if(seleccNoValido == "Seleccione un empleado...")
    {
    	alert("No hay ningún empleado seleccionado");
    }

    var empleadoEncontrado = oPaqueteria.eliminarEmpleado(empleadoSeleccionado);

   	if(empleadoEncontrado)
   	{
   		alert("Empleado " + empleadoSeleccionado + " dado de baja");
   	}

   	comboEliminarEmpleado();	

}

function comboEliminarEmpleado()
{
	var oForm = document.getElementById("formBajaEmple");

    var comboEmpleados = oPaqueteria.cogerTodosLosNombresEmpleados();

    var select = oForm.bajaEmple;

    var seleccionado = oForm.bajaEmple.value.trim();

    
    
   	if(comboEmpleados.length == 0)
    {
    	document.getElementById("bajaEmple").options.length = 0;
    	var option = document.createElement("option");
        option.setAttribute("value", "noEmpleado");
        var texto = document.createTextNode("Seleccione un empleado...");
        option.appendChild(texto);
        select.appendChild(option);
    }

    else
    {

		document.getElementById("bajaEmple").options.length = 0;

	    for (i = 0; i < comboEmpleados.length; i++) 
	    {
	        var option = document.createElement("option");
	        option.setAttribute("value", comboEmpleados[i]);
	        var texto = document.createTextNode(comboEmpleados[i]);
	        option.appendChild(texto);
	        select.appendChild(option);
	    }

    }
}

//#######################################################################

function aceptarAltaArticulo(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaArticulo");
	var sErrores = "";
	var sMensaje ="";

	var sActivo = true;
	
	// Validaciones

	//Campo id articulo
	var idArticulo=  oForm.idArti.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idArticulo) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idArti.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idArti.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idArti.className = "form-control";	
	}

	//Campo descripción
	var sDescripcion = oForm.descripcion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcion.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcion.className = "form-control";	
	}

	//Campo peso parseFloat
	var doPeso = parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(idArticulo == "" || sDescripcion =="" || doPeso =="" || doValor =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	 var sComercial = oForm.optradio2.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var articulo= new Articulo(idArticulo,sDescripcion,doPeso,doValor,sComercial,sActivo);
	 sMensaje=oPaqueteria.altaArticulo(articulo);
	  oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarEliminarArticulo()
{
	var oForm = document.getElementById("formBajArticulo");
    var bValido = true;
    var articuloSeleccionado = oForm.bajaArticulo.value.substr(0,2);
    var mensaje = "";

    var seleccNoValido = oForm.bajaArticulo.value;

    if(seleccNoValido == "Seleccione un artículo...")
    {
    	alert("No hay ningún artículo seleccionado");
    }

    var empleadoEncontrado = oPaqueteria.eliminarArticulo(articuloSeleccionado);

   	if(empleadoEncontrado)
   	{
   		alert("Artículo " + articuloSeleccionado + " dado de baja");
   	}

   	comboEliminarArticulo();	

}

function comboEliminarArticulo()
{
	var oForm = document.getElementById("formBajArticulo");

    var comboArticulos = oPaqueteria.cogerTodosLosNombresArticulos();

    var select = oForm.bajaArticulo;

    var seleccionado = oForm.bajaArticulo.value.trim();

    
    
   	if(comboArticulos.length == 0)
    {
    	document.getElementById("bajaArticulo").options.length = 0;
    	var option = document.createElement("option");
        option.setAttribute("value", "noArticulo");
        var texto = document.createTextNode("Seleccione un artículo...");
        option.appendChild(texto);
        select.appendChild(option);
    }

    else
    {

		document.getElementById("bajaArticulo").options.length = 0;

	    for (i = 0; i < comboArticulos.length; i++) 
	    {
	        var option = document.createElement("option");
	        option.setAttribute("value", comboArticulos[i]);
	        var texto = document.createTextNode(comboArticulos[i]);
	        option.appendChild(texto);
	        select.appendChild(option);
	    }

    }
}

//#######################################################################


function aceptarAltaPaquete(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaPedido");
	var sErrores = "";
	var sMensaje ="";

	var sActivo = true;
	
	// Validaciones

	//Campo id paquete
	var idPaquete=  oForm.idPaquete.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idPaquete) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idPaquete.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idPaquete.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idPaquete.className = "form-control";	
	}

//Campo tarifa parseFloat
	var doTarifa = parseFloat(oForm.tarifa.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doTarifa) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.tarifa.focus();		
		}
	
		sErrores += "\Tarifa incorrecta";
		
		//Marcar error
		oForm.tarifa.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.tarifa.className = "form-control";	
	}
	
	

	//Campo fecha
	var dFechaEntrega= new Date(oForm.fechaEntrega.value.trim()).toLocaleDateString("es-ES");
	
	

	
	var oExpReg = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/;
	
	if (oExpReg.test(dFechaEntrega) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.fechaEntrega.focus();		
		}
	
		sErrores += "\Fecha incorrecta";
		
		//Marcar error
		oForm.fechaEntrega.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.fechaEntrega.className = "form-control";	
	}
	
	//Campo volumen parseFloat
	var doVolumen= parseFloat(oForm.volumen.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doVolumen) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.volumen.focus();		
		}
	
		sErrores += "\Volumen incorrecto";
		
		//Marcar error
		oForm.volumen.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.volumen.className = "form-control";	
	}
	
	
	//Campo peso parseFloat
	var doPeso= parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(idPaquete =="" || doTarifa =="" || dFechaEntrega=="" || doVolumen=="" || doPeso =="" || doValor =="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	
	var sUrgente=oForm.optradio3.value;
    var sEntregado=oForm.optradio4.value;
    var sAdminPublica=oForm.optradio5.value;
    var sInternacional=oForm.optradio6.value;
    var sAsegurado=oForm.optradio7.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var paquete= new Paquete(idPaquete, doTarifa, dFechaEntrega, doVolumen, doPeso, doValor,sUrgente,sEntregado,sAdminPublica,sInternacional,sAsegurado,sActivo);
	 sMensaje=oPaqueteria.altaPaquete(paquete);
	  oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarEliminarPaquete()
{
	var oForm = document.getElementById("formBajaPaquete");
    var bValido = true;
    var paqueteSeleccionado = oForm.bajaPaquete.value.substr(0,2);
    var mensaje = "";

    var seleccNoValido = oForm.bajaPaquete.value;

    if(seleccNoValido == "Seleccione un pedido...")
    {
    	alert("No hay ningún pedido seleccionado");
    }

    var paqueteEncontrado = oPaqueteria.eliminarPaquete(paqueteSeleccionado);

   	if(paqueteEncontrado)
   	{
   		alert("Pedido " + paqueteSeleccionado + " dado de baja");
   	}

   	comboEliminarPaquete();	

}

function comboEliminarPaquete()
{
	var oForm = document.getElementById("formBajaPaquete");

    var comboPaquetes = oPaqueteria.cogerTodosLosNombresPaquetes();

    var select = oForm.bajaPaquete;

    var seleccionado = oForm.bajaPaquete.value.trim();

    
    
   	if(comboPaquetes.length == 0)
    {
    	document.getElementById("bajaPaquete").options.length = 0;
    	var option = document.createElement("option");
        option.setAttribute("value", "noPaquete");
        var texto = document.createTextNode("Seleccione un paquete...");
        option.appendChild(texto);
        select.appendChild(option);
    }

    else
    {

		document.getElementById("bajaPaquete").options.length = 0;

	    for (i = 0; i < comboPaquetes.length; i++) 
	    {
	        var option = document.createElement("option");
	        option.setAttribute("value", comboPaquetes[i]);
	        var texto = document.createTextNode(comboPaquetes[i]);
	        option.appendChild(texto);
	        select.appendChild(option);
	    }

    }
}

//#######################################################################

function aceptarAltaAduana(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaAduana");
	 var listaArticulos = oForm.listaArticulos;
	var sErrores = "";
	var sMensaje ="";

	var sActivo = true;
	
	// Validaciones

	//Campo id declaracion
	var idDeclaracion=  oForm.idAduana.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idDeclaracion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idAduana.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idAduana.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idAduana.className = "form-control";	
	}
	
	//Campo declaracion
	var sDeclaracion = oForm.declaracion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDeclaracion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.declaracion.focus();		
		}
	
		sErrores += "\nDeclaración incorrecta";
		
		//Marcar error
		oForm.declaracion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.declaracion.className = "form-control";	
	}

//Campo tasa
	var iTasa = parseInt(oForm.tasa.value.trim());
	

	var oExpReg = /^[0-9]{1,}$/;
	
	if (oExpReg.test(iTasa) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.tasa.focus();		
		}
	
		sErrores += "\nTasa incorrecta";
		
		//Marcar error
		oForm.tasa.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.tasa.className = "form-control";	
	}
	
	

	  //Validar combo articulos
    for (var i = 0; i < listaArticulos.options.length; ++i) {
        if (listaArticulos.options[i].selected)
            var articulo = listaArticulos.options[i].text;
    }
    if (articulo == null) {
        if (bValido == true) {
            bValido = false;
            oForm.listaArticulos.focus();
        }
        sErrores += "\Debe seleccionar un artículo";
     
        //Marcar error
        oForm.listaArticulos.className = "form-control error";
    }
    else {
        if (articulo == "No hay artículos disponibles") {
            if (bValido == true) {
                bValido = false;
                oForm.listaArticulos.focus();
            }
            sErrores += "\Lo sentimos no hay artículos disponibles";
            oForm.listaArticulos.className = "form-control  error";
        }
        else {
           oForm.listaArticulos.className = "form-control";
        }
    }
	
	  if(idDeclaracion =="" || sDeclaracion=="" || iTasa =="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }
	
	
	

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var aduana= new Aduana(idDeclaracion, articulo, sDeclaracion, iTasa, sActivo);
	 sMensaje=oPaqueteria.altaAduana(aduana);
	  oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarEliminarAduana()
{
	var oForm = document.getElementById("formBajaAduana");
    var bValido = true;
    var aduanaSeleccionada = oForm.bajaAduana.value.substr(0,2);
    var mensaje = "";

    var seleccNoValido = oForm.bajaAduana.value;

    if(seleccNoValido == "Seleccione una aduana...")
    {
    	alert("No hay ningúna aduana seleccionada");
    }

    var aduanaEncontrada = oPaqueteria.eliminarAduana(aduanaSeleccionada);

   	if(aduanaEncontrada)
   	{
   		alert("Aduana " + aduanaSeleccionada + " dada de baja");
   	}

   	comboEliminarAduana();

}

function comboEliminarAduana()
{
	var oForm = document.getElementById("formBajaAduana");

    var comboAduanas = oPaqueteria.cogerTodosLosNombresAduanas();

    var select = oForm.bajaAduana;

    var seleccionado = oForm.bajaAduana.value.trim();

    
    
   	if(comboAduanas.length == 0)
    {
    	document.getElementById("bajaAduana").options.length = 0;
    	var option = document.createElement("option");
        option.setAttribute("value", "noAduana");
        var texto = document.createTextNode("Seleccione una aduana...");
        option.appendChild(texto);
        select.appendChild(option);
    }

    else
    {

		document.getElementById("bajaAduana").options.length = 0;

	    for (i = 0; i < comboAduanas.length; i++) 
	    {
	        var option = document.createElement("option");
	        option.setAttribute("value", comboAduanas[i]);
	        var texto = document.createTextNode(comboAduanas[i]);
	        option.appendChild(texto);
	        select.appendChild(option);
	    }

    }
}

//#######################################################################


function aceptarAltaQueja(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaQuejas");
	
	var sErrores = "";
	var sMensaje = "";

	var sActivo = true;
	
	// Validaciones

	//Campo id 
	var idQueja=  oForm.idQueja.value.trim();

	var oExpReg = /^\d{1,}\w$/;
	
	if (oExpReg.test(idQueja) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.idQueja.focus();		
		}
	
		sErrores += "\nId incorrecto";
		
		//Marcar error
		oForm.idQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.idQueja.className = "form-control";	
	}
	
	//Campo descripcion
	var sDescripcionQ = oForm.descripcionQueja.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcionQ) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcionQueja.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcionQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcionQueja.className = "form-control";	
	}


	
	
	
	//Campo fecha
	var dFechaQueja= new Date(oForm.fechaQueja.value.trim()).toLocaleDateString("es-ES");
	
	


	var oExpReg = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/;
	
	if (oExpReg.test(dFechaQueja) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.fechaQueja.focus();		
		}
	
		sErrores += "\Fecha incorrecta";
		
		//Marcar error
		oForm.fechaQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.fechaQueja.className = "form-control";	
	}
	
	
	var sResuelta = oForm.optradio8.value;

	   if(idQueja =="" || sDescripcionQ=="" || dFechaQueja=="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }

	 
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var queja= new Queja(idQueja, sDescripcionQ, dFechaQueja, sResuelta, sActivo);
	 sMensaje=oPaqueteria.altaQueja(queja);
	 oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarEliminarQueja()
{
	var oForm = document.getElementById("formBajaQueja");
    var bValido = true;
    var quejaSeleccionada = oForm.bajaQueja.value.substr(0,2);
    var mensaje = "";

    var seleccNoValido = oForm.bajaQueja.value;

    if(seleccNoValido == "Seleccione una queja...")
    {
    	alert("No hay ningúna queja seleccionada");
    }

    var quejaEncontrada = oPaqueteria.eliminarQueja(quejaSeleccionada);

   	if(quejaEncontrada)
   	{
   		alert("Queja " + quejaSeleccionada + " dada de baja");
   	}

   	comboEliminarQueja();

}

function comboEliminarQueja()
{
	var oForm = document.getElementById("formBajaQueja");

    var comboQuejas = oPaqueteria.cogerTodosLosNombresQuejas();

    var select = oForm.bajaQueja;

    var seleccionado = oForm.bajaQueja.value.trim();

    
    
   	if(comboQuejas.length == 0)
    {
    	document.getElementById("bajaQueja").options.length = 0;
    	var option = document.createElement("option");
        option.setAttribute("value", "noQueja");
        var texto = document.createTextNode("Seleccione una queja...");
        option.appendChild(texto);
        select.appendChild(option);
    }

    else
    {

		document.getElementById("bajaQueja").options.length = 0;

	    for (i = 0; i < comboQuejas.length; i++) 
	    {
	        var option = document.createElement("option");
	        option.setAttribute("value", comboQuejas[i]);
	        var texto = document.createTextNode(comboQuejas[i]);
	        option.appendChild(texto);
	        select.appendChild(option);
	    }

    }
}

function inicio(){
	


	
	document.getElementById("aceptarAltaCli").addEventListener("click", aceptarAltaCliente,false);
	document.getElementById("aceptarEliminarCliente").addEventListener("click", aceptarBajaCliente,false);
	document.getElementById("bajaCli").addEventListener("click", comboEliminarCliente,false);
	document.getElementById("modiCli").addEventListener("click", modificarCliente,false);
	document.getElementById("aceptarModiCli").addEventListener("click", aceptarModificarCliente,false);
	document.getElementById("listadoCli").addEventListener("click", mostrarListaClientes,false);

	document.getElementById("aceptarAltaEmple").addEventListener("click", aceptarAltaEmpleado,false);
	document.getElementById("bajaEmpl").addEventListener("click", comboEliminarEmpleado,false);
	document.getElementById("aceptarBajaEmple").addEventListener("click", aceptarEliminarEmpleado,false);
	document.getElementById("modiEmple").addEventListener("click", modificarEmpleado,false);
	document.getElementById("aceptarModiEmple").addEventListener("click", aceptarModificarEmpleado,false);
	document.getElementById("listadoEmpl").addEventListener("click", mostrarListaEmpleados,false);

	document.getElementById("aceptarAltaArticulo").addEventListener("click", aceptarAltaArticulo,false);
	document.getElementById("aceptarBajaArticulo").addEventListener("click", aceptarEliminarArticulo,false);
	document.getElementById("bajaArt").addEventListener("click", comboEliminarArticulo,false);
	document.getElementById("modiArti").addEventListener("click",modificarArticulo,false);
	document.getElementById("btnListaArt").addEventListener("click",mostrarListaArticulos,false);

	document.getElementById("aceptarAltaPaquete").addEventListener("click", aceptarAltaPaquete,false);
	document.getElementById("aceptarBajaPaquete").addEventListener("click", aceptarEliminarPaquete,false);
	document.getElementById("btnBajaPaquete").addEventListener("click", comboEliminarPaquete,false);

	document.getElementById("aceptarAltaAduana").addEventListener("click", aceptarAltaAduana,false);
	document.getElementById("aceptarBajaAduana").addEventListener("click", aceptarEliminarAduana,false);
	document.getElementById("btnBajaAduana").addEventListener("click", comboEliminarAduana,false);

    document.getElementById("aceptarAltaQueja").addEventListener("click", aceptarAltaQueja,false);
    document.getElementById("aceptarBajaQueja").addEventListener("click", aceptarEliminarQueja,false);
    document.getElementById("btnBajaQueja").addEventListener("click", comboEliminarQueja,false);

	document.getElementById("paqueteNoEntregado").addEventListener("click", mostrarListaPaquetesNo,false);
	document.getElementById("paqueteEntregado").addEventListener("click", mostrarListaPaquetesSi,false);
	document.getElementById("btnListadoAduana").addEventListener("click", mostrarListaAduanas, false);

	document.getElementById("aceptarModiArticulo").addEventListener("click", aceptarModificarArticulo,false);
	document.getElementById("modiPaq").addEventListener("click", modificarPaquete,false);
	document.getElementById("aceptarModificarPaquete").addEventListener("click", aceptarModificarPaquete,false);
	document.getElementById("modiAduana").addEventListener("click", modificarAduana,false);
	document.getElementById("aceptarModificarAduana").addEventListener("click", aceptarModificarAduana,false);
	document.getElementById("modiQueja").addEventListener("click", modificarQueja,false);
	document.getElementById("aceptarModificarQueja").addEventListener("click", aceptarModificarQueja,false);
	document.getElementById("listadoQueja").addEventListener("click",mostrarListaQuejas,false);

}



//LISTADOS 
//CARGA DE XML
function loadXMLDoc(filename)
    {
        if (window.XMLHttpRequest)
        {
            xhttp=new XMLHttpRequest();
        }
        else // code for IE5 and IE6
        {
            xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET",filename,false);

        xhttp.send();

        return xhttp.responseXML;
    }

    var oXML = loadXMLDoc("datosPrueba.xml");


function mostrarListaClientes() {

	vaciarTablas(document.querySelector("#listadoClientes"));
	document.querySelector("#listadoClientes").style.display="block";

	
	var labelTitulo=document.createElement("label");
	labelTitulo.setAttribute("class", "titulo");
	labelTitulo.textContent = "Listado clientes";

	document.querySelector("#listadoClientes").appendChild(labelTitulo);


    var lista = oPaqueteria.cogerTodosLosClientes();
    
    var oTabla = document.createElement("table");
	oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Nombre";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Apellidos";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Email";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Teléfono";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Dirección";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Código Postal";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "País";

    var oTBody = oTabla.createTBody();

	var oClientes = oXML.getElementsByTagName("cliente");

	for (var i = 0; i < oClientes.length; i++) {
		
		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("nombre")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("apellidos")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("email")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("telefono")[0].textContent;
		

		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("direccion")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("codPost")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oClientes[i].getElementsByTagName("pais")[0].textContent;
		
	}
	
	
	
	
    for (i = 0; i < lista.length; i++) {
        
    	if(lista[i].sActivo == true)
    	{
	        oFila = oTBody.insertRow(-1);
	        
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sNombre));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sApellidos));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sEmail));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sTelefono));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sDireccion));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sCodPost));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sPais));
    	}
    }

    document.querySelector("#listadoClientes").appendChild(oTabla);
}


function mostrarListaEmpleados() {
  	
  	vaciarTablas(document.querySelector("#listadoEmpleados"));
  	document.querySelector("#listadoEmpleados").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado empleados";

  	document.querySelector("#listadoEmpleados").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodosLosEmpleados();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Nombre";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Apellidos";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Puesto Gestor";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Puesto Mánager";

        oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Oficina";

    var oTBody = oTabla.createTBody();

    var oEmpleados = oXML.getElementsByTagName("empleado");
	
	for (var i = 0; i < oEmpleados.length; i++) {
		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("nombre")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("apellidos")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("gestor")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("manager")[0].textContent;
		

		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oEmpleados[i].getElementsByTagName("oficina")[0].textContent;
		
		}	



    for (i = 0; i < lista.length; i++) {
        
    	if(lista[i].sActivo == true)
    	{
	        oFila = oTBody.insertRow(-1);
	        
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sNombre));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sApellidos));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sGestor));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sManager));
		
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sOficina));
		}

    }
    document.querySelector("#listadoEmpleados").appendChild(oTabla);
}

function loadXMLDoc(filename)
    {
        if (window.XMLHttpRequest)
        {
            xhttp=new XMLHttpRequest();
        }
        else // code for IE5 and IE6
        {
            xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET",filename,false);

        xhttp.send();

        return xhttp.responseXML;
    }

    var oXML2 = loadXMLDoc("datosArticulos.xml");

function mostrarListaArticulos() {
 	
	vaciarTablas(document.querySelector("#listadoArtic"));
  	document.querySelector("#listadoArtic").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado artículos";

  	document.querySelector("#listadoArtic").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodosLosArticulos();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Descripción";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Peso";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Valor";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Comercial";

    var oTBody = oTabla.createTBody();

    var oArticulos = oXML2.getElementsByTagName("articulo");

	
	for (var i = 0; i < oArticulos.length; i++) {

		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("descripcion")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("peso")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("valor")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oArticulos[i].getElementsByTagName("comercial")[0].textContent;	
		}		
	
    for (i = 0; i < lista.length; i++) {
        
    	if(lista[i].sActivo == true)	
    	{	
	        oFila = oTBody.insertRow(-1);
	        
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sDescripcion));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].doPeso));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].doValor));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sComercial));
    	}
    }
    
    document.querySelector("#listadoArtic").appendChild(oTabla);
}

//listado paquetes no entregados

function mostrarListaPaquetesNo(){

	vaciarTablas(document.querySelector("#verPaquetesNoEntregados"));
  	document.querySelector("#verPaquetesNoEntregados").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado paquetes no entregados";

  	document.querySelector("#verPaquetesNoEntregados").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodosLosPaquetes();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "ID";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Tarifa";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Fecha de entrega";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Volumen";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Peso";

	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Valor";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Urgente";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Administración pública";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Internacional";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Asegurado";


    var oTBody = oTabla.createTBody();

    var oPaquetes = oXML.getElementsByTagName("paquete");

    for (var i = 0; i < oPaquetes.length; i++) {
    	var entregado = oPaquetes[i].getElementsByTagName("entregado")[0].textContent;

    	if(entregado == "No")
    	{
    		oFila = oTBody.insertRow(-1);
			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("idPaquete")[0].textContent;

		
			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("Tarifa")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("fechaEntrega")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("volumen")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("peso")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("valor")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("urgente")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("adminPublica")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("internacional")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("asegurado")[0].textContent;
    	}
    }

    for (i = 0; i < lista.length; i++) {
        
        var entregado = lista[i].sEntregado;

        if(entregado == "No")
        {
        	if(lista[i].sActivo == true)
    		{
		        oFila = oTBody.insertRow(-1);
		        
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].idPaquete));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doTarifa));
				oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].dFechaEntrega));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doVolumen));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doPeso));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doValor));
				oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sUrgente));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sAdminPublica));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sInternacional));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sAsegurado));
	    	}
        }
    }
    document.querySelector("#verPaquetesNoEntregados").appendChild(oTabla);
}

function mostrarListaPaquetesSi(){

	vaciarTablas(document.querySelector("#verPaquetesEntregados"));
  	document.querySelector("#verPaquetesEntregados").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado paquetes entregados";

  	document.querySelector("#verPaquetesEntregados").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodosLosPaquetes();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "ID";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Tarifa";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Fecha de entrega";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Volumen";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Peso";

	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Valor";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Urgente";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Administración pública";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Internacional";


	oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Asegurado";


    var oTBody = oTabla.createTBody();

    var oPaquetes = oXML.getElementsByTagName("paquete");

    for (var i = 0; i < oPaquetes.length; i++) {
    	var entregado = oPaquetes[i].getElementsByTagName("entregado")[0].textContent;

    	if(entregado == "Si")
    	{
    		oFila = oTBody.insertRow(-1);
			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("idPaquete")[0].textContent;

		
			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("Tarifa")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("fechaEntrega")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("volumen")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("peso")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("valor")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("urgente")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("adminPublica")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("internacional")[0].textContent;

			oCelda = oFila.insertCell(-1);
			oCelda.textContent = oPaquetes[i].getElementsByTagName("asegurado")[0].textContent;
    	}
    }

    for (i = 0; i < lista.length; i++) {
        
        var entregado = lista[i].sEntregado;
        

        if(entregado == "Sí")
        {
	        if(lista[i].sActivo == true)
    		{
		        oFila = oTBody.insertRow(-1);
		        
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].idPaquete));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doTarifa));
				oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].dFechaEntrega));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doVolumen));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doPeso));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].doValor));
				oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sUrgente));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sAdminPublica));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sInternacional));
		        oCelda = oFila.insertCell(-1);
		        oCelda.appendChild(document.createTextNode(lista[i].sAsegurado));
        	}
        }
    }
    document.querySelector("#verPaquetesEntregados").appendChild(oTabla);
}

function mostrarListaAduanas(){
	vaciarTablas(document.querySelector("#listadoAduana"));
  	document.querySelector("#listadoAduana").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado aduanas";

  	document.querySelector("#listadoAduana").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodasLasAduanas();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "ID";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Artículo";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Declaracion";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Tasa";

    var oTBody = oTabla.createTBody();

    var oAduanas = oXML.getElementsByTagName("aduana");
	
	for (var i = 0; i < oAduanas.length; i++) {
		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oAduanas[i].getElementsByTagName("idDeclaracion")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oAduanas[i].getElementsByTagName("articulo")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oAduanas[i].getElementsByTagName("declaracion")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oAduanas[i].getElementsByTagName("tasa")[0].textContent;
		
		}	



    for (i = 0; i < lista.length; i++) {
    	
    	if(lista[i].sActivo == true)
    	{
	        oFila = oTBody.insertRow(-1);
	        
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].idDeclaracion));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sArticulo));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sDeclaracion));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].iTasa));
		}
    }
    document.querySelector("#listadoAduana").appendChild(oTabla);
}

function mostrarListaQuejas(){

	vaciarTablas(document.querySelector("#listaQueja"));
  	document.querySelector("#listaQueja").style.display="block";

  	var labelTitulo = document.createElement("label");
  	labelTitulo.setAttribute("class", "titulo");
  	labelTitulo.textContent="Listado quejas";

  	document.querySelector("#listaQueja").appendChild(labelTitulo);

    var lista = oPaqueteria.cogerTodasLasQuejas();
    
    var oTabla = document.createElement("table");

    oTabla.setAttribute("class", "table table-striped table-responsive");

    var oThead = oTabla.createTHead();
    var oFila = oThead.insertRow(-1);
    var oCelda = oFila.insertCell(-1);
    oCelda.textContent = "ID";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Descripción";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Fecha";

    oCelda = oFila.insertCell(-1);
    oCelda.textContent = "Resuelta";

    var oTBody = oTabla.createTBody();

    var oQuejas = oXML.getElementsByTagName("queja");
	
	for (var i = 0; i < oQuejas.length; i++) {
		oFila = oTBody.insertRow(-1);
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oQuejas[i].getElementsByTagName("idQueja")[0].textContent;

		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oQuejas[i].getElementsByTagName("descripcion")[0].textContent;
		
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oQuejas[i].getElementsByTagName("fecha")[0].textContent;
		
		oCelda = oFila.insertCell(-1);
		oCelda.textContent = oQuejas[i].getElementsByTagName("resuelta")[0].textContent;
		
		}	



    for (i = 0; i < lista.length; i++) {
    	
    	if(lista[i].sActivo == true)
    	{
	        oFila = oTBody.insertRow(-1);
	        
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].idQueja));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sDescripcion));
			oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].dFecha));
	        oCelda = oFila.insertCell(-1);
	        oCelda.appendChild(document.createTextNode(lista[i].sResuelta));
		}
    }
    document.querySelector("#listaQueja").appendChild(oTabla);
}

function vaciarTablas(objetoParent)
{
	while(objetoParent.children.length != 0)
	{
		objetoParent.removeChild(objetoParent.firstElementChild);
	}
}

function ocultarFormulariosModificar(){
	
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";

	document.getElementById("formModiArticulo").style.display = "none";

	document.getElementById("formModiPedido").style.display = "none";
	document.getElementById("formModiAduana").style.display = "none";
	document.getElementById("formModiQuejas").style.display = "none";
	
	
	document.getElementById("formAltaCliente").style.display = "none";
	document.getElementById("formAltaEmpleados").style.display = "none";
	document.getElementById("formAltaArticulo").style.display = "none";
	document.getElementById("formAltaPedido").style.display = "none";
	document.getElementById("formAltaAduana").style.display = "none";
	document.getElementById("formAltaQuejas").style.display = "none";
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formBajArticulo").style.display = "none";
	
	document.getElementById("listadoClientes").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";
	document.getElementById("listadoArtic").style.display = "none";
	document.getElementById("verPaquetesNoEntregados").style.display = "none";
	document.getElementById("verPaquetesEntregados").style.display = "none";
	document.getElementById("listadoAduana").style.display = "none";

	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formBajaQueja").style.display = "none";
	document.getElementById("formBajaAduana").style.display = "none";
	document.getElementById("listaQueja").style.display = "none";

}

function modificarCliente()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiCliente").style.display = "block";
	document.getElementById("formModiCliente").reset();
	rellenaComboClientes("comboModificarClientes");
}

function modificarEmpleado()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiEmpleado").style.display = "block";
	document.getElementById("formModiEmpleado").reset();
	rellenaComboEmpleados("comboModificarEmpleados");
}

function modificarArticulo()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiArticulo").style.display = "block";
	document.getElementById("formModiArticulo").reset();
	rellenaComboArticulos("comboModificarArticulos");
}

function modificarPaquete()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiPedido").style.display = "block";
	document.getElementById("formModiPedido").reset();
	rellenaComboPedidos("comboModificarPedidos");
}

function modificarAduana()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiAduana").style.display = "block";
	document.getElementById("formModiAduana").reset();
	rellenaComboAduanas("comboModificarAduanas");
	rellenaComboArticulos2("listaArticulosMod");
}

function modificarQueja()
{
	ocultarFormulariosModificar();
	document.getElementById("formModiQuejas").style.display = "block";
	document.getElementById("formModiQuejas").reset();
	rellenaComboQuejas("comboModificarQuejas");
}

function rellenaComboClientes(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.clientes.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.clientes[i].sIdCliente;
		var oTextOption = document.createTextNode(oPaqueteria.clientes[i].sIdCliente);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado clientes');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboEmpleados(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.empleados.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.empleados[i].idEmpleado;
		var oTextOption = document.createTextNode(oPaqueteria.empleados[i].idEmpleado);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado empleados');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboArticulos(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.articulos.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.articulos[i].idArticulo;
		var oTextOption = document.createTextNode(oPaqueteria.articulos[i].idArticulo);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado articulos');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboArticulos2(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.articulos.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.articulos[i].sDescripcion;
		var oTextOption = document.createTextNode(oPaqueteria.articulos[i].sDescripcion);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado articulos');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboPedidos(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.paquetes.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.paquetes[i].idPaquete;
		var oTextOption = document.createTextNode(oPaqueteria.paquetes[i].idPaquete);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado paquetes');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboAduanas(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.aduanas.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.aduanas[i].idDeclaracion;
		var oTextOption = document.createTextNode(oPaqueteria.aduanas[i].idDeclaracion);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado aduanas');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function rellenaComboQuejas(combo){
	var oSelect = document.getElementById(combo);
	var cont=0;
	while(oSelect.childNodes.length>0)
		oSelect.childNodes[0].remove();
	for(var i=0;i<oPaqueteria.quejas.length;i++){
		var oOption = document.createElement('option');
		oOption.value=oPaqueteria.quejas[i].idQueja;
		var oTextOption = document.createTextNode(oPaqueteria.quejas[i].idQueja);
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
		cont++;
	}
	if(cont==0)
	{
		var oOption = document.createElement('option');
		oOption.value="-1";
		var oTextOption = document.createTextNode('No se han encontrado quejas');
		oOption.appendChild(oTextOption);
		oSelect.appendChild(oOption);
	}
}

function aceptarModificarCliente(oEvento){
		var oE = oEvento || window.event;
	   var bValido = true;
	   var oForm = document.getElementById("formModiCliente");
	  var sErrores = "";
	  var sMensaje ="";

	  
	  
	  var sIdCliente=formModiCliente.comboClientes.value.trim();
	  
	  console.log(sIdCliente); 
	 
	
	if(sMensaje==""){
		           for (var i=0;i<oPaqueteria.clientes.length;i++)
				   {
					   //Campo nombre
	var sNombre =oForm.nombre.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombre.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombre.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombre.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidos.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,50}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidos.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidos.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidos.className = "form-control";	
	}
	
	//Campo email
	var sEmail = oForm.email.value.trim();
	
	var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sEmail) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.getElementById("email").focus();		
		}
	
		sErrores += "\nEmail incorrecto";
		
		//Marcar error
		oForm.email.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.email.className = "form-control";	
	}
	
	
	
	
	//Campo telefono
	var sTelef = oForm.telefono.value.trim();
	
	var oExpReg =  /^[6|7|9][0-9]{8}$/;
	
	if (oExpReg.test(sTelef) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.telefono.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		oForm.telefono.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.telefono.className = "form-control";	
	}
	
	

	//Campo calle
	var sDireccion= oForm.calle.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.calle.focus();		
		}
	
		sErrores += "\nNombre de calle incorrecto";
		
		//Marcar error
		oForm.calle.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.calle.className = "form-control";	
	}
		
	//Campo codigopostal
	var sCodPost = oForm.codigopostal.value.trim();

	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	
	if (oExpReg.test(sCodPost) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.codigopostal.focus();		
		}
	
		sErrores += "\nCódigo postal incorrecto";
		
		//Marcar error
		oForm.codigopostal.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.codigopostal.className = "form-control";	
	}

	//Campo pais
	var sPais= oForm.pais.value.trim();


	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sPais) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.pais.focus();		
		}
	
		sErrores += "\nNombre de país incorrecto";
		
		//Marcar error
		oForm.pais.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.pais.className = "form-control";	
	}
	
  if(sNombre =="" || sApellidos =="" || sEmail ==""  || sTelef=="" || sDireccion=="" || sCodPost=="" || sPais=="")
    {
        sErrores +="Debe rellenar todos los campos";
    }

	

	//Resultado
	if (bValido == false)
	{
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	
	else
	{
     var cliente= new Cliente(sIdCliente,sNombre,sApellidos,sEmail,sTelef,sDireccion,sCodPost,sPais);
	 sMensaje=oPaqueteria.modificarCliente(cliente);
	 oForm.reset();
	}
	
	
	alert(sMensaje);
			
					
	}
		}
	
	
	
}


function aceptarModificarEmpleado(oEvento){
		var oE = oEvento || window.event;
	   var bValido = true;
	   var oForm = document.getElementById("formModiEmpleado");
	  var sErrores = "";
	  var sMensaje ="";
	  
	  var sIdEmpleado=formModiEmpleado.comboEmpleados.value.trim();
	
	
	if(sMensaje=="")
	{
	  
	   for (var i=0;i<oPaqueteria.empleados.length;i++)
	   {
					   // Validaciones

	
	//Campo nombre
	var sNombre = oForm.nombreEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,15}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.nombreEmple.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		oForm.nombreEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.nombreEmple.className = "form-control";	
	}

	//Campo apellidos
	var sApellidos = oForm.apellidosEmple.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,15}$/;
	
	if (oExpReg.test(sApellidos) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.apellidosEmple.focus();		
		}
	
		sErrores += "\nApellidos incorrectos";
		
		//Marcar error
		oForm.apellidosEmple.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.apellidosEmple.className = "form-control";	
	}
	
	
	

	//Campo oficina
	var sOficina= oForm.oficina.value.trim();


	var oExpReg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,4}$/;
	
	if (oExpReg.test(sOficina) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.oficina.focus();		
		}
	
		sErrores += "\nNombre de oficina incorrecto";
		
		//Marcar error
		oForm.oficina.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.oficina.className = "form-control";	
	}
		
	
	
  if(sNombre =="" || sApellidos =="" || sOficina =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }

	
    
	 var sGestor = oForm.optradio.value;
	 var sManager = oForm.optradio1.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var empleado= new Empleado(sIdEmpleado, sNombre,sApellidos, sGestor, sManager, sOficina);
	 sMensaje=oPaqueteria.modificarEmpleado(empleado);
	 
	  oForm.reset();
	}
	
	
	alert(sMensaje);
			
					
		}
		
	}
	
}

function aceptarModificarArticulo(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formModiArticulo");
	var sErrores = "";
	var sMensaje ="";
	var sIdArticulo=formModiArticulo.comboArticulos.value.trim();
	// Validaciones

	//Campo descripción
	var sDescripcion = oForm.descripcion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcion.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcion.className = "form-control";	
	}

	//Campo peso parseFloat
	var doPeso = parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(sDescripcion =="" || doPeso =="" || doValor =="" )
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	 var sComercial = oForm.optradio2.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var articulo= new Articulo(sIdArticulo,sDescripcion,doPeso,doValor,sComercial);
	 sMensaje=oPaqueteria.modificarArticulo(articulo);
	  oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarModificarPaquete(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formModiPedido");
	var sErrores = "";
	var sMensaje ="";
	
	// Validaciones

	var sIdPaquete=formModiPedido.comboPedidos.value.trim();
	
//Campo tarifa parseFloat
	var doTarifa = parseFloat(oForm.tarifa.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doTarifa) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.tarifa.focus();		
		}
	
		sErrores += "\Tarifa incorrecta";
		
		//Marcar error
		oForm.tarifa.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.tarifa.className = "form-control";	
	}
	
	

	//Campo fecha
	var dFechaEntrega= new Date(oForm.fechaEntrega.value.trim()).toLocaleDateString("es-ES");
	
	var oExpReg = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/;
	
	if (oExpReg.test(dFechaEntrega) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.fechaEntrega.focus();		
		}
	
		sErrores += "\Fecha incorrecta";
		
		//Marcar error
		oForm.fechaEntrega.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.fechaEntrega.className = "form-control";	
	}
	
	//Campo volumen parseFloat
	var doVolumen= parseFloat(oForm.volumen.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doVolumen) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.volumen.focus();		
		}
	
		sErrores += "\Volumen incorrecto";
		
		//Marcar error
		oForm.volumen.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.volumen.className = "form-control";	
	}
	
	
	//Campo peso parseFloat
	var doPeso= parseFloat(oForm.peso.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doPeso) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.peso.focus();		
		}
	
		sErrores += "\Peso incorrecto";
		
		//Marcar error
		oForm.peso.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.peso.className = "form-control";	
	}
	
	

//Campo valor parseFloat
	var doValor = parseFloat(oForm.valor.value.trim());
	

	var oExpReg = /^[0-9]+([,])?([0-9]+)?$/;
	
	if (oExpReg.test(doValor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.valor.focus();		
		}
	
		sErrores += "\Valor incorrecto";
		
		//Marcar error
		oForm.valor.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.valor.className = "form-control";	
	}
	
	  if(doTarifa =="" || dFechaEntrega=="" || doVolumen=="" || doPeso =="" || doValor =="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }
	

	
	var sUrgente=oForm.optradio3.value;
    var sEntregado=oForm.optradio4.value;
    var sAdminPublica=oForm.optradio5.value;
    var sInternacional=oForm.optradio6.value;
    var sAsegurado=oForm.optradio7.value;
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var paquete= new Paquete(sIdPaquete, doTarifa, dFechaEntrega, doVolumen, doPeso, doValor,sUrgente,sEntregado,sAdminPublica,sInternacional,sAsegurado);
	 sMensaje=oPaqueteria.modificarPaquete(paquete);
	  oForm.reset();
	}
	
	
	alert(sMensaje);

}


function aceptarModificarAduana(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formAltaAduana");
	 var listaArticulos = oForm.listaArticulos;
	var sErrores = "";
	var sMensaje ="";
	
	// Validaciones

	var sIdAduana=formModiAduana.comboAduanas.value.trim();
	
	//Campo declaracion
	var sDeclaracion = oForm.declaracion.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDeclaracion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.declaracion.focus();		
		}
	
		sErrores += "\nDeclaración incorrecta";
		
		//Marcar error
		oForm.declaracion.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.declaracion.className = "form-control";	
	}

//Campo tasa
	var iTasa = parseInt(oForm.tasa.value.trim());
	

	var oExpReg = /^[0-9]{1,}$/;
	
	if (oExpReg.test(iTasa) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.tasa.focus();		
		}
	
		sErrores += "\nTasa incorrecta";
		
		//Marcar error
		oForm.tasa.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.tasa.className = "form-control";	
	}
	
	

	  //Validar combo articulos
    for (var i = 0; i < listaArticulos.options.length; ++i) {
        if (listaArticulos.options[i].selected)
            var articulo = listaArticulos.options[i].text;
    }
    if (articulo == null) {
        if (bValido == true) {
            bValido = false;
            oForm.listaArticulos.focus();
        }
        sErrores += "\nDebe seleccionar un artículo";
     
        //Marcar error
        oForm.listaArticulos.className = "form-control error";
    }
    else {
        if (articulo == "No hay artículos disponibles") {
            if (bValido == true) {
                bValido = false;
                oForm.listaArticulos.focus();
            }
            sErrores += "\nLo sentimos no hay artículos disponibles";
            oForm.listaArticulos.className = "form-control  error";
        }
        else {
           oForm.listaArticulos.className = "form-control";
        }
    }
	
	  if(sDeclaracion=="" || iTasa =="" )
		
    {
        sErrores +="\nDebe rellenar todos los campos";
    }
	
	
	

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var aduana= new Aduana(sIdAduana, articulo, sDeclaracion, iTasa);
	 sMensaje=oPaqueteria.modificarAduana(aduana);
	  oForm.reset();
	}
	
	
	alert(sMensaje);

}

function aceptarModificarQueja(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var oForm=document.getElementById("formModiQuejas");
	
	var sErrores = "";
	var sMensaje = "";
	
	// Validaciones

var sIdQueja=formModiQuejas.comboQuejas.value.trim();
	
	//Campo descripcion
	var sDescripcionQ = oForm.descripcionQueja.value.trim();
	

	var oExpReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcionQ) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.descripcionQueja.focus();		
		}
	
		sErrores += "\nDescripción incorrecta";
		
		//Marcar error
		oForm.descripcionQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.descripcionQueja.className = "form-control";	
	}


	
	 
	
	//Campo fecha
	var dFechaQueja= new Date(oForm.fechaQueja.value.trim()).toLocaleDateString("es-ES");
	
	


	var oExpReg = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/;
	
	if (oExpReg.test(dFechaQueja) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			oForm.fechaQueja.focus();		
		}
	
		sErrores += "\Fecha incorrecta";
		
		//Marcar error
		oForm.fechaQueja.className = "form-control error";
	
	}
	else {
		//Desmarcar error
		oForm.fechaQueja.className = "form-control";	
	}
	
	
	var sResuelta = oForm.optradio8.value;

	  if(sDescripcionQ=="" || dFechaQueja=="" )
		
    {
        sErrores +="Debe rellenar todos los campos";
    }

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	else{
	
     var queja= new Queja(sIdQueja, sDescripcionQ, dFechaQueja, sResuelta);
	 sMensaje=oPaqueteria.modificarQueja(queja);
	  oForm.reset();
	}
	
	
	alert(sMensaje);
	
	

}
