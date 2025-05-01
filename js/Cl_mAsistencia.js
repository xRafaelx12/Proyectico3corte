// CLASE MENOR

export default class Cl_mAsistencia{
    constructor({codigo,fecha,actividad}){
        
        this.codigo=codigo
        this.fecha=fecha
        this.actividad=actividad
    }


    //SET AND GETTERS
    set codigo(codigo){
        this._codigo=codigo.toUpperCase()
    }

    get codigo(){
       return this._codigo
    }

    set fecha(fecha){
        if(typeof fecha ==="string"){
            this._fecha=fecha 
        }
        
    }

    get fecha(){
        if(typeof this._fecha ==="string"){
            return "valido" 
        }else{
            return "invalido"
        }
    }

    set actividad(actividad){
        this._actividad=actividad.trim()
    }

    get actividad(){
        return this._actividad
    }

    //SET AND GETTERS
}