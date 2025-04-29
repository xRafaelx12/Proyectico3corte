export default class Cl_vReporteAsistencias {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("reporteAsistenciasForm"); // atributo para mostrar los datos de las asistencias
    this.vista.hidden = true;

    this.tabla = document.getElementById("reporteAsistenciasForm_tabla"); // atributo para conectar la tabla del html con el javascript
    this.btVolver = document.getElementById("reporteAsistenciasForm_btVolver"); //atributo para concectar html y este crea un boton para salir de la tabla de asistencias
    this.btVolver.onclick = () => this.controlador.activarVista("main"); // al dectectar un click oculta la tabla 
  }

  // asignar los datos al controlador
  iniciar(controlador) {
    this.controlador = controlador;
  }


  //mostrar los datos de la tabla al html
  reportar({ info }) {
    this.controlador.activarVista("reporteAsistencias");
    this.tabla.innerHTML = "";
    info.map((asistencia) => {
      this.tabla.innerHTML += `<tr>
      <td>${asistencia.codigo}</td>
      <td>${asistencia.fecha.toLocaleString("es-VE")}</td>
      <td>${asistencia.actividad}</td>
    </tr>`;
    });
  }
}
