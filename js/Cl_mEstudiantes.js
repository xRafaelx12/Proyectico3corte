export default class Cl_mEstudiantes{
    constructor(){
        this.datosEstudiantes=[]
    }

    agregar(datoAgregar){
        this.array.push(datoAgregar)
    }

    listadoDeDatos(){
        return this.array
    }
}