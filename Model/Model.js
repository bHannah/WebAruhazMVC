import { DRESSLIST } from "../Model/adat.js";

export default class Model{
    //adattagok
    #LISTA = [];
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


}