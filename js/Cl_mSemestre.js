import Cl_mAsistencias from "./Cl_mAsistencias.js"
import Cl_mEstudiantes from "./Cl_mEstudiantes.js"

export default class Cl_mSemestre{
    constructor(nombre){
        this.nombre=nombre
        this.materias= new Cl_mAsistencias()
        this.estudiantes= new Cl_mEstudiantes()
    }

    set nombre(nombre){
        this._nombre=nombre.toUpperCase()
    }

    get nombre(){
        return this._nombre
    }



}