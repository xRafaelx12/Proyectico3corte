export default class Cl_vEstudiante {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("estudianteForm"); // atributos para concectar toda la vista de estudiante con html 
    this.vista.hidden = true; // toda la senciones para poner los input estan ocultas al principio


    // atributo para conectar la data del html con el javascript
    this.inCedula = document.getElementById("estudianteForm_inCedula");
    this.inApellidos = document.getElementById("estudianteForm_inApellidos");
    this.inNombres = document.getElementById("estudianteForm_inNombres");
    // atributo para conectar la data del html con el javascript



    this.btAceptar = document.getElementById("estudianteForm_btAceptar");//atributo para conectar el boton de aceptar del html con javascript
    this.btAceptar.onclick = () => {    // funcion flecha para enviar la data de asistencia y activar la vista para poner los datos
      this.controlador.activarVista("main");// oculta el formulario para poner la data
      this.controlador.agregarEstudiante();// agregar la data
    };


  
    this.btCancelar = document.getElementById("estudianteForm_btCancelar"); //atrbuto para conectar el boton de cancelar los inputs del html  
    this.btCancelar.onclick = () => {
      this.controlador.activarVista("main"); // ocular la vista de los inputs 
    };
  }

  
  //  metodo para extraer los datos de lo input del html 
  get cedula() {
    return this.inCedula.value;
  }
  get nombres() {
    return this.inNombres.value;
  }
  get apellidos() {
    return this.inApellidos.value;
  }
  //  metodo para extraer los datos de lo input del html 


  // metod para asinar los valores al controlador
  iniciar(controlador) {
    this.controlador = controlador;
  }
}
