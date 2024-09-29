export default class Model{
    //adattagok
    #LISTA = [];
    KOSARLISTA = [];

    //konstruktor
    constructor(lista){
        this.init(lista);
        
    }
    //tagfüggvények
    init(lista){
        this.#LISTA = lista;
    }

    getLista(){
        return this.#LISTA;
    }

    getKosarLista(){
        return this.KOSARLISTA;
    }

    kosarhozAd(o){
        this.KOSARLISTA += o
    }
}