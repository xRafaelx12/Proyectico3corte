import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mAsistencia from "./Cl_mAsistencia.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vAsistencia from "./Cl_vAsistencia.js";
import Cl_vReporteEstudiantes from "./Cl_vReporteEstudiantes.js";
import Cl_vReporteAsistencias from "./Cl_vReporteAsistencias.js";


export default class Cl_vAplicacion {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("appForm");

    this.vEstudiante = new Cl_vEstudiante();
    this.vReporteEstudiantes = new Cl_vReporteEstudiantes();

    this.vAsistencia = new Cl_vAsistencia();
    this.vReporteAsistencias = new Cl_vReporteAsistencias();

    this.btAgregarEstudiante = document.getElementById(
      "appForm_btAgregarEstudiante"
    );
    this.btAgregarEstudiante.onclick = () =>
      this.controlador.activarVista("estudiante");

    this.btReportarEstudiantes = document.getElementById(
      "appForm_btReportarEstudiantes"
    );
    this.btReportarEstudiantes.onclick = () =>
      this.controlador.reportarEstudiantes();

    this.btAgregarAsistencia = document.getElementById(
      "appForm_btAgregarAsistencia"
    );
    this.btAgregarAsistencia.onclick = () =>
      this.controlador.activarVista("asistencia");

    this.btReportarAsistencias = document.getElementById(
      "appForm_btReportarAsistencias"
    );
    this.btReportarAsistencias.onclick = () => this.controlador.reportarAsistencias();
  }

  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vEstudiante.iniciar(controlador);
      this.vReporteEstudiantes.iniciar(controlador);
      this.vAsistencia.iniciar(controlador);
      this.vReporteAsistencias.iniciar(controlador);
    }
  }

  get controlador() {
    return this._controlador;
  }

  agregarEstudiante() {
    return new Cl_mEstudiante({
      cedula: this.vEstudiante.cedula,
      apellidos: this.vEstudiante.apellidos,
      nombres: this.vEstudiante.nombres,
    });
  }

  agregarAsistencia() {
    return new Cl_mAsistencia({
      codigo: this.vAsistencia.codigo,
      fecha: this.vAsistencia.fecha,
      actividad: this.vAsistencia.actividad,
    });
  }

  reportarEstudiantes({ info }) {
    this.vReporteEstudiantes.reportar({ info });
  }

  reportarAsistencias({ info }) {
    this.vReporteAsistencias.reportar({ info });
  }
}
