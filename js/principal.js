/**
 * APLICACIÓN INSCRIPCIONES
 * En esta primera etapa, lograremos cargar un registro
 * simple de estudiantes y asistencias a clases, así como
 * los reportes respectivos de los registros en memoria.
 * Ud. sólo debe programar las clases del modelo. 
 * 
 * ESPECIFICACIONES
 * Cl_mEstudiante:
     o El atributo cedula y nota se asignan convirtiendo a
       número. o Los atributos apellidos y nombres se asignan con
       CamelCase.
 * Cl_mAsistencia: 
     o El atributo código se asigna a mayúsculas. 
     o El atributo fecha se asigna validado, sino será null. 
     o El atributo actividad se asigna aplicando trim.
 * Cl_mEstudiantes y Cl_mAsistencias: 
     o Construyen el array vacío. 
     o Los métodos agregar el elemento al final. 
     o Los métodos listado retornan un array de objetos de solo datos.
 * Cl_mSemestre: 
     o El atributo nombre se asigna a CamelCase. 
     o El constructor también construye los objetos atributos
*/
import Cl_vAplicacion from "./Cl_vAplicacion.js";
import Cl_mAsistencias from "./Cl_mAsistencias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
  constructor() {
    let vistaApp = new Cl_vAplicacion();
    let mAsistencias = new Cl_mAsistencias();
    let mEstudiantes = new Cl_mEstudiantes();
    let controlador = new Cl_controlador({
      mEstudiantes: mEstudiantes,
      mAsistencias: mAsistencias,
      vistaApp: vistaApp,
    });
    vistaApp.controlador = controlador;
    controlador.activarVista("main");
  }
}
