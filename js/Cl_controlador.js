//clase  que recibe las entradas del usuario, las interpreta y las envía al modelo o a la vista según corresponda


export default class Cl_controlador {
  constructor({ mEstudiantes, mAsistencias, vistaApp }) {
    this.mEstudiantes = mEstudiantes;  // atributo para guarda toda la data de los estudiantes
    this.mAsistencias = mAsistencias; // atributo para guarda toda la data de las asistencias
    this.vistaApp = vistaApp;  // atributo encargada de la vista de las otra clases
  }



  activarVista(vista) { //metodo gestor de vista
    this.vistaApp.vista.hidden = vista !== "main";  // si el valor de el parametro vista es diferente de  main se muestra la vista incial 

    this.vistaApp.vEstudiante.vista.hidden = vista !== "estudiante";  // si el valor de el parametro vista es diferente de  estudiante se muestra la vista

    this.vistaApp.vAsistencia.vista.hidden = vista !== "asistencia";  // si el valor de el parametro vista es diferente de  asistencia se muestra la vista

    this.vistaApp.vReporteEstudiantes.vista.hidden =vista !== "reporteEstudiantes";   // si el valor de el parametro vista es diferente de  reporteEstudiantes se muestra la vista

    this.vistaApp.vReporteAsistencias.vista.hidden = vista !== "reporteAsistencias";    // si el valor de el parametro vista es diferente de  reporteAsistencias se muestra la vista
  }



  agregarEstudiante() {  // metodo para agregar la data al array de estudiantes poniendole como parametros el objeto de la clases menor estudiante
    this.mEstudiantes.agregar(this.vistaApp.agregarEstudiante());
  }



  agregarAsistencia() {   // metodo para agregar la data al array de asistencia poniendole como parametros el objeto de la clases menor asistencia
    this.mAsistencias.agregar(this.vistaApp.agregarAsistencia());
  }



  reportarEstudiantes() {   // metodo para mostrar los valores de los array en el html en el cual llama otro metodo de reportar donde se le pasa como parametro el array de estudiante

    this.vistaApp.reportarEstudiantes({  // metodo de la clases vista app que sirve para mostrar la data
      info: this.mEstudiantes.listado(),
    });
  }



  reportarAsistencias() {   // metodo para mostrar los valores de los array en el html en el cual llama otro metodo de reportar donde se le pasa como parametro el array de estudiante

    this.vistaApp.reportarAsistencias({   // metodo de la clases vista app que sirve para mostrar la data
      info: this.mAsistencias.listado(),
    });

  }


}
