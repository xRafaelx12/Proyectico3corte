export default class Cl_mEstudiantes{
    constructor(){
        this.datosEstudiantes=[]
    }

    agregar(datoAgregar){
        this.datosEstudiantes.push(datoAgregar)
    }

    listado(){
        return this.datosEstudiantes
    }
}