export default class Cl_vReporteEstudiantes {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("reporteEstudiantesForm"); // atributo para mostrar los datos de los estudiantes
    this.vista.hidden = true;
    this.vista.hidden = true;

    this.tabla = document.getElementById("reporteEstudiantesForm_tabla"); // atributo para conectar la tabla del html con el javascript
    this.btVolver = document.getElementById("reporteEstudiantesForm_btVolver"); //atributo para concectar html y este crea un boton para salir de la tabla de estudiante
    this.btVolver.onclick = () => this.controlador.activarVista("main"); // al dectectar un click oculta la tabla 
  }

  // asignar los datos al controlador
  iniciar(controlador) {
    this.controlador = controlador;
  }

  //mostrar los datos de la tabla al html
  reportar({ info }) {
    this.controlador.activarVista("reporteEstudiantes");
    this.tabla.innerHTML = "";
    info.map((estudiante) => {
      this.tabla.innerHTML += `<tr>
      <td>${estudiante.cedula}</td>
      <td>${estudiante.apellidos}</td>
      <td>${estudiante.nombres}</td>
    </tr>`;
    });
  }
}
