export default class Cl_mAsistencia{
    constructor(codigo,fecha,actividad){
        this.codigo=codigo
        this.fecha=fecha
        this.actividad
    }

    set codigo(codigo){
        this._codigo=codigo.toUpperCase()
    }

    get codigo(){
       return this._codigo
    }

    set fecha(fecha){
        if (typeof fecha === 'string') {
            return "valido"
          } else {
            return("invalido");
          }
    }

    get fecha(){
        return this._fecha
    }

    set actividad(actividad){
        this._actividad=actividad.trim()
    }

    get actividad(){
        return this._actividad
    }
}