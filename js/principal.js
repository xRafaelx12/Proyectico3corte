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

//intancias de toda las clases
import Cl_vAplicacion from "./Cl_vAplicacion.js";
import Cl_mAsistencias from "./Cl_mAsistencias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mAsistencia from "./Cl_mAsistencia.js";
//intancias de toda las clases


export default class Cl_principal {
  constructor() {
    let vistaApp = new Cl_vAplicacion();
    let mAsistencias = new Cl_mAsistencias();

    let arrA = [
      { codigo:"123", 
        fecha: "20-11",
        actividad: "dibujar"

      },{
        codigo:"134", 
        fecha: "10-10",
        actividad: "futbol"
      },{
        codigo:"145", 
        fecha: "14-10",
        actividad: "pintar"
      }
    ]

    arrA.forEach(asistencia => {
      mAsistencias.agregar(new Cl_mAsistencia({
        codigo:asistencia.codigo,
        fecha:asistencia.fecha,
        actividad:asistencia.actividad
      }))
    })


    let mEstudiantes = new Cl_mEstudiantes();

    let arrE = [
      {cedula:30923175, 
      apellidos: "abarca",
      nombres: "lismar"

     },{
       cedula:29976020, 
       apellidos: "perez",
       nombres: "rafael"

     },{
       cedula:30845208, 
      apellidos: "escalona",
      nombres: "maria"

     }]


    arrE.forEach(estudiante => {
      mEstudiantes.agregar(new Cl_mEstudiante({
        cedula: estudiante.cedula,
        apellidos: estudiante.apellidos,
        nombres: estudiante.nombres,
      }))
    })


    let controlador = new Cl_controlador({
      mEstudiantes: mEstudiantes,
      mAsistencias: mAsistencias,
      vistaApp: vistaApp,
    });
    vistaApp.controlador = controlador;
    controlador.activarVista("main");
  }
}
