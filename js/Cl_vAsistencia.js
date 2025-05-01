export default class Cl_vAsistencia {
  constructor() {
    this.controlador = null;

    this.vista = document.getElementById("asistenciaForm");// atributos para concectar toda la vista de asistencia con html 
    this.vista.hidden = true; // toda la secciones para poner los input estan ocultas al principio


    // atributo para conectar la data del html con el javascript
    this.inCodigo = document.getElementById("asistenciaForm_inCodigo");
    this.inFecha = document.getElementById("asistenciaForm_inFecha");   
    this.inActividad = document.getElementById("asistenciaForm_inActividad");   
    // atributo para conectar la data del html con el javascript


    this.btAceptar = document.getElementById("asistenciaForm_btAceptar"); //atributo para conectar el boton de aceptar del html con javascript
    
    this.btAceptar.onclick = () => {  // funcion flecha para enviar la data de asistencia y activar la vista para poner los datos
      this.controlador.activarVista("main");// oculta el formulario para poner la data
      this.controlador.agregarAsistencia();
    };


    this.btCancelar = document.getElementById("asistenciaForm_btCancelar"); //atrbuto para conectar el boton de cancelar los inputs del html  
    this.btCancelar.onclick = () => {
      this.controlador.activarVista("main"); // oculta el formulario para poner la data
    };


  }


  //  metodo para extraer los datos de lo input del html 
  get codigo() {
    return this.inCodigo.value;
  }
  get fecha() {
    return this.inFecha.value;
  }
  get actividad() {
    return this.inActividad.value;
  }
  //  metodo para extraer los datos de lo input del html 

  
  
  // metod para asinar los valores al controlador
  iniciar(controlador) {
    this.controlador = controlador;
  }
}
