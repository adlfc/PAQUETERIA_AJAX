// ###############################  Objeto Paqueteria  ########################### \\

class Paqueteria {
    constructor() {
    
    this.empleados = [ ];
    this.quejas = [ ];
    this.clientes = [ ];
    this.articulos = [ ];
    this.paquetes = [ ];
    this.eventosQueja = [ ];
    this.aduanas = [ ]; 
    
	
}
}


// ###############################  Objeto Persona ############################### \\

function Persona(idPersona){
    this.idPersona = idPersona;
  
}

// ###############################  Objeto Cliente  ############################### \\

function Cliente(sIdCliente, sNombre, sApellidos, sEmail, sTelefono, sDireccion, sCodPost, sPais, sActivo){
    this.sIdCliente = sIdCliente;
    this.sNombre = sNombre;
    this.sApellidos = sApellidos;
    this.sEmail = sEmail;
    this.sTelefono = sTelefono;
    this.sDireccion = sDireccion;
    this.sCodPost = sCodPost;
    this.sPais = sPais;
    this.sActivo = sActivo;
    

}

Paqueteria.prototype.altaCliente = function(oCliente)
{
   
    var bEncontrado = false;
    var sMensaje = "";

	for(var i=0; i<this.clientes.length && bEncontrado==false; i++)
	{
        if(this.clientes[i].sIdCliente == oCliente.sIdCliente){
            bEncontrado = true;
            sMensaje = "Cliente registrado con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.clientes.push(oCliente);
        sMensaje = "Cliente dado de alta";
    }

    return sMensaje;
}

Paqueteria.prototype.eliminarCliente = function (sIdCliente) {

    var encontrado = false;

    for(var i=0; i<this.clientes.length; i++)
    {
        if(sIdCliente == this.clientes[i].sIdCliente)
        {
            encontrado = true;
            this.clientes[i].sActivo = false;
        }
    }

    return encontrado;
}

// ###############################  Objeto Empleado ############################### \\

function Empleado(idEmpleado, sNombre, sApellidos, sGestor, sManager, sOficina, sActivo){

	this.idEmpleado = idEmpleado;
	this.sNombre = sNombre;
	this.sApellidos = sApellidos;
	 this.sGestor=sGestor;
     this.sManager=sManager;
    this.sOficina = sOficina;
    this.sActivo = sActivo;
    

}

Paqueteria.prototype.altaEmpleado = function(oEmpleado)
{
   
    var bEncontrado = false;
    var sMensaje = "";

	for(var i=0; i<this.empleados.length && bEncontrado==false; i++)
	{
        if(this.empleados[i].idEmpleado == oEmpleado.idEmpleado){
            bEncontrado = true;
            sMensaje = "Empleado registrado con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.empleados.push(oEmpleado);
        sMensaje = "Empleado dado de alta";
    }

    return sMensaje;
}

Paqueteria.prototype.eliminarEmpleado = function (idEmpleado) {

    var encontrado = false;

    for(var i=0; i<this.empleados.length; i++)
    {
        console.log(this.empleados[i].idEmpleado);
        if(idEmpleado == this.empleados[i].idEmpleado)
        {
            encontrado = true;
            this.empleados[i].sActivo = false;
            console.log(this.empleados[i]);
        }
    }

    return encontrado;
}

// ###############################  Objeto Paquete  ################################## \\

function Paquete(idPaquete,doTarifa,dFechaEntrega,doVolumen,doPeso,doValor,sUrgente,sEntregado,sAdminPublica,sInternacional,sAsegurado,sActivo)
{
    this.idPaquete = idPaquete;
    this.doTarifa = doTarifa;
    this.dFechaEntrega = dFechaEntrega;
    this.doVolumen = doVolumen;
    this.doPeso = doPeso;
    this.doValor = doValor;
    this.sUrgente=sUrgente;
    this.sEntregado=sEntregado;
    this.sAdminPublica=sAdminPublica;
    this.sInternacional=sInternacional;
    this.sAsegurado=sAsegurado;
    this.sActivo=sActivo;
}

Paqueteria.prototype.altaPaquete = function(oPaquete)
{
   
    var bEncontrado = false;
    var sMensaje = "";

	for(var i=0; i<this.paquetes.length && bEncontrado==false; i++)
	{
        if(this.paquetes[i].idPaquete == oPaquete.idPaquete){
            bEncontrado = true;
            sMensaje = "Paquete registrado con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.paquetes.push(oPaquete);
        sMensaje = "Paquete dado de alta";
    }

    return sMensaje;
};

Paqueteria.prototype.eliminarPaquete = function (idPaquete) {

    var encontrado = false;

    for(var i=0; i<this.paquetes.length; i++)
    {
        if(idPaquete == this.paquetes[i].idPaquete)
        {
            encontrado = true;
            this.paquetes[i].sActivo = false;
        }
    }

    return encontrado;
}


// ###############################  Objeto Articulo ################################### \\

function Articulo(idArticulo,sDescripcion,doPeso,doValor,sComercial,sActivo){
    this.idArticulo = idArticulo;
    this.sDescripcion = sDescripcion;
     this.doPeso = doPeso;
    this.doValor = doValor;
     this.sComercial=sComercial;
     this.sActivo=sActivo;
}

Paqueteria.prototype.altaArticulo = function(oArticulo)
{

    var bEncontrado = false;
    var sMensaje = "";
	
    for(var i=0; i<this.articulos.length && bEncontrado==false; i++)
	{
        if(this.articulos[i].idArticulo == oArticulo.idArticulo){
            bEncontrado = true;
            sMensaje = "Articulo registrado con anterioridad";
        }
        
    }

    if(!bEncontrado){
        this.articulos.push(oArticulo);
        sMensaje = "Articulo dado de alta";
    }

    return sMensaje;
};

Paqueteria.prototype.eliminarArticulo = function (idArticulo) {

    var encontrado = false;

    for(var i=0; i<this.articulos.length; i++)
    {
        if(idArticulo == this.articulos[i].idArticulo)
        {
            encontrado = true;
            this.articulos[i].sActivo = false;
        }
    }

    return encontrado;
}

// ###############################  Objeto Queja  ################################### \\

function Queja(idQueja,sDescripcion, dFecha, sResuelta, sActivo){
    this.idQueja = idQueja;
    this.sDescripcion = sDescripcion;
	this.dFecha=dFecha;
    this.sResuelta=sResuelta;
    this.sActivo=sActivo;
}


Paqueteria.prototype.altaQueja = function(oQueja)
{
    var i = 0;
    var bEncontrado = false;
    var sMensaje = "";
	
    for(var i=0; i<this.quejas.length && bEncontrado==false; i++)
	{
        if(this.quejas[i].idQueja == oQueja.idQueja){
            bEncontrado = true;
            sMensaje = "Queja registrada con anterioridad";
        }
        
    }

    if(!bEncontrado){
        this.quejas.push(oQueja);
        sMensaje = "Queja dada de alta";
    }

	
    return sMensaje;
};

Paqueteria.prototype.eliminarQueja = function (idQueja) {

    var encontrado = false;

    for(var i=0; i<this.quejas.length; i++)
    {
        if(idQueja == this.quejas[i].idQueja)
        {
            encontrado = true;
            this.quejas[i].sActivo = false;
        }
    }

    return encontrado;
}


// ###############################  Objeto Aduana ################################### \\

function Aduana(idDeclaracion, sArticulo, sDeclaracion, iTasa, sActivo){
	this.idDeclaracion = idDeclaracion;
    this.sArticulo = sArticulo;
    this.sDeclaracion = sDeclaracion;
     this.iTasa = iTasa;
     this.sActivo = sActivo;

}

Paqueteria.prototype.altaAduana = function(oAduana)
{
   
    var bEncontrado = false;
    var sMensaje = "";

    
	for(var i=0; i<this.aduanas.length && bEncontrado==false; i++)
	{
        if(this.aduanas[i].idDeclaracion == oAduana.idDeclaracion){
            bEncontrado = true;
            sMensaje = "Aduana registrada con anterioridad";
        }
       
    }

    if(!bEncontrado){
        this.aduanas.push(oAduana);
        sMensaje = "Aduana dada de alta";
    }

    return sMensaje;
};

Paqueteria.prototype.eliminarAduana = function (idDeclaracion) {

    var encontrado = false;

    for(var i=0; i<this.aduanas.length; i++)
    {
        if(idDeclaracion == this.aduanas[i].idDeclaracion)
        {
            encontrado = true;
            this.aduanas[i].sActivo = false;
        }
    }

    return encontrado;
}


//Listados
Paqueteria.prototype.cogerTodosLosClientes = function () 
{
    var arrayClientes = [];
    for (var i = 0; i < this.clientes.length; i++) 
	{
        arrayClientes.push(this.clientes[i]);
    }
    return arrayClientes;
}


Paqueteria.prototype.cogerTodosLosEmpleados = function () 
{
    var arrayEmpleados = [];
    for (var i = 0; i < this.empleados.length; i++) 
	{
        arrayEmpleados.push(this.empleados[i]);
    }
    return arrayEmpleados;
}

Paqueteria.prototype.cogerTodosLosNombresClientes = function () 
{
    var arrayClientes = [];
    for (var i = 0; i < this.clientes.length; i++) 
    {
        if(this.clientes[i].sActivo == true)
        {
            arrayClientes.push(this.clientes[i].sIdCliente + " - " + this.clientes[i].sNombre);
        }
    }
    return arrayClientes;
}

Paqueteria.prototype.cogerTodosLosNombresEmpleados = function () 
{
    var arrayEmpleados = [];
    for (var i = 0; i < this.empleados.length; i++) 
    {
        if(this.empleados[i].sActivo == true)
        {
            arrayEmpleados.push(this.empleados[i].idEmpleado + " - " + this.empleados[i].sNombre);
        }
    }
    return arrayEmpleados;
}

Paqueteria.prototype.cogerTodosLosNombresArticulos = function () 
{
    var arrayArticulos = [];
    for (var i = 0; i < this.articulos.length; i++) 
    {
        if(this.articulos[i].sActivo == true)
        {
            arrayArticulos.push(this.articulos[i].idArticulo + " - " + this.articulos[i].sDescripcion);
        }
    }
    return arrayArticulos;
}

Paqueteria.prototype.cogerTodosLosNombresPaquetes = function () 
{
    var arrayPaquetes = [];
    for (var i = 0; i < this.paquetes.length; i++) 
    {
        if(this.paquetes[i].sActivo == true)
        {
            arrayPaquetes.push(this.paquetes[i].idPaquete);
        }
    }
    return arrayPaquetes;
}

Paqueteria.prototype.cogerTodosLosNombresAduanas = function () 
{
    var arrayAduanas = [];
    for (var i = 0; i < this.aduanas.length; i++) 
    {
        if(this.aduanas[i].sActivo == true)
        {
            arrayAduanas.push(this.aduanas[i].idDeclaracion);
        }
    }
    return arrayAduanas;
}

Paqueteria.prototype.cogerTodosLosNombresQuejas = function () 
{
    var arrayQuejas = [];
    for (var i = 0; i < this.quejas.length; i++) 
    {
        if(this.quejas[i].sActivo == true)
        {
            arrayQuejas.push(this.quejas[i].idQueja + " - " + this.quejas[i].sDescripcion);
        }
    }
    return arrayQuejas;
}

Paqueteria.prototype.cogerTodosLosArticulos = function () 
{
    var arrayArticulos = [];
    for (var i = 0; i < this.articulos.length; i++)
		{
        arrayArticulos.push(this.articulos[i]);
    }
    return arrayArticulos;
}

Paqueteria.prototype.cogerTodosLosPaquetes = function()
{
    var arrayPaquetes = [];
    for (var i = 0; i < this.paquetes.length; i++) {
        arrayPaquetes.push(this.paquetes[i]);
    }
    return arrayPaquetes;
}
Paqueteria.prototype.cogerTodasLasAduanas = function()
{
    var arrayAduanas = [];
    for (var i = 0; i < this.aduanas.length; i++) {
        arrayAduanas.push(this.aduanas[i]);
    }
    return arrayAduanas;
}

Paqueteria.prototype.cogerTodasLasQuejas = function()
{
    var arrayQuejas = [];
    for (var i = 0; i < this.quejas.length; i++) {
        arrayQuejas.push(this.quejas[i]);
    }
    return arrayQuejas;
}

//Modificaciones

//Cliente
Paqueteria.prototype.modificarCliente= function(oCliente){
    var sCadena = "";
    for(var i=0;i < this.clientes.length;i++){

        if(this.clientes[i].sIdCliente == oCliente.sIdCliente)
        {
            
			this.clientes[i].sNombre = oCliente.sNombre;
            this.clientes[i].sApellidos = oCliente.sApellidos;
            this.clientes[i].sEmail = oCliente.sEmail;
			this.clientes[i].sTelefono = oCliente.sTelef;
            this.clientes[i].sDireccion = oCliente.sDireccion;
			this.clientes[i].sCodPost = oCliente.sCodPost;
			this.clientes[i].sPais = oCliente.sPais;
           
            sCadena = "Cliente "+oCliente.sNombre+" modificado";
        }
		
		 else
		 {
			sCadena = "Cliente no encontrado";
		 }
		
    }
    return sCadena;
}

//Empleado
Paqueteria.prototype.modificarEmpleado= function(oEmpleado){
    var sCadena = "";
    for(var i=0;i < this.empleados.length;i++){
       
        if(this.empleados[i].idEmpleado == oEmpleado.idEmpleado)
        {
			
			this.empleados[i].sNombre = oEmpleado.sNombre;
            this.empleados[i].sApellidos = oEmpleado.sApellidos;
            this.empleados[i].sGestor = oEmpleado.sGestor;
			this.empleados[i].sManager = oEmpleado.sManager;
            this.empleados[i].sOficina = oEmpleado.sOficina;
		
           
            sCadena = "Empleado "+oEmpleado.sNombre+" modificado";
        }
		
		 else
		 {
			sCadena = "Empleado no encontrado";
		 }
		
    }
    return sCadena;
}

//Articulo
Paqueteria.prototype.modificarArticulo= function(oArticulo){
    var sCadena = "";
    for(var i=0;i < this.articulos.length;i++){
       
        if(this.articulos[i].idArticulo == oArticulo.idArticulo)
        {
			
			this.articulos[i].sDescripcion = oArticulo.sDescripcion;
            this.articulos[i].doPeso = oArticulo.doPeso;
            this.articulos[i].doValor = oArticulo.doValor;
			this.articulos[i].sComercial = oArticulo.sComercial;
          
		
           
            sCadena = "Artículo "+oArticulo.idArticulo+" modificado";
        }
		
		 else
		 {
			sCadena = "Artículo no encontrado";
		 }
		
    }
    return sCadena;
}

//Paquete
Paqueteria.prototype.modificarPaquete= function(oPaquete){
    var sCadena = "";
    for(var i=0;i < this.paquetes.length;i++){
       
        if(this.paquetes[i].idPaquete == oPaquete.idPaquete)
        {
			
			this.paquetes[i].doTarifa = oPaquete.doTarifa;
			this.paquetes[i].dFechaEntrega = oPaquete.dFechaEntrega;
			this.paquetes[i].doVolumen = oPaquete.doVolumen;
            this.paquetes[i].doPeso = oPaquete.doPeso;
            this.paquetes[i].doValor = oPaquete.doValor;
			this.paquetes[i].sUrgente = oPaquete.sUrgente;
			this.paquetes[i].sEntregado = oPaquete.sEntregado;
			this.paquetes[i].sAdminPublica = oPaquete.sAdminPublica;
			this.paquetes[i].sInternacional = oPaquete.sInternacional;
			this.paquetes[i].sAsegurado = oPaquete.sAsegurado;
          
		
           
            sCadena = "Paquete "+oPaquete.idPaquete+" modificado";
        }
		
		 else
		 {
			sCadena = "Paquete no encontrado";
		 }
		
    }
    return sCadena;
}

//Aduana
Paqueteria.prototype.modificarAduana= function(oAduana){
    var sCadena = "";
    for(var i=0;i < this.aduanas.length;i++){
       
        if(this.aduanas[i].idDeclaracion == oAduana.idDeclaracion)
        {
			
			this.aduanas[i].sArticulo = oAduana.sArticulo;
			this.aduanas[i].sDeclaracion = oAduana.sDeclaracion;
			this.aduanas[i].iTasa = oAduana.iTasa;
            
          
		
           
            sCadena = "Aduana "+oAduana.idDeclaracion+" modificada";
        }
		
		 else
		 {
			sCadena = "Aduana no encontrada";
		 }
		
    }
    return sCadena;
}

//Queja
Paqueteria.prototype.modificarQueja= function(oQueja){
    var sCadena = "";
    for(var i=0;i < this.quejas.length;i++){
       
        if(this.quejas[i].idQueja == oQueja.idQueja)
        {
			
			this.quejas[i].sDescripcion = oQueja.sDescripcion;
			this.quejas[i].dFecha = oQueja.dFecha;
			this.quejas[i].sResuelta = oQueja.sResuelta;
            
          
		
           
            sCadena = "Queja "+oQueja.idQueja+" modificada";
        }
		
		 else
		 {
			sCadena = "Queja no encontrada";
		 }
		
    }
    return sCadena;
}


