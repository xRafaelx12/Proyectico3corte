export default class Cl_mEstudiante{
    constructor({cedula,apellidos,nombres}){
        this.cedula=cedula
        this.apellidos=apellidos
        this.nombres=nombres
    }

    set cedula(cedula){
        this._cedula=Number(cedula)
    }

    get cedula(){
        return this._cedula
    }

    set apellidos(apellidos){
        this._apellidos=apellidos.toUpperCase()
    }

    get apellidos(){
        return this._apellidos
    }

    set nombres(nombres){
        this._nombres=nombres.toUpperCase()
    }

    get nombres(){
        return this._nombres
    }


}