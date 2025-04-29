export default class Cl_mAsistencias{
    constructor(){
        this.datosAsistencias=[]
    }

    agregar(datoAgregar){
        this.datosAsistencias.push(datoAgregar)
    }

    listado(){
        return this.datosAsistencias
    }
    
}