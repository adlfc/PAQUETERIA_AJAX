window.addEventListener("load",inicio,false);


var oPaqueteria = new Paqueteria();
 
//#########################################################################################
// PAQUETERIA
//#########################################################################################

var btnIndex = document.getElementById("activo");
btnIndex.addEventListener("click", volverIndex, false);

function volverIndex()
{
	
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
    formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";


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



var formBajaCliente = document.getElementById("bajaCli");
formBajaCliente.addEventListener("click", bajaCliente, false);
 

function bajaCliente()
{
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "block";
 	formBajaCliente.reset();


 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";
	bajaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";


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


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";
	bajaEmpleados.reset();

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";


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


var bajaEmpleados = document.getElementById("bajaEmpl");
bajaEmpleados.addEventListener("click", bajaEmpleado, false);

function bajaEmpleado()
{
	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "block";
	
 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


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


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

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



var bajaArticulo = document.getElementById("bajaArt");
bajaArticulo.addEventListener("click", bajaArticulos, false);

function bajaArticulos()
{
	var bajaArtic = document.getElementById("formBajArticulo");
 	bajaArtic.style.display = "block";


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

	
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


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

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


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";


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

	
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("listadoClientes").style.display = "none";

	
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";

	
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


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";


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
	
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 	
 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

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
 	
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";

 
 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

 	
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

	
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("listadoClientes").style.display = "none";

	
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";

	
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
 	
 
 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

	
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
 


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


 	var bajaEmpleados = document.getElementById("formBajaEmple");
 	bajaEmpleados.style.display = "none";

 	var listadoEmpleados = document.getElementById("listadoEmpleados");
 	listadoEmpleados.style.display = "none";

  
	
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

	
	document.getElementById("formBajaCliente").style.display = "none";
	document.getElementById("formModiCliente").style.display = "none";
	document.getElementById("listadoClientes").style.display = "none";

	
	document.getElementById("formBajaEmple").style.display = "none";
	document.getElementById("formModiEmpleado").style.display = "none";
	document.getElementById("listadoEmpleados").style.display = "none";

	
	document.getElementById("formBajArticulo").style.display = "none";
	document.getElementById("formModiArticulo").style.display = "none";
	document.getElementById("listadoArtic").style.display = "none";

	document.getElementById("formAltaPedido").style.display = "none";
	document.getElementById("formBajaPaquete").style.display = "none";
	document.getElementById("formModiPedido").style.display = "none";
	
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


 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";


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



 	var formBajaCliente = document.getElementById("formBajaCliente");
 	formBajaCliente.style.display = "none";
	formBajaCliente.reset();

 	var listadoClientes = document.getElementById("listadoClientes");
 	listadoClientes.style.display = "none";



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



function inicio(){
	
	document.getElementById("modiCli").addEventListener("click", modificarCliente,false);
	document.getElementById("aceptarModiCli").addEventListener("click", aceptarModificarCliente,false);
	
	document.getElementById("modiEmple").addEventListener("click", modificarEmpleado,false);
	document.getElementById("aceptarModiEmple").addEventListener("click", aceptarModificarEmpleado,false);
	
	document.getElementById("modiArti").addEventListener("click",modificarArticulo,false);
	


	document.getElementById("aceptarModiArticulo").addEventListener("click", aceptarModificarArticulo,false);
	document.getElementById("modiPaq").addEventListener("click", modificarPaquete,false);
	document.getElementById("aceptarModificarPaquete").addEventListener("click", aceptarModificarPaquete,false);
	document.getElementById("modiAduana").addEventListener("click", modificarAduana,false);
	document.getElementById("aceptarModificarAduana").addEventListener("click", aceptarModificarAduana,false);
	document.getElementById("modiQueja").addEventListener("click", modificarQueja,false);
	document.getElementById("aceptarModificarQueja").addEventListener("click", aceptarModificarQueja,false);
	

}



//LISTADOS 


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
