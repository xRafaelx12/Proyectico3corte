export default class Cl_controlador {
  constructor({ mEstudiantes, mAsistencias, vistaApp }) {
    this.mEstudiantes = mEstudiantes;
    this.mAsistencias = mAsistencias;
    this.vistaApp = vistaApp;
  }
  activarVista(vista) {
    this.vistaApp.vista.hidden = vista !== "main";
    this.vistaApp.vEstudiante.vista.hidden = vista !== "estudiante";
    this.vistaApp.vAsistencia.vista.hidden = vista !== "asistencia";
    this.vistaApp.vReporteEstudiantes.vista.hidden =
      vista !== "reporteEstudiantes";
    this.vistaApp.vReporteAsistencias.vista.hidden = vista !== "reporteAsistencias";
  }
  agregarEstudiante() {
    this.mEstudiantes.agregar(this.vistaApp.agregarEstudiante());
  }
  agregarAsistencia() {
    this.mAsistencias.agregar(this.vistaApp.agregarAsistencia());
  }
  reportarEstudiantes() {
    this.vistaApp.reportarEstudiantes({
      info: this.mEstudiantes.listado(),
    });
  }
  reportarAsistencias() {
    this.vistaApp.reportarAsistencias({
      info: this.mAsistencias.listado(),
    });
  }
}
